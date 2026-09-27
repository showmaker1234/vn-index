#!/usr/bin/env node
/* 评分标准 3.0：生成 strength-data.js。
   用法：在 fire-emblem-fortunes-weave/ 目录运行 node tools/build-strength.js
   思路：每名角色遍历「可招募路线 × 可走通的职业」，按游戏战斗公式模拟后期对标准敌人的表现，
   取本站评分最高的组合；各项权重用外部共识做非负最小二乘标定；综合分 = 外部共识 60% + 本站模拟 40%。
   输入：model-data.js（站内资料）、tools/strength-sources.json（外部榜单档位）、
        tools/gamewith-roster.json（63 人成长率）、tools/gamewith-routes.json（各路线出场与招募条件）、
        tools/gamewith-classes.json（职业成长修正、可用武器、转职要求、职业技能）。 */
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
global.window={};
require(path.join(root,'model-data.js'));
const data=window.TACTICAL_DATA;
const {sources,excluded,lords,checked}=require('./strength-sources.json');
const gwRoster=require('./gamewith-roster.json').roster;
const gwRoutes=require('./gamewith-routes.json').roster;
const {classes}=require('./gamewith-classes.json');

/* ---------- 可调参数与建模假设（页面上逐条公开） ---------- */
const LEVELS=35;            // 从加入到后期的升级次数
const PART1_LEVELS=15;      // 其中在第一部获得的升级次数（凯伊线骑乘加成只作用于这部分）
const BASE={hp:20,other:5}; // 统一的起点能力，比较只看成长差异
const PART1_CHAPTERS=10;
const renownChapter=r=>3+0.5*r;            // 所需名声等级大约在第几章达到（第 4 章开放自由行动后开始积累）
const BLEND={external:0.6,own:0.4};
const TIERS=[['T0',0.08],['T1',0.25],['T2',0.5],['T3',0.75],['T4',1]];
const LORD_RANKS={keengamer:{dietrich:1,theodora:2,leda:3,cai:4},gamewith:{dietrich:1,theodora:3,leda:3,cai:3},algest:{leda:1,dietrich:3,theodora:3,cai:3}};
const PRIOR={contribution:35,durability:15,skills:20,mobility:10,availability:15,cost:5};
const FEATURES=Object.keys(PRIOR);
const FEATURE_NAMES={contribution:'主要贡献（输出或治疗取高）',durability:'承伤能力',skills:'个人与团队技能',mobility:'机动',availability:'可用场次',cost:'招募成本'};
const PRIOR_SHARE=0.5; // 最终权重 = 50% 先验 + 50% 外部共识拟合，避免权重被少数样本带偏
/* 标准武器：取站内武器库中各类型 C 级的达米纳系列（黑魔法用博尔加农，命中未收录按 80 计） */
const WEAPONS={sword:{mt:12,wt:4,hit:90},spear:{mt:13,wt:7,hit:80},axe:{mt:16,wt:10,hit:65},bow:{mt:12,wt:6,hit:70,range:2},gauntlet:{mt:11,wt:4,hit:90},blackMagic:{mt:10,wt:8,hit:80,magic:true}};
const HEAL_MT=10; // 治愈
const BUILD={base:6,armor:3,mounted:2}; // 体格未公开，按兵种特性假设
const MOUNT={bonus:25,chariotMultiplier:2,flat:5};

