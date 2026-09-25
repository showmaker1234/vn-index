/* 综合梯队 2.0：6 个外部强度榜的共识分 + 本站量化分，各占 50%，按名次百分位分为 T0–T4。
   数据由 tools/build-strength.js 生成到 strength-data.js；七维模型与原榜视图保留，可切换核对。 */
const SD=window.STRENGTH_DATA;
const tierState={query:'',disputedOnly:false};
const tierBands=[
  {id:'T0',name:'版本答案',hint:'综合分前 8%'},
  {id:'T1',name:'主力首选',hint:'前 8%–25%'},
  {id:'T2',name:'稳定可用',hint:'前 25%–50%'},
  {id:'T3',name:'看阵容培养',hint:'后 50%–25%'},
  {id:'T4',name:'后备选择',hint:'综合分后 25%'}
];
const tierPartNames={combat:'战斗成长',skill:'个人能力',timing:'加入时机',cost:'招募成本',mobility:'机动',scarcity:'定位稀缺'};
const tierSourceShort={game8:'G8',gamewith:'GW',keengamer:'KG',pockettactics:'PT',algest:'AG',siliconera:'SI'};
const tierSourceName={game8:'Game8',gamewith:'GameWith',keengamer:'KeenGamer',pockettactics:'Pocket Tactics',algest:'アルゲスト',siliconera:'Siliconera'};
modelState.mode='tiers';

const tierRow=id=>SD.rows.find(r=>r.id===id);
const tierChar=id=>modelData.characters.find(c=>c.id===id);
const tierFmt=v=>v==null?'—':(Math.round(v*10)/10).toFixed(1).replace(/\.0$/,'');
const tierSourceTier=(s,t)=>t==null?(s==='siliconera'?'未列入':'未评'):t==='Rec'?'推荐':t.replace('Tier ','T');

