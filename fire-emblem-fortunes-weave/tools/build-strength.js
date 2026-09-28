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
/* 可用场次（第一部入队早晚）不再计分：晚入队的角色加入时等级和能力更高，已体现在数值里 */
const PRIOR={contribution:40,durability:18,skills:22,mobility:10,cost:10};
const FEATURES=Object.keys(PRIOR);
const FEATURE_NAMES={contribution:'主要贡献（输出、治疗、坦克取高）',durability:'承伤能力',skills:'个人与团队技能',mobility:'机动',cost:'招募成本'};
const HEAL_SCAN=[0.6,0.7,0.8,0.9,1];
const PRIOR_SHARE=0.5; // 最终权重 = 50% 先验 + 50% 外部共识拟合，避免权重被少数样本带偏
/* 标准武器：取站内武器库中各类型 C 级的达米纳系列（黑魔法用博尔加农，命中未收录按 80 计） */
const WEAPONS={sword:{mt:12,wt:4,hit:90},spear:{mt:13,wt:7,hit:80},axe:{mt:16,wt:10,hit:65},bow:{mt:12,wt:6,hit:70,range:2},gauntlet:{mt:11,wt:4,hit:90},blackMagic:{mt:10,wt:8,hit:80,magic:true}};
/* 只在培养方案里按指定武器模拟：雷之剑按魔法攻击结算（GameWith：威力 12、命中 70、重量 8、射程 1–2） */
/* 角色专属的攻击型白魔法（GameWith 白魔法一览「習得キャラ」）：职业能用白魔术即可施放，不看是否擅长 */
const PERSONAL_SPELLS={
  'recruit-18':{nosferatu:{mt:1,hit:80,wt:8,magic:true,skill:'whiteMagic'}}, // 奥琳琵娅：吸血（リザイア），伤害一半回复自身
  orchel:{angel:{mt:10,hit:75,wt:10,magic:true,skill:'whiteMagic'}}          // 欧露赫露：炽天使（エンジェル），冥魔有效
};
const EXTRA_WEAPONS={thunderSword:{mt:12,wt:8,hit:70,magic:true,sword:true,skill:'sword'}};
const HEAL_MT=10; // 治愈
const ARTS_HIT=10; // 达米纳系列：用战技攻击时命中 +10，物理攻击统一计入
/* 个人技能里能量化的命中 / 攻击 / 攻速加成（GameWith 个人技能与等级技能）；条件触发的按期望或一半计 */
const PERSONAL_BONUS={
  /* 字段：hit 命中 / atk 攻击 / as 攻速 / crit 必杀 / avo 回避 / def 守备 / build 体格 / wtMul 武器重量倍率 /
     dmgMul 造成伤害倍率 / takenMul 受到伤害倍率。主动攻击时生效的直接计；概率触发按期望；条件较宽的按一半 */
  orchel:({w})=>({def:5,...(w.magic?{hit:20}:{})}),        // 坚牢坚固 守备+5；动体预测 先攻魔法命中+20
  aswan:({skill})=>skill==='bow'?{hit:20}:{},               // 弓姬
  'hong-hua':({w})=>w.magic?{hit:10}:{},                    // 朱明
  nathan:()=>({hit:10,as:3}),                               // 猪突猛进：先攻
  troy:({skill})=>skill==='gauntlet'?{hit:10}:{},           // 云手
  zarcone:({skill})=>({hit:(skill==='axe'?10:0)+10,atk:1.5}), // 斧包丁；卑劣+（敌人半血以下）按一半
  'recruit-11':({skill,w})=>!w.magic&&skill!=='bow'?{hit:10,atk:3.9}:{},  // 历战强者；铁血+
  'recruit-33':({mounted})=>mounted?{hit:10,atk:3,def:3}:{},// 骑乘突击+、爱马连携
  'recruit-34':({me})=>{const d=me.as-ENEMIES.physical.as;return{...(d>=3?{hit:20}:{}),...(d>=5?{atk:3}:{})}}, // 疾风；风为我用+
  halvin:()=>({hit:10}),                                    // 顺应：最多 +30，按 +10
  talimun:({st})=>({hit:15*st.luck/100,crit:1.5,avo:15*st.luck/100}), // 胜利之风；幸运+3
  gaitz:()=>({hit:20,atk:1.4}),                             // 牙闪+：20% 攻击+7、命中+100
  diego:()=>({hit:5}),                                      // 容赦无+：追击时
  alexandra:()=>({hit:5,avo:5}),                            // 白银少女：按相邻 1 名队友
  'recruit-31':()=>({hit:6.7,crit:6.7,avo:6.7}),            // 气分屋 + 气分上上+：三选一 +20
  peter:()=>({hit:10}),                                     // 误差修正+：命中≥75% 时 +20，按一半
  'recruit-18':({w,wc})=>w.magic?{crit:10+(wc==='nosferatu'?10:0),atk:wc==='nosferatu'?5:0}:{}, // 争胜热情；热忱诺斯费拉托+
  anatolia:()=>({avo:8}),                                   // 流气功 回避+3；身躲+ 对弓·魔法回避+10 按一半
  bertrand:()=>({dmgMul:1.03}),                             // 铠葬流：5% 无视攻速追击
  centurio:()=>({takenMul:0.8}),                            // 钢玉守护：敌方回合首次战斗伤害减半
  creek:()=>({avo:10}),                                     // 冷静沉着：后攻攻速+3、回避+10
  dadao:({st})=>({atk:2.5,dmgMul:1+0.5*st.strength/200}),   // 一发胜负：双方都不能追击时攻击+5（他速度低常被追击，按一半）；全力+：力÷2 % 伤害 ×1.5
  dietrich:()=>({crit:6}),                                  // 杀意 先攻必杀+5；兽之冲动
  esmeralda:()=>({wtMul:0.8}),                              // 怪力：武器、装备重量 ×0.8
  inyoni:({skill})=>skill==='bow'?{atk:5,crit:5}:{},        // 强弓使 弓力+3；贯穿+ 弓战技攻击+4、必杀+10 按一半
  klapka:()=>({def:5}),                                     // 银之精神：最多 +10，按 +5
  ludia:()=>({as:3,avo:10}),                                // 隼：先攻攻速+3；见切+：能追击时回避+20 按一半
  majide:({skill})=>({atk:(skill==='axe'?3:0)+6,avo:-30}), // 暴走斧；无畏+：先攻攻击+6、回避-30
  noctula:()=>({avo:6}),                                    // 集中：战斗后回避+3 累积
  'recruit-14':({skill})=>({...(skill==='bow'?{hit:10}:{}),atk:2}),     // 安全策（敌人无法反击）；感觉不错+ 命中 100% 时攻击+5 按一半弱化
  'recruit-15':()=>({as:4,avo:7}),                          // 加速+：击杀后速度累积；疾走攻击 先攻回避+15 按一半
  'recruit-16':()=>({takenMul:0.9}),                        // 守护骑士之责：受伤 90%
  'recruit-17':()=>({avo:14}),                              // 随风+：回避 +1/+5/+20/+30 四选一
  'recruit-24':({st})=>({dmgMul:1+0.5*st.luck/200}),        // 好机+：幸运÷2 % 伤害 ×1.5
  'recruit-28':({st})=>({takenMul:1-0.3*st.luck/100}),      // 死不了：致命伤幸运% 留 1 HP
  'recruit-30':()=>({atk:2.75}),                            // 先手必胜 50% 攻击+3；我停不下来+ 50% +5
  'recruit-43':()=>({build:5}),                             // 重量级战士：体格+5
  'recruit-50':()=>({atk:1.5,avo:10}),                      // 心之余裕；绝好调+ 满血攻击+3 按一半
  'recruit-53':()=>({atk:2,crit:5}),                        // 王之威光+：敌人受伤时，按一半
  theodora:()=>({takenMul:0.85}),                           // 不退觉悟：30% 伤害减半
  tobias:()=>({atk:3,dmgMul:1.15}),                         // 大技：战技攻击+3；本气一发+ 30% ×1.5
  'yang-jie':()=>({def:3})                                  // 活力结界+：按剩余 HP% 守备+5
};
/* 治疗相关个人技能：回复量加成与治疗射程加成 */
const HEAL_SKILL={sofia:()=>({amt:10,range:2}),fianna:st=>({amt:30*st.luck/100,range:0})};
const HEAL_RANGE_VALUE=0.15; // 治疗射程每 +1，治疗价值 +15%（能覆盖更多队友、站位更安全）
/* 焰技（ブレイズアーツ）：4 位副主角与 4 位主角专属。威力与发动频率未公开，按效果类型给输出倍率（均为估算）：
   再行动 ×1.25（觉醒后本回合可再攻击，约每 3 回合 1 次）；范围攻击 ×1.2（约每 3 回合多打 1–2 个敌人）；
   削弱 / 支援 ×1.15（让敌人命中、攻速减半或强化队友，按团队增益计）；远程攻击另记为有 1–2 格手段 */