const G=['hp','strength','magic','speed','dexterity','defense','resistance','luck','charm'];
const SKILL_CODE={'剣術':'sword','槍術':'spear','斧術':'axe','弓術':'bow','格闘術':'gauntlet','黒魔術':'blackMagic','白魔術':'whiteMagic','指揮術':'authority','歩兵術':'infantry','馬術':'riding','重装術':'heavyArmor','飛行術':'flying'};
const RANK={S:6,A:5,B:4,C:3,D:2,E:1,F:0};
const ROUTE_NAME={cai:'凯伊篇',dietrich:'迪托利希篇',theodora:'赛奥朵拉篇',leda:'蕾达篇',savior:'救世主篇'};
const CLASS_ZH={'剣士':'剑士','ブリガンド':'山贼','セスタス':'拳斗士','アーチャー':'弓兵','ローグ':'盗贼','重装歩兵':'重装步兵','軽騎兵':'轻骑兵','戦車兵':'战车兵','騎甲駝兵':'甲驼骑兵','シャーマン':'萨满','プリースト':'祭司','天翼兵':'天翼兵','シドー':'士道','ウォーリアー':'勇士','スナイパー':'狙击手','フォレストナイト':'森林骑士','ヘヴィアーマー':'重甲兵','バーディンガー':'巴丁格骑士','ウァテス':'先知','ビショップ':'主教','カラドリオス':'卡拉德里奥斯','ガーディアン':'守护者','踊り子':'舞娘','ドラグーン':'龙骑兵','トルバドール':'游吟骑士','カタフラクト':'铁甲骑兵','レンジャー':'游侠','戦象兵':'战象兵','バトルマスター':'战斗大师','マスターアーチ':'弓圣','シャドーシーカー':'影猎者','ホーリーランサー':'圣枪兵','フォートレス':'要塞','オリハルディア':'奥里哈尔骑士','ドラゴンマスター':'龙主','ドルイド':'德鲁伊','ワイズマン':'贤者','バトルモンク':'武僧','聖天翼兵':'圣天翼兵','グレートナイト':'巨骑士','ソードマスター':'剑圣','ハイエピタフ':'碑文骑士','ボウナイト':'弓骑士','ヴァルキュリウム':'女武神'};
const WEAPON_ZH={sword:'剑',spear:'枪',axe:'斧',bow:'弓',gauntlet:'拳套',blackMagic:'黑魔法'};

const mid=r=>Array.isArray(r)?(r[0]+r[1])/2:r;
const timeZh=t=>String(t||'').replace(/【(.+?)編】/,(_,n)=>({'カイ':'凯伊','ディートリヒ':'迪托利希','セオドラ':'赛奥朵拉','レダ':'蕾达','救世主':'救世主'}[n]||n)+'篇 ').replace(/1部(\d+)章/,'第一部第$1章').replace(/2部(\d+)章/,'第二部第$1章').replace(/3部(\d+)区分/,'第三部第$1节').replace(/序幕(\d+)章/,'序幕第$1章').replace(/(\d+)月$/,' $1月').trim();
const round=v=>Math.round(v*10)/10;
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const chars=data.characters,isLord=c=>lords.includes(c.id),pool=chars.filter(c=>!isLord(c));

/* ---------- 角色基础数据 ---------- */
function growthOf(c){
  const site=c.effectiveGrowthRates||c.growthRates,alt=gwRoster[c.id]?.growth,g={},conflicts=[];
  for(const k of G){const s=site?.[k],a=alt?.[k];
    if(s==null)g[k]=a;else if(a!=null&&a!==s&&!c.effectiveGrowthRates){g[k]=(s+a)/2;conflicts.push(k)}else g[k]=s}
  return{g,source:site?(conflicts.length?'mixed':'site'):'gamewith',conflicts};
}
const profsOf=c=>[...new Set([...(c.proficienciesKnown?c.proficiencyCodes:[]),...(gwRoster[c.id]?.proficiencies||[])])];
const noMount=c=>['Goliath','Orchel'].includes(c.originalName);

