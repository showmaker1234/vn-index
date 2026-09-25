#!/usr/bin/env node
/* 生成 strength-data.js：多来源共识分 + 本站量化分 → 综合分与梯队。
   用法：node tools/build-strength.js（在 fire-emblem-fortunes-weave/ 目录下运行）
   输入：model-data.js、model-engine.js（站内角色资料与招募成本）、
        tools/strength-sources.json（各榜单原始档位）、tools/gamewith-roster.json（63 人成长率与加入时期）。 */
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
global.window={};
require(path.join(root,'model-data.js'));
require(path.join(root,'model-engine.js'));
const data=window.TACTICAL_DATA,engine=window.TACTICAL_MODEL;
const {sources,excluded,lords,checked}=require('./strength-sources.json');
const gw=require('./gamewith-roster.json').roster;

const WEIGHTS={combat:30,skill:25,timing:15,cost:5,mobility:15,scarcity:10};
const BLEND={external:0.5,own:0.5};
/* 梯队按综合分在 58 名非主角中的名次划分：前 8% T0，8–25% T1，25–50% T2，50–75% T3，其余 T4 */
const TIERS=[['T0',0.08],['T1',0.25],['T2',0.5],['T3',0.75],['T4',1]];
/* 主角不进字母梯队：按区分主角强弱的来源给出的名次取平均（未区分的来源记为并列中位） */
const LORD_RANKS={keengamer:{dietrich:1,theodora:2,leda:3,cai:4},gamewith:{dietrich:1,theodora:3,leda:3,cai:3},algest:{leda:1,dietrich:3,theodora:3,cai:3}};
const GROWTH_KEYS=['hp','strength','magic','speed','dexterity','defense','resistance','luck','charm'];
const ROLES={whiteMagic:'治疗',blackMagic:'魔法',bow:'弓',flying:'飞行',riding:'骑乘',heavyArmor:'重甲',authority:'指挥'};
const mid=r=>Array.isArray(r)?(r[0]+r[1])/2:r;
const round=v=>Math.round(v*10)/10;
const clamp=(v,a=0,b=100)=>Math.max(a,Math.min(b,v));

const chars=data.characters;
const isLord=c=>lords.includes(c.id);
const pool=chars.filter(c=>!isLord(c));

/* 百分位：在 58 名非主角角色中的位置，并列取平均名次；0 = 最低，100 = 最高 */
function percentile(values){
  const ids=Object.keys(values),n=ids.length,sorted=ids.map(id=>values[id]).sort((a,b)=>a-b);
  const out={};
  for(const id of ids){
    const v=values[id],below=sorted.filter(x=>x<v).length,equal=sorted.filter(x=>x===v).length;
    out[id]=n>1?100*(below+(equal-1)/2)/(n-1):50;
  }
  return out;
}

/* 成长率：站内资料为主（穆使用已含个人技能的成长）；站内与 GameWith 不一致时取中值；站内缺失时用 GameWith */
function growthOf(c){
  const site=c.effectiveGrowthRates||c.growthRates,alt=gw[c.id]?.growth,notes=[];
  const g={};
  for(const k of GROWTH_KEYS){
    const s=site?.[k],a=alt?.[k];
    if(s==null){g[k]=a;continue}
    if(a!=null&&a!==s&&!c.effectiveGrowthRates){g[k]=(s+a)/2;notes.push(k)}
    else g[k]=s;
  }
  return{g,source:site?(notes.length?'mixed':'site'):'gamewith',conflicts:notes};
}

/* 最早加入时机：第一部第 N 章 100−6(N−1)；第二部第 N 章 40−3(N−1)；第三部第 N 节 25−3N（序幕客串按第三部开始计） */
function timingOf(c){
  const joins=gw[c.id]?.joins||[];
  let best=null,label='';
  for(const j of joins){
    let m,s=null;
    if((m=j.match(/1部(\d+)章/)))s=100-6*(+m[1]-1);
    else if((m=j.match(/2部(\d+)章/)))s=40-3*(+m[1]-1);
    else if((m=j.match(/3部(\d+)区分/)))s=25-3*+m[1];
    else if(/序幕/.test(j))s=22;
    if(s!=null&&(best==null||s>best)){best=s;label=j}
  }
  const route={'カイ':'凯伊','ディートリヒ':'迪托利希','セオドラ':'赛奥朵拉','レダ':'蕾达','救世主':'救世主'};
  const zh=label.replace(/【(.+?)編】/,(_,n)=>(route[n]||n)+'篇 ').replace(/1部/,'第一部第').replace(/2部/,'第二部第').replace(/3部(\d+)区分/,'第三部第$1节').replace(/序幕(\d+)章/,'序幕第$1章').replace(/(\d+)月$/,' $1月').trim();
  return{score:best??20,label:zh};
}