const BLAZE={
  bertrand:{mult:1.25,type:'再行动',note:'焰技「觉醒」系列：命中 +50 / 耐物 +10 / 耐魔 +10 / 回避 +30，并可再攻击一次'},
  anatolia:{mult:1.2,type:'范围攻击',note:'焰技「龙破」系列：范围攻击，可破坏障碍物'},
  orchel:{mult:1.2,reach:true,type:'范围 + 远程',note:'焰技「修特拉尔」大范围攻击、「兰策」远程光枪（冥魔有效）'},
  talimun:{mult:1.15,type:'削弱',note:'焰技「冥咒」系列：让敌人命中减半、攻速减半、幸运减半，或互换力魔 / 守魔'},
  cai:{mult:1.2,reach:true,type:'范围 + 远程',note:'焰技「冥炎弹」远程、「黑炎涡流」「落星冥焰狱」范围攻击'},
  dietrich:{mult:1.2,type:'突进 + 范围',note:'焰技「影渡」转移 3 格后再攻击、「影灭」转移 5 格并范围伤害'},
  theodora:{mult:1.15,reach:true,type:'远程',note:'焰技「轰」「大轰土」远距离投掷、「彗星煌弹」必中贯穿'},
  leda:{mult:1.15,type:'支援',note:'焰技歌曲：范围内队友力魔或守魔 +4/+7、「天女之歌」让范围内队友再行动'},
  eshmel:{mult:1.2,type:'必中 + 冥魔特攻',note:'焰技「破邪闪击」「九天神击」等：冥魔有效或特攻，改良后必中'}
};
const BUILD={base:6,armor:3,mounted:2}; // 体格未公开，按兵种特性假设
const MOUNT={bonus:25,chariotMultiplier:2,flat:5};

