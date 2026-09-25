/* 全角色媒体分档；名单与姓名分别核对来源。 */
window.GAME_RANKINGS = {
  "meta": {
    "title": "全可操作角色名录与媒体分档映射",
    "game": "火焰之纹章 万缕千丝",
    "checked": "2026-09-25",
    "scope": "Pocket Tactics 2026-09-24分档和排除名单，与RPG Site可招募角色表的去重并集；含主角及后期加入单位。",
    "primaryRankingSourceId": "pt-tier",
    "counts": {
      "total": 63,
      "ranked": 57,
      "S": 5,
      "A": 25,
      "B": 24,
      "C": 3,
      "unranked": 2,
      "sourceExcluded": 5,
      "sourceNotListed": 1,
      "lords": 4,
      "protagonists": 1,
      "recruits": 58,
      "existingEntityLinks": 23,
      "officialChineseNameMappings": 4,
      "mediaChineseNameMappings": 59,
      "characters": 63,
      "lordRanked": 4
    },
    "methodology": [
      "原榜S/A/B/C分档原样保留；同档内沿用网页顺序，不添加数字名次。",
      "名录以英文原名去重；中文名优先延续现有游民角色资料译名，异译放入aliases供搜索。",
      "四领主中文名由任天堂香港官网繁体转换；其余中文名有媒体页面出处，但不冒称全部为官方译名。",
      "原榜明确排除的5位主角，与原榜未列出的Klapka分别标注；不自行评级。"
    ],
    "coverageChecks": {
      "pocketTacticsRanked": 57,
      "pocketTacticsExplicitlyExcluded": 5,
      "rpgSiteHeadings": 62,
      "rpgSiteMissingFromPocketTactics": [
        "Klapka"
      ],
      "pocketTacticsExplicitlyExcludedMissingFromRpgSite": [
        "Eshmel"
      ],
      "rankedNamesMissingFromRpgSite": [],
      "duplicateOriginalNames": [],
      "duplicateIds": []
    },
    "limits": [
      "63是本次可靠名单并集的可操作角色数量，不宣称囊括剧情NPC。",
      "游民旧招募页有伊莉安娜占位项，但条件仍为问号；没有据此将她加入可操作名单。",
      "部分中文媒体同一人物存在异译，需以originalName对照；aliases不是新增人物。"
    ],
    "mode": "media_reference"
  },
  "tiers": [
    {
      "id": "S",
      "label": "优先参考"
    },
    {
      "id": "A",
      "label": "主力候选"
    },
    {
      "id": "B",
      "label": "按阵容培养"
    },
    {
      "id": "C",
      "label": "投入前评估"
    },
    {
      "id": "lords",
      "label": "主角独立排序"
    },
    {
      "id": "unranked",
      "label": "待评级"
    }
  ],
  "sources": [
    {
      "id": "pt-tier",
      "title": "口袋战术｜万缕千丝角色强度榜",
      "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
      "author": "Connor Christie",
      "published": "2026-09-24",
      "accessed": "2026-09-25",
      "type": "署名媒体游玩评价",
      "notes": "作者说明分档依据为150余小时游玩体验；未明确统一难度、补丁版本或是否限制刷级。"
    },
    {
      "id": "sf-personal",
      "title": "宁静之森｜万缕千丝个人能力资料",
      "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
      "author": "Serenes Forest",
      "published": null,
      "accessed": "2026-09-25",
      "type": "专业资料站",
      "notes": "页面标明持续完善中；用于核对技能效果，不提供综合强度分档。"
    },
    {
      "id": "gs-early-recruits",
      "title": "游民星空｜各篇章推荐挖角角色一览",
      "url": "https://www.gamersky.com/handbook/202609/2212809.shtml",
      "author": "游民星空编译；原作者未注明",
      "published": "2026-09-20",
      "accessed": "2026-09-25",
      "type": "前期阵容建议",
      "notes": "仅涉及前期补位及挖角，不代表毕业综合强度。"
    },
    {
      "id": "gs-char-6",
      "title": "游民星空｜角色资料第6页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_6.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-8",
      "title": "游民星空｜角色资料第8页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_8.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-11",
      "title": "游民星空｜角色资料第11页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_11.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-14",
      "title": "游民星空｜角色资料第14页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_14.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-15",
      "title": "游民星空｜角色资料第15页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_15.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-16",
      "title": "游民星空｜角色资料第16页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_16.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-17",
      "title": "游民星空｜角色资料第17页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_17.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-18",
      "title": "游民星空｜角色资料第18页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_18.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-19",
      "title": "游民星空｜角色资料第19页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_19.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-24",
      "title": "游民星空｜角色资料第24页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_24.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-28",
      "title": "游民星空｜角色资料第28页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_28.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-29",
      "title": "游民星空｜角色资料第29页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_29.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-30",
      "title": "游民星空｜角色资料第30页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_30.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-31",
      "title": "游民星空｜角色资料第31页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_31.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-33",
      "title": "游民星空｜角色资料第33页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_33.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-34",
      "title": "游民星空｜角色资料第34页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_34.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-43",
      "title": "游民星空｜角色资料第43页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_43.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-50",
      "title": "游民星空｜角色资料第50页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_50.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-char-53",
      "title": "游民星空｜角色资料第53页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_53.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果、擅长技能和路线招募记录；部分名称为媒体译名。"
    },
    {
      "id": "gs-recruitment",
      "title": "游民星空｜角色加入条件一览",
      "url": "https://www.gamersky.com/handbook/202609/2211366.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "招募数据",
      "notes": "用于本文招募金币、前置、路线等事实，未作整体强度评分。"
    },
    {
      "id": "rpg-recruitment",
      "title": "角色扮演游戏站｜全角色招募名录",
      "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
      "author": "Adam Vitale",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "作者流程攻略",
      "notes": "招募数据交叉核对；妮涅蕾达线名声门槛与游民数据有冲突。"
    },
    {
      "id": "gs-char-2",
      "title": "游民星空｜角色资料第2页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_2.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果与擅长技能；主角不参与本次媒体招募角色分档。"
    },
    {
      "id": "gs-char-3",
      "title": "游民星空｜角色资料第3页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_3.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果与擅长技能；主角不参与本次媒体招募角色分档。"
    },
    {
      "id": "gs-char-4",
      "title": "游民星空｜角色资料第4页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_4.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果与擅长技能；主角不参与本次媒体招募角色分档。"
    },
    {
      "id": "gs-char-5",
      "title": "游民星空｜角色资料第5页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_5.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "角色数据",
      "notes": "成长率、个人效果与擅长技能；主角不参与本次媒体招募角色分档。"
    },
    {
      "id": "gs-character-data",
      "title": "游民星空｜角色资料汇总",
      "url": "https://www.gamersky.com/handbook/202609/2211429.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "use": "53页人物名称；各条nameSourceUrl指向具体页"
    },
    {
      "id": "gs-rpg-translation",
      "title": "游民星空｜全角色招募方法（英文攻略译稿）",
      "url": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "author": "Adam Vitale／游民星空翻译整理",
      "published": "2026-09-20",
      "accessed": "2026-09-25",
      "use": "与英文原文同序对应；提供3名后期角色中文名和其他角色异译"
    },
    {
      "id": "nintendo-hk",
      "title": "任天堂香港｜万缕千丝官方网站",
      "url": "https://www.nintendo.com/hk/games/switch2/aacsa/index.html",
      "author": "Nintendo",
      "accessed": "2026-09-25",
      "use": "四领主官方繁体中文名"
    },
    {
      "id": "kg-lords",
      "title": "核心玩家｜四位主角路线排行",
      "url": "https://www.keengamer.com/articles/guides/fire-emblem-fortunes-weave-tier-list-best-characters-ranked-for-every-route/",
      "author": "拉弗利·维博沃",
      "published": "2026-09-24",
      "accessed": "2026-09-25",
      "notes": "仅引用独立主角排序；口径同时考虑战斗价值和路线初始队友。该媒体其他招募角色分档未混入本站的口袋战术分档。"
    }
  ],
  "characters": [
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "esmeralda",
      "originalName": "Esmeralda",
      "name": "艾丝梅拉尔达",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "S",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_10.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml",
        "https://www.gamersky.com/handbook/202609/2211366.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_10.shtml",
      "aliases": [
        "埃斯梅拉达",
        "艾丝美拉尔达"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": "游民角色单页使用“艾丝梅拉尔达”，招募汇总页另作“艾丝美拉尔达”。",
      "entityId": "esmeralda",
      "rankingNote": "媒体参考 S 档，同档不分先后。"
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "fabio",
      "originalName": "Fabio",
      "name": "法毕欧",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "S",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_9.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_9.shtml",
      "aliases": [
        "法比奥"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "fabio",
      "rankingNote": "媒体参考 S 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "低门槛近战主力",
      "strengths": [
        "战斗中命中、回避或必杀的一项增加10；凯伊招募教学入队，蕾达线只需支援1、名声3。"
      ],
      "weaknesses": [
        "随机增益只能得到其中一项；魔防成长20%，仍需回避法系集火。"
      ],
      "scenarios": [
        "前期补近战输出；招募资源紧张时优先检查凯伊或蕾达线。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为S档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "命中、回避或必杀随机一项+10；魔防20%；蕾达支援1、名声3。",
          "sourceId": "gs-char-31",
          "url": "https://www.gamersky.com/handbook/202609/2211429_31.shtml"
        }
      ],
      "id": "recruit-31",
      "entityId": "recruit-31",
      "name": "古扎岚",
      "originalName": "Guzran",
      "kind": "recruit",
      "tier": "S",
      "tierLabel": "S · 优先参考",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 S 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_31.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_31.shtml",
      "existingEntityId": "recruit-31",
      "notes": ""
    },
    {
      "role": "可自我续航的混合攻击手",
      "strengths": [
        "每次战斗后回复5生命值，适合连续交战；剑与两类魔法均为擅长方向。"
      ],
      "weaknesses": [
        "回血发生在战斗结束后，不能替代承伤计算；训练物理和魔法两路仍需分配资源。"
      ],
      "scenarios": [
        "较长地图中的连续小规模交战；蕾达线直接培养，赛奥朵拉线较低门槛补位。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为S档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "战斗后回复5HP；擅长剑、黑魔术、白魔术；赛奥朵拉线支援1、名声5。",
          "sourceId": "gs-char-17",
          "url": "https://www.gamersky.com/handbook/202609/2211429_17.shtml"
        }
      ],
      "id": "recruit-17",
      "entityId": "recruit-17",
      "name": "西洛可",
      "originalName": "Sirocco",
      "kind": "recruit",
      "tier": "S",
      "tierLabel": "S · 优先参考",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 S 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_17.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_17.shtml",
      "existingEntityId": "recruit-17",
      "aliases": [
        "西罗科"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "sofia",
      "originalName": "Sofia",
      "name": "索绯雅",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "S",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_39.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_39.shtml",
      "entityId": "sofia",
      "rankingNote": "媒体参考 S 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "peter",
      "originalName": "Peter",
      "name": "皮特鲁",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_7.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_7.shtml",
      "aliases": [
        "彼得"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "peter",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "后排魔法与战技支援",
      "strengths": [
        "友军战技的作用距离增加1格，站位更灵活；擅长黑魔术、白魔术和指挥术。"
      ],
      "weaknesses": [
        "防守成长20%，以辅助和远程行动为主更稳妥；跨线招募还需外传和3000 金钱。"
      ],
      "scenarios": [
        "凯伊线已有固定入队条件时优先利用；队伍需要辅助距离或魔法补位。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为A档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "友军战技射程+1；防守成长20%；擅长两类魔法及指挥术。",
          "sourceId": "gs-char-6",
          "url": "https://www.gamersky.com/handbook/202609/2211429_6.shtml"
        }
      ],
      "id": "recruit-6",
      "entityId": "recruit-6",
      "name": "媞雅拉",
      "originalName": "Tialla",
      "kind": "recruit",
      "tier": "A",
      "tierLabel": "A · 推荐了解",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_6.shtml",
        "https://www.gamersky.com/handbook/202609/2211366.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "dataSourceIds": [
        "gs-char-6",
        "gs-recruitment"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_6.shtml",
      "existingEntityId": "recruit-6",
      "aliases": [
        "蒂亚拉"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "bonaventure",
      "originalName": "Bonaventure",
      "name": "波拿帕尔特",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_12.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_12.shtml",
      "aliases": [
        "博纳旺蒂尔"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": "游民角色资料称波拿帕尔特；其角色扮演游戏站译稿称博纳旺蒂尔。依据赛奥朵拉初始队员身份和相同招募限制对应，保留异译供核对。",
      "entityId": "bonaventure",
      "rankingNote": "媒体参考 A 档，同档不分先后。"
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "talimun",
      "originalName": "Talimun",
      "name": "谭利穆恩",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_20.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_20.shtml",
      "aliases": [
        "塔利蒙"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "talimun",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "orchel",
      "originalName": "Orchel",
      "name": "欧露赫露",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_21.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_21.shtml",
      "aliases": [
        "奥谢尔"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "orchel",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "anatolia",
      "originalName": "Anatolia",
      "name": "爱娜特莉亚",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_22.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_22.shtml",
      "aliases": [
        "阿纳托利亚"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "anatolia",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "bertrand",
      "originalName": "Bertrand",
      "name": "贝特兰",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211366.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211366.shtml",
      "aliases": [
        "贝特朗"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "bertrand",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "需要培养投入的物理主力",
      "strengths": [
        "个人效果提升升级时的基础能力成长；擅长剑、斧、格斗，物理路线选择较多。"
      ],
      "weaknesses": [
        "优势与升级培养有关；不要把显示的成长数据再额外叠加一次未量化的个人加成。"
      ],
      "scenarios": [
        "蕾达线从早期持续培养；队伍需要可长期投入的物理输出。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为A档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "个人效果使升级更容易获得基础能力成长；擅长剑、斧、格斗及白魔术。",
          "sourceId": "gs-char-19",
          "url": "https://www.gamersky.com/handbook/202609/2211429_19.shtml"
        }
      ],
      "id": "recruit-19",
      "entityId": "recruit-19",
      "name": "穆",
      "originalName": "Mu",
      "kind": "recruit",
      "tier": "A",
      "tierLabel": "A · 推荐了解",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_19.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_19.shtml",
      "existingEntityId": "recruit-19",
      "notes": ""
    },
    {
      "role": "弓术与安全距离输出",
      "strengths": [
        "敌人不能反击时获得命中+10，适合利用射程差；技巧成长55%。"
      ],
      "weaknesses": [
        "距离优势被破坏时个人效果不生效；跨线招募需要5000 金钱。"
      ],
      "scenarios": [
        "攻击缺乏远程反击手段的敌人；赛奥朵拉线顺势培养。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为A档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "敌方不能反击时命中+10；技巧成长55%；赛奥朵拉第一部第4章剧情加入。",
          "sourceId": "gs-char-14",
          "url": "https://www.gamersky.com/handbook/202609/2211429_14.shtml"
        }
      ],
      "id": "recruit-14",
      "entityId": "recruit-14",
      "name": "莉利安",
      "originalName": "Lilian",
      "kind": "recruit",
      "tier": "A",
      "tierLabel": "A · 推荐了解",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_14.shtml",
        "https://www.gamersky.com/handbook/202609/2211366.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "dataSourceIds": [
        "gs-char-14",
        "gs-recruitment"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_14.shtml",
      "existingEntityId": "recruit-14",
      "aliases": [
        "莉莲"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "hong-hua",
      "originalName": "Hong Hua",
      "name": "红花",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211366.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211366.shtml",
      "entityId": "hong-hua",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "dante",
      "originalName": "Dante",
      "name": "丹提",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_27.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_27.shtml",
      "aliases": [
        "但丁"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "dante",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "diego",
      "originalName": "Diego",
      "name": "迪雅各",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_25.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_25.shtml",
      "aliases": [
        "迭戈"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "diego",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "速度型机动输出",
      "strengths": [
        "攻速领先敌人至少3时命中+20；擅长飞行术，适合有目标地训练机动兵种。"
      ],
      "weaknesses": [
        "速度优势是触发条件；遇到高速敌人或装备拖累攻速时，需要重新核对命中。"
      ],
      "scenarios": [
        "蕾达线前期补速度和机动位置；挑选自己有攻速优势的目标。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为A档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "攻速至少高3时命中+20；擅长剑、枪、飞行术。",
          "sourceId": "gs-char-34",
          "url": "https://www.gamersky.com/handbook/202609/2211429_34.shtml"
        }
      ],
      "id": "recruit-34",
      "entityId": "recruit-34",
      "name": "卡塔妮雅",
      "originalName": "Catania",
      "kind": "recruit",
      "tier": "A",
      "tierLabel": "A · 推荐了解",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_34.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_34.shtml",
      "existingEntityId": "recruit-34",
      "aliases": [
        "卡塔妮娅"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "gaitz",
      "originalName": "Gaitz",
      "name": "盖茨",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211366.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211366.shtml",
      "entityId": "gaitz",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "相邻友军续航与白魔法支援",
      "strengths": [
        "邻接友军战斗后可为其少量回血；枪术、白魔术、飞行术均为擅长方向。"
      ],
      "weaknesses": [
        "被动恢复依赖相邻站位，不能把零散回血当成能承受致命伤的保证。"
      ],
      "scenarios": [
        "前排集中推进的阵型；凯伊线第6章加入后补充续航。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为A档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "擅长枪术、白魔术、飞行术；凯伊第一部第6章剧情加入。",
          "sourceId": "gs-char-8",
          "url": "https://www.gamersky.com/handbook/202609/2211429_8.shtml"
        },
        {
          "claim": "相邻友军战斗后回复少量HP。",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/"
        }
      ],
      "id": "recruit-8",
      "entityId": "recruit-8",
      "name": "乌尔坦德",
      "originalName": "Ultand",
      "kind": "recruit",
      "tier": "A",
      "tierLabel": "A · 推荐了解",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_8.shtml",
        "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_8.shtml",
      "existingEntityId": "recruit-8",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "alexandra",
      "originalName": "Alexandra",
      "name": "亚历珊德拉",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_36.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_36.shtml",
      "aliases": [
        "亚历桑德拉"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "alexandra",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "creek",
      "originalName": "Creek",
      "name": "齐利科",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211366.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211366.shtml",
      "aliases": [
        "克里克"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": "对应战争篇第2章加入、用于招募内森的角色；与 Kiroc（奇洛伊卡／基洛克）是不同人物。",
      "entityId": "creek",
      "rankingNote": "媒体参考 A 档，同档不分先后。"
    },
    {
      "role": "白魔法支援与法术暴击输出",
      "strengths": [
        "装备魔法时必杀+10；魔力成长50%，可围绕白魔术擅长培养。"
      ],
      "weaknesses": [
        "生命值成长35%、防守30%，不宜仅因有法术暴击就长期暴露在前排。"
      ],
      "scenarios": [
        "蕾达线补治疗与法术输出；其他线愿意完成三项委托时再考虑招募。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为A档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "装备魔法必杀+10；魔力成长50%，HP35%、防守30%。",
          "sourceId": "gs-char-18",
          "url": "https://www.gamersky.com/handbook/202609/2211429_18.shtml"
        }
      ],
      "id": "recruit-18",
      "entityId": "recruit-18",
      "name": "奥琳琵娅",
      "originalName": "Olympia",
      "kind": "recruit",
      "tier": "A",
      "tierLabel": "A · 推荐了解",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_18.shtml",
        "https://www.gamersky.com/handbook/202609/2211366.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "dataSourceIds": [
        "gs-char-18",
        "gs-recruitment"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_18.shtml",
      "existingEntityId": "recruit-18",
      "aliases": [
        "奥林匹亚"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "nathan",
      "originalName": "Nathan",
      "name": "内森",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211366.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211366.shtml",
      "entityId": "nathan",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "nuzzuo",
      "originalName": "Nuzzuo",
      "name": "努佐",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_40.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_40.shtml",
      "entityId": "nuzzuo",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "重装方向的物理守点者",
      "strengths": [
        "力量与防守成长分别60%、70%，擅长斧术和重装术；适合集中投入物理守点任务。"
      ],
      "weaknesses": [
        "速度、魔防成长均15%；不能转为骑兵或飞行兵种，机动与抗魔均需队友支持。"
      ],
      "scenarios": [
        "窄口守点、物理敌人较多的地图；有治疗和法系威胁处理手段的阵容。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为A档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "力量成长60%、防守70%、速度与魔防15%；不能转骑兵或飞行，体格+5。",
          "sourceId": "gs-char-43",
          "url": "https://www.gamersky.com/handbook/202609/2211429_43.shtml"
        }
      ],
      "id": "recruit-43",
      "entityId": "recruit-43",
      "name": "哥莱亚斯",
      "originalName": "Goliath",
      "kind": "recruit",
      "tier": "A",
      "tierLabel": "A · 推荐了解",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_43.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_43.shtml",
      "existingEntityId": "recruit-43",
      "aliases": [
        "歌利亚"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "aswan",
      "originalName": "Aswan",
      "name": "阿斯旺",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "aswan",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "inyoni",
      "originalName": "Inyoni",
      "name": "易尼奥尼",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_52.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_52.shtml",
      "aliases": [
        "伊尼奥妮"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "inyoni",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "jasmine",
      "originalName": "Jasmine",
      "name": "嘉丝敏",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211366.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211366.shtml",
      "aliases": [
        "贾斯敏"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "jasmine",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "troy",
      "originalName": "Troy",
      "name": "特洛伊亚",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "A",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211366.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211366.shtml",
      "aliases": [
        "特洛伊"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "troy",
      "rankingNote": "媒体参考 A 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "seteth",
      "originalName": "Seteth",
      "name": "西提司",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_49.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_49.shtml",
      "aliases": [
        "赛特斯"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "seteth",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "tobias",
      "originalName": "Tobias",
      "name": "托比亚斯",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_13.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_13.shtml",
      "entityId": "tobias",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "战场物资支援与速度型输出",
      "strengths": [
        "自身与周围2格友军可访问道具袋，长图应变价值独立于直接伤害。"
      ],
      "weaknesses": [
        "工具价值不会自动转化为火力；需要外传，且蕾达线不可挖角。"
      ],
      "scenarios": [
        "补给或装备切换需求较多的长图；迪托利希线完成前置后加入。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为B档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "周围2格含自身可用道具袋；蕾达不可招募。",
          "sourceId": "gs-char-24",
          "url": "https://www.gamersky.com/handbook/202609/2211429_24.shtml"
        }
      ],
      "id": "recruit-24",
      "entityId": "recruit-24",
      "name": "乌修拉",
      "originalName": "Ursula",
      "kind": "recruit",
      "tier": "B",
      "tierLabel": "B · 按需培养",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_24.shtml",
        "https://www.gamersky.com/handbook/202609/2211366.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "dataSourceIds": [
        "gs-char-24",
        "gs-recruitment"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_24.shtml",
      "existingEntityId": "recruit-24",
      "aliases": [
        "厄休拉"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "带概率保命效果的物理前排",
      "strengths": [
        "生命值至少2时，致命伤有按幸运数值计算的概率保留1生命值。"
      ],
      "weaknesses": [
        "保命依赖概率且有生命值条件，不能把它当作稳定免死；魔防成长25%。"
      ],
      "scenarios": [
        "已有治疗接应的近战位置；需要剑斧物理补位。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为B档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "HP不低于2且受到致命伤时，按幸运%的概率留下1HP；魔防成长25%。",
          "sourceId": "gs-char-28",
          "url": "https://www.gamersky.com/handbook/202609/2211429_28.shtml"
        }
      ],
      "id": "recruit-28",
      "entityId": "recruit-28",
      "name": "希蒙",
      "originalName": "Simon",
      "kind": "recruit",
      "tier": "B",
      "tierLabel": "B · 按需培养",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_28.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_28.shtml",
      "existingEntityId": "recruit-28",
      "aliases": [
        "西蒙"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "ludia",
      "originalName": "Ludia",
      "name": "露露蒂雅",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_45.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_45.shtml",
      "aliases": [
        "露迪亚"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "ludia",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "halvin",
      "originalName": "Halvin",
      "name": "哈尔温",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_48.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_48.shtml",
      "entityId": "halvin",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "防守型物理前排",
      "strengths": [
        "被攻击时伤害降至原来的90%；擅长重装术和骑术，培养方向清晰。"
      ],
      "weaknesses": [
        "速度成长25%、魔防20%，适合有针对性地挡敌；凯伊线不能挖角。"
      ],
      "scenarios": [
        "蕾达线起步前排；敌方以物理攻击为主的守点任务。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为B档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "受到攻击时伤害乘90%；速度成长25%、魔防20%；凯伊线不可挖角。",
          "sourceId": "gs-char-16",
          "url": "https://www.gamersky.com/handbook/202609/2211429_16.shtml"
        }
      ],
      "id": "recruit-16",
      "entityId": "recruit-16",
      "name": "巴卡尼亚",
      "originalName": "Buccar",
      "kind": "recruit",
      "tier": "B",
      "tierLabel": "B · 按需培养",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_16.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_16.shtml",
      "existingEntityId": "recruit-16",
      "aliases": [
        "布卡尔"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "fianna",
      "originalName": "Fianna",
      "name": "绯亚娜",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_46.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_46.shtml",
      "aliases": [
        "菲安娜"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "fianna",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "先手物理攻击手",
      "strengths": [
        "主动发起战斗有50%概率获得攻击力+3；剑术、格斗和步兵术均擅长。"
      ],
      "weaknesses": [
        "额外攻击力不是必定生效，击杀规划应按未触发情况检查。"
      ],
      "scenarios": [
        "己方回合主动进攻；队伍缺少剑或格斗物理输出。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为B档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "主动进攻时50%概率攻击力+3；擅长剑、格斗、步兵术。",
          "sourceId": "gs-char-30",
          "url": "https://www.gamersky.com/handbook/202609/2211429_30.shtml"
        }
      ],
      "id": "recruit-30",
      "entityId": "recruit-30",
      "name": "哪吒",
      "originalName": "Nezha",
      "kind": "recruit",
      "tier": "B",
      "tierLabel": "B · 按需培养",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_30.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_30.shtml",
      "existingEntityId": "recruit-30",
      "notes": ""
    },
    {
      "role": "针对法术敌人的枪术与白魔法位",
      "strengths": [
        "面对使用魔法的敌人，命中与回避各增加10；魔防成长45%。"
      ],
      "weaknesses": [
        "个人加成针对魔法敌人；蕾达线名声门槛在来源中仍有6与8的冲突。"
      ],
      "scenarios": [
        "法系敌人较多的地图；需要枪术与辅助兼顾的位置。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为B档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "敌人使用魔法时命中、回避+10；魔防成长45%。",
          "sourceId": "gs-char-29",
          "url": "https://www.gamersky.com/handbook/202609/2211429_29.shtml"
        },
        {
          "claim": "蕾达线名声门槛：游民8、RPG Site6，故未用该路线门槛判断性价比。",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them"
        }
      ],
      "id": "recruit-29",
      "entityId": "recruit-29",
      "name": "妮涅",
      "originalName": "Ninae",
      "kind": "recruit",
      "tier": "B",
      "tierLabel": "B · 按需培养",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_29.shtml",
        "https://www.gamersky.com/handbook/202609/2211366.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "dataSourceIds": [
        "gs-char-29",
        "gs-recruitment"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_29.shtml",
      "existingEntityId": "recruit-29",
      "aliases": [
        "妮娜"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "近身物理前排",
      "strengths": [
        "与相邻敌人交战时命中增加10；斧术、弓术和步兵术可围绕队伍缺口培养。"
      ],
      "weaknesses": [
        "命中优势要求贴近敌人；魔防成长25%，应谨慎接近法系集群。"
      ],
      "scenarios": [
        "迪托利希线剧情队员；需要稳定近距离命中的物理补位。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为B档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "对相邻敌人命中+10；魔防成长25%；迪托利希第一部第4章剧情加入。",
          "sourceId": "gs-char-11",
          "url": "https://www.gamersky.com/handbook/202609/2211429_11.shtml"
        }
      ],
      "id": "recruit-11",
      "entityId": "recruit-11",
      "name": "米迦艾拉",
      "originalName": "Mikaela",
      "kind": "recruit",
      "tier": "B",
      "tierLabel": "B · 按需培养",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_11.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_11.shtml",
      "existingEntityId": "recruit-11",
      "aliases": [
        "米凯伊拉"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "kiroc",
      "originalName": "Kiroc",
      "name": "奇洛伊卡",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_51.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_51.shtml",
      "aliases": [
        "基洛克"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": "对应赠送圣水/纯净之水招募的角色；与 Creek（齐利科／克里克）是不同人物。",
      "entityId": "kiroc",
      "rankingNote": "媒体参考 B 档，同档不分先后。"
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "dadao",
      "originalName": "Dadao",
      "name": "大刀",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_47.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_47.shtml",
      "entityId": "dadao",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "jester",
      "originalName": "Jester",
      "name": "杰斯塔",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_44.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_44.shtml",
      "aliases": [
        "杰斯特"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "jester",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "yang-jie",
      "originalName": "Yang Jie",
      "name": "杨界",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_38.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_38.shtml",
      "entityId": "yang-jie",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "骑兵主动进攻",
      "strengths": [
        "骑兵形态主动进攻时获得防护与必杀回避加成；迪托利希线名声3即可达到等级门槛。"
      ],
      "weaknesses": [
        "关键效果绑定骑兵和主动进攻；其他路线招募成本可能明显更高。"
      ],
      "scenarios": [
        "迪托利希线早期补机动力；以己方回合主动突击为主。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为B档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "骑兵主动进攻防御力+3、必杀回避+30；迪托利希支援2、名声3。",
          "sourceId": "gs-char-33",
          "url": "https://www.gamersky.com/handbook/202609/2211429_33.shtml"
        }
      ],
      "id": "recruit-33",
      "entityId": "recruit-33",
      "name": "伊欧",
      "originalName": "Io",
      "kind": "recruit",
      "tier": "B",
      "tierLabel": "B · 按需培养",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_33.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_33.shtml",
      "existingEntityId": "recruit-33",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "noctula",
      "originalName": "Noctula",
      "name": "诺克裘拉",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_37.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_37.shtml",
      "aliases": [
        "诺库图拉"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "noctula",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "nydine",
      "originalName": "Nydine",
      "name": "努蒂奴",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_32.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_32.shtml",
      "aliases": [
        "奈丁"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "nydine",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "配合削血的速度型攻击手",
      "strengths": [
        "敌方阶段面对已受伤目标时，有30%概率先攻；速度成长60%。"
      ],
      "weaknesses": [
        "先攻同时受阶段、目标血量与概率限制；力量成长30%，不能仅凭高速度判断伤害。"
      ],
      "scenarios": [
        "队友先削血后再交战的协作；需要剑弓速度位并能完成外传时。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为B档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "敌方阶段对已受伤敌人30%概率先攻；速度成长60%、力量30%。",
          "sourceId": "gs-char-53",
          "url": "https://www.gamersky.com/handbook/202609/2211429_53.shtml"
        }
      ],
      "id": "recruit-53",
      "entityId": "recruit-53",
      "name": "佩佩",
      "originalName": "Peppe",
      "kind": "recruit",
      "tier": "B",
      "tierLabel": "B · 按需培养",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_53.shtml",
        "https://www.gamersky.com/handbook/202609/2211366.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them"
      ],
      "dataSourceIds": [
        "gs-char-53",
        "gs-recruitment"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_53.shtml",
      "existingEntityId": "recruit-53",
      "notes": ""
    },
    {
      "role": "保持血线的回避型物理位",
      "strengths": [
        "生命值至少一半时回避+10；擅长剑枪和飞行术，可向机动兵种培养。"
      ],
      "weaknesses": [
        "血线下降会失去基础回避加成；回避并非必定成功，需准备治疗接应。"
      ],
      "scenarios": [
        "能维持血线的游击阵容；队伍需要剑枪与飞行术培养人选。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为B档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "HP不低于一半时回避+10；擅长剑枪、飞行术。",
          "sourceId": "gs-char-50",
          "url": "https://www.gamersky.com/handbook/202609/2211429_50.shtml"
        }
      ],
      "id": "recruit-50",
      "entityId": "recruit-50",
      "name": "罗蕾塔",
      "originalName": "Loretta",
      "kind": "recruit",
      "tier": "B",
      "tierLabel": "B · 按需培养",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_50.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_50.shtml",
      "existingEntityId": "recruit-50",
      "aliases": [
        "洛蕾塔"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "主动突击与骑乘培养",
      "strengths": [
        "主动进攻获得回避+15，枪斧与骑术、飞行术擅长便于选择机动路线。"
      ],
      "weaknesses": [
        "个人回避加成只对主动攻击生效，不能直接按同样能力评价敌方阶段承伤。"
      ],
      "scenarios": [
        "己方回合先手清敌；赛奥朵拉线现成物理机动位。"
      ],
      "evidence": [
        {
          "claim": "媒体原表列为B档。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "主动进攻回避+15；擅长枪、斧、骑术与飞行术。",
          "sourceId": "gs-char-15",
          "url": "https://www.gamersky.com/handbook/202609/2211429_15.shtml"
        }
      ],
      "id": "recruit-15",
      "entityId": "recruit-15",
      "name": "莱桑达",
      "originalName": "Lysander",
      "kind": "recruit",
      "tier": "B",
      "tierLabel": "B · 按需培养",
      "rankingSourceId": "pt-tier",
      "rankingNature": "媒体参考分档",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "以下定位与使用建议由角色技能条件、擅长技能及本站成长/招募数据推断，非媒体逐条评价，未进行统一条件模拟。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_15.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_15.shtml",
      "existingEntityId": "recruit-15",
      "aliases": [
        "莱桑德"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "sha-lan",
      "originalName": "Sha Lan",
      "name": "沙兰",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_26.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_26.shtml",
      "entityId": "sha-lan",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "centurio",
      "originalName": "Centurio",
      "name": "盛托利翁",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_23.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_23.shtml",
      "aliases": [
        "森图里奥"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "centurio",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "tahonia",
      "originalName": "Tahonia",
      "name": "塔霍妮娅",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "B",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "tahonia",
      "rankingNote": "媒体参考 B 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "zarcone",
      "originalName": "Zarcone",
      "name": "札可捏",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "C",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_42.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_42.shtml",
      "aliases": [
        "扎尔科内"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "zarcone",
      "rankingNote": "媒体参考 C 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "majide",
      "originalName": "Majide",
      "name": "马吉迪",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "C",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_41.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_41.shtml",
      "aliases": [
        "马吉德"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "majide",
      "rankingNote": "媒体参考 C 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "benditz",
      "originalName": "Benditz",
      "name": "班迪兹",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "C",
      "kind": "recruit",
      "rankingStatus": "ranked",
      "rankingStatusLabel": "媒体已分档",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2211429_35.shtml",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429_35.shtml",
      "aliases": [
        "本迪茨"
      ],
      "aliasSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "entityId": "benditz",
      "rankingNote": "媒体参考 C 档，同档不分先后。",
      "notes": ""
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "eshmel",
      "originalName": "Eshmel",
      "name": "伊修玛尔",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "unranked",
      "kind": "protagonist",
      "rankingStatus": "source_excluded",
      "rankingStatusLabel": "原榜排除",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2211429.shtml",
      "notes": "口袋战术 原榜明确排除在字母档之外，未自行补评级。",
      "entityId": "eshmel",
      "rankingNote": "参考榜明确排除，未提供评级。"
    },
    {
      "role": "机动型前排与灵活培养",
      "strengths": [
        "个人效果直接增加1点移动力；擅长剑、枪、骑术与白魔术，可按队伍缺口规划路线。"
      ],
      "weaknesses": [
        "不能把移动优势当作承伤优势；防守、魔防成长均35%，仍要检查交战预览。"
      ],
      "scenarios": [
        "抢占目标、补位和主动进攻；凯伊路线的固定核心。"
      ],
      "evidence": [
        {
          "claim": "媒体未将四位主角纳入S/A/B/C表。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "移动力+1；擅长剑枪、骑术、白魔术；防守及魔防成长35%。",
          "sourceId": "gs-char-2",
          "url": "https://www.gamersky.com/handbook/202609/2211429_2.shtml"
        }
      ],
      "id": "cai",
      "entityId": "cai",
      "name": "凯伊",
      "originalName": "Cai",
      "kind": "lord",
      "tier": "unranked",
      "tierLabel": "主角分榜 · 第 4 位",
      "rankingSourceId": "pt-tier",
      "rankingNature": "独立主角排序",
      "rankingNote": "四位主角在独立媒体分榜中排序，不参与字母分档。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "本站资料解读与主角分榜分开列出；名次同时考虑战斗价值与初始队友。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_2.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.nintendo.com/hk/games/switch2/aacsa/index.html"
      ],
      "nameStatus": "官方繁中转简体",
      "rankingStatus": "source_excluded",
      "rankingStatusLabel": "原榜排除",
      "nameSourceUrl": "https://www.nintendo.com/hk/games/switch2/aacsa/index.html",
      "existingEntityId": "cai",
      "officialTraditionalName": "凱伊",
      "notes": "口袋战术 原榜明确排除在字母档之外，未自行补评级。",
      "lordRank": 4,
      "lordRankingSourceId": "kg-lords"
    },
    {
      "role": "主动近战与必杀倾向",
      "strengths": [
        "主动进攻时必杀+5；剑术和步兵术擅长，便于集中训练近战方向。"
      ],
      "weaknesses": [
        "必杀加成不是必杀保证；魔防成长30%，避免把物理输出能力等同于抗魔能力。"
      ],
      "scenarios": [
        "己方回合近战突破；需要集中物理输出的战斗。"
      ],
      "evidence": [
        {
          "claim": "媒体未将四位主角纳入S/A/B/C表。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "主动攻击必杀+5；魔防成长30%；擅长剑术、步兵术。",
          "sourceId": "gs-char-3",
          "url": "https://www.gamersky.com/handbook/202609/2211429_3.shtml"
        }
      ],
      "id": "dietrich",
      "entityId": "dietrich",
      "name": "迪托利希",
      "originalName": "Dietrich",
      "kind": "lord",
      "tier": "unranked",
      "tierLabel": "主角分榜 · 第 1 位",
      "rankingSourceId": "pt-tier",
      "rankingNature": "独立主角排序",
      "rankingNote": "四位主角在独立媒体分榜中排序，不参与字母分档。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "本站资料解读与主角分榜分开列出；名次同时考虑战斗价值与初始队友。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_3.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.nintendo.com/hk/games/switch2/aacsa/index.html"
      ],
      "nameStatus": "官方繁中转简体",
      "rankingStatus": "source_excluded",
      "rankingStatusLabel": "原榜排除",
      "nameSourceUrl": "https://www.nintendo.com/hk/games/switch2/aacsa/index.html",
      "existingEntityId": "dietrich",
      "officialTraditionalName": "迪托利希",
      "notes": "口袋战术 原榜明确排除在字母档之外，未自行补评级。",
      "lordRank": 1,
      "lordRankingSourceId": "kg-lords"
    },
    {
      "role": "速度型输出与弓剑培养",
      "strengths": [
        "速度成长65%；剑、弓、白魔术与步兵术擅长，能够按当前队伍安排输出或辅助训练。"
      ],
      "weaknesses": [
        "主动攻击仅5%概率阻止反击，不宜据此冒险；防守成长30%。"
      ],
      "scenarios": [
        "发挥攻速优势的对局；蕾达路线的固定核心。"
      ],
      "evidence": [
        {
          "claim": "媒体未将四位主角纳入S/A/B/C表。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "速度成长65%、防守30%；主动攻击5%概率使敌人无法反击。",
          "sourceId": "gs-char-5",
          "url": "https://www.gamersky.com/handbook/202609/2211429_5.shtml"
        }
      ],
      "id": "leda",
      "entityId": "leda",
      "name": "蕾达",
      "originalName": "Leda",
      "kind": "lord",
      "tier": "unranked",
      "tierLabel": "主角分榜 · 第 3 位",
      "rankingSourceId": "pt-tier",
      "rankingNature": "独立主角排序",
      "rankingNote": "四位主角在独立媒体分榜中排序，不参与字母分档。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "本站资料解读与主角分榜分开列出；名次同时考虑战斗价值与初始队友。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_5.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.nintendo.com/hk/games/switch2/aacsa/index.html"
      ],
      "nameStatus": "官方繁中转简体",
      "rankingStatus": "source_excluded",
      "rankingStatusLabel": "原榜排除",
      "nameSourceUrl": "https://www.nintendo.com/hk/games/switch2/aacsa/index.html",
      "existingEntityId": "leda",
      "officialTraditionalName": "蕾達",
      "notes": "口袋战术 原榜明确排除在字母档之外，未自行补评级。",
      "lordRank": 3,
      "lordRankingSourceId": "kg-lords"
    },
    {
      "role": "偏耐久的前排与指挥培养",
      "strengths": [
        "受击时有30%概率减半伤害；擅长枪、白魔术与指挥术，可兼顾前排和团队培养方向。"
      ],
      "weaknesses": [
        "伤害减半按概率触发，不能把它预先计作每次受击减半；魔防成长30%。"
      ],
      "scenarios": [
        "有治疗支援的前线；赛奥朵拉路线的阵容核心。"
      ],
      "evidence": [
        {
          "claim": "媒体未将四位主角纳入S/A/B/C表。",
          "sourceId": "pt-tier",
          "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list"
        },
        {
          "claim": "受击时30%概率伤害减半；擅长枪、白魔术、指挥术；魔防成长30%。",
          "sourceId": "gs-char-4",
          "url": "https://www.gamersky.com/handbook/202609/2211429_4.shtml"
        }
      ],
      "id": "theodora",
      "entityId": "theodora",
      "name": "赛奥朵拉",
      "originalName": "Theodora",
      "kind": "lord",
      "tier": "unranked",
      "tierLabel": "主角分榜 · 第 2 位",
      "rankingSourceId": "pt-tier",
      "rankingNature": "独立主角排序",
      "rankingNote": "四位主角在独立媒体分榜中排序，不参与字母分档。",
      "analysisLabel": "本站数据解读",
      "analysisBasis": "本站资料解读与主角分榜分开列出；名次同时考虑战斗价值与初始队友。",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.gamersky.com/handbook/202609/2211429_4.shtml",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.nintendo.com/hk/games/switch2/aacsa/index.html"
      ],
      "nameStatus": "官方繁中转简体",
      "rankingStatus": "source_excluded",
      "rankingStatusLabel": "原榜排除",
      "nameSourceUrl": "https://www.nintendo.com/hk/games/switch2/aacsa/index.html",
      "existingEntityId": "theodora",
      "officialTraditionalName": "賽奧朵拉",
      "notes": "口袋战术 原榜明确排除在字母档之外，未自行补评级。",
      "lordRank": 2,
      "lordRankingSourceId": "kg-lords"
    },
    {
      "role": "",
      "strengths": [],
      "weaknesses": [],
      "scenarios": [],
      "evidence": [],
      "id": "klapka",
      "originalName": "Klapka",
      "name": "克拉普卡",
      "nameStatus": "中文攻略译名（未逐一核对官中）",
      "tier": "unranked",
      "kind": "recruit",
      "rankingStatus": "source_not_listed",
      "rankingStatusLabel": "原榜未列",
      "rankingSourceId": "pt-tier",
      "sourceUrls": [
        "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
        "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
        "https://www.gamersky.com/handbook/202609/2212868.shtml"
      ],
      "nameSourceUrl": "https://www.gamersky.com/handbook/202609/2212868.shtml",
      "notes": "角色扮演游戏站 招募表明确列为可加入单位，口袋战术 原榜未列；保留未评级。 第三部第六节加入，前提是在第五节客串参战时存活；据角色扮演游戏站。",
      "availabilityNote": "第三部第六节加入，前提是在第五节客串参战时存活；据RPG Site。",
      "entityId": "klapka",
      "rankingNote": "招募名录已列出，参考榜未收录。"
    }
  ],
  "reviewedButNotUsed": [
    {
      "title": "BenFM｜Post Direct Character Tier List",
      "url": "https://www.youtube.com/watch?v=Bqse3iSqHkA",
      "date": "2026-08-09",
      "reason": "发售前按角色设计和性格排名，不是实战强度榜。"
    },
    {
      "title": "17173｜全角色浅分析",
      "url": "https://news.17173.com/content/09222026/110329027.shtml",
      "date": "2026-09-22",
      "reason": "自述仅按成长率、个人及专属效果分析，未覆盖战技、支援、训练；不作为统一综合榜。"
    }
  ]
};
