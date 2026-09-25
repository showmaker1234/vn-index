/* 综合梯队：把两家媒体分档汇总成 T1–T5 梯队，作为强度排行的默认视图。
   原始分档、多站对照与本站模型视图保持不变，可随时切换核对。 */
const tierState={query:'',agreeOnly:false};
const tierLetterValue={S:4,A:3,B:2,C:1};
const tierBands=[
  {id:'t1',min:3.5,label:'T1',name:'核心推荐',hint:'两家评价集中在 S 与 A'},
  {id:'t2',min:3,label:'T2',name:'主力可靠',hint:'平均约 A 档'},
  {id:'t3',min:2.5,label:'T3',name:'阵容补强',hint:'介于 A 与 B 之间'},
  {id:'t4',min:2,label:'T4',name:'按需使用',hint:'平均约 B 档'},
  {id:'t5',min:0,label:'T5',name:'后备选择',hint:'B 与 C 之间及以下'}
];
modelState.mode='tiers';

function tierConsensus(media){
  const letters=[media.ptTier,media.kgTier].filter(t=>tierLetterValue[t]);
  if(!letters.length)return null;
  return letters.reduce((s,t)=>s+tierLetterValue[t],0)/letters.length;
}
function tierEntries(){
  const scores=new Map(modelResults().map(r=>[r.character.id,r]));
  return modelData.characters.map(c=>{
    const r=scores.get(c.id),m=c.media;
    return {c,m,value:tierConsensus(m),score:r&&r.eligible?modelNumber(r.score):null,
      agree:!!(m.ptTier&&m.kgTier&&m.ptTier===m.kgTier),both:!!(m.ptTier&&m.kgTier),single:!!m.ptTier!==!!m.kgTier};
  });
}
function tierMatches(e){
  const q=tierState.query.trim().toLowerCase();
  if(tierState.agreeOnly&&!e.agree)return false;
  return !q||[e.c.name,e.c.originalName,...(e.c.aliases||[]),...(e.c.roleTags||[])].join(' ').toLowerCase().includes(q);
}
function tierSort(a,b){return b.value-a.value||(b.score??-1)-(a.score??-1)||a.c.name.localeCompare(b.c.name,'zh-CN')}
function tierChip(source,letter){
  const full=source==='口'?'口袋战术':'核心玩家';
  return letter
    ?'<span class="tier-src tier-src-'+letter.toLowerCase()+'" title="'+full+' '+letter+' 档">'+source+' '+letter+'</span>'
    :'<span class="tier-src tier-src-none" title="'+full+'未评价">'+source+' —</span>';
}
function tierCard(e){
  const tags=(e.c.roleTags||[]).slice(0,2).join(' · ')||'机制待补证';
  const flag=e.agree?'<span class="tier-flag agree" title="两家同档">一致</span>':e.single?'<span class="tier-flag single" title="只有一家给出评级">单家</span>':'';
  return '<button class="tier-card" data-model-character="'+e.c.id+'"><span class="tier-card-top"><strong>'+esc(e.c.name)+'</strong>'+flag+'</span><span class="tier-card-tags">'+esc(tags)+'</span><span class="tier-card-foot">'+tierChip('口',e.m.ptTier)+tierChip('核',e.m.kgTier)+'<span class="tier-card-score" title="本站模型指数（默认场景）">'+(e.score??'—')+'</span></span></button>';
}
function tierRow(band,rows,extraClass){
  return '<section class="tier-row tier-'+band.id+(extraClass?' '+extraClass:'')+'"><header class="tier-label"><b>'+band.label+'</b><div><strong>'+band.name+'</strong><span>'+band.hint+' · '+rows.length+' 人</span></div></header><div class="tier-cards">'+rows.join('')+'</div></section>';
}
function tierLordCard(e){
  const pic=D.characters.find(x=>x.id===e.c.id);
  return '<button class="tier-card tier-lord-card" data-model-character="'+e.c.id+'">'+(pic?'<img src="assets/'+pic.portrait+'" alt="" loading="lazy">':'')+'<span><span class="tier-card-top"><strong>'+esc(e.c.name)+'</strong><span class="tier-flag lord">第 '+e.m.kgLordRank+' 位</span></span><span class="tier-card-tags">'+esc((e.c.roleTags||[]).slice(0,2).join(' · '))+'</span><span class="tier-card-foot"><span class="tier-card-score" title="本站模型指数（默认场景）">'+(e.score??'—')+'</span></span></span></button>';
}
function tierDisagreements(){
  const list=(modelData.meta.mediaSummary?.majorDisagreements||[]).map(x=>{
    const c=modelData.characters.find(y=>y.originalName===x.originalName);
    if(!c)return '';
    const reason=String(x.reason||'').replaceAll('KG','核心玩家').replaceAll('PT','口袋战术');
    return '<li><button class="entry-name" data-model-character="'+c.id+'">'+esc(c.name)+'</button><span class="tier-split">'+tierChip('口',x.pt)+tierChip('核',x.kg)+'</span><p>'+esc(reason)+'</p></li>';
  }).join('');
  return list?'<details class="tier-disputes"><summary>争议最大的角色 <span>两家相差两档</span></summary><ul>'+list+'</ul></details>':'';
}
function tierPage(){
  const all=tierEntries(),shown=all.filter(tierMatches);
  const rated=shown.filter(e=>e.c.kind!=='lord'&&e.value!==null).sort(tierSort);
  const lords=shown.filter(e=>e.c.kind==='lord').sort((a,b)=>a.m.kgLordRank-b.m.kgLordRank);
  const pending=shown.filter(e=>e.c.kind!=='lord'&&e.value===null);
  const s=modelData.meta.mediaSummary||{};
  const bands=tierBands.map((band,i)=>{
    const upper=i?tierBands[i-1].min:Infinity;
    const rows=rated.filter(e=>e.value>=band.min&&e.value<upper);
    return rows.length?tierRow(band,rows.map(tierCard)):'';
  }).join('');
  return '<div class="tier-intro"><div><strong>综合梯队 <span>本站汇总</span></strong><p>把口袋战术与核心玩家的分档按 S=4、A=3、B=2、C=1 取平均（只有一家评级时直接采用），划为 T1–T5。同梯队内按本站模型指数排列，数值仅作参考。</p></div><div class="tier-legend" aria-label="图例">'+tierChip('口','S')+'<span>口袋战术</span>'+tierChip('核','A')+'<span>核心玩家</span><span class="tier-card-score">53</span><span>模型指数</span></div></div>'
    +'<div class="tier-stats"><div><b>'+rated.length+'</b><span>已分梯队</span></div><div><b>'+(s.sharedCount??'—')+'</b><span>两家都评价</span></div><div><b>'+(s.sameTierCount??'—')+'</b><span>两家同档</span></div><div><b>'+(s.differentTierCount??'—')+'</b><span>两家有分歧</span></div></div>'
    +tierDisagreements()
    +'<div class="tier-toolbar"><label class="model-search"><span>⌕</span><input id="tier-query" type="search" aria-label="搜索综合梯队" placeholder="搜索姓名、别名或能力标签…" value="'+esc(tierState.query)+'"></label><label class="tier-toggle"><input type="checkbox" id="tier-agree" '+(tierState.agreeOnly?'checked':'')+'> 只看两家同档</label><span class="tier-count">'+shown.length+' / '+all.length+' 名角色</span></div>'
    +'<div class="tier-board">'+bands
    +(lords.length?tierRow({id:'lord',label:'主',name:'四位主角',hint:'核心玩家独立排序，不换算字母档'},lords.map(tierLordCard),'tier-row-lords'):'')
    +(pending.length?tierRow({id:'pending',label:'?',name:'暂无评级',hint:'两家均未评级，不代表偏弱'},pending.map(tierCard)):'')
    +(!shown.length?'<div class="model-empty">没有匹配角色。<button data-tier-clear class="model-text-button">清除搜索与筛选</button></div>':'')
    +'</div><details class="ranking-method"><summary>梯队怎么算、有哪些局限</summary><div><p><strong>换算规则</strong>：S=4、A=3、B=2、C=1。两家都有评级时取平均，只有一家时直接采用该档；平均 ≥3.5 为 T1，3 为 T2，2.5 为 T3，2 为 T4，其余为 T5。卡片上的「一致」表示两家同档，「单家」表示只有一家评级。</p><p><strong>口径差异</strong>：口袋战术覆盖 57 人、跨全流程，没有公布难度和权重；核心玩家覆盖 46 名第一部招募角色，并把入队时机和成本算进去。平均值只能快速参考，不等于同一条件下的实测。</p><p><strong>模型指数</strong>：按「本站模型」默认场景计算，只用于同梯队内排序，不改变梯队划分。调整模型场景后排序会随之变化。</p><p><strong>主角与未评级</strong>：四位主角采用核心玩家的独立排名，不换算为字母档。两家都没有评级的角色单列，不代表偏弱。</p><p>原始档位见「原始分档」，逐人对照见「多站对照」。来源：'+modelSourceLink('pt-tier')+' · '+modelSourceLink('kg-tier')+'</p></div></details>';
}

const tierPrevRankPage=characterRankPage;
modelModes=function(){return '<div class="model-modes" role="group" aria-label="角色评价方式">'+[['tiers','综合梯队'],['model','本站模型'],['compare','多站对照'],['media','原始分档']].map(([k,l])=>'<button data-model-mode="'+k+'" aria-pressed="'+(modelState.mode===k)+'">'+l+'</button>').join('')+'</div>'};
characterRankPage=function(){return modelState.mode==='tiers'?modelModes()+tierPage():tierPrevRankPage()};

document.addEventListener('click',e=>{const el=e.target.closest('button');if(el&&'tierClear'in el.dataset){tierState.query='';tierState.agreeOnly=false;render()}});
document.addEventListener('change',e=>{if(e.target.id==='tier-agree'){tierState.agreeOnly=e.target.checked;render()}});
let tierInputTimer;document.addEventListener('input',e=>{if(e.target.id!=='tier-query')return;tierState.query=e.target.value;clearTimeout(tierInputTimer);tierInputTimer=setTimeout(()=>{const caret=e.target.selectionStart;render();const field=$('#tier-query');field?.focus();try{field?.setSelectionRange(caret,caret)}catch{}},180)});
render();