const G=['hp','strength','magic','speed','dexterity','defense','resistance','luck','charm'];
const SKILL_CODE={'剣術':'sword','槍術':'spear','斧術':'axe','弓術':'bow','格闘術':'gauntlet','黒魔術':'blackMagic','白魔術':'whiteMagic','指揮術':'authority','歩兵術':'infantry','馬術':'riding','重装術':'heavyArmor','飛行術':'flying'};
const RANK={S:6,A:5,B:4,C:3,D:2,E:1,F:0};
const ROUTE_NAME={cai:'凯伊篇',dietrich:'迪托利希篇',theodora:'赛奥朵拉篇',leda:'蕾达篇',savior:'救世主篇'};
const CLASS_ZH={'平民':'平民','貴族':'贵族','闘士':'斗士','猟兵':'猎兵','兵士':'士兵','飛駝兵':'飞驼兵','呪い師':'咒术师','剣士':'剑士','ブリガンド':'山贼','セスタス':'拳斗士','アーチャー':'弓兵','ローグ':'盗贼','重装歩兵':'重装步兵','軽騎兵':'轻骑兵','戦車兵':'战车兵','騎甲駝兵':'甲驼骑兵','シャーマン':'萨满','プリースト':'祭司','天翼兵':'天翼兵','シドー':'士道','ウォーリアー':'勇士','スナイパー':'狙击手','フォレストナイト':'森林骑士','ヘヴィアーマー':'重甲兵','バーディンガー':'巴丁格骑士','ウァテス':'先知','ビショップ':'主教','カラドリオス':'卡拉德里奥斯','ガーディアン':'守护者','踊り子':'舞娘','ドラグーン':'龙骑兵','トルバドール':'游吟骑士','カタフラクト':'铁甲骑兵','レンジャー':'游侠','戦象兵':'战象兵','バトルマスター':'战斗大师','マスターアーチ':'弓圣','シャドーシーカー':'影猎者','ホーリーランサー':'圣枪兵','フォートレス':'要塞','オリハルディア':'奥里哈尔骑士','ドラゴンマスター':'龙主','ドルイド':'德鲁伊','ワイズマン':'贤者','バトルモンク':'武僧','聖天翼兵':'圣天翼兵','グレートナイト':'巨骑士','ソードマスター':'剑圣','ハイエピタフ':'碑文骑士','ボウナイト':'弓骑士','ヴァルキュリウム':'女武神'};
const WEAPON_ZH={nosferatu:'吸血',angel:'炽天使',thunderSword:'雷之剑',sword:'剑',spear:'枪',axe:'斧',bow:'弓',gauntlet:'拳套',blackMagic:'黑魔法'};

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
const gwChars0=fs.existsSync(path.join(__dirname,'gamewith-chars.json'))?require('./gamewith-chars.json'):{};
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
/* 职业可行性：苦手技能不能当主修要求；非得意也非苦手的「中性」技能可以练，按要求等级计培养成本 */
const banesOf=c=>(gwChars0[c.id]?.bane||[]).map(x=>SKILL_CODE[x]).filter(Boolean);
/* 试过放开中性技能：与外部共识的吻合度从 0.68 降到 0.65，暂不采用，强度评分仍只走得意技能；培养方案可指定任意职业 */
const ALLOW_NEUTRAL=false;
const TRAIN_COST=3; // 每练一个中性技能到 D 级记 3 分招募/培养扣分，C 级 6，B 级 9，A 级 12
function classTrain(c,k){
  const p=profsOf(c),bane=banesOf(c),w=k.weapons||[];
  if(w.includes('性別限定')&&w.includes('女')&&gwRoutes[c.id]?.gender!=='female')return null;
  if(k.name==='踊り子'&&c.id!=='leda')return null;
  const mounted=k.traits.some(t=>/騎兵|飛行/.test(t));
  if(mounted&&noMount(c))return null;
  let train=0;
  for(const r of parseReq(k.main)){
    if(!r.code)continue;
    const weaponish=['sword','spear','axe','bow','gauntlet','blackMagic','whiteMagic'].includes(r.code);
    if(!(weaponish||r.rank>=RANK.C)||p.includes(r.code))continue;
    if(bane.includes(r.code)||!ALLOW_NEUTRAL)return null;
    train+=Math.max(1,r.rank-RANK.E);
  }
  const sel=parseReq(k.select).filter(r=>r.code);
  if(sel.length&&!sel.some(r=>p.includes(r.code))){
    const ok=sel.filter(r=>!bane.includes(r.code));if(!ok.length||!ALLOW_NEUTRAL)return null;
    train+=Math.min(...ok.map(r=>Math.max(1,r.rank-RANK.E)));
  }
  return train;
}
const classOk=(c,k)=>classTrain(c,k)!==null;
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
/* 四类标准敌人：能力 = 角色成长中位数 + 对应上级职业的成长修正。防守、魔防各有高低，
   物理、魔法都能打的角色可以对每类敌人挑最有效的手段 */
const ENEMY_TYPES=[
  {id:'infantry',name:'持枪步兵',cls:null,weapon:'spear'},
  {id:'armor',name:'重甲',cls:'ヘヴィアーマー',weapon:'spear'},
  {id:'mage',name:'法师',cls:'ウァテス',weapon:'blackMagic'},
  {id:'cavalry',name:'骑兵',cls:'バーディンガー',weapon:'spear'}
];
const ENEMY_LIST=ENEMY_TYPES.map(t=>{
  const k=t.cls?classes.find(x=>x.name===t.cls):null;
  const st=Object.fromEntries(G.map((s,i)=>[s,(s==='hp'?BASE.hp:BASE.other)+(medG[s]+(k?k.growth[i]:medClass[s]))*LEVELS/100]));
  st.build=BUILD.base+1+(k&&k.traits.some(x=>/重装/.test(x))?BUILD.armor:0)+(k&&k.traits.some(x=>/騎兵|飛行/.test(x))?BUILD.mounted:0);
  return{...t,st,c:combatant(st,WEAPONS[t.weapon])};
});
const ENEMIES={physical:ENEMY_LIST[0].c,magic:combatant(enemyStats,WEAPONS.blackMagic)}; // 承伤仍按原来的两类标准敌人
const NEUTRAL_LAG=0.9; // 非得意武器的输出折扣
const REACH_BONUS=0.08; // 有 1–2 格攻击手段（魔法、雷之剑）且够用时，敌人回合能反击远程敌人
const RANGE_OF=wc=>['nosferatu','angel'].includes(wc)?'1-2':['blackMagic','thunderSword'].includes(wc)?'1-2':wc==='bow'?'2':'1';

