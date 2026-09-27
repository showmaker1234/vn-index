/* 角色培养方案：每名角色的主流职业路线、成长率、预期目标与招募条件。
   数据由 tools/build-strength.js 生成到 builds-data.js（方案正文来自 tools/builds-zh.json）。 */
const BG=window.BUILD_GUIDES;
const buildState={query:'',role:'all',sort:'rank'};
const buildRoleNames={physical:'物理输出',magic:'魔法输出',healer:'治疗',tank:'坦克'};
const buildStatShort={hp:'生命',strength:'力量',magic:'魔力',speed:'速度',dexterity:'技巧',defense:'防守',resistance:'魔防',luck:'幸运',charm:'魅力'};
const buildIds=()=>Object.keys(BG.chars);
const buildChar=id=>modelData.characters.find(c=>c.id===id);
const buildPic=id=>D.characters.find(x=>x.id===id);
const buildFmt=v=>v==null?'—':(Math.round(v*10)/10).toFixed(1).replace(/\.0$/,'');

function buildTierPill(g){
  if(g.lord)return '<span class="tier-pill tier-lord">主角</span>';
  return g.tier?'<span class="tier-pill tier-'+g.tier.toLowerCase()+'">'+g.tier+'</span>':'';
}
function buildAvatar(id,name,size){
  const pic=buildPic(id),g=BG.chars[id];
  return pic?'<img class="bd-avatar'+(size?' '+size:'')+'" src="assets/'+pic.portrait+'" alt="" loading="lazy">'
    :'<span class="bd-avatar bd-mono tier-'+(g.lord?'lord':(g.tier||'t4').toLowerCase())+(size?' '+size:'')+'" aria-hidden="true">'+esc(name.slice(0,1))+'</span>';
}
function buildPathText(g){
  const st=g.stages.map(s=>s.zh);
  return st.length?st.join(' → '):(g.finalZh||'固定职业');
}
function buildMatches(id){
  const g=BG.chars[id],c=buildChar(id),q=buildState.query.trim().toLowerCase();
  if(buildState.role==='lord'&&!g.lord)return false;
  if(buildState.role!=='all'&&buildState.role!=='lord'&&(g.roleKey!==buildState.role||g.lord))return false;
  return !q||[c.name,c.originalName,...(c.aliases||[]),g.role,g.finalZh||'',...g.stages.map(s=>s.zh)].join(' ').toLowerCase().includes(q);
}
function buildSorted(ids){
  const k=buildState.sort;
  return ids.sort((a,b)=>{const A=BG.chars[a],B=BG.chars[b];
    if(k==='rank')return (A.lord-B.lord)||(A.rank??99)-(B.rank??99);
    if(k==='name')return buildChar(a).name.localeCompare(buildChar(b).name,'zh-CN');
    return (B.growth[k]??0)-(A.growth[k]??0);
  });
}
function buildCard(id){
  const g=BG.chars[id],c=buildChar(id);
  const bars=g.keyStats.slice(0,3).map(k=>'<span class="bd-mini"><i>'+buildStatShort[k]+'</i><b style="--w:'+Math.min(100,(g.growth[k]||0)/70*100)+'%"></b><em>'+buildFmt(g.growth[k])+'</em></span>').join('');
  return '<a class="bd-card" href="#builds/'+id+'">'+buildAvatar(id,c.name)+'<span class="bd-card-body"><span class="bd-card-top"><strong>'+esc(c.name)+'</strong>'+buildTierPill(g)+(g.lord?'':'<small>#'+g.rank+'</small>')+'</span><span class="bd-card-role">'+esc(g.role)+'</span><span class="bd-card-path">'+esc(buildPathText(g))+(g.builds.length>1?'<em class="bd-more">+'+(g.builds.length-1)+' 套</em>':'')+'</span><span class="bd-minis">'+bars+'</span></span></a>';
}
function buildListPage(){
  const ids=buildSorted(buildIds().filter(buildMatches));
  const roles=[['all','全部'],['physical','物理输出'],['magic','魔法输出'],['healer','治疗'],['tank','坦克'],['lord','主角']];
  const count=r=>buildIds().filter(id=>{const g=BG.chars[id];return r==='all'||(r==='lord'?g.lord:!g.lord&&g.roleKey===r)}).length;
  return dbTitle('角色培养方案','63 名角色的主流职业路线、基础成长率、阶段目标与招募条件。')
    +'<div class="bd-toolbar"><label class="model-search"><span>⌕</span><input id="build-query" type="search" aria-label="搜索角色" placeholder="搜索角色、定位或职业…" value="'+esc(buildState.query)+'"></label>'
    +'<div class="bd-chips" role="group" aria-label="按定位筛选">'+roles.map(([k,l])=>'<button data-build-role="'+k+'" aria-pressed="'+(buildState.role===k)+'">'+l+' <span>'+count(k)+'</span></button>').join('')+'</div>'
    +'<label class="bd-sort">排序<select id="build-sort">'+[['rank','综合排名'],['name','名称'],['strength','力量成长'],['magic','魔力成长'],['speed','速度成长'],['defense','防守成长']].map(([k,l])=>'<option value="'+k+'" '+(buildState.sort===k?'selected':'')+'>'+l+'</option>').join('')+'</select></label></div>'
    +'<p class="bd-count">'+ids.length+' 名角色 · 卡片下方为该定位最重要的三项成长率</p>'
    +(ids.length?'<div class="bd-grid">'+ids.map(buildCard).join('')+'</div>':'<div class="model-empty">没有匹配角色。<button class="model-text-button" data-build-clear>清除筛选</button></div>');
}
function buildSection(title,body,extra){return '<section class="bd-section'+(extra?' '+extra:'')+'"><h2>'+title+'</h2>'+body+'</section>'}
function buildGrowthBlock(g){
  const rows=Object.keys(buildStatShort).map(k=>{const v=g.growth[k],key=g.keyStats.includes(k);
    return '<div class="bd-growth-row'+(key?' key':'')+'"><span>'+buildStatShort[k]+'</span><div class="bd-bar"><b style="--w:'+Math.min(100,(v||0)/80*100)+'%"></b></div><strong>'+buildFmt(v)+'%</strong><small>第 '+(g.growthRank?.[k]??'—')+' / 63</small></div>'}).join('');
  const chips=(list,cls)=>list.length?list.map(x=>'<span class="bd-chip '+cls+'">'+esc(x)+'</span>').join(''):'<span class="bd-muted">无</span>';
  return '<div class="bd-growth">'+rows+'</div><p class="bd-legend">加粗为「'+buildRoleNames[g.roleKey]+'」定位的关键属性。成长率为角色本身数值，不含职业修正；排名为 63 人中的名次。</p>'
    +'<div class="bd-profs"><div><span>得意技能</span>'+chips(g.profs,'good')+'</div><div><span>苦手技能</span>'+chips(g.banes,'bad')+'</div></div>';
}
function buildTabs(g,id,idx){
  if(g.builds.length<2)return '';
  return '<div class="bd-tabs" role="tablist" aria-label="培养方案">'+g.builds.map((b,i)=>'<a role="tab" href="#builds/'+id+'/'+i+'" aria-selected="'+(i===idx)+'" class="bd-tab'+(i===idx?' on':'')+'"><span class="bd-tag t-'+esc(b.tag)+'">'+esc(b.tag)+'</span><strong>'+esc(b.name)+'</strong><small>'+esc(b.weapon||'')+(b.routeWanted?' · '+esc(b.routeWanted):'')+'</small></a>').join('')+'</div>';
}
function buildPlanBlock(g,b){
  const steps=b.stages.map((s,i)=>'<li class="bd-step'+(i===b.stages.length-1?' final':'')+'"><span class="bd-step-tier">'+esc(s.tier||'')+'</span><strong>'+esc(s.zh)+'</strong><small>'+esc(s.jp)+'</small><em>'+(s.lv?'推荐 Lv'+s.lv+' · 名声 '+s.renown:esc(s.note||'加入时职业'))+'</em>'+(s.unlockRoute?'<em>'+esc(s.unlockRoute)+'解锁</em>':'')+'</li>').join('');
  return (b.routeWanted?'<p class="bd-route-need'+(b.routeOk?'':' warn')+'">适用路线：'+esc(b.routeWanted)+(b.routeOk?'':'（该角色在这条路线不能招募，模拟改用其可招募路线）')+'</p>':'')
    +(steps?'<ol class="bd-steps">'+steps+'</ol>':'<p class="bd-muted">不能转职，按加入时的职业使用。</p>')
    +'<div class="bd-plan"><div class="bd-plan-main"><h3>为什么这样练</h3><p>'+esc(b.why)+'</p><p class="bd-weapon"><span>主武器</span>'+esc(b.weapon||'—')+'</p></div>'
    +'<div class="bd-plan-side"><h3>培养要点</h3>'+(b.keys.length?'<ul>'+b.keys.map(k=>'<li>'+esc(k)+'</li>').join('')+'</ul>':'<p class="bd-muted">见「主流」方案的要点。</p>')+'</div></div>'
    +(b.mounted&&b.routeWanted!=='凯伊篇'?'<p class="bd-note">凯伊线可以捕获和饲养骑乘动物：骑兵、飞行职业配备后成长率额外 +25（战车兵翻倍）。在凯伊线走骑乘路线会更强。</p>':'')
    +(b.tag==='主流'&&g.simBest?'<p class="bd-note subtle">本站模拟的最优组合：'+esc(g.simBest.route)+' · '+esc(g.simBest.cls)+(g.simBest.mount?'（含凯伊线骑乘加成）':'')+'。'+(g.simBest.cls===b.finalZh?'和主流方案的目标职业一致。':'和主流方案不同，以主流方案为准，模拟结果供参考。')+'</p>':'');
}
function buildGoalsBlock(g,b){
  const keys=b.keyStats||g.keyStats;
  const head='<tr><th>阶段</th>'+keys.map(k=>'<th>'+buildStatShort[k]+'</th>').join('')+'</tr>';
  const body=b.stages.map(s=>'<tr><th scope="row">'+esc(s.zh)+'<small>'+esc(s.tier||'')+(s.riding?' · 含骑乘加成':'')+'</small></th>'+keys.map(k=>'<td class="numeric">+'+buildFmt(s.gain[k])+'<small>'+buildFmt(s.eff[k])+'%</small></td>').join('')+'</tr>').join('');
  const total=b.stages.length?'<tr class="bd-total"><th scope="row">合计</th>'+keys.map(k=>'<td class="numeric">+'+buildFmt(b.stages.reduce((a,s)=>a+s.gain[k],0))+'</td>').join('')+'</tr>':'';
  const s=b.sim;
  const sim=s?'<div class="bd-kpis"><div><span>后期攻速</span><strong>'+buildFmt(s.as)+'</strong><small>追击标准敌人需 ≥ '+buildFmt(s.doubleNeed)+(s.as>=s.doubleNeed?' · 达标':' · 未达标')+'</small></div>'
    +(s.weapon!=='治疗'?'<div><span>对持枪敌人</span><strong>'+s.vsPhysical.hit+'% · '+buildFmt(s.vsPhysical.dmg)+'</strong><small>命中 · 单次伤害'+(s.vsPhysical.doubles?' · 可追击':'')+'</small></div><div><span>对魔法敌人</span><strong>'+s.vsMagic.hit+'% · '+buildFmt(s.vsMagic.dmg)+'</strong><small>命中 · 单次伤害'+(s.vsMagic.doubles?' · 可追击':'')+'</small></div>':'')
    +'<div><span>每次受伤</span><strong>'+buildFmt(s.vsPhysical.taken)+' / '+buildFmt(s.vsMagic.taken)+'</strong><small>持枪 / 魔法敌人，生命 '+buildFmt(s.stats.hp)+'</small></div>'
    +(s.healing?'<div><span>单次治疗</span><strong>'+s.healing+'</strong><small>治愈 10 + 魔力 ÷ 3 + 职业加成</small></div>':'')+'</div>'
    +'<p class="bd-legend">按「'+esc(s.route)+' · '+esc(s.cls)+' · '+esc(s.weapon)+'」和标准敌人（58 人成长中位数 + 上级职修正）用游戏战斗公式模拟；能力按上表整条职业路线逐阶段累加（统一起点，折算为 35 次升级），只比较成长差异'+(s.mountBonus?'；已计入凯伊线骑乘加成':'')+'。</p>':'';
  const skills=g.skills.length?'<ol class="bd-skills">'+g.skills.map(k=>'<li><span>'+esc(k.level||'习得')+'</span><div><strong>'+esc(k.name)+'</strong><p>'+esc(k.desc)+(k.trigger?'<small>条件：'+esc(k.trigger)+'</small>':'')+'</p></div></li>').join('')+'</ol>':'<p class="bd-muted">技能资料未收录。</p>';
  return (b.stages.length?'<h3>各阶段属性预期（每阶段 '+BG.stageLevels+' 级）</h3><div class="data-table-wrap"><table class="data-table bd-goals"><thead>'+head+'</thead><tbody>'+body+total+'</tbody></table></div><p class="bd-legend">大号数字为该阶段 '+BG.stageLevels+' 次升级的期望提升，小号为「角色成长 + 职业修正」后的成长率。阶段门槛：初级 Lv5 / 名声 1，中级 Lv20 / 名声 4，上级 Lv35 / 名声 8，最上级在第三部救世篇开放。凯伊线方案的中级、上级骑乘阶段已计入骑乘成长加成。</p>':'')
    +(sim?'<h3>练成后的战斗表现</h3>'+sim:'')
    +'<h3>技能节点</h3>'+skills;
}
function buildRecruitBlock(g,id){
  const items=g.recruit.filter(r=>r.available).map(r=>{const cond=r.story?'剧情加入':[r.support!=null?'支援 '+r.support:'',r.renown!=null?'名声 '+r.renown:'',r.gold?r.gold+'G':'',r.items?'道具 '+r.items+' 种':'',r.quests?'委托 '+r.quests+' 项':'',r.paralogues?'外传 '+r.paralogues+' 个':''].filter(Boolean).join(' · ')||'条件未收录';
    const best=g.simBest&&g.simBest.route===r.route;
    return '<li'+(best?' class="bd-best"':'')+'><div><strong>'+esc(r.route)+'</strong>'+(best?'<span class="bd-chip good">推荐</span>':'')+'<em>'+esc(r.appear||'出场时间未收录')+'</em></div><p>'+esc(cond)+'</p></li>'}).join('');
  return (items?'<ul class="bd-recruit">'+items+'</ul>':'')
    +'<p class="bd-legend">'+esc(g.routeNote)+(g.costNote?' '+esc(g.costNote):'')+'</p>'
    +(DB.recruits.some(r=>r.id===id)?'<button class="button" data-entry="recruit:'+id+'">查看完整招募档案 ↗</button>':'');
}
function buildDetailPage(id,idx){
  const g=BG.chars[id],c=buildChar(id);if(!g||!c)return buildListPage();
  idx=Math.min(Math.max(0,idx|0),g.builds.length-1);const b=g.builds[idx];
  const ids=buildSorted(buildIds()),i=ids.indexOf(id),prev=ids[i-1],next=ids[i+1];
  const srcRow=(typeof SD!=='undefined')?SD.rows.find(r=>r.id===id):null;
  const chips=srcRow?srcRow.sources.map(s=>'<span class="bd-src"><i>'+(tierSourceName[s.id]||s.id)+'</i><b>'+esc(tierSourceTier(s.id,s.tier))+'</b></span>').join(''):'';
  const kpi=(label,v,sub)=>'<div><span>'+label+'</span><strong>'+v+'</strong>'+(sub?'<small>'+sub+'</small>':'')+'</div>';
  return '<nav class="bd-crumbs"><a href="#builds">← 全部角色</a><span>'+(prev?'<a href="#builds/'+prev+'">‹ '+esc(buildChar(prev).name)+'</a>':'')+(next?'<a href="#builds/'+next+'">'+esc(buildChar(next).name)+' ›</a>':'')+'</span></nav>'
    +'<header class="bd-hero">'+buildAvatar(id,c.name,'lg')+'<div class="bd-hero-main"><div class="bd-hero-title"><h1>'+esc(c.name)+'</h1>'+buildTierPill(g)+'</div><p class="bd-hero-sub">'+esc(c.originalName)+' · '+esc(g.role)+(g.finalZh?' · 目标职业 '+esc(g.finalZh):'')+'</p><p class="bd-hero-path">'+esc(buildPathText(g))+'</p></div>'
    +'<div class="bd-hero-kpis">'+(g.lord?kpi('主角排名','第 '+g.rank+' 位','各榜主角排名平均'):kpi('综合排名','#'+g.rank,'共 58 人 · '+g.tier))+(g.lord?'':kpi('综合分',buildFmt(g.composite),'外部 '+buildFmt(g.external)+' · 本站 '+buildFmt(g.own)))+kpi('GameWith 评级',g.gwRank||'—','')+'</div></header>'
    +'<div class="bd-layout"><div class="bd-col">'
    +buildSection('培养方案'+(g.builds.length>1?' <small>共 '+g.builds.length+' 套</small>':''),buildTabs(g,id,idx)+buildPlanBlock(g,b))
    +buildSection('预期目标 <small>'+esc(b.name)+'</small>',buildGoalsBlock(g,b))
    +'</div><aside class="bd-col side">'
    +buildSection('强度排名','<div class="bd-srcs">'+chips+'</div><button class="button" data-strength-character="'+id+'">查看评分拆解 ↗</button>')
    +buildSection('基础成长率',buildGrowthBlock(g))
    +buildSection('招募',buildRecruitBlock(g,id))
    +buildSection('资料来源','<ul class="bd-sources">'+BG.sources.map(s=>'<li><a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.name)+' ↗</a></li>').join('')+'</ul>')
    +'</aside></div>';
}

const beforeBuildsRender=render;
render=function(){
  const [route,id,bi]=location.hash.slice(1).split('/');
  document.body.classList.toggle('builds-page',route==='builds');
  if(route!=='builds')return beforeBuildsRender();
  const c=id?buildChar(id):null;
  const prevId=document.querySelector('.bd-page')?.dataset.id;
  $('#main').innerHTML='<div class="bd-page" data-id="'+(c?id:'')+'">'+(c?buildDetailPage(id,+bi||0):buildListPage())+'</div>';
  $('#crumb').textContent=c?'培养方案 / '+c.name:'培养方案';
  document.title=(c?c.name+' 培养方案':'角色培养方案')+' · 万缕千丝 · 纹章战术室';
  document.body.classList.add('database-page');
  document.querySelectorAll('nav[data-main-nav] a').forEach(a=>{const yes=a.dataset.route==='builds';a.classList.toggle('active',yes);if(yes)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  $('#sidebar').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');
  if(c&&prevId!==id)window.scrollTo(0,0);
};
names.builds='培养方案';
const buildNav=document.createElement('a');buildNav.href='#builds';buildNav.dataset.route='builds';buildNav.innerHTML='<span>✦</span>培养方案';
document.querySelector('[data-main-nav] [data-route="rankings"]').after(buildNav);

document.addEventListener('click',e=>{const el=e.target.closest('button');if(!el)return;const d=el.dataset;
  if(d.buildRole){buildState.role=d.buildRole;render()}
  if('buildClear'in d){buildState.query='';buildState.role='all';render()}});
document.addEventListener('change',e=>{if(e.target.id==='build-sort'){buildState.sort=e.target.value;render()}});
let buildInputTimer;document.addEventListener('input',e=>{if(e.target.id!=='build-query')return;buildState.query=e.target.value;clearTimeout(buildInputTimer);buildInputTimer=setTimeout(()=>{const caret=e.target.selectionStart;render();const f=$('#build-query');f?.focus();try{f?.setSelectionRange(caret,caret)}catch{}},180)});
render();