const raw={offense:{},survival:{},skill:{},timing:{},cost:{},mobility:{},scarcity:{}};
const detail={};
const profs=c=>c.proficienciesKnown?c.proficiencyCodes:(gw[c.id]?.proficiencies||[]);
const roleShare={};
for(const r of Object.keys(ROLES))roleShare[r]=pool.filter(c=>profs(c).includes(r)).length/pool.length;

for(const c of chars){
  const {g,source,conflicts}=growthOf(c);
  const off=Math.max(g.strength,g.magic)*0.5+g.speed*0.3+g.dexterity*0.2;
  const sur=g.hp*0.35+g.defense*0.4+g.resistance*0.25;
  const r=c.rubric;
  const skill=r?Math.min(100,mid(r[1])+mid(r[3])):null;
  const t=timingOf(c);
  const ev=engine.evaluate(c,{preset:'balanced',route:'best',skills:'developed'});
  const phase=c.availability?.phase==='I'?100:c.availability?.phase==='II'?60:25;
  const penalty=Math.max(0,phase-mid(ev.dimensions.access.range));
  const cost=clamp(100-2*penalty);
  const p=profs(c);
  const restricted=['Goliath','Orchel'].includes(c.originalName);
  const mob=(restricted?20:p.includes('flying')?75:p.includes('riding')?65:40)+(r?mid(r[5]):0);
  const rar=p.filter(x=>ROLES[x]).map(x=>1-roleShare[x]).sort((a,b)=>b-a);
  const scar=100*((rar[0]||0)*0.7+(rar[1]||0)*0.3);
  Object.assign(detail[c.id]={},{growth:g,growthSource:source,growthConflicts:conflicts,offenseRaw:round(off),survivalRaw:round(sur),skillRaw:skill==null?null:round(skill),timingLabel:t.label,timingRaw:t.score,costPenalty:round(penalty),mobilityRaw:round(mob),roles:p.filter(x=>ROLES[x]).map(x=>ROLES[x]),skillNote:r?.[6]||''});
  raw.offense[c.id]=off;raw.survival[c.id]=sur;raw.skill[c.id]=skill;raw.timing[c.id]=t.score;raw.cost[c.id]=cost;raw.mobility[c.id]=mob;raw.scarcity[c.id]=scar;
}

/* 每项先在非主角池内换算百分位；主角按同一基准插值，只用于主角之间比较 */
function pctWithLords(key){
  const base=Object.fromEntries(pool.filter(c=>raw[key][c.id]!=null).map(c=>[c.id,raw[key][c.id]]));
  const p=percentile(base),vals=Object.values(base);
  const place=v=>{const below=vals.filter(x=>x<v).length,eq=vals.filter(x=>x===v).length;return 100*(below+Math.max(0,eq-1)/2)/(vals.length-1)};
  const out={};
  for(const c of chars){const v=raw[key][c.id];out[c.id]=v==null?50:isLord(c)?clamp(place(v)):p[c.id]}
  return out;
}
const P=Object.fromEntries(Object.keys(raw).map(k=>[k,pctWithLords(k)]));

/* 外部共识：每个榜单把档位换算为该榜内的百分位中点（不含主角），按来源权重加权平均 */
const nonLordIds=new Set(pool.map(c=>c.id));
const sourceScores={};
for(const s of sources){
  const scores={};
  if(s.kind==='picks'){
    const picks=s.tiers.Rec.filter(id=>nonLordIds.has(id));
    for(const id of picks)scores[id]=100*(1-(picks.length/2)/pool.length);
  }else{
    const order=s.scale.map(t=>(s.tiers[t]||[]).filter(id=>nonLordIds.has(id)));
    const N=order.flat().length;let above=0;
    order.forEach(ids=>{for(const id of ids)scores[id]=100*(1-(above+ids.length/2)/N);above+=ids.length});
  }
  sourceScores[s.id]=scores;
}

