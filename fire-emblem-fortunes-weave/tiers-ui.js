/* 综合梯队 3.2：6 个外部强度榜的共识分（60%）+ 本站按路线与职业模拟的评分（40%），按名次百分位分为 T0–T4。
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
  const b=r.best,tags=b?b.routeName+' · '+b.clsZh+(r.role==='治疗'?' · 治疗':r.role==='舞蹈'?' · 舞蹈':'')+(b.mountBonus?' · 骑乘':''):'—';
  const flags=(r.disputed?'<span class="tier-flag dispute" title="各来源分歧较大（标准差 '+tierFmt(r.spread)+'）">争议</span>':'')+(r.confidence==='低'?'<span class="tier-flag single" title="只有 '+r.sourceCount+' 个来源评级">低可信</span>':'');
  return '<button class="tier-card" data-strength-character="'+r.id+'"><span class="tier-card-top"><strong>'+esc(r.name)+'</strong>'+flags+'<span class="tier-card-rank">#'+r.rank+'</span></span><span class="tier-card-tags">'+esc(tags)+'</span><span class="tier-card-foot"><b class="tier-card-total" title="综合分">'+tierFmt(r.composite)+'</b><span class="tier-card-split" title="外部共识 / 本站模拟">外 '+Math.round(r.external??0)+' · 站 '+Math.round(r.own)+'</span>'+tierStrip(r)+'</span></button>';
}
function tierLordCard(r){
  const pic=D.characters.find(x=>x.id===r.id);
  const note=r.lordAvgRank!=null?'各榜平均第 '+tierFmt(r.lordAvgRank)+' 位':'第三部主角，各榜未与领主比较';
  return '<button class="tier-card tier-lord-card" data-strength-character="'+r.id+'">'+(pic?'<img src="assets/'+pic.portrait+'" alt="" loading="lazy">':'')+'<span><span class="tier-card-top"><strong>'+esc(r.name)+'</strong>'+(r.lordAvgRank!=null?'<span class="tier-flag lord">第 '+r.rank+' 位</span>':'')+'</span><span class="tier-card-tags">'+esc(note)+'</span><span class="tier-card-foot"><span class="tier-card-split">本站模拟 '+Math.round(r.own)+'（参考）</span></span></span></button>';
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
  const w=SD.weights,f=SD.fit,a=SD.assumptions,fn=SD.featureNames;
  const wl=Object.keys(w).map(k=>esc(fn[k])+' '+tierFmt(w[k])+'%（先验 '+SD.prior[k]+' / 拟合 '+tierFmt(SD.fitted[k])+'）').join('；');
  return '<details class="ranking-method" id="strength-method"><summary>评分标准 3.2：模拟方法、公式、权重与局限</summary><div>'
    +'<p><strong>综合分 = 外部共识分 × '+Math.round(SD.blend.external*100)+'% + 本站模拟分 × '+Math.round(SD.blend.own*100)+'%。</strong>两者都是 58 名非主角角色中的相对分（0–100），按名次划档：前 8% 为 T0，8%–25% 为 T1，25%–50% 为 T2，50%–75% 为 T3，其余为 T4，同分同档。</p>'
    +'<p><strong>外部共识分</strong>：6 个榜单的档位换算为榜内百分位中点后加权平均（写明方法的实测榜记 1，暂定版或推荐名单记 0.5，同一编辑部多语言版本只算一票）。加权标准差 ≥22 标「争议」，少于 3 个来源标「低可信」。</p>'
    +'<p><strong>本站模拟分：按角色最优的「路线 × 职业」计算。</strong>每名角色遍历所有可招募的路线（凯伊、迪托利希、赛奥朵拉、蕾达，或第二、三部剧情加入），以及资质能走通的上级、最上级职业和战车兵，共 '+SD.rows.reduce((n,r)=>n+(r.routeCount||0)*(r.classCount||0),0)+' 种组合，取本站评分最高的一种。</p><ul>'
    +'<li><b>能力推算</b>：统一评估到 <b>Lv'+a.targetLv+'</b>。能力 = 入队时的真实能力（GameWith 成长率模拟器：入队等级与初始职业各不相同，第一部多为 Lv1–5，第三部加入的在 Lv40–63）+ Σ（角色成长 + 当前职业修正）× 该等级段的升级数。等级段：Lv1–5 初始职业，5–20 初级，20–35 中级，35–45 上级，45 起最上级；转职路线用 GameWith 推荐路线，没有推荐路线的，最终职业之前的等级段按其修正的一半估算。入队时能力低于同等级平均（亏模）的角色会被如实拉低。</li>'
    +'<li><b>专精</b>：路线上练满 5 级以上的职业视为已专精。能力类专精直接加（如攻击基本力量 +1、魔道基本魔力魔防 +1、信仰心幸运 +3、天马护翼魔防 +3），战斗类按效果计（如技之锋芒必杀伤害 +6、大反击攻击 +3、射击达人弓命中 +15、圣盾 / 大盾受伤 × 0.9、魔防咒缚让相邻敌人魔防 −3）；装备栏数量未公开，暂不设上限。</li>'
    +'<li><b>体格</b>：Fire Emblem Wiki 有数据的 '+a.buildKnown+' 人用真实值；其余按体型估：法系（擅长黑 / 白魔术且魔力成长 ≥ 力量）1.5，大个子（5 年后身高 ≥185cm 或擅长重装术）5，其余 3；职业不改体格。攻速和回避都按「速度 − max(0, 武器重量 − 体格)」计算。</li>'
    +'<li><b>凯伊线骑乘加成</b>：只有凯伊线能捕获和饲养骑乘动物。骑兵、飞行职业配备动物后成长率 +'+a.mount.bonus+'（战车兵翻倍），按定位加在 力/魔 · 速度 · 技巧 上（4:4:2），只作用于第一部（Lv'+a.part1EndLv+' 之前）的升级；另有骑乘中的能力加值 +'+a.mount.flat+'，以及移动 +2。</li>'
    +'<li><b>战斗公式</b>（アルゲスト 与 Game8 整理的游戏公式）：攻击 = 力量或魔力 + 武器威力；命中 = 技巧 + 武器命中；必杀 = (技巧 + 幸运) ÷ 2；攻速 = 速度 − max(0, 武器重量 − 体格)；回避 = 攻速；伤害 = 攻击 − 防守或魔防；攻速高 4 以上追击，剑的追击伤害 ×1.2；必杀 ×3。职业技能里的命中、必杀、后攻防守和治疗加成会计入；物理攻击按使用战技计命中 +'+a.artsHit+'（达米纳系列武器效果）；个人技能里能量化的命中、攻击、攻速加成也计入（如欧露赫露「动体预测」魔法命中 +20、卡塔妮雅「疾风」命中 +20），条件触发的按期望计。一回合内能打倒敌人时按命中率额外加分。</li>'
    +'<li><b>标准武器</b>：各类型取站内武器库 C 级的达米纳系列；治疗按本人法表：每次回复量 = 魔法威力（回复 10、痊愈 30、远程治愈 8、范围回复 20）+ 魔力 ÷ 3 + 职业与个人技能的回复加成；相邻回复乘（1 + '+a.healRangeValue+' × 治疗射程加成），<b>远程治愈（射程 1–10）× '+a.physicReach+'</b>，范围回复 × 1.5；取最高的一种，次一种按 25% 加上。会远程治愈的：索绯雅、奥琳琵娅、杨界、媞雅拉、欧露赫露（Game8）。<b>魔法按法表</b>：只算每人自己会学的魔法（Game8 各魔法页的习得角色，比 GameWith 完整），典籍魔法不计；威力高、次数少的魔法按使用次数打折（10 次 × 1.0、5 次 × 0.85、3 次 × 0.79）；裁决之剑连击两次，玻璃之轮、裁决之剑、大地之颚按敌人守备结算，月光Λ 无视魔防。<b>有效 / 特效</b>：有效威力 ×2、特效 ×3（Game8）；枪对骑兵有效，弓对飞行特效，风魔法、玻璃之轮对飞行有效，炽天使对冥魔有效；个人战技的特效（燕返、铠通、兜割、虎切）按 70% 的战斗使用计。</li>'
    +'<li><b>输出手段</b>：标准敌人分 6 类，初始能力取第一部入队角色的中位数，再按成长中位数 + 职业修正升到 Lv'+a.targetLv+'（'+a.enemies.map(e=>esc(e.name)+'：'+esc(e.cls)+'，防守 '+tierFmt(e.def)+' / 魔防 '+tierFmt(e.res)).join('；')+'）。角色在当前职业里能用的每种手段（各类擅长武器、法表中的魔法）都模拟一遍，<b>对每类敌人挑最有效的手段</b>再取平均。物理、魔法都能打的角色可以用魔法打重甲、用武器打法师，输出直接变高；有够用的 1–2 格手段（达到主手段 75%）再加 '+Math.round(a.reachBonus*100)+'%，因为敌人回合也能反击远程敌人。雷之剑没有商店出售，只在培养方案里模拟。</li>'
    +'<li><b>焰技</b>：4 位副主角（贝特兰、爱娜特莉亚、欧露赫露、谭利穆恩）与主角都有专属焰技。威力与发动频率未公开，按效果类型给输出倍率：再行动 ×1.25（觉醒后可再攻击）；范围攻击 ×1.2；削弱或支援 ×1.15（敌人命中、攻速减半或强化队友）；远程焰技另记为有 1–2 格手段。都是估算，详情里逐人写明。</li>'
    +'<li><b>五项指标</b>：主要贡献 = 输出、治疗、坦克三种定位取最高；能打又能奶的角色，次一项再按 '+Math.round((a.hybridShare||0)*100)+'% 加上（每回合只能做一件事，但多一种选择）；舞娘的「跳舞」按满额计。输出 = 上面按敌人挑手段后的期望伤害占敌方生命的比例；治疗 = 治疗值 × '+f.healFactor+'；坦克 = 承伤 ×（0.6 + 0.4 × 反击输出）× '+f.tankFactor+'。承伤 = 能承受的敌方攻击次数（对数）= 生命 ÷（敌人命中率 × 每次伤害 × 必杀期望），敌人命中率 = 敌人命中 − 自己的回避，所以回避高的角色受伤少；个人技能的减伤、回避、守备加成也计入；个人与团队技能 = 站内七维模型的技能评分；机动 = 职业移动加成 + 飞行 + 凯伊线骑乘，按边际递减换算（移动 +0 记 55 分、+1 约 74、+2 约 85、+3 约 91）；入队早晚不计分（晚入队的角色加入时等级和能力更高，已体现在数值里），只作信息展示；招募成本 = 支援、名声、金钱、道具、外传、委托要求折算的扣分。</li></ul>'
    +'<p><strong>权重标定</strong>：五项权重用外部共识做非负最小二乘拟合，再与先验各占一半，避免被少数样本带偏。当前权重：'+wl+'。治疗系数在 0.6–1.0、坦克系数在 0.5–0.9 间扫描，取与外部共识最吻合的组合（治疗 '+f.healFactor+'、坦克 '+f.tankFactor+'）。外部榜单几乎不体现机动，这一项的权重主要来自先验。职业只走角色的得意技能：试过放开中性技能，与外部共识的吻合度从 0.68 降到 0.65，暂不采用。</p>'
    +'<p><strong>吻合度</strong>：本站模拟分与外部共识的相关系数为 <b>'+f.correlation+'</b>（'+f.n+' 人）；作为对照，单个外部榜单与其余榜单的相关系数在 0.31–0.78 之间。综合分与外部共识的相关系数为 <b>'+(SD.agreement?.correlation??'—')+'</b>，平均名次相差 '+(SD.agreement?.meanRankDiff??'—')+' 名。</p>'
    +'<p><strong>局限</strong>：只有 '+a.buildKnown+' 人有体格数据；职业基础值、敌人实际数值、专精装备栏、战技和焰技威力没有公开数据：战技只计命中加成与特效，焰技按效果类型给倍率估算；成长率是期望值；各榜单都在发售后 8 天内发布。主角另按各榜的主角排名排序，本站模拟分只供参考。</p>'
    +'<p>数据与脚本：<code>tools/build-strength.js</code>、<code>tools/strength-sources.json</code>、<code>tools/gamewith-roster.json</code>、<code>tools/gamewith-routes.json</code>、<code>tools/gamewith-classes.json</code>、<code>tools/gamewith-sim.json</code>、<code>tools/gamewith-magic.json</code>（法表来自 Game8）。</p></div></details>';
}
function tierPage(){
  const rows=SD.rows.filter(tierMatches),ranked=rows.filter(r=>!r.lord),lordRows=rows.filter(r=>r.lord).sort((a,b)=>a.rank-b.rank);
  const disputed=SD.rows.filter(r=>r.disputed).length;
  const bands=tierBands.map(b=>{const list=ranked.filter(r=>r.tier===b.id);return list.length?tierSection({...b,label:b.id},list.map(tierCard)):''}).join('');
  return '<div class="tier-intro"><div><strong>综合梯队 <span>评分标准 3.2</span></strong><p>6 个近期强度榜的共识分占 60%；本站按每名角色最优的路线与职业，用游戏战斗公式模拟后期表现，占 40%。卡片第二行是模拟选出的最优路线与职业，数字为综合分，小条依次为 6 个来源的评价高低。</p></div><a href="#strength-method" data-strength-method>查看评分标准 ↓</a></div>'
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
  return '<div class="tier-intro"><div><strong>评分明细</strong><p>每名角色在 6 个来源中的原始档位、换算后的外部共识分、本站模拟分、模拟选出的最优路线与职业，以及综合分。点击姓名查看逐项拆解。</p></div><a href="#strength-method" data-strength-method>查看评分标准 ↓</a></div>'
    +'<div class="tier-toolbar"><label class="model-search"><span>⌕</span><input id="tier-query" type="search" aria-label="搜索评分明细" placeholder="搜索姓名、别名或能力标签…" value="'+esc(tierState.query)+'"></label><label class="tier-toggle"><input type="checkbox" id="tier-disputed" '+(tierState.disputedOnly?'checked':'')+'> 只看争议角色</label><span class="tier-count">'+rows.length+' 名角色</span></div>'
    +'<div class="db-content"><div class="data-table-wrap"><table class="data-table tier-matrix"><thead><tr><th>名次</th><th>角色</th><th>梯队</th><th>综合</th><th>外部</th><th>本站</th><th>最优路线 · 职业</th>'+SD.sources.map(s=>'<th title="'+esc(tierSourceName[s.id])+'">'+tierSourceShort[s.id]+'</th>').join('')+'<th>分歧</th></tr></thead><tbody>'
    +rows.map(r=>'<tr><td class="numeric">'+r.rank+'</td><th scope="row"><button class="entry-name" data-strength-character="'+r.id+'">'+esc(r.name)+'</button></th><td><span class="tier-pill tier-'+r.tier.toLowerCase()+'">'+r.tier+'</span></td><td class="numeric"><b>'+tierFmt(r.composite)+'</b></td><td class="numeric">'+tierFmt(r.external)+'</td><td class="numeric">'+tierFmt(r.own)+'</td><td class="tier-best-cell">'+(r.best?esc(r.best.routeName+' · '+r.best.clsZh)+(r.best.mountBonus?' <small>骑乘</small>':''):'—')+'</td>'+r.sources.map(s=>'<td class="tier-src-cell'+(s.tier==null?' none':'')+'" style="--v:'+((s.score??0)/100).toFixed(2)+'">'+esc(tierSourceTier(s.id,s.tier))+'</td>').join('')+'<td class="numeric'+(r.disputed?' tier-disputed':'')+'">'+tierFmt(r.spread)+'</td></tr>').join('')
    +'</tbody></table></div><div class="db-footnote"><strong>列名</strong><p>'+SD.sources.map(s=>tierSourceShort[s.id]+' = '+esc(tierSourceName[s.id])).join('，')+'。单元格底色越深表示在该榜内越靠前；「未评」表示该榜没有收录此角色，不参与该角色的共识分。</p></div></div>'+tierMethod();
}
function tierBar(label,value,note){
  return '<section><div><strong>'+label+'</strong><span>'+tierFmt(value)+' / 100</span></div><div class="dimension-track"><b style="width:'+Math.max(1,value)+'%"></b></div>'+(note?'<p>'+note+'</p>':'')+'</section>';
}
function showStrengthCharacter(id){
  const r=tierRow(id);if(!r)return;
  const pic=D.characters.find(x=>x.id===id),g=r.growth||{},w=SD.weights,fn=SD.featureNames,b=r.best;
  const sourceRows=r.sources.map(s=>{const meta=SD.sources.find(x=>x.id===s.id);return '<tr><th scope="row"><a href="'+esc(meta.url)+'" target="_blank" rel="noopener noreferrer">'+esc(tierSourceName[s.id])+' ↗</a></th><td>'+esc(tierSourceTier(s.id,s.tier))+'</td><td class="numeric">'+tierFmt(s.score)+'</td><td class="numeric">'+(s.score==null?'—':meta.weight)+'</td></tr>'}).join('');
  const growthLine=Object.entries(growthNames).map(([k,label])=>label+' '+tierFmt(g[k])).join(' · ');
  const statLine=b?Object.entries(growthNames).map(([k,label])=>label+' '+tierFmt(b.stats[k])).join(' · ')+' · 体格 '+tierFmt(b.stats.build):'';
  const vs=(label,v)=>'<tr><th scope="row">'+label+'</th><td class="numeric">'+v.hit+'%</td><td class="numeric">'+tierFmt(v.dmg)+'</td><td>'+(v.doubles?'能':'否')+'</td><td class="numeric">'+tierFmt(v.taken)+'</td></tr>';
  const head=r.lord
    ?'<p>主角不进字母梯队。'+(r.lordAvgRank!=null?'各榜主角排名平均第 '+tierFmt(r.lordAvgRank)+' 位，本站排第 '+r.rank+' 位。':'第三部主角，各榜未与领主比较。')+'本站模拟分仅供参考。</p>'
    :'<p>综合第 <b>'+r.rank+'</b> 名（共 58 人）· '+r.tier+' · 来源可信度 '+r.confidence+(r.disputed?' · <span class="tier-flag dispute">来源分歧大</span>':'')+'</p>';
  const barNote=b?{
    contribution:r.role==='舞蹈'?'舞娘可以让队友再行动一次，按满额计。':'输出 '+tierFmt(b.offenseScore)+' 分（'+esc(b.weaponZh||'—')+'）；治疗 '+(b.healing?'回复 '+b.healAmount+(b.healRange?'、射程 +'+b.healRange:'')+(b.physic?'、会远程治愈':'')+(b.healSpells&&b.healSpells.length?'（'+b.healSpells.map(esc).join('、')+'）':'')+'，折算 '+tierFmt(b.healingScore*SD.fit.healFactor)+' 分':'—')+(r.means&&r.means.modes.length>1?'；输出手段：'+esc(r.means.modes.join(' + '))+'（按敌人挑选）':'')+(r.means&&r.means.reach?'；有 1–2 格手段':'')+(r.blaze?'；焰技'+esc(r.blaze.type)+' ×'+r.blaze.mult:'')+'；坦克 '+tierFmt(b.tankScore)+' × '+SD.fit.tankFactor+' = '+tierFmt(b.tankScore*SD.fit.tankFactor)+' 分。取最高者'+(b.offenseScore>0&&b.healingScore>0?'，能打又能奶，次一项按 '+Math.round((SD.assumptions.hybridShare||0)*100)+'% 加上':'')+'，当前按「'+esc(r.role)+'」计。',
    durability:'回避 '+tierFmt(b.vsPhysical.avo)+'，持枪敌人命中率 '+b.vsPhysical.takenHit+'%、每次期望受伤约 '+tierFmt(b.vsPhysical.taken)+'，魔法敌人命中率 '+b.vsMagic.takenHit+'%、约 '+tierFmt(b.vsMagic.taken)+'（生命 '+tierFmt(b.stats.hp)+'）。',
    skills:r.skillMissing?'缺少技能资料，按中位数计。':'个人 '+tierFmt(r.personalRaw)+' + 团队 '+tierFmt(r.teamRaw)+'。'+esc(r.skillNote||''),
    mobility:'机动值 '+b.mobility+(b.mountBonus?'（含凯伊线骑乘移动 +2）':'')+'，按边际递减换算。',
    cost:'招募扣分 '+tierFmt(b.costPenalty)+(b.costPenalty?'':'（剧情加入或无额外条件）')+'。'
  }:{};
  detailShell(r.name,(r.lord?'主角':'综合梯队 '+r.tier)+' · 评分标准 3.2',
    '<div class="model-detail-intro">'+(pic?'<img src="assets/'+pic.portrait+'" alt="'+esc(r.name)+'官方插图">':'')+'<div><strong class="model-detail-score">'+tierFmt(r.lord?r.own:r.composite)+'</strong><p>'+(r.lord?'本站模拟分':'综合分 = 外部共识 '+tierFmt(r.external)+' × 60% + 本站模拟 '+tierFmt(r.own)+' × 40%')+'</p>'+head+'</div></div>'
    +(r.lord?'':'<h3>外部共识 '+tierFmt(r.external)+'</h3><div class="data-table-wrap"><table class="data-table tier-source-table"><thead><tr><th>来源</th><th>档位</th><th>换算分</th><th>权重</th></tr></thead><tbody>'+sourceRows+'</tbody></table></div><p class="field-help">换算分是该档在对应榜单内的百分位中点；加权标准差 '+tierFmt(r.spread)+'，≥22 视为分歧大。</p>')
    +(b?'<h3>本站模拟 '+tierFmt(r.own)+'：最优组合</h3><div class="tier-best"><div><span>路线</span><b>'+esc(b.routeName)+'</b></div><div><span>职业</span><b>'+esc(b.clsZh)+'</b><small>'+esc(b.cls)+'</small></div><div><span>定位</span><b>'+esc(r.role||'输出')+(b.weapon?' · '+esc(b.weaponZh):'')+'</b></div><div><span>凯伊线骑乘</span><b>'+(b.mountBonus?'有':'无')+'</b></div></div>'
      +'<p class="field-help">共比较了 '+r.routeCount+' 条可招募路线 × '+r.classCount+' 个可走通的职业。出场：'+esc(b.appear||'—')+'。</p>'
      +'<p class="field-help">'+(b.join?'入队 Lv'+b.join.lv+' · '+esc(b.join.cls)+'；':'')+'Lv'+SD.assumptions.targetLv+' 推算能力：'+statLine+'</p>'+(b.masteries&&b.masteries.length?'<p class="field-help">已专精：'+b.masteries.map(esc).join('、')+'</p>':'')
      +(r.means?'<div class="data-table-wrap"><table class="data-table tier-source-table"><thead><tr><th>对标准敌人</th><th>所用手段</th><th>命中</th><th>单次伤害</th><th>追击</th></tr></thead><tbody>'+r.means.use.map(u=>'<tr><th scope="row">'+esc(u.enemy)+'</th><td>'+esc(u.mode)+'</td><td class="numeric">'+u.hit+'%</td><td class="numeric">'+tierFmt(u.dmg)+'</td><td>'+(u.doubles?'能':'否')+'</td></tr>').join('')+'</tbody></table></div><p class="field-help">回避 '+tierFmt(b.vsPhysical.avo)+'：持枪敌人命中率 '+b.vsPhysical.takenHit+'%、每次期望受伤约 '+tierFmt(b.vsPhysical.taken)+'；魔法敌人命中率 '+b.vsMagic.takenHit+'%、约 '+tierFmt(b.vsMagic.taken)+'。'+(r.blaze?esc(r.blaze.note)+'（'+esc(r.blaze.type)+'，输出 ×'+r.blaze.mult+'，估算）。':'')+'</p>':'')
      +'<div class="model-dimension-list">'+Object.keys(w).map(k=>tierBar(esc(fn[k])+' · '+tierFmt(w[k])+'%',b.parts[k],barNote[k])).join('')+'</div>':'')
    +'<p class="field-help">角色成长率：'+growthLine+(r.growthSource==='gamewith'?'（站内缺失，取自 GameWith）':r.growthConflicts?.length?'（'+r.growthConflicts.map(k=>growthNames[k]).join('、')+' 两源不同，取中值）':'')+'</p>'
    +'<button class="button" data-model-character="'+id+'">查看七维模型拆解 ↗</button>');
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