/* 路线：出场章节、名声门槛、招募花费 → 实际入队章节与花费扣分 */
function parseTime(t){
  let m;
  if((m=t.match(/1部(\d+)章/)))return{part:1,ch:+m[1]};
  if((m=t.match(/2部(\d+)章/)))return{part:2,ch:+m[1]};
  if((m=t.match(/3部(\d+)区分/)))return{part:3,ch:+m[1]};
  if(/序幕/.test(t))return{part:3,ch:1};
  return null;
}
function parseCond(s){
  s=s||'';const n=re=>{const m=s.match(re);return m?+m[1]:0};
  const items=[...s.matchAll(/×(\d+)/g)].length;
  return{story:/ストーリー進行/.test(s),support:n(/支援Lv(\d+)/),renown:n(/名声Lv(\d+)/),gold:n(/(\d+)G/),items,paralogue:/外伝/.test(s)?1:0,quests:/頼み1[〜~]3/.test(s)?3:/頼み/.test(s)?1:0};
}
function routesOf(c){
  const out=[];
  for(const [r,v] of Object.entries(gwRoutes[c.id]?.routes||{})){
    if(!v.cond||/スカウト対象外/.test(v.cond))continue;
    const t=v.time?parseTime(v.time):null,cond=parseCond(v.cond);
    let part=t?.part??1,ch=t?.ch??null;
    if(part===1){const gate=cond.story?0:renownChapter(cond.renown);ch=Math.max(ch??gate,gate)}
    out.push({route:r,part,ch:ch??PART1_CHAPTERS,cond,appear:v.time||'出场时间未收录'});
  }
  const lordRoute={cai:'cai',dietrich:'dietrich',theodora:'theodora',leda:'leda'}[c.id];
  if(lordRoute)return[{route:lordRoute,part:1,ch:1,cond:parseCond('ストーリー進行中に加入'),appear:'第一部第1章（主角）'}];
  if(!out.length){ // 第二部 / 第三部剧情加入
    const j=(gwRoster[c.id]?.joins||[]).map(parseTime).filter(Boolean).sort((a,b)=>a.part-b.part||a.ch-b.ch)[0]||{part:3,ch:1};
    out.push({route:'savior',part:j.part,ch:j.ch,cond:parseCond('ストーリー進行中に加入'),appear:(gwRoster[c.id]?.joins||[])[0]||''});
  }
  return out;
}
function availability(r){
  /* 只有第一部可招募的角色按入队章节扣分；第二、三部剧情加入属于正常进度，不扣分 */
  return r.part===1?clamp((PART1_CHAPTERS-r.ch+1)/PART1_CHAPTERS):1;
}
function costPenalty(q){
  if(q.story)return 0;
  return 4*q.support+2*q.renown+Math.min(24,q.gold/1000*2)+Math.min(12,q.items*6)+q.paralogue*10+Math.min(18,q.quests*6);
}

/* ---------- 职业可行性 ---------- */
const parseReq=list=>(list||[]).filter(x=>x&&x!=='-').join('、').split('、').map(s=>s.trim()).filter(Boolean).map(s=>({code:SKILL_CODE[s.slice(0,-1)],rank:RANK[s.slice(-1)]}));
const finalClasses=classes.filter(k=>['上級職','最上級職'].includes(k.tier)||k.name==='戦車兵');
function classOk(c,k){
  const p=profsOf(c),w=k.weapons||[];
  if(w.includes('性別限定')&&w.includes('女')&&gwRoutes[c.id]?.gender!=='female')return false;
  if(k.name==='踊り子'&&c.id!=='leda')return false;
  const mounted=k.traits.some(t=>/騎兵|飛行/.test(t));
  if(mounted&&noMount(c))return false;
  for(const r of parseReq(k.main)){
    if(!r.code)continue;
    const weaponish=['sword','spear','axe','bow','gauntlet','blackMagic','whiteMagic'].includes(r.code);
    if((weaponish||r.rank>=RANK.C)&&!p.includes(r.code))return false;
  }
  const sel=parseReq(k.select).filter(r=>r.code);
  if(sel.length&&!sel.some(r=>p.includes(r.code)))return false;
  return true;
}
function classBonus(k,re){let s=0;for(const t of k.classSkills||[]){for(const m of t.matchAll(re))s+=+m[1]}return s}