function tierMatches(r){
  const q=tierState.query.trim().toLowerCase(),c=tierChar(r.id);
  if(tierState.disputedOnly&&!r.disputed)return false;
  return !q||[r.name,r.originalName,...(c?.aliases||[]),...(c?.roleTags||[])].join(' ').toLowerCase().includes(q);
}
function tierStrip(r){
  return '<span class="src-strip" aria-hidden="true">'+r.sources.map(s=>'<i class="'+(s.score==null?'none':'')+'" style="--v:'+((s.score??0)/100).toFixed(2)+'" title="'+tierSourceName[s.id]+'：'+tierSourceTier(s.id,s.tier)+'"></i>').join('')+'</span>';
}
function tierCard(r){
  const c=tierChar(r.id),tags=(c?.roleTags||[]).slice(0,2).join(' · ')||(r.roles||[]).join(' · ')||'机制待补证';
  const flags=(r.disputed?'<span class="tier-flag dispute" title="各来源分歧较大（标准差 '+tierFmt(r.spread)+'）">争议</span>':'')+(r.confidence==='低'?'<span class="tier-flag single" title="只有 '+r.sourceCount+' 个来源评级">低可信</span>':'');
  return '<button class="tier-card" data-strength-character="'+r.id+'"><span class="tier-card-top"><strong>'+esc(r.name)+'</strong>'+flags+'<span class="tier-card-rank">#'+r.rank+'</span></span><span class="tier-card-tags">'+esc(tags)+'</span><span class="tier-card-foot"><b class="tier-card-total" title="综合分">'+tierFmt(r.composite)+'</b><span class="tier-card-split" title="外部共识 / 本站量化">外 '+Math.round(r.external??0)+' · 站 '+Math.round(r.own)+'</span>'+tierStrip(r)+'</span></button>';
}
function tierLordCard(r){
  const pic=D.characters.find(x=>x.id===r.id);
  const note=r.lordAvgRank!=null?'各榜平均第 '+tierFmt(r.lordAvgRank)+' 位':'第三部主角，各榜未与领主比较';
  return '<button class="tier-card tier-lord-card" data-strength-character="'+r.id+'">'+(pic?'<img src="assets/'+pic.portrait+'" alt="" loading="lazy">':'')+'<span><span class="tier-card-top"><strong>'+esc(r.name)+'</strong>'+(r.lordAvgRank!=null?'<span class="tier-flag lord">第 '+r.rank+' 位</span>':'')+'</span><span class="tier-card-tags">'+esc(note)+'</span><span class="tier-card-foot"><span class="tier-card-split">本站量化 '+Math.round(r.own)+'</span></span></span></button>';
}
function tierSection(band,cards,extra){
  return '<section class="tier-row tier-'+band.id.toLowerCase()+(extra?' '+extra:'')+'"><header class="tier-label"><b>'+band.label+'</b><div><strong>'+band.name+'</strong><span>'+band.hint+' · '+cards.length+' 人</span></div></header><div class="tier-cards">'+cards.join('')+'</div></section>';
}
function tierSourcesPanel(){
  const used=SD.sources.map(s=>'<li><a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(tierSourceName[s.id])+' ↗</a><span>'+esc(s.date)+' · '+s.count+' 人 · 权重 '+s.weight+'</span><p>'+esc(s.method)+'</p></li>').join('');
  const skipped=SD.excluded.map(x=>'<li><a href="'+esc(x.url)+'" target="_blank" rel="noopener noreferrer">'+esc(x.name)+' ↗</a><span>'+esc(x.date)+'</span><p>'+esc(x.reason)+'</p></li>').join('');
  return '<details class="tier-sources"><summary>采用的 '+SD.sources.length+' 个来源 <span>另有 '+SD.excluded.length+' 个经核对后未采用</span></summary><ul>'+used+'</ul><h4>核对后未采用</h4><ul class="tier-sources-skipped">'+skipped+'</ul></details>';
}
function tierMethod(){
  const w=SD.weights;
  return '<details class="ranking-method" id="strength-method"><summary>评分标准 2.0：公式、权重与局限</summary><div>'
    +'<p><strong>综合分 = 外部共识分 × 50% + 本站量化分 × 50%。</strong>两部分都在 58 名非主角角色中换算成 0–100 的相对分，再按名次划分梯队：前 8% 为 T0，8%–25% 为 T1，25%–50% 为 T2，50%–75% 为 T3，其余为 T4。同分同档。</p>'
    +'<p><strong>外部共识分</strong>：每个榜单的档位先换算成该榜内的百分位中点（例如某档之上有 10 人、本档 6 人、全榜 50 人，则得 100×(1−(10+3)/50)=74），不同档位制因此可以直接比较。再按来源权重加权平均：写明方法的实测榜记 1，暂定版或只给推荐名单的记 0.5；同一编辑部的多语言版本只算一票。各来源换算分的加权标准差 ≥22 的角色标为「争议」；少于 3 个来源评级的标为「低可信」。</p>'
    +'<p><strong>本站量化分</strong>（每项先在 58 人中换算为百分位）：</p><ul>'
    +'<li>战斗成长 '+w.combat+'%：进攻 = max(力量, 魔力)×0.5 + 速度×0.3 + 技巧×0.2；生存 = 生命×0.35 + 防守×0.4 + 魔防×0.25；本项 = 进攻百分位×0.6 + 生存百分位×0.4。</li>'
    +'<li>个人能力 '+w.skill+'%：沿用七维模型对个人技能、团队技能的逐人评分（已学强化技的情境区间取中值），两者相加、封顶 100。缺少技能资料的角色按中位数计并在详情中注明。</li>'
    +'<li>加入时机 '+w.timing+'%：取各路线中最早的加入时间。第一部第 N 章记 100−6(N−1)，第二部第 N 章记 40−3(N−1)，第三部第 N 节记 25−3N。</li>'
    +'<li>招募成本 '+w.cost+'%：100 − 2×扣分；扣分沿用七维模型的成本锚点（支援级×4、名声级×2、每千金钱×2 等），剧情自动加入为 0。</li>'
    +'<li>机动 '+w.mobility+'%：飞行资质 75、骑乘资质 65、步行 40；个人能力禁止骑飞的记 20；再加个人移动类技能的分值。</li>'
    +'<li>定位稀缺 '+w.scarcity+'%：治疗、魔法、弓、飞行、骑乘、重甲、指挥七种定位，按队伍中拥有该资质的比例计算稀缺度（1 − 占比），取最稀缺的两项按 0.7 / 0.3 加权。</li></ul>'
    +'<p><strong>数据</strong>：成长率以站内资料（宁静之森）为主；与 GameWith 不一致时取两者中值，站内缺失的 7 人使用 GameWith。加入时机来自 GameWith 全角色表。核查日期 '+esc(SD.checked)+'。</p>'
    +'<p><strong>主角</strong>：四位领主和救世主不进字母梯队。领主按 KeenGamer 的领主排名、GameWith 与アルゲスト对最强主角的判断取平均名次（未区分的记为并列）。</p>'
    +'<p><strong>局限</strong>：所有外部榜单都在发售后 8 天内发布，之后可能随玩家研究而变化；成长率是期望值，不代表单次游玩的实际数值；本站量化分没有计算焰技、战技、职业修正和具体关卡，这些由外部榜单的实测部分补足。</p>'
    +'<p>计算脚本与原始数据：<code>tools/build-strength.js</code>、<code>tools/strength-sources.json</code>、<code>tools/gamewith-roster.json</code>。</p></div></details>';
}
function tierPage(){
  const rows=SD.rows.filter(tierMatches),ranked=rows.filter(r=>!r.lord),lordRows=rows.filter(r=>r.lord).sort((a,b)=>a.rank-b.rank);
  const disputed=SD.rows.filter(r=>r.disputed).length;
  const bands=tierBands.map(b=>{const list=ranked.filter(r=>r.tier===b.id);return list.length?tierSection({...b,label:b.id},list.map(tierCard)):''}).join('');
  return '<div class="tier-intro"><div><strong>综合梯队 <span>评分标准 2.0</span></strong><p>6 个近期强度榜（Game8、GameWith、KeenGamer、Pocket Tactics 等）的共识分，与本站按成长、技能、加入时机等六项量化的评分各占一半。卡片数字为综合分，下方小条依次为 6 个来源的评价高低。</p></div><a href="#strength-method" data-strength-method>查看评分标准 ↓</a></div>'
    +'<div class="tier-stats"><div><b>'+SD.sources.length+'</b><span>个来源参与计分</span></div><div><b>'+SD.rows.filter(r=>!r.lord).length+'</b><span>名角色排名</span></div><div><b>'+disputed+'</b><span>名来源分歧大</span></div><div><b>'+esc(SD.checked.slice(5).replace('-','.'))+'</b><span>数据核查日</span></div></div>'
    +tierSourcesPanel()
    +'<div class="tier-toolbar"><label class="model-search"><span>⌕</span><input id="tier-query" type="search" aria-label="搜索综合梯队" placeholder="搜索姓名、别名或能力标签…" value="'+esc(tierState.query)+'"></label><label class="tier-toggle"><input type="checkbox" id="tier-disputed" '+(tierState.disputedOnly?'checked':'')+'> 只看争议角色</label><span class="tier-count">'+rows.length+' / '+SD.rows.length+' 名角色</span></div>'
    +'<div class="tier-board">'+bands
    +(lordRows.length?tierSection({id:'lord',label:'主',name:'主角',hint:'领主按各榜排名取平均，不进字母梯队'},lordRows.map(tierLordCard),'tier-row-lords'):'')
    +(!rows.length?'<div class="model-empty">没有匹配角色。<button data-tier-clear class="model-text-button">清除搜索与筛选</button></div>':'')
    +'</div>'+tierMethod();
}
function tierMatrixPage(){
  const rows=SD.rows.filter(r=>!r.lord&&tierMatches(r));
  return '<div class="tier-intro"><div><strong>评分明细</strong><p>每名角色在 6 个来源中的原始档位、换算后的外部共识分、本站量化分与综合分。点击姓名查看逐项拆解。</p></div><a href="#strength-method" data-strength-method>查看评分标准 ↓</a></div>'
    +'<div class="tier-toolbar"><label class="model-search"><span>⌕</span><input id="tier-query" type="search" aria-label="搜索评分明细" placeholder="搜索姓名、别名或能力标签…" value="'+esc(tierState.query)+'"></label><label class="tier-toggle"><input type="checkbox" id="tier-disputed" '+(tierState.disputedOnly?'checked':'')+'> 只看争议角色</label><span class="tier-count">'+rows.length+' 名角色</span></div>'
    +'<div class="db-content"><div class="data-table-wrap"><table class="data-table tier-matrix"><thead><tr><th>名次</th><th>角色</th><th>梯队</th><th>综合</th><th>外部</th><th>本站</th>'+SD.sources.map(s=>'<th title="'+esc(tierSourceName[s.id])+'">'+tierSourceShort[s.id]+'</th>').join('')+'<th>分歧</th></tr></thead><tbody>'
    +rows.map(r=>'<tr><td class="numeric">'+r.rank+'</td><th scope="row"><button class="entry-name" data-strength-character="'+r.id+'">'+esc(r.name)+'</button></th><td><span class="tier-pill tier-'+r.tier.toLowerCase()+'">'+r.tier+'</span></td><td class="numeric"><b>'+tierFmt(r.composite)+'</b></td><td class="numeric">'+tierFmt(r.external)+'</td><td class="numeric">'+tierFmt(r.own)+'</td>'+r.sources.map(s=>'<td class="tier-src-cell'+(s.tier==null?' none':'')+'" style="--v:'+((s.score??0)/100).toFixed(2)+'">'+esc(tierSourceTier(s.id,s.tier))+'</td>').join('')+'<td class="numeric'+(r.disputed?' tier-disputed':'')+'">'+tierFmt(r.spread)+'</td></tr>').join('')
    +'</tbody></table></div><div class="db-footnote"><strong>列名</strong><p>'+SD.sources.map(s=>tierSourceShort[s.id]+' = '+esc(tierSourceName[s.id])).join('，')+'。单元格底色越深表示在该榜内越靠前；「未评」表示该榜没有收录此角色，不参与该角色的共识分。</p></div></div>'+tierMethod();
}
function tierBar(label,value,note){
  return '<section><div><strong>'+label+'</strong><span>'+tierFmt(value)+' / 100</span></div><div class="dimension-track"><b style="width:'+Math.max(1,value)+'%"></b></div>'+(note?'<p>'+note+'</p>':'')+'</section>';
}
function showStrengthCharacter(id){
  const r=tierRow(id);if(!r)return;
  const pic=D.characters.find(x=>x.id===id),g=r.growth||{},w=SD.weights;
  const sourceRows=r.sources.map(s=>{const meta=SD.sources.find(x=>x.id===s.id);return '<tr><th scope="row"><a href="'+esc(meta.url)+'" target="_blank" rel="noopener noreferrer">'+esc(tierSourceName[s.id])+' ↗</a></th><td>'+esc(tierSourceTier(s.id,s.tier))+'</td><td class="numeric">'+tierFmt(s.score)+'</td><td class="numeric">'+(s.score==null?'—':meta.weight)+'</td></tr>'}).join('');
  const growthLine=Object.entries(growthNames).map(([k,label])=>label+' '+tierFmt(g[k])).join(' · ');
  const head=r.lord
    ?'<p>主角不进字母梯队。'+(r.lordAvgRank!=null?'各榜领主排名平均第 '+tierFmt(r.lordAvgRank)+' 位，本站排第 '+r.rank+' 位。':'第三部主角，各榜未与领主比较。')+'</p>'
    :'<p>综合第 <b>'+r.rank+'</b> 名（共 58 人）· '+r.tier+' · 来源可信度 '+r.confidence+(r.disputed?' · <span class="tier-flag dispute">来源分歧大</span>':'')+'</p>';
  detailShell(r.name,r.lord?'主角 · 评分标准 2.0':'综合梯队 '+r.tier+' · 评分标准 2.0',
    '<div class="model-detail-intro">'+(pic?'<img src="assets/'+pic.portrait+'" alt="'+esc(r.name)+'官方插图">':'')+'<div><strong class="model-detail-score">'+tierFmt(r.lord?r.own:r.composite)+'</strong><p>'+(r.lord?'本站量化分':'综合分 = 外部共识 '+tierFmt(r.external)+' × 50% + 本站量化 '+tierFmt(r.own)+' × 50%')+'</p>'+head+'</div></div>'
    +(r.lord?'':'<h3>外部共识 '+tierFmt(r.external)+'</h3><div class="data-table-wrap"><table class="data-table tier-source-table"><thead><tr><th>来源</th><th>档位</th><th>换算分</th><th>权重</th></tr></thead><tbody>'+sourceRows+'</tbody></table></div><p class="field-help">换算分是该档在对应榜单内的百分位中点；加权标准差 '+tierFmt(r.spread)+'，≥22 视为分歧大。</p>')
    +'<h3>本站量化 '+tierFmt(r.own)+'</h3><div class="model-dimension-list">'
    +tierBar(tierPartNames.combat+' · '+w.combat+'%',r.parts.combat,'进攻原始值 '+tierFmt(r.offenseRaw)+'，生存原始值 '+tierFmt(r.survivalRaw)+'。成长率：'+growthLine+(r.growthSource==='gamewith'?'（站内缺失，取自 GameWith）':r.growthConflicts?.length?'（'+r.growthConflicts.map(k=>growthNames[k]).join('、')+' 两源不同，取中值）':''))
    +tierBar(tierPartNames.skill+' · '+w.skill+'%',r.parts.skill,r.skillMissing?'缺少个人技能评分资料，按中位数计。':'个人 + 团队技能评分 '+tierFmt(r.skillRaw)+'。'+esc(r.skillNote||''))
    +tierBar(tierPartNames.timing+' · '+w.timing+'%',r.parts.timing,r.timingLabel?'最早加入：'+esc(r.timingLabel)+'（原始分 '+r.timingRaw+'）':'主角，随剧情加入。')
    +tierBar(tierPartNames.cost+' · '+w.cost+'%',r.parts.cost,'最易路线的招募扣分 '+tierFmt(r.costPenalty)+'。')
    +tierBar(tierPartNames.mobility+' · '+w.mobility+'%',r.parts.mobility,'机动原始分 '+tierFmt(r.mobilityRaw)+'。')
    +tierBar(tierPartNames.scarcity+' · '+w.scarcity+'%',r.parts.scarcity,(r.roles||[]).length?'稀缺定位：'+esc(r.roles.join('、')):'没有治疗、魔法、弓、飞行、骑乘、重甲或指挥资质。')
    +'</div><button class="button" data-model-character="'+id+'">查看七维模型拆解 ↗</button>');
}

const tierPrevRankPage=characterRankPage;
modelModes=function(){return '<div class="model-modes" role="group" aria-label="角色评价方式">'+[['tiers','综合梯队'],['matrix','评分明细'],['model','七维模型'],['media','口袋战术']].map(([k,l])=>'<button data-model-mode="'+k+'" aria-pressed="'+(modelState.mode===k)+'">'+l+'</button>').join('')+'</div>'};
characterRankPage=function(){return modelState.mode==='tiers'?modelModes()+tierPage():modelState.mode==='matrix'?modelModes()+tierMatrixPage():tierPrevRankPage()};

document.addEventListener('click',e=>{
  const el=e.target.closest('button,a');if(!el)return;const d=el.dataset;
  if(d.strengthCharacter)showStrengthCharacter(d.strengthCharacter);
  if('tierClear'in d){tierState.query='';tierState.disputedOnly=false;render()}
  if('strengthMethod'in d){e.preventDefault();const x=$('#strength-method');if(x){x.open=true;x.scrollIntoView({behavior:'smooth'})}}
});
document.addEventListener('change',e=>{if(e.target.id==='tier-disputed'){tierState.disputedOnly=e.target.checked;render()}});
let tierInputTimer;document.addEventListener('input',e=>{if(e.target.id!=='tier-query')return;tierState.query=e.target.value;clearTimeout(tierInputTimer);tierInputTimer=setTimeout(()=>{const caret=e.target.selectionStart;render();const field=$('#tier-query');field?.focus();try{field?.setSelectionRange(caret,caret)}catch{}},180)});
render();