const rows=chars.map(c=>{
  const own=(WEIGHTS.combat*(0.6*P.offense[c.id]+0.4*P.survival[c.id])+WEIGHTS.skill*P.skill[c.id]+WEIGHTS.timing*P.timing[c.id]+WEIGHTS.cost*P.cost[c.id]+WEIGHTS.mobility*P.mobility[c.id]+WEIGHTS.scarcity*P.scarcity[c.id])/100;
  const per=sources.map(s=>{
    const tier=Object.entries(s.tiers).find(([,ids])=>ids.includes(c.id))?.[0]||null;
    return{id:s.id,tier,score:sourceScores[s.id][c.id]??null,weight:s.weight};
  });
  const used=per.filter(x=>x.score!=null),w=used.reduce((a,x)=>a+x.weight,0);
  const external=w?used.reduce((a,x)=>a+x.score*x.weight,0)/w:null;
  const spread=w?Math.sqrt(used.reduce((a,x)=>a+x.weight*(x.score-external)**2,0)/w):null;
  const composite=isLord(c)?own:external==null?own:BLEND.external*external+BLEND.own*own;
  const lordRanks=Object.values(LORD_RANKS).map(m=>m[c.id]).filter(Boolean);
  return{
    lordAvgRank:lordRanks.length?round(lordRanks.reduce((a,b)=>a+b,0)/lordRanks.length):null,
    id:c.id,name:c.name,originalName:c.originalName,lord:isLord(c),tier:isLord(c)?'lord':null,
    composite:round(composite),own:round(own),external:external==null?null:round(external),
    sourceWeight:round(w),sourceCount:used.length,spread:spread==null?null:round(spread),
    confidence:isLord(c)?'—':used.length>=4&&spread<22?'高':used.length>=3?'中':'低',disputed:spread!=null&&used.length>=3&&spread>=22,
    parts:{combat:round(0.6*P.offense[c.id]+0.4*P.survival[c.id]),skill:round(P.skill[c.id]),timing:round(P.timing[c.id]),cost:round(P.cost[c.id]),mobility:round(P.mobility[c.id]),scarcity:round(P.scarcity[c.id])},
    sources:per.map(({id,tier,score})=>({id,tier,score:score==null?null:round(score)})),
    ...detail[c.id],skillMissing:raw.skill[c.id]==null
  };
});
rows.sort((a,b)=>b.composite-a.composite);
const ranked=rows.filter(r=>!r.lord);
ranked.forEach((r,i)=>{
  const first=ranked.findIndex(x=>x.composite===r.composite);/* 同分同名次、同梯队 */
  r.rank=first+1;r.tier=TIERS.find(([,q])=>(first+1)/ranked.length<=q+1e-9)[0];
});
rows.filter(r=>r.lord).sort((a,b)=>(a.lordAvgRank??9)-(b.lordAvgRank??9)||b.own-a.own).forEach((r,i)=>r.rank=i+1);

const out={
  version:'2.0',checked,generated:new Date().toISOString().slice(0,10),
  weights:WEIGHTS,blend:BLEND,tiers:TIERS,roleShare:Object.fromEntries(Object.entries(roleShare).map(([k,v])=>[ROLES[k],round(v*100)])),
  sources:sources.map(({tiers,...s})=>({...s,count:Object.values(tiers).flat().length})),
  excluded,rows
};
fs.writeFileSync(path.join(root,'strength-data.js'),'/* 由 tools/build-strength.js 生成，请勿手工编辑。 */\nwindow.STRENGTH_DATA='+JSON.stringify(out)+';\n');
const count={};rows.forEach(r=>count[r.tier]=(count[r.tier]||0)+1);
console.log('rows',rows.length,count);
for(const r of [...ranked,...rows.filter(r=>r.lord).sort((a,b)=>a.rank-b.rank)])console.log(String(r.rank).padStart(2),r.tier,r.name.padEnd(6,'　'),'综合',r.composite,'外部',r.external,'本站',r.own,'来源',r.sourceCount,'分歧',r.spread,r.confidence);