const HIT_RE={sword:/剣命中\+(\d+)/g,spear:/槍命中\+(\d+)/g,axe:/斧命中\+(\d+)/g,bow:/弓命中\+(\d+)/g,gauntlet:/格闘命中\+(\d+)/g,blackMagic:/魔法命中\+(\d+)/g};
function simulate(c,g,k,route,forced,override,opts={}){
  const p=profsOf(c),bane=banesOf(c),usable=(k.weapons||[]).map(x=>SKILL_CODE[x]).filter(Boolean);
  const cai=route==='cai';
  let best=null;const modes={};
  const spells=PERSONAL_SPELLS[c.id]||{};
  const cands=forced?[forced]:[...Object.keys(WEAPONS),...Object.keys(spells)]; // 雷之剑没有商店出售，只在培养方案里按指定打法模拟
  for(const wc of cands){
    const base=spells[wc]||WEAPONS[wc]||EXTRA_WEAPONS[wc];if(!base)continue;
    const skill=base.skill||wc;
    if(!usable.includes(skill)||(!spells[wc]&&(bane.includes(skill)||(!ALLOW_NEUTRAL&&!p.includes(skill)))&&!forced&&!opts.anyProf))continue;
    const lag=spells[wc]||p.includes(skill)||forced||opts.anyProf?1:NEUTRAL_LAG; // 中性武器：技能等级落后，输出打折
    const w={...base,sword:wc==='sword'||!!base.sword};
    const sf=statsFor(g,k,{cai,magic:!!w.magic});const {mounted,armor,mountBonus}=sf;const st=override?override(sf.st.build):sf.st;
    const hre=HIT_RE[skill]||HIT_RE[wc];const extra={hit:(hre?classBonus(k,hre):0)+(c.originalName==='Benditz'&&k.name==='戦車兵'?20:0),crit:skill==='sword'?classBonus(k,/剣必殺\+(\d+)/g):0,avo:skill==='gauntlet'?classBonus(k,/格闘回避\+(\d+)/g):0};
    const me=combatant(st,w,extra);
    if(!w.magic)me.hit+=ARTS_HIT;
    const pb=(PERSONAL_BONUS[c.id]||(()=>({})))({w,wc,skill,me,st,mounted});
    if(pb.build||pb.wtMul){const me2=combatant({...st,build:st.build+(pb.build||0)},{...w,wt:w.wt*(pb.wtMul||1)},extra);if(!w.magic)me2.hit+=ARTS_HIT;Object.assign(me,me2)}
    me.hit+=pb.hit||0;me.atk+=pb.atk||0;me.crit+=pb.crit||0;me.avo+=pb.avo||0;me.def+=pb.def||0;if(pb.as){me.as+=pb.as;me.avo+=pb.as}
    /* 期望伤害占敌方生命的比例；一回合内能打死（伤害 × 次数 ≥ 生命）时按命中率额外加分 */
    const per=ENEMY_LIST.map(E=>{const s=strike(me,E.c),n=s.doubles?(me.sword?2.2:2):1;s.exp*=pb.dmgMul||1;return{...s,kill:lag*clamp(s.exp/E.c.hp+(s.dmg*n>=E.c.hp?0.15*s.hit:0),0,1.5)}});
    const single=per.reduce((a,x)=>a+x.kill,0)/per.length;
    modes[wc]={single,per,range:RANGE_OF(wc)};
    if(!best||single>best.single)best={weapon:wc,st,me,off:[per[0],per[2]],per,single,mounted,armor,mountBonus,pb};
  }
  /* 输出 = 对每类敌人挑最有效的手段后取平均；有够用的 1–2 格手段再加成 */
  let offense=0,use=[],reach=false;
  if(best){
    use=ENEMY_LIST.map((E,i)=>{let m=best.weapon;for(const [wc,v] of Object.entries(modes))if(v.per[i].kill>modes[m].per[i].kill+1e-9)m=wc;return{enemy:E.name,mode:m,hit:modes[m].per[i].hit,dmg:modes[m].per[i].dmg,doubles:modes[m].per[i].doubles,kill:modes[m].per[i].kill}});
    const bz=forced?null:BLAZE[c.id];
    reach=Object.entries(modes).some(([wc,v])=>v.range==='1-2'&&v.single>=0.75*best.single)||!!bz?.reach;
    offense=use.reduce((a,x)=>a+x.kill,0)/use.length*(reach?1+REACH_BONUS:1)*(bz?bz.mult:1);
    best.offense=offense;
  }
  if(!best){ // 纯治疗职业：无攻击武器，只算承伤与治疗
    const sf=statsFor(g,k,{cai,magic:true});const {mounted,armor,mountBonus}=sf;const st=override?override(sf.st.build):sf.st;
    best={weapon:null,st,me:combatant(st,{mt:0,wt:0,hit:0}),off:[{kill:0,hit:0,dmg:0},{kill:0,hit:0,dmg:0}],offense:0,mounted,armor,mountBonus};
  }
  const tank={...best.me,def:best.me.def+classBonus(k,/後攻守備\+(\d+)/g)};
  const taken=['physical','magic'].map(e=>{const t=strike(ENEMIES[e],tank);t.exp*=best.pb?.takenMul||1;return t});
  const durability=(Math.log(Math.min(12,tank.hp/Math.max(1,taken[0].exp)))+Math.log(Math.min(12,tank.hp/Math.max(1,taken[1].exp))))/2; // 能承受的敌方攻击次数（对数，封顶 12 次）
  const healer=(k.weapons||[]).includes('白魔術')&&(p.includes('whiteMagic')||parseReq(k.main).some(r=>r.code==='whiteMagic'))&&!bane.includes('whiteMagic');
  const hs=healer&&HEAL_SKILL[c.id]?HEAL_SKILL[c.id](best.st):{amt:0,range:0};
  const healAmount=healer?HEAL_MT+Math.floor(best.st.magic/3)+classBonus(k,/魔法回復\+(\d+)/g)+hs.amt:0;
  const healing=healAmount*(1+HEAL_RANGE_VALUE*hs.range);
  const move=parseInt(k.move)||0,flying=k.traits.some(t=>/飛行/.test(t));
  const mobility=move+(flying?1:0)+(cai&&best.mounted?2:0);
  return{...best,durability,taken,healing,healAmount,healRange:hs.range,mobility,modes,use,reach};
}

/* ---------- 特征、标定与合成 ---------- */
const combos=[],detail={};
for(const c of chars){
  const {g,source,conflicts}=growthOf(c);
  const r=c.rubric,personal=r?mid(r[1]):null,team=r?mid(r[3]):null;
  detail[c.id]={growth:g,growthSource:source,growthConflicts:conflicts,personalRaw:personal,teamRaw:team,skillNote:r?.[6]||''};
  for(const rt of routesOf(c))for(const k of finalClasses.filter(k=>classOk(c,k))){
    const sim=simulate(c,g,k,rt.route);
    combos.push({id:c.id,route:rt,cls:k,sim,f:{dance:(k.classSkills||[]).some(t=>t.includes('踊る')),offense:sim.offense,healing:sim.healing,durability:sim.durability,skills:personal==null?null:Math.min(100,personal+team),mobility:sim.mobility,availability:availability(rt),cost:-costPenalty(rt.cond)-TRAIN_COST*classTrain(c,k)},train:classTrain(c,k)});
  }
}