/* ---------- 能力推算与战斗模拟 ---------- */
function statsFor(g,k,opts){
  const mounted=k.traits.some(t=>/騎兵|飛行/.test(t)),armor=k.traits.some(t=>/重装/.test(t));
  const add=Object.fromEntries(G.map((s,i)=>[s,k.growth[i]]));
  const keys=opts.magic?['magic','speed','dexterity']:['strength','speed','dexterity'],split=[0.4,0.4,0.2];
  const mult=k.name==='戦車兵'?MOUNT.chariotMultiplier:1,riding=opts.cai&&mounted;
  const mount={};
  /* 凯伊线：骑乘动物成长 +25（战车兵翻倍），按定位加在三项能力上；只作用于第一部的升级 */
  if(riding)keys.forEach((s,i)=>{mount[s]=MOUNT.bonus*mult*split[i]*PART1_LEVELS/LEVELS});
  const st={};
  for(const s of G)st[s]=(s==='hp'?BASE.hp:BASE.other)+Math.max(0,g[s]+add[s]+(mount[s]||0))*LEVELS/100;
  if(riding)keys.forEach((s,i)=>st[s]+=MOUNT.flat*mult*split[i]); // 骑乘中的能力加值
  st.build=BUILD.base+(armor?BUILD.armor:0)+(mounted?BUILD.mounted:0);
  return{st,mounted,armor,mountBonus:riding?mount:null};
}
function combatant(st,w,extra={}){
  const as=st.speed-Math.max(0,w.wt-st.build);
  return{hp:st.hp,atk:(w.magic?st.magic:st.strength)+w.mt,hit:st.dexterity+w.hit+(extra.hit||0),crit:(st.dexterity+st.luck)/2+(w.crit||0)+(extra.crit||0),as,avo:as+(extra.avo||0),def:st.defense+(extra.def||0),res:st.resistance,lck:st.luck,magic:!!w.magic,sword:!!w.sword};
}
function strike(a,d){
  const hit=clamp((a.hit-d.avo)/100),dmg=Math.max(0,a.atk-(a.magic?d.res:d.def)),crit=clamp((a.crit-d.lck)/100);
  const n=a.as-d.as>=4?(a.sword?2.2:2):1;
  return{exp:hit*dmg*(1+2*crit)*n,hit,dmg,crit,doubles:n>1};
}
/* 标准敌人：58 名非主角成长率的中位数，基础职业，物理敌人持枪、魔法敌人持博尔加农 */
const median=a=>{const s=[...a].sort((x,y)=>x-y);return s.length%2?s[(s.length-1)/2]:(s[s.length/2-1]+s[s.length/2])/2};
const medG=Object.fromEntries(G.map(s=>[s,median(pool.map(c=>growthOf(c).g[s]))]));
/* 敌人也套用后期职业：成长 = 角色中位数 + 上级/最上级职业修正的中位数 */
const medClass=Object.fromEntries(G.map((s,i)=>[s,median(classes.filter(k=>['上級職','最上級職'].includes(k.tier)).map(k=>k.growth[i]))]));
const enemyStats=Object.fromEntries(G.map(s=>[s,(s==='hp'?BASE.hp:BASE.other)+(medG[s]+medClass[s])*LEVELS/100]));enemyStats.build=BUILD.base+1;
const ENEMIES={physical:combatant(enemyStats,WEAPONS.spear),magic:combatant(enemyStats,WEAPONS.blackMagic)};

