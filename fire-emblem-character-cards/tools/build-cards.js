#!/usr/bin/env node
/* 生成 cards-data.js：角色图鉴卡片数据。
   用法：在 fire-emblem-character-cards/ 目录运行 node tools/build-cards.js
   输入：../fire-emblem-fortunes-weave 的 strength-data.js（梯队）、builds-data.js（成长率与培养方案）、model-data.js（英文名）；
        tools/gw-portraits.json（GameWith 立绘地址）、tools/gw-ages.json（GameWith 5 年前后年龄与身高）。
   关键装备按定位、武器类型与最终职业套规则推荐，规则写在下方，数据来自 GameWith 武器 / 装备 / 骑乘动物一览。 */
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..'),site=path.join(root,'..','fire-emblem-fortunes-weave');
global.window={};
for(const f of ['strength-data.js','builds-data.js','model-data.js'])require(path.join(site,f));
const SD=window.STRENGTH_DATA,BG=window.BUILD_GUIDES,MD=window.TACTICAL_DATA;
const gwRoster=require(path.join(site,'tools','gamewith-routes.json')).roster;
const portraits=require('./gw-portraits.json'),ages=require('./gw-ages.json');
const {classes}=require(path.join(site,'tools','gamewith-classes.json'));
const MAGIC=require(path.join(site,'tools','gamewith-magic.json'));
const SPELL_ZH={'ダークスパイクΤ':'暗刺Τ','スライムΒ':'史莱姆Β','デスΓ':'死神Γ','シェイバー':'风刃','アロー':'魔箭','トロン':'雷霆','オーラ':'光环','アイスブレード':'冰刃','裁きの剣':'裁决之剑','大地の顎':'大地之颚','ルナΛ':'月光Λ','スターライト':'星光','ファイアー':'火焰','ウィンド':'风','スライムB':'史莱姆B','サンダー':'雷','硝子の車輪':'玻璃之轮','ブリザー':'冰','ボルガノン':'博尔加农','リザイア':'吸血','エンジェル':'炽天使','ドーラΔ':'多拉Δ','デスｒ':'死神r'};
const G=['hp','strength','magic','speed','dexterity','defense','resistance','luck','charm'];

/* ---------- 关键装备规则 ---------- */
const W=(name,note)=>({name,note});
const WEAPON_KEYS={
  '剑':[W('达米纳剑','威力 12、重量 4，C 级商店剑里最均衡（4000G）'),W('必杀之刃','可用战技「必杀剑」，补爆发（3000G）')],
  '枪':[W('达米纳枪','威力 13、重量 7，战技命中 +10（4000G）'),W('克骑枪','对骑兵特效，打骑兵关卡用')],
  '斧':[W('达米纳斧','威力 16，战技命中 +10（4000G）'),W('锤','对重甲特效，拆重甲专用')],
  '弓':[W('达米纳弓','威力 12、重量 6，对飞行特效'),W('长弓','可用战技「狙击」，远距离点杀（2000G）')],
  '拳套':[W('达米纳拳套','威力 11、重量 4，战技命中 +10（4000G）'),W('反击拳套','后攻时攻击 +5，适合敌方回合反击')],
  '黑魔法':[W('博尔加农','威力 10，常用主力攻击魔法'),W('玻璃轮','威力 12，对飞行特效')],
  '治疗':[W('远程治愈','射程 1–10，远距离抬血'),W('治愈','基础回复魔法，威力 10')],
  '雷之剑':[W('雷之剑','按魔力结算的魔法攻击，射程 1–2（威力 12、重量 8）'),W('达米纳剑','近身物理备用')]
};
const ACC={
  tank:[W('银之盾','守备 +5（10000G）'),W('魔封之盾','守备 +1、魔防 +5，防法师')],
  healer:[W('治愈之杖','用魔法回复时回复量 +10')],
  magic:[W('魔道之杖','魔力 +3')],
  dodge:[W('幻影之戒','回避 +5，配合高速度闪避')],
  sturdy:[W('达米纳之盾','守备 +4（4000G）')],
  heavy:[W('巨人之戒','体格 +4，抵消重武器的攻速惩罚')]
};
/* 骑乘动物：只能在凯伊篇捕获；推荐按 GameWith「おすすめ動物」表 */
const ANIMAL_OF_CLASS={'飛駝兵':'飞驼','騎甲駝兵':'飞驼','カラドリオス':'飞驼','天翼兵':'天马','聖天翼兵':'天马','ドラグーン':'飞龙','ドラゴンマスター':'飞龙','戦象兵':'象'};
const MOUNT_REC={
  '马':{physical:W('黑马','力量 / 速度 / 技巧，救世篇捕获'),tank:W('野马','技巧 / 守备 / 速度'),magic:W('独角马（モノケロース）','技巧 / 速度 / 幸运')},
  '飞驼':{physical:W('赤羽巨驼（赤羽のメガニウス）','技巧 / 力量 / 守备'),tank:W('赤羽巨驼（赤羽のメガニウス）','技巧 / 力量 / 守备'),magic:W('黑羽魔驼（黒羽のマジニウス）','魔力 / 速度 / 技巧，带再移动')},
  '天马':{physical:W('红隼（レッドファルコン）','力量 / 速度 / 技巧，救世篇捕获'),thunder:W('黑羽魔驼（黒羽のマジニウス）','速度 / 魔力；雷之剑型推荐改乘飞驼')},
  '飞龙':{physical:W('黑鲍（ブラックバウ）','力量 / 速度，救世篇捕获')}
};
const classOf=jp=>classes.find(k=>k.name===jp);
function equipmentFor(g,b){
  const thunder=/雷之剑/.test(b.name)||/雷之剑/.test(b.weapon||'');
  let wType=thunder?'雷之剑':g.roleKey==='healer'?'治疗':(b.sim?.weapon||'剑');
  let weapons=(WEAPON_KEYS[wType]||[]).slice();
  if(wType==='治疗'){ // 奶妈：列出本人实际会的回复魔法
    const HEAL_ORDER=[['リブロー','远程治愈','射程 1–10，回复量 8 + 魔力 ÷ 3，远距离抬血'],['リカバー','痊愈','回复量 30 + 魔力 ÷ 3，大量回复'],['リザーブ','范围回复','射程 1–5 范围内全体回复'],['ライブ','回复','回复量 10 + 魔力 ÷ 3']];
    const known=HEAL_ORDER.filter(([n])=>MAGIC.spells[n]?.learners.includes(g.id)).map(([,zh,note])=>W(zh,note));
    if(known.length)weapons=known.slice(0,2);
  }
  if(!weapons.length){ // 法系：按本人法表列出最强的攻击魔法
    const mine=Object.entries(MAGIC.spells).filter(([,v])=>v.mt!=null&&!v.heal&&v.learners.includes(g.id)).sort((a,b)=>b[1].mt-a[1].mt).slice(0,2);
    weapons=mine.length?mine.map(([n,v])=>W(SPELL_ZH[n]||n,'威力 '+v.mt+'、命中 '+v.hit+'、重量 '+v.wt+'、'+v.uses+' 次'+(v.effective.includes('flying')?'，对飞行有效':'')+(v.effective.includes('infernal')?'，对冥魔有效':'')+(v.vsDef?'，按敌人守备结算':''))):[W('火焰','法表未收录其他攻击魔法，按火焰（威力 3）计')];
    wType='黑魔法';
  }
  const role=g.roleKey==='magic'||thunder?'magic':g.roleKey;
  let acc;
  if(role==='tank')acc=ACC.tank;
  else if(role==='healer')acc=ACC.healer;
  else if(role==='magic')acc=ACC.magic;
  else if(['斧','弓'].includes(wType)&&(b.sim?.stats?.build??8)<10)acc=ACC.heavy;
  else acc=(g.growth.speed>=45?ACC.dodge:ACC.sturdy);
  let mount=null;const k=classOf(b.final);
  if(k&&k.traits.some(t=>/騎兵|飛行/.test(t))&&k.name!=='戦車兵'){
    const animal=ANIMAL_OF_CLASS[k.name]||'马';const tab=MOUNT_REC[animal]||{};
    const pick=(thunder&&tab.thunder)||tab[role]||tab[role==='healer'?'magic':'physical']||null;
    mount={animal,pick,note:'骑乘动物只能在凯伊篇捕获；其他路线按普通兵种使用'};
  }
  return{weaponType:wType,weapons,accessories:acc,mount};
}