/* 各特征在全部组合上按 5%–95% 分位归一化到 0–1；缺技能资料的按中位数 */
const median2=a=>median(a);
const norm={};
for(const f of [...FEATURES.filter(f=>f!=='contribution'),'offense','healing']){
  const vals=combos.map(x=>x.f[f]).filter(v=>v!=null&&!(f==='healing'&&v===0)).sort((a,b)=>a-b);
  norm[f]={lo:vals[Math.floor(vals.length*0.02)],hi:vals[Math.floor(vals.length*0.98)],md:median2(vals)};
}
const nf0=(x,f)=>{const v=x.f[f]??norm[f].md;
  if(f==='mobility')return 1-0.45*Math.exp(-0.55*v); // 边际递减：+0 移动 55 分，+1 约 74，+2 约 85，+3 约 91
  const {lo,hi}=norm[f];return hi>lo?clamp((v-lo)/(hi-lo)):0.5};
/* 主要贡献：同一职业只能担任一个定位，取输出与治疗（仅统计能用治疗魔法的组合）中较高者 */
let HEAL_FACTOR=1,TANK_FACTOR=0.7; // 治疗、坦克 → 贡献的换算系数，下方按外部共识扫描拟合
/* 坦克的敌人回合价值：承伤要进前段（归一化 ≥ 0.7）才开始计，到顶为满分；再乘（0.6 + 0.4 × 反击输出） */
const tankValue=x=>clamp((nf0(x,'durability')-0.7)/0.3)*(0.6+0.4*nf0(x,'offense'));
const roleValues=x=>({offense:nf0(x,'offense'),healing:x.f.healing>0?HEAL_FACTOR*nf0(x,'healing'):0,tank:TANK_FACTOR*tankValue(x),dance:x.f.dance?1:0});
/* 主要贡献：取最高的定位；能打又能奶的角色，次一项按 25% 加上（每回合只能做一件事，但多一种选择） */
const HYBRID_SHARE=0.25;
const contributionOf=x=>{const v=roleValues(x),top=Math.max(...Object.values(v)),oh=[v.offense,v.healing].sort((a,b)=>b-a);return clamp(top+(Math.min(oh[0],oh[1])>0&&oh[0]===top?HYBRID_SHARE*oh[1]:0))};
const nf=(x,f)=>f==='contribution'?contributionOf(x):nf0(x,f);
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
for(const h of HEAL_SCAN)for(const t of [0.6,0.7,0.8,0.9,1]){HEAL_FACTOR=h;TANK_FACTOR=t;weights={...PRIOR};const r=calibrate();fitScan.push({h,t,r:+r.toFixed(3)});if(!bestH||r>bestH.r+1e-9)bestH={h,t,r}}
HEAL_FACTOR=bestH.h;TANK_FACTOR=bestH.t;weights={...PRIOR};const fitCorr=calibrate();

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
      vsPhysical:{hit:Math.round((s.off[0].hit||0)*100),dmg:round(s.off[0].dmg||0),doubles:!!s.off[0].doubles,taken:round(s.taken[0].exp),takenHit:Math.round(s.taken[0].hit*100),avo:round(s.me.avo)},
      vsMagic:{hit:Math.round((s.off[1].hit||0)*100),dmg:round(s.off[1].dmg||0),doubles:!!s.off[1].doubles,taken:round(s.taken[1].exp),takenHit:Math.round(s.taken[1].hit*100)},
      healing:s.healing,mobility:s.mobility,costPenalty:round(costPenalty(x.route.cond)),availability:round(availability(x.route)*100),
      parts:Object.fromEntries(FEATURES.map(f=>[f,round(nf(x,f)*100)])),offenseScore:round(nf0(x,'offense')*100),healingScore:x.f.healing>0?round(nf0(x,'healing')*100):0,
      tankScore:round(tankValue(x)*100),healAmount:s.healAmount?round(s.healAmount):0,healRange:s.healRange||0}:null,
    means:s&&s.use.length?{use:s.use.map(u=>({enemy:u.enemy,mode:WEAPON_ZH[u.mode]||u.mode,hit:Math.round(u.hit*100),dmg:round(u.dmg),doubles:!!u.doubles})),modes:[...new Set(s.use.map(u=>WEAPON_ZH[u.mode]||u.mode))],reach:s.reach,single:round(nf0({f:{offense:s.single}},'offense')*100)}:null,
    blaze:BLAZE[c.id]?{type:BLAZE[c.id].type,mult:BLAZE[c.id].mult,note:BLAZE[c.id].note}:null,
    routeCount:new Set(combos.filter(y=>y.id===c.id).map(y=>y.route.route)).size,
    classCount:new Set(combos.filter(y=>y.id===c.id).map(y=>y.cls.name)).size,
    ...detail[c.id],skillMissing:detail[c.id].personalRaw==null,role:x?(()=>{const v=roleValues(x);if(v.dance)return'舞蹈';const k=Object.entries(v).sort((a,b)=>b[1]-a[1])[0][0];return{offense:'输出',healing:'治疗',tank:'坦克'}[k]||'输出'})():'输出'
  };
});
rows.sort((a,b)=>b.composite-a.composite);
const ranked=rows.filter(r=>!r.lord);
ranked.forEach(r=>{const first=ranked.findIndex(x=>x.composite===r.composite);r.rank=first+1;r.tier=TIERS.find(([,q])=>(first+1)/ranked.length<=q+1e-9)[0]});
rows.filter(r=>r.lord).sort((a,b)=>(a.lordAvgRank??9)-(b.lordAvgRank??9)||b.own-a.own).forEach((r,i)=>r.rank=i+1);