const HIT_RE={sword:/剣命中\+(\d+)/g,spear:/槍命中\+(\d+)/g,axe:/斧命中\+(\d+)/g,bow:/弓命中\+(\d+)/g,gauntlet:/格闘命中\+(\d+)/g,blackMagic:/魔法命中\+(\d+)/g};
function simulate(c,g,k,route){
  const p=profsOf(c),usable=(k.weapons||[]).map(x=>SKILL_CODE[x]).filter(Boolean);
  const cai=route==='cai';
  let best=null;
  for(const wc of Object.keys(WEAPONS)){
    if(!usable.includes(wc)||!p.includes(wc))continue;
    const w={...WEAPONS[wc],sword:wc==='sword'};
    const {st,mounted,armor,mountBonus}=statsFor(g,k,{cai,magic:!!w.magic});
    const extra={hit:classBonus(k,HIT_RE[wc])+(c.originalName==='Benditz'&&k.name==='戦車兵'?20:0),crit:wc==='sword'?classBonus(k,/剣必殺\+(\d+)/g):0,avo:wc==='gauntlet'?classBonus(k,/格闘回避\+(\d+)/g):0};
    const me=combatant(st,w,extra);
    const off=['physical','magic'].map(e=>{const s=strike(me,ENEMIES[e]);return{...s,kill:clamp(s.exp/ENEMIES[e].hp,0,1.5)}});
    const offense=(off[0].kill+off[1].kill)/2;
    if(!best||offense>best.offense)best={weapon:wc,st,me,off,offense,mounted,armor,mountBonus};
  }
  if(!best){ // 纯治疗职业：无攻击武器，只算承伤与治疗
    const {st,mounted,armor,mountBonus}=statsFor(g,k,{cai,magic:true});
    best={weapon:null,st,me:combatant(st,{mt:0,wt:0,hit:0}),off:[{kill:0,hit:0,dmg:0},{kill:0,hit:0,dmg:0}],offense:0,mounted,armor,mountBonus};
  }
  const tank={...best.me,def:best.me.def+classBonus(k,/後攻守備\+(\d+)/g)};
  const taken=['physical','magic'].map(e=>strike(ENEMIES[e],tank));
  const durability=(Math.log(Math.min(12,tank.hp/Math.max(1,taken[0].exp)))+Math.log(Math.min(12,tank.hp/Math.max(1,taken[1].exp))))/2; // 能承受的敌方攻击次数（对数，封顶 12 次）
  const healer=(k.weapons||[]).includes('白魔術')&&p.includes('whiteMagic');
  const healing=healer?HEAL_MT+Math.floor(best.st.magic/3)+classBonus(k,/魔法回復\+(\d+)/g):0;
  const move=parseInt(k.move)||0,flying=k.traits.some(t=>/飛行/.test(t));
  const mobility=move+(flying?1:0)+(cai&&best.mounted?2:0);
  return{...best,durability,taken,healing,mobility};
}

/* ---------- 特征、标定与合成 ---------- */
const combos=[],detail={};
for(const c of chars){
  const {g,source,conflicts}=growthOf(c);
  const r=c.rubric,personal=r?mid(r[1]):null,team=r?mid(r[3]):null;
  detail[c.id]={growth:g,growthSource:source,growthConflicts:conflicts,personalRaw:personal,teamRaw:team,skillNote:r?.[6]||''};
  for(const rt of routesOf(c))for(const k of finalClasses.filter(k=>classOk(c,k))){
    const sim=simulate(c,g,k,rt.route);
    combos.push({id:c.id,route:rt,cls:k,sim,f:{dance:(k.classSkills||[]).some(t=>t.includes('踊る')),offense:sim.offense,healing:sim.healing,durability:sim.durability,skills:personal==null?null:Math.min(100,personal+team),mobility:sim.mobility,availability:availability(rt),cost:-costPenalty(rt.cond)}});
  }
}
/* 各特征在全部组合上按 5%–95% 分位归一化到 0–1；缺技能资料的按中位数 */
const median2=a=>median(a);
const norm={};
for(const f of [...FEATURES.filter(f=>f!=='contribution'),'offense','healing']){
  const vals=combos.map(x=>x.f[f]).filter(v=>v!=null&&!(f==='healing'&&v===0)).sort((a,b)=>a-b);
  norm[f]={lo:vals[Math.floor(vals.length*0.02)],hi:vals[Math.floor(vals.length*0.98)],md:median2(vals)};
}
const nf0=(x,f)=>{const v=x.f[f]??norm[f].md,{lo,hi}=norm[f];return hi>lo?clamp((v-lo)/(hi-lo)):0.5};
/* 主要贡献：同一职业只能担任一个定位，取输出与治疗（仅统计能用治疗魔法的组合）中较高者 */
let HEAL_FACTOR=1; // 治疗 → 贡献的换算系数，下方按外部共识在 0.5–1.0 间拟合
const nf=(x,f)=>f==='contribution'?Math.max(nf0(x,'offense'),x.f.healing>0?HEAL_FACTOR*nf0(x,'healing'):0,x.f.dance?1:0):nf0(x,f);
const ownOf=(x,w)=>FEATURES.reduce((s,f)=>s+w[f]*nf(x,f),0)/FEATURES.reduce((s,f)=>s+w[f],0)*100;