/* ---------- 汇总 ---------- */
const avg=Object.fromEntries(G.map(s=>{const v=Object.values(BG.chars).map(x=>x.growth[s]).filter(n=>n!=null);return[s,Math.round(v.reduce((a,b)=>a+b,0)/v.length*10)/10]}));
const rowOf=Object.fromEntries(SD.rows.map(r=>[r.id,r]));
const cards=[];
for(const [id,g] of Object.entries(BG.chars)){
  const c=MD.characters.find(x=>x.id===id),r=rowOf[id],p=portraits[id]||{},jp=gwRoster[id]?.jp;
  const b=g.builds[0];
  const eq=equipmentFor({...g,id},b);
  const atk=['magic','healer'].includes(g.roleKey)||eq.weaponType==='雷之剑'?'magic':'strength';
  const a=ages[jp];
  const img=fs.existsSync(path.join(root,'img',id+'.webp')),img5=fs.existsSync(path.join(root,'img',id+'-5y.webp'));
  cards.push({
    id,name:c.name,en:c.originalName,jp,lord:!!g.lord,tier:g.lord?'主角':g.tier,rank:g.rank,composite:r?.composite??null,
    role:g.role,roleKey:g.roleKey,atk,growth:g.growth,growthRank:g.growthRank,
    img,img5,sameLook:!!(p.init&&p.init===p.after),
    profile:a?{age:[a[0],a[2]],height:[a[1],a[3]],renamed:jp==='ジェスター'?'5 年后改名为马克西姆（マクシム）':null}:null,
    build:{name:b.name,path:b.stages.map(s=>s.zh),final:b.finalZh,why:b.why,weapon:b.weapon,route:b.routeWanted||g.simBest?.route||null,count:g.builds.length,others:g.builds.slice(1).map(x=>x.name)},
    equip:eq,
    sim:b.sim?{cls:b.sim.cls,stats:b.sim.stats,route:b.sim.route}:null
  });
}
cards.sort((x,y)=>(x.lord-y.lord)||(x.rank??99)-(y.rank??99));
fs.writeFileSync(path.join(root,'cards-data.js'),'/* 由 tools/build-cards.js 生成，请勿手工编辑。 */\nwindow.CARDS_DATA='+JSON.stringify({version:'1.0',generated:SD.checked,avg,sources:{portraits:'https://gamewith.jp/fefw/577868',mounts:'https://gamewith.jp/fefw/577527',equipment:'https://gamewith.jp/fefw/574252',weapons:'https://gamewith.jp/fefw/576859'},cards})+';\n');
console.log('cards',cards.length,'no image',cards.filter(c=>!c.img).map(c=>c.id).join(','),'no 5y',cards.filter(c=>!c.img5).map(c=>c.id).join(','));