const agreement=(()=>{const R=ranked.filter(r=>r.external!=null),er=[...R].sort((a,b)=>b.external-a.external).map(r=>r.id),d=R.map(r=>Math.abs(er.indexOf(r.id)+1-r.rank));return{correlation:+corr(R.map(r=>r.composite),R.map(r=>r.external)).toFixed(2),meanRankDiff:round(d.reduce((a,v)=>a+v,0)/d.length),maxRankDiff:Math.max(...d)}})();
const out={
  version:'3.1',agreement,checked,generated:new Date().toISOString().slice(0,10),
  weights,prior:PRIOR,fitted:Object.fromEntries(Object.entries(fitted).map(([k,v])=>[k,round(v)])),priorShare:PRIOR_SHARE,featureNames:FEATURE_NAMES,blend:BLEND,tiers:TIERS,fit:{correlation:+fitCorr.toFixed(2),n:fitIds.length,healFactor:HEAL_FACTOR,tankFactor:TANK_FACTOR,scan:fitScan},
  assumptions:{hybridShare:HYBRID_SHARE,blaze:Object.fromEntries(Object.entries(BLAZE).map(([k,v])=>[k,v.mult])),enemies:ENEMY_LIST.map(e=>({name:e.name,cls:e.cls?(CLASS_ZH[e.cls]||e.cls):'上级职业中位数',weapon:WEAPON_ZH[e.weapon],def:round(e.st.defense),res:round(e.st.resistance),hp:round(e.st.hp)})),reachBonus:REACH_BONUS,artsHit:ARTS_HIT,healRangeValue:HEAL_RANGE_VALUE,levels:LEVELS,part1Levels:PART1_LEVELS,part1Chapters:PART1_CHAPTERS,weapons:WEAPONS,healMt:HEAL_MT,build:BUILD,mount:MOUNT,enemy:Object.fromEntries(G.map(s=>[s,round(enemyStats[s])]))},
  sources:sources.map(({tiers,...s})=>({...s,count:Object.values(tiers).flat().length})),excluded,rows
};
fs.writeFileSync(path.join(root,'strength-data.js'),'/* 由 tools/build-strength.js 生成，请勿手工编辑。 */\nwindow.STRENGTH_DATA='+JSON.stringify(out)+';\n');
const count={};rows.forEach(r=>count[r.tier]=(count[r.tier]||0)+1);
{const R=ranked.filter(r=>r.external!=null),er=[...R].sort((a,b)=>b.external-a.external).map(r=>r.id);const d=R.map(r=>Math.abs(er.indexOf(r.id)+1-r.rank));console.log('composite vs external r =',round(corr(R.map(r=>r.composite),R.map(r=>r.external))*100)/100,'mean |rank diff| =',round(d.reduce((a,v)=>a+v,0)/d.length),'max',Math.max(...d));}
console.log('best h/t',HEAL_FACTOR,TANK_FACTOR,'scan top',JSON.stringify([...fitScan].sort((a,b)=>b.r-a.r).slice(0,6)));console.log('combos',combos.length,'fitted',JSON.stringify(Object.fromEntries(Object.entries(fitted).map(([k,v])=>[k,round(v)]))),'weights',JSON.stringify(weights),'fit r =',round(fitCorr*100)/100,count);
for(const r of [...ranked,...rows.filter(r=>r.lord).sort((a,b)=>a.rank-b.rank)])console.log(String(r.rank).padStart(2),r.tier,r.name.padEnd(6,'　'),'综合',r.composite,'外',r.external,'站',r.own,'|',r.best?.routeName,r.best?.clsZh,r.best?.weaponZh,r.best?.mountBonus?'骑乘加成':'','入队',r.best?.joinPart+'-'+r.best?.joinChapter);