/* 外部共识（同 2.0：档位 → 榜内百分位中点 → 按来源权重平均） */
const nonLordIds=new Set(pool.map(c=>c.id));
const sourceScores={};
for(const s of sources){
  const sc={};
  if(s.kind==='picks'){const picks=s.tiers.Rec.filter(id=>nonLordIds.has(id));for(const id of picks)sc[id]=100*(1-(picks.length/2)/pool.length)}
  else{const order=s.scale.map(t=>(s.tiers[t]||[]).filter(id=>nonLordIds.has(id))),N=order.flat().length;let above=0;order.forEach(ids=>{for(const id of ids)sc[id]=100*(1-(above+ids.length/2)/N);above+=ids.length})}
  sourceScores[s.id]=sc;
}
function externalOf(id){
  const per=sources.map(s=>({id:s.id,tier:Object.entries(s.tiers).find(([,ids])=>ids.includes(id))?.[0]||null,score:sourceScores[s.id][id]??null,weight:s.weight}));
  const used=per.filter(x=>x.score!=null),w=used.reduce((a,x)=>a+x.weight,0);
  const ext=w?used.reduce((a,x)=>a+x.score*x.weight,0)/w:null;
  const spread=w?Math.sqrt(used.reduce((a,x)=>a+x.weight*(x.score-ext)**2,0)/w):null;
  return{per,ext,spread,count:used.length,weight:w};
}
const EXT=Object.fromEntries(chars.map(c=>[c.id,externalOf(c.id)]));

/* 非负最小二乘（投影梯度），特征为 0–1 归一值，带截距 */
function nnls(X,y,iters=20000,lr=0.05){
  const m=X[0].length;let w=Array(m).fill(0.1),b=y.reduce((a,v)=>a+v,0)/y.length;
  for(let t=0;t<iters;t++){
    const grad=Array(m).fill(0);let gb=0;
    for(let i=0;i<X.length;i++){const e=X[i].reduce((a,v,j)=>a+v*w[j],b)-y[i];gb+=e;for(let j=0;j<m;j++)grad[j]+=e*X[i][j]}
    for(let j=0;j<m;j++)w[j]=Math.max(0,w[j]-lr*grad[j]/X.length);b-=lr*gb/X.length;
  }
  return{w,b};
}
const corr=(a,b)=>{const ma=a.reduce((s,v)=>s+v,0)/a.length,mb=b.reduce((s,v)=>s+v,0)/b.length;return a.reduce((s,v,i)=>s+(v-ma)*(b[i]-mb),0)/Math.sqrt(a.reduce((s,v)=>s+(v-ma)**2,0)*b.reduce((s,v)=>s+(v-mb)**2,0))};
const pickBest=w=>{const out={};for(const x of combos){const s=ownOf(x,w);if(!out[x.id]||s>out[x.id].score)out[x.id]={x,score:s}}return out};
let weights={...PRIOR},fitted={},bestOf,fitScan=[];
function calibrate(){
for(let iter=0;iter<4;iter++){
  bestOf=pickBest(weights);
  const ids=pool.map(c=>c.id).filter(id=>EXT[id].ext!=null&&bestOf[id]);
  const fit=nnls(ids.map(id=>FEATURES.map(f=>nf(bestOf[id].x,f))),ids.map(id=>EXT[id].ext));
  const sum=fit.w.reduce((a,v)=>a+v,0)||1;
  fitted=Object.fromEntries(FEATURES.map((f,i)=>[f,fit.w[i]/sum*100]));
  const ps=Object.values(PRIOR).reduce((a,v)=>a+v,0);
  weights=Object.fromEntries(FEATURES.map(f=>[f,Math.round((PRIOR_SHARE*PRIOR[f]/ps*100+(1-PRIOR_SHARE)*fitted[f])*10)/10]));
}
bestOf=pickBest(weights);
return corr(fitIds.map(id=>bestOf[id].score),fitIds.map(id=>EXT[id].ext));
}
const fitIds=pool.map(c=>c.id).filter(id=>EXT[id].ext!=null);
let bestH=null;
for(const h of [0.5,0.6,0.7,0.8,0.9,1]){HEAL_FACTOR=h;weights={...PRIOR};const r=calibrate();fitScan.push({h,r:+r.toFixed(3)});if(!bestH||r>bestH.r)bestH={h,r}}
HEAL_FACTOR=bestH.h;weights={...PRIOR};const fitCorr=calibrate();

