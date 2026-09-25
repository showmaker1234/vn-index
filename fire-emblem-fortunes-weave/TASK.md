# 火焰纹章 万紫千红 攻略（Fire Emblem: Fortune's Weave）

> 状态：已导入 ChatGPT 版网站（纹章战术室 · 万缕千丝攻略），后续内容待定

## 目标（暂定）

为《火焰纹章 万紫千红》制作一份攻略页面，发布在本站（GitHub Pages）下的
`/fire-emblem-fortunes-weave/` 路径。

## 待确认

- [ ] 攻略范围（主线流程 / 角色培养 / 支援对话 / 收集要素 / 难度打法 ……）
- [ ] 页面形式（单页长文 / 多页 / 可筛选的数据表）
- [ ] 视觉风格（沿用 VN Index 的深色风格，或单独设计）
- [ ] 是否在首页 `index.html` 加入口

## 进度

- 2026-09-25：创建任务与目录
- 2026-09-25：导入 ChatGPT 生成的静态站点（index.html + JS/CSS + assets），全部为相对路径，可直接由 GitHub Pages 托管；使用说明见 `网站使用说明.md`
- 2026-09-25：界面优化——强度排行新增默认「综合梯队」视图（`tiers-ui.js`），统一强调色、收紧模型表与资料来源排版（`polish.css`）
- 2026-09-25：强度排行改为评分标准 2.0——汇总 Game8、GameWith、KeenGamer、Pocket Tactics、アルゲスト、Siliconera 六个来源的共识分，与本站六项量化分各占 50%；数据与计算脚本在 `tools/`，运行 `node tools/build-strength.js` 重新生成 `strength-data.js`
