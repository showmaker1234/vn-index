/* 侧栏导航分组：角色 / 数据库 / 攻略 / 个人。只调整顺序与分组标题，链接和路由不变。 */
(function(){
  const nav=document.querySelector('nav[data-main-nav]');if(!nav)return;
  const groups=[['角色',['characters','rankings','builds']],['数据库',['home','classes','locations','maps']],['攻略',['guides','mechanics']],['个人',['notebook','sources']]];
  const links=Object.fromEntries([...nav.querySelectorAll('a[data-route]')].map(a=>[a.dataset.route,a]));
  const placed=new Set();
  for(const [label,routes] of groups){
    const h=document.createElement('div');h.className='nav-group';h.textContent=label;h.setAttribute('aria-hidden','true');nav.appendChild(h);
    for(const r of routes)if(links[r]){nav.appendChild(links[r]);placed.add(r)}
  }
  for(const [r,a] of Object.entries(links))if(!placed.has(r))nav.appendChild(a);
  const label=document.querySelector('.sidebar .game-label');if(label)label.style.display='none';
})();