/* 本站分换算为 58 人内的百分位，与外部共识合成 */
const ownRaw=Object.fromEntries(chars.map(c=>[c.id,bestOf[c.id]?.score??0]));
const poolScores=pool.map(c=>ownRaw[c.id]).sort((a,b)=>a-b);
const pct=v=>{const below=poolScores.filter(x=>x<v).length,eq=poolScores.filter(x=>x===v).length;return 100*(below+Math.max(0,eq-1)/2)/(poolScores.length-1)};

const rows=chars.map(c=>{
  const b=bestOf[c.id],x=b?.x,e=EXT[c.id],own=clamp(pct(ownRaw[c.id]),0,100),s=x?.sim;
  const composite=isLord(c)||e.ext==null?own:BLEND.external*e.ext+BLEND.own*own;
  const lordRanks=Object.values(LORD_RANKS).map(m=>m[c.id]).filter(Boolean);
  return{
    id:c.id,name:c.name,originalName:c.originalName,lord:isLord(c),tier:isLord(c)?'lord':null,
    lordAvgRank:lordRanks.length?round(lordRanks.reduce((a,v)=>a+v,0)/lordRanks.length):null,
    composite:round(composite),own:round(own),ownRaw:round(ownRaw[c.id]),external:e.ext==null?null:round(e.ext),
    sourceWeight:round(e.weight),sourceCount:e.count,spread:e.spread==null?null:round(e.spread),
    confidence:isLord(c)?'—':e.count>=4&&e.spread<22?'高':e.count>=3?'中':'低',disputed:e.spread!=null&&e.count>=3&&e.spread>=22,
    sources:e.per.map(({id,tier,score})=>({id,tier,score:score==null?null:round(score)})),
    best:x?{route:x.route.route,routeName:ROUTE_NAME[x.route.route],joinPart:x.route.part,joinChapter:round(x.route.ch),appear:timeZh(x.route.appear),
      cls:x.cls.name,clsZh:CLASS_ZH[x.cls.name]||x.cls.name,clsTier:x.cls.tier,weapon:s.weapon,weaponZh:WEAPON_ZH[s.weapon]||'治疗',
      mounted:s.mounted,mountBonus:!!s.mountBonus,stats:Object.fromEntries([...G,'build'].map(k=>[k,round(s.st[k])])),
      vsPhysical:{hit:Math.round((s.off[0].hit||0)*100),dmg:round(s.off[0].dmg||0),doubles:!!s.off[0].doubles,taken:round(s.taken[0].exp)},
      vsMagic:{hit:Math.round((s.off[1].hit||0)*100),dmg:round(s.off[1].dmg||0),doubles:!!s.off[1].doubles,taken:round(s.taken[1].exp)},
      healing:s.healing,mobility:s.mobility,costPenalty:round(costPenalty(x.route.cond)),availability:round(availability(x.route)*100),
      parts:Object.fromEntries(FEATURES.map(f=>[f,round(nf(x,f)*100)])),offenseScore:round(nf0(x,'offense')*100),healingScore:x.f.healing>0?round(nf0(x,'healing')*100):0}:null,
    routeCount:new Set(combos.filter(y=>y.id===c.id).map(y=>y.route.route)).size,
    classCount:new Set(combos.filter(y=>y.id===c.id).map(y=>y.cls.name)).size,
    ...detail[c.id],skillMissing:detail[c.id].personalRaw==null,role:x?.f.dance?'舞蹈':x&&nf0(x,'offense')<(x.f.healing>0?HEAL_FACTOR*nf0(x,'healing'):0)?'治疗':'输出'
  };
});
rows.sort((a,b)=>b.composite-a.composite);
const ranked=rows.filter(r=>!r.lord);
ranked.forEach(r=>{const first=ranked.findIndex(x=>x.composite===r.composite);r.rank=first+1;r.tier=TIERS.find(([,q])=>(first+1)/ranked.length<=q+1e-9)[0]});
rows.filter(r=>r.lord).sort((a,b)=>(a.lordAvgRank??9)-(b.lordAvgRank??9)||b.own-a.own).forEach((r,i)=>r.rank=i+1);

