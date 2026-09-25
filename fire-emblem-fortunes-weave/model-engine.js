/* 本站可解释培养评价 v1。分值是启发式指数，不是实测伤害、胜率或概率。 */
(function(root){
const clamp=(v,min=0,max=100)=>Math.max(min,Math.min(max,Number.isFinite(v)?v:0));
const pair=v=>Array.isArray(v)?v:[v,v];
const mid=v=>(v[0]+v[1])/2;
const names={offense:'输出潜力',survival:'生存潜力',personal:'个人机制',team:'团队支援',mobility:'机动适性',training:'培养适性',access:'入队成本'};
const presets={balanced:{label:'常规流程',weights:[24,18,16,14,10,8,10]},safe:{label:'稳健推进',weights:[16,28,16,18,8,6,8]},late:{label:'后期培养',weights:[30,20,20,14,10,6,0]},support:{label:'团队辅助',weights:[10,14,12,38,10,6,10]}};
const keys=Object.keys(names),physical=['sword','spear','axe','bow','gauntlet'],magic=['blackMagic','whiteMagic'];
const unknown=note=>({range:[0,100],known:false,note});
const measure=(range,note,extra={})=>({range:pair(range).map(v=>clamp(v)),known:true,note,...extra});
function growth(c,k){const value=c.effectiveGrowthRates?.[k]??c.growthRates?.[k];return value==null?null:(!c.effectiveGrowthRates&&c.numericIntervals?.[k]||[value,value]);}
function weightedTerms(terms,scale=1){return [0,1].map(end=>clamp(terms.reduce((s,[v,w])=>s+v[end]*w,0)*scale));}
function available(c,route){return route==='best'||!c.availability?.unavailableRoutes?.includes(route);}
function cost(c,route){
 const a=c.availability;if(!a)return unknown('入队条件未收录');
 const phase=a.phase==='I'?100:a.phase==='II'?60:25;
 const all=Object.entries(a.costByRoute||{}).filter(([name,r])=>r.available!==false&&(route==='best'||name===route));
 if(!all.length)return measure([Math.max(0,phase-25),phase],(a.routeNote||'后期加入')+'；固定支出尚不完整。');
 const values=all.map(([name,r])=>{
  if(r.status==='story'||a.autoRoutes?.includes(name))return{range:[phase,phase],route:name,note:'剧情加入'};
  const field=(key,max)=>r.numericIntervals?.[key]||(r[key]==null?[0,max]:[r[key],r[key]]);
  const support=field('supportLevel',3),renown=field('renownLevel',10),gold=field('gold',12000),quests=r.numericIntervals?.questCount||[r.questCount||0,r.questCount||0];
  const fixed=Math.min(12,(r.items||[]).length*6)+Math.min(18,(r.paralogues||[]).length*10)+Math.min(12,(r.otherConditions||[]).length*4);
  const range=[1,0].map(i=>clamp(phase-4*support[i]-2*renown[i]-Math.min(24,gold[i]/1000*2)-Math.min(18,quests[i]*6)-fixed));
  return{range,route:name,note:['支援 '+(r.numericIntervals?.supportLevel?.join('–')??r.supportLevel??'未明'),'名声 '+(r.numericIntervals?.renownLevel?.join('–')??r.renownLevel??'未明'),r.gold!=null?r.gold+' 金钱':'金钱未明',(r.items||[]).length?'物品要求':'',r.questCount?'任务 '+r.questCount+' 项':'',(r.paralogues||[]).length?'外传要求':''].filter(Boolean).join(' · ')};
 }).sort((x,y)=>mid(y.range)-mid(x.range));
 const best=values[0];return measure(best.range,best.route+'：'+best.note+'。阶段基准 '+phase+' 分。',{route:best.route});
}
function evaluate(c,options={}){
 const opts={preset:'balanced',route:'best',build:'auto',skills:'developed',...options};
 const weights=Object.fromEntries(keys.map((k,i)=>[k,clamp(Number(opts.weights?.[k]??presets[opts.preset]?.weights[i]??presets.balanced.weights[i]))]));
 const sum=Object.values(weights).reduce((s,v)=>s+v,0);if(!sum)return{valid:false,reason:'至少设置一项非零权重',character:c};
 const p=c.proficiencyCodes||[],known=c.proficienciesKnown,hasPhysical=p.some(x=>physical.includes(x)),hasMagic=p.some(x=>magic.includes(x));
 let build=opts.build;if(build==='auto')build=hasMagic&&(!hasPhysical||(mid(growth(c,'magic')||[0,0])>mid(growth(c,'strength')||[0,0])))?'magic':'physical';
 const gk=build==='magic'?'magic':'strength',attack=growth(c,gk),spd=growth(c,'speed'),dex=growth(c,'dexterity');
 const dims={};
 dims.offense=attack&&spd&&dex?measure(weightedTerms([[attack,.6],[spd,.25],[dex,.15]],100/70),(build==='magic'?'魔力':'力量')+'×60% + 速度×25% + 技巧×15%，再 ÷70×100；个人成长潜力，未计算伤害。'):unknown('缺少成长率，不能用媒体档位代替。');
 dims.survival=growth(c,'hp')&&growth(c,'defense')&&growth(c,'resistance')?measure(weightedTerms([[growth(c,'hp'),.35],[growth(c,'defense'),.4],[growth(c,'resistance'),.25]],100/70),'生命×35% + 防守×40% + 魔防×25%，再 ÷70×100；不含当前生命与敌方攻击。'):unknown('缺少生存成长数据。');
 const r=c.rubric,dev=opts.skills==='developed';
 const real=(c.abilities||[]).filter(a=>a.description&&a.sourceId==='sf-personal'&&!String(a.trigger).includes('guest'));
 dims.personal=r&&real.length?measure(r[dev?1:0],r[6],{editorial:true}):unknown('缺少正式版个人机制记录；宣传或客串数据不用于确定评分。');
 if(r&&real.length){
  const team=pair(r[dev?3:2]);
  if(known){const heal=p.includes('whiteMagic')?22:0;dims.team=measure(team.map(x=>clamp(x+heal)),'个人团队效果 + 白魔术资质代理 '+heal+' 分。资质仅代表培养入口，不等于已学会治疗魔法。 '+r[6],{editorial:true});}
  else dims.team=measure([team[0],clamp(team[1]+22)],'团队效果已收录；白魔术资质未知，额外0–22分为未定项。 '+r[6],{editorial:true,partial:true});
 }else dims.team=unknown('团队机制或技能资质覆盖不足。');
 const restricted=['Goliath','Orchel'].includes(c.originalName);
 if(restricted)dims.mobility=measure(20,'个人能力明确禁止转骑兵/飞行；20为模型固定锚点，不是移动格数。');
 else if(known){const base=p.includes('flying')?75:p.includes('riding')?65:40;dims.mobility=measure((r?r[dev?5:4]:[0,0]).map(x=>clamp(base+x)),'步行适性40，骑术65，飞行75，取最高；明确移动机制另加。资质不是当前职业或移动值。');}
 else dims.mobility=unknown('骑术/飞行资质未收录。');
 const paths=build==='magic'?magic:physical;
 if(known){const n=p.filter(x=>paths.includes(x)).length;dims.training=measure(clamp(30+Math.min(3,n)*20),'目标为'+(build==='magic'?'魔法':'物理')+'方向：基础30，每项相关武器/魔法资质+20，上限90。骑飞资质与成长不重复计入。');}
 else dims.training=unknown('未收录武器/魔法资质。');
 dims.access=cost(c,opts.route);
 if(opts.build!=='auto'&&dims.personal.known&&((build==='magic'&&['Esmeralda','Peter','Tobias','Inyoni','Zarcone','Majide','Benditz','Io'].includes(c.originalName))||(build==='physical'&&c.originalName==='Olympia'))){dims.personal.range[0]=0;dims.personal.note+=' 所选方向与专用武器/职业条件可能不一致，机制收益下界降为0；模型不会假定跨职业仍然生效。';}
 const range=[0,1].map(i=>keys.reduce((s,k)=>s+dims[k].range[i]*weights[k]/sum,0));
 const coverage=keys.reduce((s,k)=>s+(dims[k].known&&!dims[k].partial?weights[k]:0),0)/sum;
 const eligible=coverage>=.8&&['offense','survival','personal'].every(k=>weights[k]===0||dims[k].known)&&available(c,opts.route);
 return{valid:true,character:c,dimensions:dims,weights,totalWeight:sum,range,score:mid(range),coverage,eligible,available:available(c,opts.route),build,uncertainty:range[1]-range[0],confidence:coverage<.8?'不足':(c.conflicts||[]).length?'有分歧':c.abilityQuality!=='direct'?'有缺口':'已录字段齐备'};
}
function rank(characters,options={}){
 const all=characters.map(c=>evaluate(c,options));if(all.some(r=>!r.valid))return all;
 all.sort((a,b)=>Number(b.eligible)-Number(a.eligible)||(a.eligible?b.score-a.score:a.character.name.localeCompare(b.character.name,'zh-CN')));
 const eligible=all.filter(x=>x.eligible);for(const r of eligible){r.rank=1+eligible.filter(x=>Math.round(x.score)>Math.round(r.score)).length;r.rankRange=[1+eligible.filter(x=>x.range[0]>r.range[1]).length,eligible.filter(x=>x.range[1]>=r.range[0]).length];}
 return all;
}
root.TACTICAL_MODEL={keys,names,presets,evaluate,rank,growth,version:'1.0',clamp};
})(typeof window==='undefined'?globalThis:window);
