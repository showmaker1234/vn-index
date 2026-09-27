/* 招募图：横轴四位主角的路线，纵轴章节，格内是该章可加入的角色（默认只显示推荐的 T0–T2）。
   数据由 tools/build-strength.js 生成到 recruit-data.js（出场时间与条件来自 GameWith，梯队来自综合梯队 3.0）。 */
const RD=window.RECRUIT_DATA;
const recruitState={show:'rec',route:'all'};
const recruitRec=e=>['T0','T1','T2'].includes(e.tier);
const recruitPartName={1:'第一部',2:'第二部',3:'第三部 · 救世主篇'};

function recruitChip(e){
  const best=e.route!=='all'&&e.bestRoute===e.route;
  const meta=e.story?'剧情':[e.renown?'名声 '+e.renown:'',e.support?'支援 '+e.support:''].filter(Boolean).join(' · ')||'交涉';
  const when=e.est?'约':(e.month?e.month+'月':'');
  const tip=[e.name+'（'+e.tier+' · 综合第 '+e.rank+' 名）',e.story?'剧情加入':'',...e.cond,e.est?'出场时间未收录，按名声要求估算章节':'',best?'本站模拟的最优路线':''].filter(Boolean).join('\n');
  return '<a class="rc-chip tier-'+e.tier.toLowerCase()+(e.story?' is-story':'')+(e.est?' is-est':'')+(best?' is-best':'')+'" href="#builds/'+e.id+'" title="'+esc(tip)+'">'
    +buildAvatar(e.id,e.name,'rc')
    +'<span class="rc-body"><strong>'+esc(e.name)+(best?'<i class="rc-star" aria-label="最优路线">★</i>':'')+'</strong>'
    +'<small><b class="tier-pill tier-'+e.tier.toLowerCase()+'">'+e.tier+'</b>'+esc(meta)+(when?'<em>'+when+'</em>':'')+'</small>'
    +(e.cond.length&&!e.story?'<span class="rc-cond">'+esc(e.cond.join('；'))+'</span>':'')
    +'</span></a>';
}
function recruitCell(list){
  return list.length?list.sort((a,b)=>a.rank-b.rank).map(recruitChip).join(''):'<span class="rc-empty">—</span>';
}
function recruitPage(){
  const lords=RD.lords,routes=lords.map(l=>l.id);
  const vis=RD.entries.filter(e=>recruitState.show==='all'||recruitRec(e));
  const cols=recruitState.route==='all'?routes:[recruitState.route];
  const keys=[...new Set(vis.map(e=>e.part+'-'+e.ch))].map(k=>k.split('-').map(Number)).sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  /* 第一部章节连续显示，方便对照进度 */
  const maxCh=Math.max(...RD.entries.filter(e=>e.part===1).map(e=>e.ch));
  for(let ch=1;ch<=maxCh;ch++)if(!keys.some(k=>k[0]===1&&k[1]===ch))keys.push([1,ch]);
  keys.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  let lastPart=0,body='';
  for(const [part,ch] of keys){
    if(part!==lastPart){body+='<tr class="rc-part"><th colspan="'+(cols.length+1)+'">'+recruitPartName[part]+'</th></tr>';lastPart=part}
    const here=vis.filter(e=>e.part===part&&e.ch===ch);
    const label=part===3?'第 '+ch+' 节':'第 '+ch+' 章';
    const shared=here.filter(e=>e.route==='all');
    let cells;
    if(shared.length&&here.every(e=>e.route==='all'))cells='<td colspan="'+cols.length+'" class="rc-shared"><div class="rc-cell">'+recruitCell(shared)+'</div><p class="rc-note">四条路线汇合后的共通剧情，所有主角线相同</p></td>';
    else cells=cols.map(r=>'<td data-route="'+r+'"><div class="rc-cell">'+recruitCell(here.filter(e=>e.route===r||e.route==='all'))+'</div></td>').join('');
    body+='<tr><th scope="row" class="rc-ch">'+label+'</th>'+cells+'</tr>';
  }
  const counts=Object.fromEntries(routes.map(r=>[r,new Set(vis.filter(e=>e.route===r&&e.part===1).map(e=>e.id)).size]));
  const head='<tr><th class="rc-ch">章节</th>'+cols.map(r=>{const l=lords.find(x=>x.id===r);
    return '<th scope="col"><span class="rc-lord">'+buildAvatar(r,l.name,'rc')+'<span><strong>'+esc(l.name)+'</strong><small>'+esc(l.route)+' · 第一部 '+counts[r]+' 人</small></span></span></th>'}).join('')+'</tr>';
  const seg=(name,val,label)=>'<button class="rc-seg'+(recruitState[name]===val?' on':'')+'" data-rc-'+name+'="'+val+'" aria-pressed="'+(recruitState[name]===val)+'">'+label+'</button>';
  return dbTitle('招募图','横向是四位主角的路线，纵向是章节，格子里是该章出场、可以加入的角色。默认只显示综合梯队 T0–T2 的推荐角色，按综合排名从高到低排列；点角色进入培养方案。')
    +'<div class="rc-controls"><div class="rc-group" role="group" aria-label="显示范围">'+seg('show','rec','推荐（T0–T2）')+seg('show','all','全部角色')+'</div>'
    +'<div class="rc-group" role="group" aria-label="主角路线">'+seg('route','all','四条路线')+lords.map(l=>seg('route',l.id,esc(l.name))).join('')+'</div></div>'
    +'<div class="rc-legend"><span><i class="rc-key story"></i>剧情加入</span><span><i class="rc-key scout"></i>交涉招募（显示名声 / 支援要求）</span><span><i class="rc-star">★</i>本站模拟的最优路线</span><span><i class="rc-key est"></i>出场时间未收录，按名声估算</span><span>“3月”等为出场月份</span></div>'
    +'<div class="rc-wrap'+(cols.length===1?' single':'')+'"><table class="rc-table"><thead>'+head+'</thead><tbody>'+body+'</tbody></table></div>'
    +'<div class="db-footnote rc-foot"><p>章节是角色<strong>出场、可以交涉的时间</strong>；交涉招募还需要达到格内的名声等级和支援等级，名声不够时要晚几章再来。第一部只能在对应主角的路线里招募，同一角色在不同路线的出场章节和条件不同。第一部入队越早，能参与的战斗越多，综合梯队对第一部晚入队有扣分；第二、三部剧情加入的角色不扣分。</p>'
    +'<p>数据：出场时间与招募条件来自 <a href="'+esc(RD.source)+'" target="_blank" rel="noopener">GameWith</a>（'+esc(RD.checked)+' 核对），梯队来自本站综合梯队 3.0。'+esc(RD.renownRule)+'。</p></div>';
}

const beforeRecruitRender=render;
render=function(){
  const route=location.hash.slice(1).split('/')[0];
  document.body.classList.toggle('recruit-page',route==='recruit');
  if(route!=='recruit')return beforeRecruitRender();
  $('#main').innerHTML='<div class="rc-page">'+recruitPage()+'</div>';
  $('#crumb').textContent='招募图';
  document.title='招募图 · 万缕千丝 · 纹章战术室';
  document.body.classList.add('database-page');
  document.querySelectorAll('nav[data-main-nav] a').forEach(a=>{const yes=a.dataset.route==='recruit';a.classList.toggle('active',yes);if(yes)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  $('#sidebar').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');
};
names.recruit='招募图';
const recruitNav=document.createElement('a');recruitNav.href='#recruit';recruitNav.dataset.route='recruit';recruitNav.innerHTML='<span>⚑</span>招募图';
document.querySelector('[data-main-nav] [data-route="builds"]').after(recruitNav);
document.addEventListener('click',e=>{const b=e.target.closest('[data-rc-show],[data-rc-route]');if(!b)return;
  if(b.dataset.rcShow)recruitState.show=b.dataset.rcShow;
  if(b.dataset.rcRoute)recruitState.route=b.dataset.rcRoute;
  render();});
render();