/* ---------- 培养方案：builds-data.js ---------- */
const guidesSrc=require('./builds-zh.json');
const gwChars=fs.existsSync(path.join(__dirname,'gamewith-chars.json'))?require('./gamewith-chars.json'):{};
const TIER_STAGE={'初級職':{lv:5,renown:1,label:'初级'},'中級職':{lv:20,renown:4,label:'中级'},'上級職':{lv:35,renown:8,label:'上级'},'最上級職':{lv:null,renown:null,label:'最上级',note:'第三部救世篇开放，部分需完成任务'}};
const classByName=Object.fromEntries(classes.map(k=>[k.name,k]));
const STAGE_LEVELS=15;
function roleOf(gd){
  const w=gd.weapon||'',r=gd.role||'';
  if(/坦克|重甲/.test(r))return'tank';
  if(/治疗/.test(r)&&!/黑魔法/.test(w))return'healer';
  if(/魔法/.test(w)&&!/剑|枪|斧|弓|拳套/.test(w.replace(/（.*?）/g,'')))return'magic';
  if(/魔法输出|魔法主炮/.test(r))return'magic';
  return'physical';
}
const KEY_STATS={physical:['strength','speed','dexterity','hp','defense'],magic:['magic','speed','dexterity','resistance','hp'],healer:['magic','resistance','speed','hp','luck'],tank:['hp','defense','strength','resistance','speed']};
const guideOut={};
for(const c of chars){
  const gd=guidesSrc.guides[c.id];if(!gd)continue;
  const row=rows.find(r=>r.id===c.id),g=detail[c.id].growth;
  const role=roleOf(gd),keys=KEY_STATS[role];
  const routeIds=routesOf(c).map(r=>r.route);
  /* 凯伊线骑乘加成：中级、上级（第一部）阶段的骑乘职业，按方案打法把 +25（战车兵 ×2）加在 力或魔 · 速 · 技（4:4:2） */
  const makeStages=(pth,fin,rt,magicBuild)=>[...pth,fin].filter(Boolean).filter((v,i,a)=>a.indexOf(v)===i).map(n=>{const k=classByName[n];const t=k?TIER_STAGE[k.tier]||{}:{};
    const riding=rt==='cai'&&!!k&&k.traits.some(x=>/騎兵|飛行/.test(x))&&['中級職','上級職'].includes(k.tier);
    const mb=riding?Object.fromEntries((magicBuild?['magic','speed','dexterity']:['strength','speed','dexterity']).map((st,i)=>[st,MOUNT.bonus*(k.name==='戦車兵'?MOUNT.chariotMultiplier:1)*[0.4,0.4,0.2][i]])):{};
    const eff=Object.fromEntries(G.map((st,i)=>[st,g[st]+(k?k.growth[i]:0)+(mb[st]||0)]));
    return{jp:n,zh:CLASS_ZH[n]||n,tier:t.label||(k?k.tier:''),lv:t.lv??null,renown:t.renown??null,note:t.note||'',unlockRoute:k?.unlockRoute?ROUTE_NAME[{カイ:'cai',ディートリヒ:'dietrich',セオドラ:'theodora',レダ:'leda'}[k.unlockRoute]]:null,
      mounted:!!k&&k.traits.some(t=>/騎兵|飛行/.test(t)),riding,move:k?parseInt(k.move)||0:0,eff,gain:Object.fromEntries(G.map(st=>[st,round(Math.max(0,eff[st])*STAGE_LEVELS/100)]))}});
  /* 方案模拟：能力按整条职业路线逐阶段累加（与阶段表一致），再缩放到与强度模型相同的 LEVELS 次升级 */
  const simFor=(fin,routeWanted,wk,stages)=>{const finalK=fin?classByName[fin]:null;if(!finalK)return null;
    const lv=STAGE_LEVELS*Math.max(1,stages.length);
    const override=stages.length?build=>{const st={};for(const k of G)st[k]=(k==='hp'?BASE.hp:BASE.other)+stages.reduce((a,x)=>a+Math.max(0,x.eff[k]),0)*STAGE_LEVELS/100*LEVELS/lv;st.build=build;return st}:undefined;
    const routeId=routeWanted&&routeIds.includes(routeWanted)?routeWanted:(row?.best?.route||routeIds[0]);
    const forced=wk&&wk!=='heal'?wk:undefined;const s2=simulate(c,g,finalK,routeId,forced,override,{anyProf:true});
    return{route:ROUTE_NAME[routeId],routeId,cls:CLASS_ZH[finalK.name]||finalK.name,weapon:WEAPON_ZH[s2.weapon]||'治疗',
    stats:Object.fromEntries([...G,'build'].map(k=>[k,round(s2.st[k])])),as:round(s2.me.as),enemyAs:round(ENEMIES.physical.as),doubleNeed:round(ENEMIES.physical.as+4),
    vsPhysical:{hit:Math.round((s2.off[0].hit||0)*100),dmg:round(s2.off[0].dmg||0),doubles:!!s2.off[0].doubles,taken:round(s2.taken[0].exp)},
    vsMagic:{hit:Math.round((s2.off[1].hit||0)*100),dmg:round(s2.off[1].dmg||0),doubles:!!s2.off[1].doubles,taken:round(s2.taken[1].exp)},healing:s2.healing,mountBonus:!!s2.mountBonus}};
  const rawBuilds=[{name:'主流 · '+(gd.final?(CLASS_ZH[gd.final]||gd.final):'固定职业'),tag:'主流',path:gd.path,final:gd.final,weapon:gd.weapon,why:gd.why,keys:gd.keys},
    ...(gd.alt||[]).map(a=>({name:CLASS_ZH[a.cls]||a.cls,tag:'备选',path:gd.path,final:a.cls,weapon:gd.weapon,why:a.why,keys:[]})),
    ...((guidesSrc.extraBuilds||{})[c.id]||[])];
  const builds=rawBuilds.map(b=>{const magicBuild=['thunderSword','blackMagic'].includes(b.weaponKey)||(!b.weaponKey&&(role==='magic'||role==='healer'));const st=makeStages(b.path||[],b.final,b.route,magicBuild);const sim=simFor(b.final,b.route,b.weaponKey,st);
    const bk=['thunderSword','blackMagic'].includes(b.weaponKey)?KEY_STATS.magic:['sword','spear','axe','bow','gauntlet'].includes(b.weaponKey)&&role!=='tank'?KEY_STATS.physical:keys;
    return{keyStats:bk,name:b.name,tag:b.tag,routeWanted:b.route?ROUTE_NAME[b.route]:null,routeOk:!b.route||routeIds.includes(b.route),weapon:b.weapon,why:b.why,keys:b.keys||[],final:b.final,finalZh:b.final?(CLASS_ZH[b.final]||b.final):null,stages:st,sim,mounted:st.some(x=>x.mounted)}});
  const stages=builds[0].stages,sim=builds[0].sim;
  /* 技能节点：站内中文技能 + GameWith 标注的习得等级（按等级顺序对应） */
  const abil=(c.abilities||[]).filter(a=>a.nameZh);
  const lvList=(gwChars[c.id]?.levelSkills||[]).map(x=>x[1]).map(v=>/^\d+$/.test(v)?+v:v).sort((a,b)=>(typeof a==='number'?a:0)-(typeof b==='number'?b:0));
  const lvOf=(a,i)=>{if(i===0)return'个人技能';if(lvList.length===abil.length-1)return typeof lvList[i-1]==='number'?'Lv'+lvList[i-1]:'初始';if(lvList.some(v=>v==='初期'))return'初始';return /\+$/.test(a.nameZh)?'Lv35':'Lv20'};
  const skills=abil.map((a,i)=>({name:a.nameZh,desc:a.description||'',trigger:a.trigger||'',level:lvOf(a,i)}));
  const recruit=Object.entries(c.availability?.costByRoute||{}).map(([r,v])=>{const gwT=gwRoutes[c.id]?.routes?.[{凯伊:'cai',迪托利希:'dietrich',赛奥朵拉:'theodora',蕾达:'leda'}[r]]?.time;
    return{route:r+'篇',available:v.available!==false,story:v.status==='story',support:v.supportLevel,renown:v.renownLevel,gold:v.gold,items:(v.items||[]).length,quests:v.questCount,paralogues:(v.paralogues||[]).length,appear:gwT?timeZh(gwT).replace(/^.+?篇 /,''):null}});
  guideOut[c.id]={...gd,builds,roleKey:null,finalZh:gd.final?(CLASS_ZH[gd.final]||gd.final):null,altZh:(gd.alt||[]).map(a=>({...a,zh:CLASS_ZH[a.cls]||a.cls})),roleKey:role,keyStats:keys,stages,sim,skills,recruit,
    routeNote:c.availability?.routeNote||'',costNote:c.availability?.costNote||'',profs:(gwChars[c.id]?.profs||[]),banes:(gwChars[c.id]?.bane||[]),gwRank:gwChars[c.id]?.gwRank||null,
    growth:g,growthRank:null,tier:row?.tier,rank:row?.rank,lord:row?.lord,composite:row?.composite,external:row?.external,own:row?.own,simBest:row?.best?{route:row.best.routeName,cls:row.best.clsZh,mount:row.best.mountBonus}:null};
}
/* 成长率全员排名（1 = 最高） */
for(const st of G){const vals=Object.values(guideOut).map(x=>x.growth[st]).sort((a,b)=>b-a);for(const x of Object.values(guideOut)){x.growthRank=x.growthRank||{};x.growthRank[st]=vals.indexOf(x.growth[st])+1}}
fs.writeFileSync(path.join(root,'builds-data.js'),'/* 由 tools/build-strength.js 生成，请勿手工编辑。 */\nwindow.BUILD_GUIDES='+JSON.stringify({version:'1.0',checked,stageLevels:STAGE_LEVELS,sources:guidesSrc.sources,enemy:{as:round(ENEMIES.physical.as),hp:round(ENEMIES.physical.hp)},chars:guideOut})+';\n');
console.log('guides',Object.keys(guideOut).length);

