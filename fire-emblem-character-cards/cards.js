/* 角色图鉴：卡片网格（立绘 + 成长六维图 + 梯队角标 + 关键装备 + 培养路线），点击卡片查看 5 年后立绘与详情。
   数据由 tools/build-cards.js 生成到 cards-data.js。 */
(function(){
const D=window.CARDS_DATA,cards=D.cards;
const STAT={hp:'生命',strength:'力量',magic:'魔力',speed:'速度',dexterity:'技巧',defense:'守备',resistance:'魔防',luck:'幸运',charm:'魅力'};
const ROLE={physical:'物理输出',magic:'魔法输出',healer:'治疗',tank:'坦克'};
const SITE='../fire-emblem-fortunes-weave/';
const state={q:'',tier:'all',role:'all',sort:'rank',look:'init'};
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const roleOf=c=>c.equip.weaponType==='雷之剑'?'魔法剑':(ROLE[c.roleKey]||c.role||'');
const tierCls=c=>c.lord?'tier-lord':'tier-'+c.tier;
const axesOf=c=>['hp',c.atk,'speed','dexterity','defense','resistance'];
const SCALE=Math.ceil(Math.max(...cards.flatMap(c=>axesOf(c).map(k=>c.growth[k]||0)))/10)*10;

/* 主题：跟随系统，按钮手动切换并记住 */
try{const t=localStorage.getItem('cards-theme');if(t)document.documentElement.dataset.theme=t}catch{}
$('#theme').addEventListener('click',()=>{
  const cur=document.documentElement.dataset.theme||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
  const next=cur==='light'?'dark':'light';document.documentElement.dataset.theme=next;
  try{localStorage.setItem('cards-theme',next)}catch{}
});

function radar(c,size=190){
  const ax=axesOf(c),n=ax.length,cx=size/2,cy=size/2,R=size/2-30;
  const pt=(i,v)=>{const a=-Math.PI/2+i*2*Math.PI/n,r=R*Math.min(1,Math.max(0,v)/SCALE);return[cx+r*Math.cos(a),cy+r*Math.sin(a)]};
  const poly=vals=>vals.map((v,i)=>pt(i,v).map(x=>x.toFixed(1)).join(',')).join(' ');
  let g='';
  for(const f of [.25,.5,.75,1])g+='<polygon class="grid-line" points="'+poly(ax.map(()=>SCALE*f))+'"/>';
  ax.forEach((k,i)=>{const [x,y]=pt(i,SCALE);g+='<line class="axis" x1="'+cx+'" y1="'+cy+'" x2="'+x.toFixed(1)+'" y2="'+y.toFixed(1)+'"/>'});
  g+='<polygon class="avg" points="'+poly(ax.map(k=>D.avg[k]))+'"/>';
  g+='<polygon class="val" points="'+poly(ax.map(k=>c.growth[k]||0))+'"/>';
  ax.forEach((k,i)=>{const [x,y]=pt(i,c.growth[k]||0);g+='<circle class="dot" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="2.4"/>'});
  ax.forEach((k,i)=>{const a=-Math.PI/2+i*2*Math.PI/n,lx=cx+(R+17)*Math.cos(a),ly=cy+(R+17)*Math.sin(a);
    const anchor=Math.abs(Math.cos(a))<.2?'middle':Math.cos(a)>0?'start':'end';const dy=Math.sin(a)<-.5?-2:Math.sin(a)>.5?8:3;
    g+='<text x="'+lx.toFixed(1)+'" y="'+(ly+dy-6).toFixed(1)+'" text-anchor="'+anchor+'">'+STAT[k]+'</text><text class="v" x="'+lx.toFixed(1)+'" y="'+(ly+dy+6).toFixed(1)+'" text-anchor="'+anchor+'">'+(c.growth[k]??'—')+'</text>'});
  const label=ax.map(k=>STAT[k]+' '+(c.growth[k]??'—')+'%').join('，');
  return '<svg viewBox="0 0 '+size+' '+size+'" role="img" aria-label="成长率：'+esc(label)+'">'+g+'</svg>';
}
function portrait(c,look){
  const use5=look==='5y'&&c.img5,src=use5?'img/'+c.id+'-5y.webp':c.img?'img/'+c.id+'.webp':null;
  return src?'<img src="'+src+'" alt="'+esc(c.name)+(use5?'（5 年后）':'')+'" loading="lazy">'+(look==='5y'&&!c.img5?'':'')
    :'<span class="mono" aria-hidden="true">'+esc(c.name.slice(0,1))+'</span>';
}
function tierBadge(c,cls){
  return '<span class="'+cls+'">'+(c.lord?'主角':esc(c.tier))+(c.rank&&!c.lord?'<small>第 '+c.rank+' 名</small>':'')+'</span>';
}
function card(c){
  const e=c.equip,path=c.build.path.length?c.build.path:[c.build.final||'固定职业'];
  const eq=[['武器',e.weapons.map(w=>w.name).join(' / ')],['饰品',e.accessories.map(a=>a.name).join(' / ')]];
  if(e.mount&&e.mount.pick)eq.push(['坐骑',e.mount.animal+' · '+e.mount.pick.name]);
  const ageTag=state.look==='5y'&&c.img5?'<span class="age-tag">5 年后</span>':'';
  return '<article class="card '+tierCls(c)+'" data-id="'+c.id+'" role="button" tabindex="0" aria-label="'+esc(c.name)+'：查看 5 年后立绘与详情">'
    +tierBadge(c,'tier-corner')
    +'<div class="card-top"><div class="portrait">'+portrait(c,state.look)+ageTag+'</div><div class="radar">'+radar(c)+'</div></div>'
    +'<div class="card-body"><div class="name-row"><h2>'+esc(c.name)+'</h2><small>'+esc(c.en||'')+(c.jp?' · '+esc(c.jp):'')+'</small><span class="role">'+esc(roleOf(c))+'</span></div>'
    +'<ul class="eq">'+eq.map(([k,v])=>'<li><b>'+k+'</b><span title="'+esc(v)+'">'+esc(v)+'</span></li>').join('')+'</ul>'
    +'<div class="path">'+path.map(s=>'<span class="st">'+esc(s)+'</span>').join('<i>›</i>')+'</div>'
    +'<div class="card-foot"><span>'+(c.build.count>1?'共 '+c.build.count+' 套培养方案':'1 套培养方案')+(c.composite!=null?' · 综合 '+Math.round(c.composite):'')+'</span><span>'+(c.img5?'点击看 5 年后 ›':'点击看详情 ›')+'</span></div>'
    +'</div></article>';
}
function matches(c){
  if(state.tier!=='all'&&(state.tier==='lord'?!c.lord:c.lord||c.tier!==state.tier))return false;
  if(state.role!=='all'&&(c.lord||c.roleKey!==state.role))return false;
  const q=state.q.trim().toLowerCase();
  return !q||[c.name,c.en,c.jp,c.role,c.build.final,...c.build.path,...c.equip.weapons.map(w=>w.name)].join(' ').toLowerCase().includes(q);
}
function sorted(list){
  const k=state.sort;
  return list.sort((a,b)=>k==='rank'?(a.lord-b.lord)||(a.rank??99)-(b.rank??99):k==='name'?a.name.localeCompare(b.name,'zh-CN'):(b.growth[k]??0)-(a.growth[k]??0));
}
function seg(name,opts){
  return '<div class="seg" role="group">'+opts.map(([v,l,n])=>'<button type="button" data-'+name+'="'+v+'" aria-pressed="'+(state[name]===v)+'">'+l+(n!=null?'<span class="n">'+n+'</span>':'')+'</button>').join('')+'</div>';
}
function render(){
  const list=sorted(cards.filter(matches));
  const tc=t=>cards.filter(c=>t==='lord'?c.lord:!c.lord&&c.tier===t).length;
  $('#app').innerHTML='<section class="hero"><h1>角色图鉴</h1><p>63 名角色的立绘、成长六维图、综合梯队、关键装备与主流培养路线。六维图的攻击轴按主流方案取力量或魔力，灰色虚线是全员平均。点击任意角色查看 5 年后的立绘和完整资料。</p></section>'
    +'<div class="controls"><label class="search"><span aria-hidden="true">⌕</span><input id="q" type="search" placeholder="搜索角色、职业或武器…" aria-label="搜索" value="'+esc(state.q)+'"></label>'
    +seg('tier',[['all','全部',cards.length],['T0','T0',tc('T0')],['T1','T1',tc('T1')],['T2','T2',tc('T2')],['T3','T3',tc('T3')],['T4','T4',tc('T4')],['lord','主角',tc('lord')]])
    +seg('role',[['all','全部定位'],['physical','物理'],['magic','魔法'],['healer','治疗'],['tank','坦克']])
    +'<select id="sort" class="select" aria-label="排序"><option value="rank">按综合排名</option><option value="name">按名字</option>'+Object.entries(STAT).map(([k,v])=>'<option value="'+k+'">按'+v+'成长</option>').join('')+'</select>'
    +seg('look',[['init','初始立绘'],['5y','5 年后立绘']])+'</div>'
    +'<div class="meta-line"><span class="key"><i class="sw" style="--c:var(--accent)"></i>角色成长率（%）</span><span class="key"><i class="sw dash"></i>全员平均</span><span>六维图外圈 = '+SCALE+'%</span><span>显示 '+list.length+' / '+cards.length+' 人</span></div>'
    +(list.length?'<div class="grid">'+list.map(card).join('')+'</div>':'<p class="empty">没有符合条件的角色。</p>');
  $('#sort').value=state.sort;
}
function detail(id,look){
  const c=cards.find(x=>x.id===id);if(!c)return;
  const has5=c.img5;look=look||(has5?'5y':'init');
  const stage=(which)=>{const src=which==='5y'?(has5?'img/'+c.id+'-5y.webp':null):(c.img?'img/'+c.id+'.webp':null);
    return src?'<img src="'+src+'" alt="'+esc(c.name)+(which==='5y'?'（5 年后）':'（初始）')+'">':'<span class="mono">'+esc(c.name.slice(0,1))+'</span>'};
  const p=c.profile,e=c.equip;
  const facts=[['年龄',p?esc(p.age[0])+' → '+esc(p.age[1])+' 岁':'未收录'],['身高',p?p.height[0]+(p.height[1]!==p.height[0]?' → '+p.height[1]:'')+' cm':'未收录'],['定位',esc(roleOf(c))]];
  const bars=Object.keys(STAT).map(k=>{const v=c.growth[k]??0,a=D.avg[k];return '<div class="bar"><span>'+STAT[k]+'</span><span class="track"><span class="fill" style="width:'+Math.min(100,v/80*100)+'%"></span><span class="mark" style="left:'+Math.min(100,a/80*100)+'%" title="全员平均 '+a+'"></span></span><b>'+v+'</b><small>第 '+(c.growthRank?.[k]??'—')+'</small></div>'}).join('');
  const lookNote=!has5?(c.id==='eshmel'?'救世主只有一套立绘':'GameWith 暂未收录这名角色的立绘'):c.sameLook?'这名角色 5 年后外观不变':(p&&p.renamed?p.renamed:'');
  const mount=e.mount?'<li><b><span class="tag">坐骑</span>'+esc(e.mount.animal)+(e.mount.pick?' · '+esc(e.mount.pick.name):'')+'</b><small>'+esc(e.mount.pick?e.mount.pick.note+'。':'')+esc(e.mount.note)+'</small></li>':'';
  $('#detail').innerHTML='<div class="dt '+tierCls(c)+'"><button class="dt-close" type="button" aria-label="关闭">✕</button>'
    +'<div class="dt-hero"><div class="dt-art"><div class="dt-stage" data-look="'+look+'">'+stage(look)+'<span class="label">'+(look==='5y'?'5 年后':'初始')+'</span></div>'
    +'<div class="dt-thumbs">'+['init','5y'].map(w=>{const ok=w==='init'?c.img:has5;return '<button type="button" data-look-dt="'+w+'" aria-pressed="'+(look===w)+'"'+(ok?'':' disabled')+'>'+(ok?'<img src="img/'+c.id+(w==='5y'?'-5y':'')+'.webp" alt="">':'')+'<span>'+(w==='init'?'初始':'5 年后')+'<small>'+(p?esc(p.age[w==='init'?0:1])+' 岁':'')+'</small></span></button>'}).join('')+'</div>'
    +(lookNote?'<p style="margin:0;font-size:12.5px;color:var(--muted)">'+esc(lookNote)+'</p>':'')+'</div>'
    +'<div class="dt-info"><div class="dt-title">'+tierBadge(c,'dt-tier')+'<div><h2 id="dt-name">'+esc(c.name)+'</h2><small>'+esc(c.en||'')+(c.jp?' · '+esc(c.jp):'')+(c.composite!=null?' · 综合 '+Math.round(c.composite):'')+'</small></div></div>'
    +'<div class="facts">'+facts.map(([k,v])=>'<div><span>'+k+'</span><strong>'+v+'</strong></div>').join('')+'</div>'
    +'<div class="bars" aria-label="九项成长率，竖线为全员平均">'+bars+'</div></div></div>'
    +'<div class="dt-sec">'
    +'<div class="box"><h3>关键装备</h3><ul>'+e.weapons.map((w,i)=>'<li><b><span class="tag">'+(i?'备选':'武器')+'</span>'+esc(w.name)+'</b><small>'+esc(w.note)+'</small></li>').join('')
    +e.accessories.map(a=>'<li><b><span class="tag">饰品</span>'+esc(a.name)+'</b><small>'+esc(a.note)+'</small></li>').join('')+mount+'</ul></div>'
    +'<div class="box"><h3>培养路线 · '+esc(c.build.name)+'</h3><div class="path">'+(c.build.path.length?c.build.path:[c.build.final||'固定职业']).map(s=>'<span class="st">'+esc(s)+'</span>').join('<i>›</i>')+'</div>'
    +'<p>'+esc(c.build.why||'')+'</p>'+(c.build.route?'<p>推荐路线：'+esc(c.build.route)+'</p>':'')
    +(c.build.others.length?'<p>其他方案：'+c.build.others.map(esc).join('、')+'</p>':'')
    +'<a class="more" href="'+SITE+'#builds/'+c.id+'">在攻略站查看完整培养方案 ↗</a></div>'
    +(c.sim?'<div class="box"><h3>练成后预期（模拟）</h3><p>'+esc(c.sim.route)+' · '+esc(c.sim.cls)+'</p><div class="facts" style="margin-top:8px">'+['hp',c.atk,'speed','dexterity','defense','resistance'].map(k=>'<div><span>'+STAT[k]+'</span><strong>'+Math.round(c.sim.stats[k])+'</strong></div>').join('')+'</div><p>按主流方案职业路线累加成长估算，只作相对比较。</p></div>':'')
    +'</div></div>';
  const dlg=$('#detail');if(!dlg.open)dlg.showModal();
  if(location.hash!=='#'+id)history.replaceState(null,'','#'+id);
}
function closeDetail(){const d=$('#detail');if(d.open)d.close()}
$('#detail').addEventListener('close',()=>{if(location.hash)history.replaceState(null,'',location.pathname+location.search)});
$('#detail').addEventListener('click',e=>{
  if(e.target===e.currentTarget||e.target.closest('.dt-close'))return closeDetail();
  const b=e.target.closest('[data-look-dt]');if(b&&!b.disabled){const id=location.hash.slice(1);detail(id,b.dataset.lookDt)}
});
document.addEventListener('click',e=>{
  const c=e.target.closest('.card');if(c)return detail(c.dataset.id);
  const b=e.target.closest('[data-tier],[data-role],[data-look]');if(!b)return;
  for(const k of ['tier','role','look'])if(b.dataset[k])state[k]=b.dataset[k];
  render();
});
document.addEventListener('keydown',e=>{const c=e.target.closest&&e.target.closest('.card');if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();detail(c.dataset.id)}});
document.addEventListener('change',e=>{if(e.target.id==='sort'){state.sort=e.target.value;render()}});
let timer;document.addEventListener('input',e=>{if(e.target.id!=='q')return;state.q=e.target.value;clearTimeout(timer);timer=setTimeout(()=>{const pos=e.target.selectionStart;render();const f=$('#q');f.focus();try{f.setSelectionRange(pos,pos)}catch{}},160)});

render();
$('#foot').innerHTML='<p>梯队、成长率与培养路线来自本站<a href="'+SITE+'#rankings">综合梯队 3.1</a>与<a href="'+SITE+'#builds">培养方案</a>（'+esc(D.generated)+' 核对）。立绘、年龄身高来自 <a href="'+D.sources.portraits+'" target="_blank" rel="noopener">GameWith 5 年后外观一览</a>；关键装备按定位与武器类型套用规则推荐，参考 GameWith <a href="'+D.sources.weapons+'" target="_blank" rel="noopener">武器</a>、<a href="'+D.sources.equipment+'" target="_blank" rel="noopener">装备</a>、<a href="'+D.sources.mounts+'" target="_blank" rel="noopener">骑乘动物</a>一览，部分道具名为暂译。</p><p>游戏图像版权归 Nintendo / Intelligent Systems 所有，本页为非官方攻略整理。</p>';
addEventListener('hashchange',()=>{const id=decodeURIComponent(location.hash.slice(1));if(id&&cards.some(c=>c.id===id))detail(id);else closeDetail()});
if(location.hash.length>1)detail(decodeURIComponent(location.hash.slice(1)));
})();