const agreement=(()=>{const R=ranked.filter(r=>r.external!=null),er=[...R].sort((a,b)=>b.external-a.external).map(r=>r.id),d=R.map(r=>Math.abs(er.indexOf(r.id)+1-r.rank));return{correlation:+corr(R.map(r=>r.composite),R.map(r=>r.external)).toFixed(2),meanRankDiff:round(d.reduce((a,v)=>a+v,0)/d.length),maxRankDiff:Math.max(...d)}})();
const out={
  version:'3.0',agreement,checked,generated:new Date().toISOString().slice(0,10),
  weights,prior:PRIOR,fitted:Object.fromEntries(Object.entries(fitted).map(([k,v])=>[k,round(v)])),priorShare:PRIOR_SHARE,featureNames:FEATURE_NAMES,blend:BLEND,tiers:TIERS,fit:{correlation:+fitCorr.toFixed(2),n:fitIds.length,healFactor:HEAL_FACTOR,scan:fitScan},
  assumptions:{levels:LEVELS,part1Levels:PART1_LEVELS,part1Chapters:PART1_CHAPTERS,weapons:WEAPONS,healMt:HEAL_MT,build:BUILD,mount:MOUNT,enemy:Object.fromEntries(G.map(s=>[s,round(enemyStats[s])]))},
  sources:sources.map(({tiers,...s})=>({...s,count:Object.values(tiers).flat().length})),excluded,rows
};
fs.writeFileSync(path.join(root,'strength-data.js'),'/* 由 tools/build-strength.js 生成，请勿手工编辑。 */\nwindow.STRENGTH_DATA='+JSON.stringify(out)+';\n');
const count={};rows.forEach(r=>count[r.tier]=(count[r.tier]||0)+1);
{const R=ranked.filter(r=>r.external!=null),er=[...R].sort((a,b)=>b.external-a.external).map(r=>r.id);const d=R.map(r=>Math.abs(er.indexOf(r.id)+1-r.rank));console.log('composite vs external r =',round(corr(R.map(r=>r.composite),R.map(r=>r.external))*100)/100,'mean |rank diff| =',round(d.reduce((a,v)=>a+v,0)/d.length),'max',Math.max(...d));}
console.log('heal scan',JSON.stringify(fitScan),'h =',HEAL_FACTOR);console.log('combos',combos.length,'fitted',JSON.stringify(Object.fromEntries(Object.entries(fitted).map(([k,v])=>[k,round(v)]))),'weights',JSON.stringify(weights),'fit r =',round(fitCorr*100)/100,count);
for(const r of [...ranked,...rows.filter(r=>r.lord).sort((a,b)=>a.rank-b.rank)])console.log(String(r.rank).padStart(2),r.tier,r.name.padEnd(6,'　'),'综合',r.composite,'外',r.external,'站',r.own,'|',r.best?.routeName,r.best?.clsZh,r.best?.weaponZh,r.best?.mountBonus?'骑乘加成':'','入队',r.best?.joinPart+'-'+r.best?.joinChapter);