/* ---------- 招募图：四条主角线 × 章节，生成 recruit-data.js ---------- */
{
  const LORD_ROUTES=['cai','dietrich','theodora','leda'];
  const rowOf=Object.fromEntries(rows.map(r=>[r.id,r]));
  const jpZh=Object.fromEntries(Object.entries(gwRoutes).filter(([id])=>rowOf[id]).map(([id,v])=>[v.jp,rowOf[id].name]));
  const ITEM_ZH={'巨大肉':'巨型肉','カガヤキウオ':'辉光鱼','砂虫肉':'沙虫肉','コーシャルーガー':'科夏鲁格','鉄の槍':'铁之枪','グルマオサ':'格尔马奥萨','鉄の弓':'铁之弓','デーツ':'椰枣','青銅の斧':'青铜之斧','鉄の斧':'铁之斧','聖水':'圣水'};
  const nm=s=>jpZh[s.trim()]||s.trim();
  function condZh(s){
    s=(s||'').replace(/支援Lv\d\/?|名声Lv ?\d+\/?|ストーリー進行中に加入/g,'').trim();
    const out=[];
    s=s.replace(/1部で発生するサブクエスト「 ?(.+?) ?」をクリアし、2部2章「(.+?)」で (\S+) を倒すと2部3章で加入/,(_,q,b,w)=>{out.push('第一部完成支线「亡妹的饰物」，并在第二部第2章「阿格里斯关死斗」击败'+nm(w));return''});
    s=s.replace(/戦闘中に (\S+) で (\S+) を倒す/,(_,a,b)=>{out.push('战斗中用'+nm(a)+'击败'+nm(b));return''});
    s=s.replace(/(\S+?) ?外伝 ?(?:を)?クリア(し本戦で敗退する)?/g,(_,n,lose)=>{out.push('通关'+nm(n)+'外传'+(lose?'，并在正赛中落败':''));return''});
    s=s.replace(/ストーリー11章で (\S+) が敗退後、満足する武器を渡す\(ド・ミナの籠手で成功を確認\)/,(_,n)=>{out.push('交涉：第11章'+nm(n)+'落败后交付满意的武器（达·米纳手甲可成功）');return''});
    s=s.replace(/10000G断る→1000G断る→100G断る→10G支払う/,()=>{out.push('交涉：依次拒绝 10000G、1000G、100G，再支付 10G');return''});
    s=s.replace(/(\d+)G支払う/,(_,g)=>{out.push('交涉：支付 '+g+'G');return''});
    s=s.replace(/(\S+) ×(\d+)を渡す/,(_,it,n)=>{out.push('交涉：交付'+(ITEM_ZH[it]||it)+' ×'+n);return''});
    s=s.replace(/(\S+?) ?の頼み(1[~〜]3)? ?をクリア/,(_,n,r)=>{out.push('交涉：完成'+nm(n)+'的委托'+(r?'（1–3）':''));return''});
    s=s.replace(/コイントスで裏を選択/,()=>{out.push('交涉：抛硬币选背面');return''});
    s=s.replace(/質問全てで「必要だ」を選択/,()=>{out.push('交涉：所有问题都选「需要」');return''});
    s=s.replace(/質問全てで「はい」を選択/,()=>{out.push('交涉：所有问题都选「是」');return''});
    s=s.replace(/質問で以下の回答を選択1問目：乾酪2問目：満月の夜3問目：どれでもOK/,()=>{out.push('交涉：问答依次选 乾酪 → 满月之夜 → 任意');return''});
    s=s.replace(/質問で以下の選択肢を選択1個目：わかった2個目：サラミス国3個目：ダ・ミナ4個目：座礁した巨大船/,()=>{out.push('交涉：问答依次选 明白了 → 萨拉米斯国 → 达·米纳 → 搁浅的巨船');return''});
    s=s.replace(/交渉/g,'').trim();
    if(s)out.push(s); // 未翻译的原文保留，便于核对
    return out;
  }
  const entries=[];
  for(const c of pool){
    const r=rowOf[c.id];if(!r)continue;
    const base={id:c.id,name:r.name,tier:r.tier,rank:r.rank,bestRoute:r.best?.route||null};
    const gr=gwRoutes[c.id]?.routes||{};
    let any=false;
    for(const lr of LORD_ROUTES){
      const v=gr[lr];if(!v||!v.cond||/スカウト対象外/.test(v.cond))continue;
      any=true;
      const q=parseCond(v.cond),t=v.time?parseTime(v.time):null,month=(v.time||'').match(/(\d+)月$/);
      const est=!t;const part=t?.part??1,ch=t?t.ch:Math.min(PART1_CHAPTERS,Math.ceil(renownChapter(q.renown)));
      entries.push({...base,route:lr,part,ch,month:month?+month[1]:null,est,story:q.story,support:q.support||null,renown:q.renown||null,cond:condZh(v.cond)});
    }
    if(!any){
      const joins=(gwRoster[c.id]?.joins||[]).map(j=>({j,t:parseTime(j)})).filter(x=>x.t).sort((a,b)=>a.t.part-b.t.part||a.t.ch-b.t.ch);
      const first=joins[0];if(!first)continue;
      entries.push({...base,route:'all',part:first.t.part,ch:first.t.ch,month:null,est:false,story:true,support:null,renown:null,
        cond:/序幕/.test(first.j)?['救世主篇序幕客串，第三部剧情加入']:['救世主篇剧情加入']});
    }
  }
  const lordsOut=LORD_ROUTES.map(id=>({id,name:rowOf[id].name,route:ROUTE_NAME[id]}));
  fs.writeFileSync(path.join(root,'recruit-data.js'),'/* 由 tools/build-strength.js 生成，请勿手工编辑。 */\nwindow.RECRUIT_DATA='+JSON.stringify({version:'1.0',checked,source:require('./gamewith-routes.json').source,renownRule:'出场时间未收录的角色按「名声等级 r 约在第 3 + 0.5r 章达到」估算',lords:lordsOut,entries})+';\n');
  console.log('recruit entries',entries.length);
}
