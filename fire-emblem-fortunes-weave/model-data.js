/* 多来源事实层；媒体分档不进入本站模型计算。 */
window.TACTICAL_DATA={
  "meta": {
    "version": "1.0",
    "checked": "2026-09-25",
    "growthCount": 56,
    "proficiencyCount": 53,
    "abilityCount": 164,
    "characters": 63,
    "sourceFamilies": [
      "宁静之森",
      "游民星空",
      "角色扮演游戏站",
      "口袋战术",
      "核心玩家"
    ],
    "limitations": [
      "尚未收录统一基准等级、入队能力、职业修正、全部战技、装备与敌人样本，不能解读为实测伤害或最高难度通关排名。",
      "技能与团队评分含本站启发式判读；权重、条件覆盖与折扣是公开设计假设。",
      "模型区间表示资料冲突、条件覆盖及未定项范围，不是统计置信区间。",
      "范围存在重叠时不能声称名次稳定；缺失覆盖不足的角色保留在榜中但不出确定名次。"
    ],
    "mediaSummary": {
      "sharedCount": 46,
      "sameTierCount": 18,
      "differentTierCount": 28,
      "notComparableCount": 17,
      "majorDisagreements": [
        {
          "originalName": "Sofia",
          "pt": "S",
          "kg": "B",
          "reason": "两文都认可治疗；KG将其列可靠支援，PT更看重其治疗价值。是价值取向差异。"
        },
        {
          "originalName": "Inyoni",
          "pt": "A",
          "kg": "C",
          "reason": "KG明确计入晚到与费用；PT未逐人解释。不能断言成本是唯一原因。"
        },
        {
          "originalName": "Nuzzuo",
          "pt": "A",
          "kg": "C",
          "reason": "KG指出晚到与脆弱；PT未逐人解释。"
        }
      ],
      "rules": [
        "不将四领主1–4名转换成S/A/B/C。",
        "未覆盖不等于C；排除原因分开保存。",
        "媒体档位只作旁证，不输入自建模型、不计算媒体平均分。",
        "不同目标、阶段与招募路线的档位不能视为同条件实验。"
      ]
    }
  },
  "sources": [
    {
      "id": "sf-growth",
      "author": null,
      "published": null,
      "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
      "independenceGroup": "serenes-forest",
      "scope": "进行中的成长率资料；明确须加职业成长，并另列穆技能生效行。无页面日期，不冒填。",
      "title": "宁静之森｜个人成长率整表"
    },
    {
      "id": "sf-personal",
      "title": "宁静之森｜个人能力整表",
      "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
      "author": "Serenes Forest",
      "accessed": "2026-09-25",
      "status": "work in progress",
      "type": "游戏能力资料表",
      "notes": "第一项为固定个人槽；新增项通常20/35级习得但未逐项指定，因此level不补填。+版本替换基础版本，不能重复叠加。"
    },
    {
      "id": "rpg-recruitment",
      "title": "角色扮演游戏站｜全角色招募",
      "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
      "author": "Adam Vitale",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "作者招募实测整理"
    },
    {
      "id": "gs-join",
      "title": "游民星空｜角色加入条件一览",
      "url": "https://www.gamersky.com/handbook/202609/2211366.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文招募汇总",
      "notes": "原文注明部分条件和名称仍在核对。"
    },
    {
      "id": "rpg-part-iii",
      "title": "角色扮演游戏站｜第三部流程",
      "url": "https://www.rpgsite.net/guide/21433-fire-emblem-fortunes-weave-part-iii-salvation-walkthrough",
      "author": "Adam Vitale",
      "published": "2026-09-20",
      "accessed": "2026-09-25",
      "type": "作者流程攻略"
    },
    {
      "id": "rpg-prologue",
      "title": "角色扮演游戏站｜序章流程",
      "url": "https://www.rpgsite.net/guide/21324-fire-emblem-fortunes-weave-prologue-walkthrough",
      "author": "Adam Vitale",
      "accessed": "2026-09-25",
      "type": "作者流程攻略"
    },
    {
      "id": "gs-char-1",
      "title": "游民星空｜角色资料第1页",
      "url": "https://www.gamersky.com/handbook/202609/2211429.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-2",
      "title": "游民星空｜角色资料第2页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_2.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-3",
      "title": "游民星空｜角色资料第3页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_3.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-4",
      "title": "游民星空｜角色资料第4页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_4.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-5",
      "title": "游民星空｜角色资料第5页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_5.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-6",
      "title": "游民星空｜角色资料第6页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_6.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-7",
      "title": "游民星空｜角色资料第7页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_7.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-8",
      "title": "游民星空｜角色资料第8页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_8.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-9",
      "title": "游民星空｜角色资料第9页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_9.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-10",
      "title": "游民星空｜角色资料第10页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_10.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-11",
      "title": "游民星空｜角色资料第11页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_11.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-12",
      "title": "游民星空｜角色资料第12页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_12.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-13",
      "title": "游民星空｜角色资料第13页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_13.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-14",
      "title": "游民星空｜角色资料第14页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_14.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-15",
      "title": "游民星空｜角色资料第15页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_15.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-16",
      "title": "游民星空｜巴卡尼亚角色资料",
      "url": "https://www.gamersky.com/handbook/202609/2211429_16.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文资料核对",
      "notes": "伤害降至90%，即减少10%，不可误写减伤90%。"
    },
    {
      "id": "gs-char-17",
      "title": "游民星空｜角色资料第17页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_17.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-18",
      "title": "游民星空｜角色资料第18页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_18.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-19",
      "title": "游民星空｜角色资料第19页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_19.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-20",
      "title": "游民星空｜角色资料第20页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_20.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-21",
      "title": "游民星空｜角色资料第21页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_21.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-22",
      "title": "游民星空｜角色资料第22页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_22.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-23",
      "title": "游民星空｜角色资料第23页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_23.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-24",
      "title": "游民星空｜角色资料第24页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_24.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-25",
      "title": "游民星空｜角色资料第25页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_25.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-26",
      "title": "游民星空｜角色资料第26页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_26.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-27",
      "title": "游民星空｜丹提角色资料",
      "url": "https://www.gamersky.com/handbook/202609/2211429_27.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文资料核对",
      "notes": "与Serenes Forest交叉核对Ddg为必杀回避；不等于普通回避。"
    },
    {
      "id": "gs-char-28",
      "title": "游民星空｜角色资料第28页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_28.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-29",
      "title": "游民星空｜角色资料第29页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_29.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-30",
      "title": "游民星空｜角色资料第30页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_30.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-31",
      "title": "游民星空｜角色资料第31页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_31.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-32",
      "title": "游民星空｜角色资料第32页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_32.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-33",
      "title": "游民星空｜伊欧角色资料",
      "url": "https://www.gamersky.com/handbook/202609/2211429_33.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文资料核对",
      "notes": "Shld对应防御力；Ddg对应必杀回避。"
    },
    {
      "id": "gs-char-34",
      "title": "游民星空｜角色资料第34页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_34.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-35",
      "title": "游民星空｜角色资料第35页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_35.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-36",
      "title": "游民星空｜角色资料第36页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_36.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-37",
      "title": "游民星空｜角色资料第37页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_37.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-38",
      "title": "游民星空｜角色资料第38页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_38.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-39",
      "title": "游民星空｜角色资料第39页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_39.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-40",
      "title": "游民星空｜角色资料第40页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_40.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-41",
      "title": "游民星空｜角色资料第41页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_41.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-42",
      "title": "游民星空｜角色资料第42页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_42.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-43",
      "title": "游民星空｜角色资料第43页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_43.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-44",
      "title": "游民星空｜角色资料第44页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_44.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-45",
      "title": "游民星空｜角色资料第45页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_45.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-46",
      "title": "游民星空｜角色资料第46页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_46.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-47",
      "title": "游民星空｜角色资料第47页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_47.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-48",
      "title": "游民星空｜角色资料第48页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_48.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-49",
      "title": "游民星空｜角色资料第49页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_49.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-50",
      "title": "游民星空｜角色资料第50页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_50.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-51",
      "title": "游民星空｜角色资料第51页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_51.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-52",
      "title": "游民星空｜角色资料第52页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_52.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "gs-char-53",
      "title": "游民星空｜角色资料第53页",
      "url": "https://www.gamersky.com/handbook/202609/2211429_53.shtml",
      "author": "瑞破受气包",
      "published": "2026-09-17",
      "accessed": "2026-09-25",
      "type": "中文人物数据"
    },
    {
      "id": "sf-social5",
      "title": "Serenes Forest｜Combined Social Media Info (Part 5)",
      "url": "https://serenesforest.net/2026/07/30/fortunes-weave-japanese-twitter-information-part-5/",
      "author": "VincentASM",
      "published": "2026-07-30",
      "accessed": "2026-09-25",
      "type": "官方社媒展示整理与画面分析",
      "notes": "包含8月更新；仅采用官方介绍或明确画面数值，作者猜测不作确定事实。宣传期数据不保证正式版相同。"
    },
    {
      "id": "sf-preview",
      "title": "Serenes Forest｜Media Previews",
      "url": "https://serenesforest.net/2026/08/13/fortunes-weave-media-previews/",
      "author": "VincentASM",
      "published": "2026-08-13",
      "accessed": "2026-09-25",
      "type": "试玩视频原作者整理",
      "notes": "用于独特机制补充；属于发售前画面，需标明范围。"
    },
    {
      "id": "sf-debut",
      "title": "Serenes Forest｜September 2025 Nintendo Direct Analysis",
      "url": "https://serenesforest.net/2025/09/12/fortunes-weave-september-2025-nintendo-direct-analysis/",
      "author": "VincentASM",
      "published": "2025-09-12",
      "accessed": "2026-09-25",
      "type": "原作者预告画面解析",
      "notes": "仅作独特机制证据，正式版参数未确认。"
    },
    {
      "id": "sf-june",
      "title": "Serenes Forest｜9th June Nintendo Direct Analysis",
      "url": "https://serenesforest.net/2026/06/09/fortunes-weave-9th-june-nintendo-direct-analysis/",
      "author": "VincentASM",
      "published": "2026-06-09",
      "accessed": "2026-09-25",
      "type": "原作者预告画面解析",
      "notes": "仅作独特机制证据，演示单次数值不推为固定消耗。"
    },
    {
      "id": "gamespot-preview",
      "title": "GameSpot｜Fortune’s Weave Feels Like Four Games’ Worth Of Fire Emblem",
      "url": "https://www.gamespot.com/articles/fire-emblem-fortunes-weave-feels-like-four-games-worth-of-fire-emblem/",
      "author": "Steve Watts",
      "published": "2026-08-13",
      "accessed": "2026-09-25",
      "type": "作者实际试玩",
      "notes": "作者试玩蕾达与赛奥朵拉前期；只转述其实际体验的歌曲辅助、直线攻击与骑士团。"
    },
    {
      "id": "sensatez-blaze",
      "title": "Sensatez｜Blaze Arts — Fortune’s Weave’s New, Major Mechanic",
      "url": "https://sensatez.net/blaze-arts-fire-emblem-fortunes-weave-new-major-mechanic.html",
      "author": "William Hernandez",
      "published": "2025-09-13",
      "accessed": "2026-09-25",
      "type": "原作者首支预告UI转录",
      "notes": "只采用Song of Beasts次数和Moving Shadow界面事实；不采用作者关于全角色皆有Blaze Arts或HP消耗公式的推测。"
    },
    {
      "id": "pt-tier",
      "author": "Connor Christie",
      "updated": "2026-09-24",
      "url": "https://www.pockettactics.com/fire-emblem-fortunes-weave/tier-list",
      "independenceGroup": "pocket-tactics",
      "scope": "57人跨阶段分档，作者称150小时游玩；排除救世主与四领主。未公开数值权重。",
      "title": "口袋战术｜角色分档"
    },
    {
      "id": "kg-tier",
      "author": "Rafly Wibowo",
      "published": "2026-09-24",
      "url": "https://www.keengamer.com/articles/guides/fire-emblem-fortunes-weave-tier-list-best-characters-ranked-for-every-route/",
      "independenceGroup": "keengamer",
      "scope": "46名第一部招募角色；考虑成长、技能、队伍定位、最易招募路线与成本，兼顾后续。四领主另按战力及免费队友排序。",
      "title": "核心玩家｜角色与路线评价"
    },
    {
      "id": "sf-preview-analysis",
      "author": "VincentASM",
      "published": "2026-08-13",
      "url": "https://serenesforest.net/2026/08/13/fortunes-weave-media-previews/",
      "independenceGroup": "serenes-forest",
      "scope": "独立署名的原始影像分析；不是发售后第三张强度榜。明确更正赛奥朵拉减伤观测，说明影像推断应保留修订与置信范围。",
      "title": "宁静之森｜试玩影像分析"
    },
    {
      "id": "sf-abilities",
      "author": null,
      "published": null,
      "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
      "independenceGroup": "serenes-forest",
      "scope": "进行中的角色技能资料，适合字段证据，不作为媒体投票。",
      "title": "角色资料原文"
    },
    {
      "id": "gs-shallow-analysis",
      "author": "可尔必思好喝",
      "published": "2026-09-22 09:47:57",
      "url": "https://www.gamersky.com/handbook/202609/2214415.shtml",
      "independenceGroup": "xiaohongshu-kebisi",
      "originalPlatform": "小红书",
      "originalUrlVerified": false,
      "scope": "转载作者自用分析，仅考虑成长和个人/专属技能；未考虑战技、支援数量及训练次数。",
      "title": "角色资料原文"
    },
    {
      "id": "17173-shallow-repost",
      "author": "可尔必思好喝",
      "published": "2026-09-22 11:03:29",
      "url": "https://news.17173.com/content/09222026/110329027.shtml",
      "independenceGroup": "xiaohongshu-kebisi",
      "repostOf": "gs-shallow-analysis",
      "scope": "页末明确来源游民星空。同一分析链，只计一个作者观点；原帖未验证，不称独立核验。",
      "title": "角色资料原文"
    }
  ],
  "characters": [
    {
      "id": "esmeralda",
      "originalName": "Esmeralda",
      "name": "艾丝梅拉尔达",
      "growthRates": {
        "hp": 55,
        "strength": 55,
        "magic": 20,
        "speed": 35,
        "dexterity": 35,
        "defense": 45,
        "resistance": 25,
        "luck": 35,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "枪术",
        "斧术",
        "重装术"
      ],
      "proficiencyCodes": [
        "spear",
        "axe",
        "heavyArmor"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；迪托利希剧情加入；四条路线均有加入条件。",
        "costNote": "支援3；名声6–9；另需委托",
        "autoRoutes": [
          "迪托利希"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "numericIntervals": {
              "supportLevel": [
                2,
                3
              ]
            },
            "earliestChapterAccordingToGamersky": 5
          },
          "迪托利希": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 2
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-10",
          "url": "https://www.gamersky.com/handbook/202609/2211429_10.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-10",
          "url": "https://www.gamersky.com/handbook/202609/2211429_10.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-10",
          "url": "https://www.gamersky.com/handbook/202609/2211429_10.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "availability.costByRoute.凯伊.supportLevel",
          "values": [
            {
              "value": 3,
              "sourceId": "rpg-recruitment"
            },
            {
              "value": 2,
              "sourceId": "gs-char-10"
            }
          ],
          "resolution": "路线成本暂以RPG原文为基准；保留区间，不把差异强行平均。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "埃斯梅拉达",
        "艾丝美拉尔达"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "强健腕力",
          "nameEn": "Brawn",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "装备重量×0.8",
          "trigger": "固定个人能力；取整方式未注明",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "投掷臂",
          "nameEn": "Throwing Arm",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "命中+10、攻击+2",
          "trigger": "投枪；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "投掷臂+",
          "nameEn": "Throwing Arm+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "命中+20、攻击+4",
          "trigger": "投枪；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "装备减重",
        "投枪强化"
      ],
      "roleEvidence": [
        {
          "tag": "装备减重",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "固定个人能力；取整方式未注明"
        },
        {
          "tag": "投枪强化",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "投枪；限本次战斗"
        },
        {
          "tag": "投枪强化",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "投枪；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          28,
          42
        ],
        [
          46,
          67
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "装备减重有稳定价值，但收益依武器重量；投枪加成仅在投枪时计入。"
      ],
      "media": {
        "originalName": "Esmeralda",
        "id": "esmeralda",
        "name": "艾丝梅拉尔达",
        "ptTier": "S",
        "kgTier": "A",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "fabio",
      "originalName": "Fabio",
      "name": "法毕欧",
      "growthRates": {
        "hp": 40,
        "strength": 25,
        "magic": 50,
        "speed": 35,
        "dexterity": 40,
        "defense": 30,
        "resistance": 45,
        "luck": 35,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "黑魔术",
        "指挥术"
      ],
      "proficiencyCodes": [
        "blackMagic",
        "authority"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；迪托利希剧情加入；凯伊 / 赛奥朵拉不可挖角。",
        "costNote": "支援3；名声9；另需外传",
        "autoRoutes": [
          "迪托利希"
        ],
        "unavailableRoutes": [
          "凯伊",
          "赛奥朵拉"
        ],
        "costByRoute": {
          "凯伊": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 1
          },
          "赛奥朵拉": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Dietrich"
            ],
            "otherConditions": [
              "对应队伍先在大剑斗祭败退；原作者估计约第12章",
              "赠送满意的武器；作者实测Da Mina武器可行"
            ],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "迪托利希",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 9,
        "routeCount": 2,
        "storyGate": {
          "phase": "I",
          "route": "蕾达",
          "chapterApprox": 12,
          "condition": "相关领主队伍在大剑斗祭败退",
          "sourceId": "rpg-recruitment"
        }
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-9",
          "url": "https://www.gamersky.com/handbook/202609/2211429_9.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-9",
          "url": "https://www.gamersky.com/handbook/202609/2211429_9.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-9",
          "url": "https://www.gamersky.com/handbook/202609/2211429_9.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "法比奥"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "黑暗召唤",
          "nameEn": "Dark Calling",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "相邻敌人必杀回避-5",
          "trigger": "保持相邻",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "黑暗秘术",
          "nameEn": "Dark Secrets",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "黑暗召唤范围扩至2格",
          "trigger": "需黑暗召唤效果",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": null,
          "nameEn": null,
          "nameZhStatus": null,
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": null,
          "trigger": null,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "原资料以问号占位。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "团队必杀辅助"
      ],
      "roleEvidence": [
        {
          "tag": "团队必杀辅助",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "保持相邻"
        },
        {
          "tag": "团队必杀辅助",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "需黑暗召唤效果"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          0,
          15
        ],
        [
          12,
          25
        ],
        [
          22,
          42
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "削减的是必杀回避，按近距离团队贡献计分；第三项未知扩大培养后上界。"
      ],
      "media": {
        "originalName": "Fabio",
        "id": "fabio",
        "name": "法毕欧",
        "ptTier": "S",
        "kgTier": "A",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-31",
      "originalName": "Guzran",
      "name": "古扎岚",
      "growthRates": {
        "hp": 45,
        "strength": 45,
        "magic": 20,
        "speed": 50,
        "dexterity": 45,
        "defense": 35,
        "resistance": 20,
        "luck": 45,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "格斗术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "sword",
        "gauntlet",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；凯伊剧情加入；四条路线均有加入条件。",
        "costNote": "支援1–3；名声3–8",
        "autoRoutes": [
          "凯伊"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "本路线挖角教学自动加入"
            ],
            "earliestChapterAccordingToGamersky": 3
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 3,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 3,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-31",
          "url": "https://www.gamersky.com/handbook/202609/2211429_31.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-31",
          "url": "https://www.gamersky.com/handbook/202609/2211429_31.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-31",
          "url": "https://www.gamersky.com/handbook/202609/2211429_31.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "热血",
          "nameEn": "Hot-Headed",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "命中、回避、必杀中一项+10",
          "trigger": "战斗中；只取一项，各结果概率未记载",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "最佳状态",
          "nameEn": "Top Form",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "热血的增幅改为+15",
          "trigger": "强化热血；仍只取一项",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "最佳状态+",
          "nameEn": "Top Form+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "热血的增幅改为+20",
          "trigger": "强化热血；仍只取一项",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "不定属性强化"
      ],
      "roleEvidence": [
        {
          "tag": "不定属性强化",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战斗中；只取一项，各结果概率未记载"
        },
        {
          "tag": "不定属性强化",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "强化热血；仍只取一项"
        },
        {
          "tag": "不定属性强化",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "强化热血；仍只取一项"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          14,
          28
        ],
        [
          28,
          48
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "随机只获得一类加成，结果概率未公布，不能把命中、回避、必杀同时相加。"
      ],
      "media": {
        "originalName": "Guzran",
        "id": "recruit-31",
        "name": "古扎岚",
        "ptTier": "S",
        "kgTier": "A",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-17",
      "originalName": "Sirocco",
      "name": "西洛可",
      "growthRates": {
        "hp": 40,
        "strength": 40,
        "magic": 40,
        "speed": 45,
        "dexterity": 50,
        "defense": 35,
        "resistance": 35,
        "luck": 50,
        "charm": 45
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "黑魔术",
        "白魔术",
        "指挥术"
      ],
      "proficiencyCodes": [
        "sword",
        "blackMagic",
        "whiteMagic",
        "authority"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；蕾达剧情加入；四条路线均有加入条件。",
        "costNote": "支援1–3；名声5–9；另需委托",
        "autoRoutes": [
          "蕾达"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 5,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 1
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 5,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-17",
          "url": "https://www.gamersky.com/handbook/202609/2211429_17.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-17",
          "url": "https://www.gamersky.com/handbook/202609/2211429_17.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-17",
          "url": "https://www.gamersky.com/handbook/202609/2211429_17.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "西罗科"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "女神眷顾",
          "nameEn": "Goddess’s Favor",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "自身回复5HP",
          "trigger": "每次战斗后",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "风之任性",
          "nameEn": "Wind’s Caprice",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "回避从+1、+5、+20中取一项",
          "trigger": "战斗中；各结果概率未记载",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "风之任性+",
          "nameEn": "Wind’s Caprice+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "回避从+1、+5、+20、+30中取一项",
          "trigger": "战斗中；各结果概率未记载",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "战后自愈",
        "不定幅度回避"
      ],
      "roleEvidence": [
        {
          "tag": "战后自愈",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "每次战斗后"
        },
        {
          "tag": "不定幅度回避",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战斗中；各结果概率未记载"
        },
        {
          "tag": "不定幅度回避",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战斗中；各结果概率未记载"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          28,
          40
        ],
        [
          30,
          69
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "每战后回复有稳定性；随机回避不假定均匀分布，保留宽区间。"
      ],
      "media": {
        "originalName": "Sirocco",
        "id": "recruit-17",
        "name": "西洛可",
        "ptTier": "S",
        "kgTier": "S",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "sofia",
      "originalName": "Sofia",
      "name": "索绯雅",
      "growthRates": {
        "hp": 35,
        "strength": 30,
        "magic": 45,
        "speed": 30,
        "dexterity": 40,
        "defense": 25,
        "resistance": 40,
        "luck": 30,
        "charm": 40
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {
        "defense": [
          20,
          25
        ]
      },
      "proficiencies": [
        "弓术",
        "白魔术"
      ],
      "proficiencyCodes": [
        "bow",
        "whiteMagic"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；赛奥朵拉剧情加入；四条路线均有加入条件。",
        "costNote": "支援3；名声7–9",
        "autoRoutes": [
          "赛奥朵拉"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 3
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "本路线挖角教学自动加入"
            ],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 7,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-39",
          "url": "https://www.gamersky.com/handbook/202609/2211429_39.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-39",
          "url": "https://www.gamersky.com/handbook/202609/2211429_39.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-39",
          "url": "https://www.gamersky.com/handbook/202609/2211429_39.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "growthRates.defense",
          "values": [
            {
              "value": 25,
              "sourceId": "sf-growth"
            },
            {
              "value": 20,
              "sourceId": "gs-char-39"
            }
          ],
          "resolution": "growthRates暂以SF整表值作基准；模型须同时检查numericIntervals区间。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "治疗知识",
          "nameEn": "Healing Knowledge",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "治疗量+10HP",
          "trigger": "用魔法治疗友军",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "远程治疗",
          "nameEn": "Distant Healing",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "治疗魔法射程+1",
          "trigger": "治疗魔法",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "远程治疗+",
          "nameEn": "Distant Healing+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "治疗魔法射程+2",
          "trigger": "治疗魔法",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "稳定治疗强化",
        "治疗射程"
      ],
      "roleEvidence": [
        {
          "tag": "稳定治疗强化",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "用魔法治疗友军"
        },
        {
          "tag": "治疗射程",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "治疗魔法"
        },
        {
          "tag": "治疗射程",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "治疗魔法"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          48,
          62
        ],
        [
          70,
          90
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "治疗量与治疗射程都只归团队支援，不能再算输出或移动。"
      ],
      "media": {
        "originalName": "Sofia",
        "id": "sofia",
        "name": "索绯雅",
        "ptTier": "S",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "peter",
      "originalName": "Peter",
      "name": "皮特鲁",
      "growthRates": {
        "hp": 40,
        "strength": 35,
        "magic": 20,
        "speed": 45,
        "dexterity": 60,
        "defense": 30,
        "resistance": 25,
        "luck": 35,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "弓术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "bow",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；凯伊剧情加入；四条路线均有加入条件。",
        "costNote": "支援3；名声7–10；另需委托",
        "autoRoutes": [
          "凯伊"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 1
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 7,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-7",
          "url": "https://www.gamersky.com/handbook/202609/2211429_7.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-7",
          "url": "https://www.gamersky.com/handbook/202609/2211429_7.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-7",
          "url": "https://www.gamersky.com/handbook/202609/2211429_7.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "彼得"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "稳健瞄准",
          "nameEn": "Steady Aim",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "弓战技射程+1",
          "trigger": "使用弓战技攻击",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "弹道修正",
          "nameEn": "Correct for Drift",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "命中+10",
          "trigger": "本次命中率≥90%；限战斗中",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "弹道修正+",
          "nameEn": "Correct for Drift+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "命中+20",
          "trigger": "本次命中率≥75%；限战斗中",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "弓射程",
        "条件命中"
      ],
      "roleEvidence": [
        {
          "tag": "弓射程",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "使用弓战技攻击"
        },
        {
          "tag": "条件命中",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "本次命中率≥90%；限战斗中"
        },
        {
          "tag": "条件命中",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "本次命中率≥75%；限战斗中"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          30,
          45
        ],
        [
          34,
          64
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "弓战技射程有主动交战价值；命中强化需满足命中阈值，不能帮助所有低命中对局。"
      ],
      "media": {
        "originalName": "Peter",
        "id": "peter",
        "name": "皮特鲁",
        "ptTier": "A",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-6",
      "originalName": "Tialla",
      "name": "媞雅拉",
      "growthRates": {
        "hp": 30,
        "strength": 25,
        "magic": 45,
        "speed": 35,
        "dexterity": 40,
        "defense": 20,
        "resistance": 40,
        "luck": 50,
        "charm": 45
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {
        "hp": [
          30,
          35
        ]
      },
      "proficiencies": [
        "黑魔术",
        "白魔术",
        "指挥术"
      ],
      "proficiencyCodes": [
        "blackMagic",
        "whiteMagic",
        "authority"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；凯伊剧情加入；四条路线均有加入条件。",
        "costNote": "支援3；名声8–10；3000G；另需外传",
        "autoRoutes": [
          "凯伊"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 1
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": 3000,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Cai"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": 3000,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Cai"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": 3000,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Cai"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 8,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-6",
          "url": "https://www.gamersky.com/handbook/202609/2211429_6.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-6",
          "url": "https://www.gamersky.com/handbook/202609/2211429_6.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-6",
          "url": "https://www.gamersky.com/handbook/202609/2211429_6.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "growthRates.hp",
          "values": [
            {
              "value": 30,
              "sourceId": "sf-growth"
            },
            {
              "value": 35,
              "sourceId": "gs-char-6"
            }
          ],
          "resolution": "growthRates暂以SF整表值作基准；模型须同时检查numericIntervals区间。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "蒂亚拉"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "军师智谋",
          "nameEn": "Tactician’s Wit",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "对友军可用的战技射程+1",
          "trigger": "仅对友军战技",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "军师洞察",
          "nameEn": "Tactician’s Insight",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "敌人回避-5",
          "trigger": "自身先攻战斗后；持续至该敌人下次战斗结束",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "军师洞察+",
          "nameEn": "Tactician’s Insight+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "敌人回避-10",
          "trigger": "自身先攻战斗后；持续至该敌人下次战斗结束",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "辅助射程",
        "敌方回避削弱"
      ],
      "roleEvidence": [
        {
          "tag": "辅助射程",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "仅对友军战技"
        },
        {
          "tag": "敌方回避削弱",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻战斗后；持续至该敌人下次战斗结束"
        },
        {
          "tag": "敌方回避削弱",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻战斗后；持续至该敌人下次战斗结束"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          24,
          42
        ],
        [
          35,
          65
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "对友军战技射程与攻击后减益归团队；减益需要先攻并由后续战斗利用。"
      ],
      "media": {
        "originalName": "Tialla",
        "id": "recruit-6",
        "name": "媞雅拉",
        "ptTier": "A",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "bonaventure",
      "originalName": "Bonaventure",
      "name": "波拿帕尔特",
      "growthRates": {
        "hp": 35,
        "strength": 35,
        "magic": 45,
        "speed": 40,
        "dexterity": 50,
        "defense": 30,
        "resistance": 40,
        "luck": 35,
        "charm": 40
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "白魔术",
        "黑魔术",
        "指挥术"
      ],
      "proficiencyCodes": [
        "sword",
        "whiteMagic",
        "blackMagic",
        "authority"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；赛奥朵拉剧情加入；凯伊 / 迪托利希 / 蕾达不可挖角。",
        "costNote": "本路线剧情加入；未列挖角支出。",
        "autoRoutes": [
          "赛奥朵拉"
        ],
        "unavailableRoutes": [
          "凯伊",
          "迪托利希",
          "蕾达"
        ],
        "costByRoute": {
          "凯伊": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 1
          },
          "蕾达": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "赛奥朵拉"
        ],
        "minimumRenownForNegotiatedRecruitment": null,
        "routeCount": 1
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-12",
          "url": "https://www.gamersky.com/handbook/202609/2211429_12.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-12",
          "url": "https://www.gamersky.com/handbook/202609/2211429_12.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-12",
          "url": "https://www.gamersky.com/handbook/202609/2211429_12.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "博纳旺蒂尔"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "贤者忠告",
          "nameEn": "Sage Advice",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "相邻友军防守+3",
          "trigger": "保持相邻",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "追加情报",
          "nameEn": "Additional Intel",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "相邻友军命中+10",
          "trigger": "友军战斗时；发动率30%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": null,
          "nameEn": null,
          "nameZhStatus": null,
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": null,
          "trigger": null,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "原资料以问号占位。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "团队物防",
        "概率团队命中"
      ],
      "roleEvidence": [
        {
          "tag": "团队物防",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "保持相邻"
        },
        {
          "tag": "概率团队命中",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "友军战斗时；发动率30%"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          0,
          15
        ],
        [
          25,
          40
        ],
        [
          27,
          50
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "相邻防守光环稳定但依站位；命中光环只有30%发动，未知项保留范围。"
      ],
      "media": {
        "originalName": "Bonaventure",
        "id": "bonaventure",
        "name": "波拿帕尔特",
        "ptTier": "A",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "talimun",
      "originalName": "Talimun",
      "name": "谭利穆恩",
      "growthRates": {
        "hp": 45,
        "strength": 40,
        "magic": 45,
        "speed": 40,
        "dexterity": 45,
        "defense": 35,
        "resistance": 40,
        "luck": 60,
        "charm": 50
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "黑魔术",
        "指挥术"
      ],
      "proficiencyCodes": [
        "sword",
        "blackMagic",
        "authority"
      ],
      "availability": {
        "phase": "III",
        "routeNote": "第三部第1节剧情加入；原作者建议先完成第一部本人外传，以免遗漏。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": 1,
        "paraloguePriorCompletionRecommended": "Talimun"
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-20",
          "url": "https://www.gamersky.com/handbook/202609/2211429_20.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-20",
          "url": "https://www.gamersky.com/handbook/202609/2211429_20.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "塔利蒙"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "豪侠之运",
          "nameEn": "Swashbuckler’s Luck",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "幸运+3",
          "trigger": "固定个人能力",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "炮术天赋",
          "nameEn": "Cannoning Flair",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "命中+30",
          "trigger": "使用炮台；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": null,
          "nameEn": null,
          "nameZhStatus": null,
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": null,
          "trigger": null,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "原资料以问号占位。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "幸运强化",
        "炮台命中"
      ],
      "roleEvidence": [
        {
          "tag": "幸运强化",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "固定个人能力"
        },
        {
          "tag": "炮台命中",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "使用炮台；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          4,
          9
        ],
        [
          6,
          32
        ],
        [
          0,
          0
        ],
        [
          0,
          15
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "幸运小幅固定加成与炮台专用命中分别计；炮台不是每张图都有。"
      ],
      "media": {
        "originalName": "Talimun",
        "id": "talimun",
        "name": "谭利穆恩",
        "ptTier": "A",
        "kgTier": null,
        "ptStatus": "ranked",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "orchel",
      "originalName": "Orchel",
      "name": "欧露赫露",
      "growthRates": {
        "hp": 30,
        "strength": 60,
        "magic": 45,
        "speed": 10,
        "dexterity": 20,
        "defense": 60,
        "resistance": 60,
        "luck": 20,
        "charm": 60
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "斧术",
        "黑魔术"
      ],
      "proficiencyCodes": [
        "axe",
        "blackMagic"
      ],
      "availability": {
        "phase": "III",
        "routeNote": "第三部第1节剧情加入；原作者建议先完成第一部本人外传，以免遗漏。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": 1,
        "paraloguePriorCompletionRecommended": "Orchel"
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-21",
          "url": "https://www.gamersky.com/handbook/202609/2211429_21.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-21",
          "url": "https://www.gamersky.com/handbook/202609/2211429_21.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "奥谢尔"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "坚固身躯",
          "nameEn": "Solid and Sturdy",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "防守+5；视为重装；不能转骑兵或飞行兵种",
          "trigger": "固定个人能力",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "预判感知",
          "nameEn": "Predictive Sense",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "魔法命中+20",
          "trigger": "自身先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": null,
          "nameEn": null,
          "nameZhStatus": null,
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": null,
          "trigger": null,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "原资料以问号占位。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "物防强化",
        "重装属性",
        "职业限制",
        "主动魔法命中"
      ],
      "roleEvidence": [
        {
          "tag": "物防强化",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "固定个人能力"
        },
        {
          "tag": "重装属性",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "固定个人能力"
        },
        {
          "tag": "职业限制",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "固定个人能力"
        },
        {
          "tag": "主动魔法命中",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          38,
          52
        ],
        [
          40,
          66
        ],
        [
          0,
          0
        ],
        [
          0,
          15
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "固定防守加分，重装弱点拓宽区间；禁止骑飞在机动维单独约束。"
      ],
      "media": {
        "originalName": "Orchel",
        "id": "orchel",
        "name": "欧露赫露",
        "ptTier": "A",
        "kgTier": null,
        "ptStatus": "ranked",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "anatolia",
      "originalName": "Anatolia",
      "name": "爱娜特莉亚",
      "growthRates": {
        "hp": 40,
        "strength": 35,
        "magic": 50,
        "speed": 50,
        "dexterity": 45,
        "defense": 35,
        "resistance": 40,
        "luck": 40,
        "charm": 50
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "格斗术",
        "黑魔术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "gauntlet",
        "blackMagic",
        "infantry"
      ],
      "availability": {
        "phase": "III",
        "routeNote": "第三部第1节剧情加入；原作者建议先完成第一部本人外传，以免遗漏。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": 1,
        "paraloguePriorCompletionRecommended": "Anatolia"
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-22",
          "url": "https://www.gamersky.com/handbook/202609/2211429_22.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-22",
          "url": "https://www.gamersky.com/handbook/202609/2211429_22.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "阿纳托利亚"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "天之流",
          "nameEn": "Celestial Flow",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "回避+3",
          "trigger": "固定个人能力",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "循环",
          "nameEn": "Continuum",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "自身回复5HP",
          "trigger": "闪避一次攻击时",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "循环+",
          "nameEn": "Continuum+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "自身回复10HP",
          "trigger": "闪避一次攻击时",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "辉龙打击／天界量表",
          "nameEn": "Shining Dragon Strike / Celestial Wells",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": null,
          "slotKind": "unique_mechanic",
          "description": "特殊技伤害覆盖范围内敌人与障碍，范围随档次扩大；天界量表由普通攻击增加，诅咒装备令其减少",
          "trigger": "宣传期画面；量表、档次、消耗等具体规则未完整核实",
          "sourceId": "sf-preview",
          "url": "https://serenesforest.net/2026/08/13/fortunes-weave-media-previews/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "versionScope": "发售前展示",
          "notes": [
            "未以宣传片等级推定学习等级。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "回避强化",
        "闪避自愈",
        "范围攻击",
        "障碍破坏",
        "特殊量表"
      ],
      "roleEvidence": [
        {
          "tag": "回避强化",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "固定个人能力"
        },
        {
          "tag": "闪避自愈",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "闪避一次攻击时"
        },
        {
          "tag": "闪避自愈",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "闪避一次攻击时"
        },
        {
          "tag": "范围攻击",
          "abilityIndex": 3,
          "sourceId": "sf-preview",
          "url": "https://serenesforest.net/2026/08/13/fortunes-weave-media-previews/",
          "condition": "宣传期画面；量表、档次、消耗等具体规则未完整核实"
        },
        {
          "tag": "障碍破坏",
          "abilityIndex": 3,
          "sourceId": "sf-preview",
          "url": "https://serenesforest.net/2026/08/13/fortunes-weave-media-previews/",
          "condition": "宣传期画面；量表、档次、消耗等具体规则未完整核实"
        },
        {
          "tag": "特殊量表",
          "abilityIndex": 3,
          "sourceId": "sf-preview",
          "url": "https://serenesforest.net/2026/08/13/fortunes-weave-media-previews/",
          "condition": "宣传期画面；量表、档次、消耗等具体规则未完整核实"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          4,
          8
        ],
        [
          12,
          47
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "回复必须先成功闪避；宣传片专属技未纳入正式版定量评分。"
      ],
      "media": {
        "originalName": "Anatolia",
        "id": "anatolia",
        "name": "爱娜特莉亚",
        "ptTier": "A",
        "kgTier": null,
        "ptStatus": "ranked",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "bertrand",
      "originalName": "Bertrand",
      "name": "贝特兰",
      "growthRates": {
        "hp": 50,
        "strength": 55,
        "magic": 15,
        "speed": 45,
        "dexterity": 50,
        "defense": 45,
        "resistance": 20,
        "luck": 30,
        "charm": 50
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [],
      "proficiencyCodes": [],
      "availability": {
        "phase": "III",
        "routeNote": "第二部作为客串单位，第三部正式加入；原作者建议先完成第一部本人外传。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": null,
        "guestPhase": "II",
        "paraloguePriorCompletionRecommended": "Bertrand"
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": false,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "missing",
        "availability": "known"
      },
      "aliases": [
        "贝特朗"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "安魂流",
          "nameEn": "Requiem Style",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "无视攻速条件追击",
          "trigger": "战斗中；发动率5%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "后之先",
          "nameEn": "Go No Sen",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "自身先出手",
          "trigger": "敌方阶段战斗；发动率25%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "先之先",
          "nameEn": "Sen No Sen",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "自身追击提前至敌方反击前",
          "trigger": "自身先攻；发动率25%；仍需有追击",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "概率追击",
        "概率抢先",
        "追击顺序"
      ],
      "roleEvidence": [
        {
          "tag": "概率追击",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战斗中；发动率5%"
        },
        {
          "tag": "概率抢先",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌方阶段战斗；发动率25%"
        },
        {
          "tag": "追击顺序",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；发动率25%；仍需有追击"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          3,
          7
        ],
        [
          15,
          31
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "5%强制追击不能算常驻追击；25%先攻及追击前置还需阶段、追击条件。"
      ],
      "media": {
        "originalName": "Bertrand",
        "id": "bertrand",
        "name": "贝特兰",
        "ptTier": "A",
        "kgTier": null,
        "ptStatus": "ranked",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "recruit-19",
      "originalName": "Mu",
      "name": "穆",
      "growthRates": {
        "hp": 30,
        "strength": 30,
        "magic": 5,
        "speed": 30,
        "dexterity": 30,
        "defense": 20,
        "resistance": 10,
        "luck": 10,
        "charm": 20
      },
      "effectiveGrowthRates": {
        "hp": 50,
        "strength": 50,
        "magic": 25,
        "speed": 50,
        "dexterity": 50,
        "defense": 40,
        "resistance": 30,
        "luck": 30,
        "charm": 40
      },
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "斧术",
        "格斗术",
        "白魔术"
      ],
      "proficiencyCodes": [
        "sword",
        "axe",
        "gauntlet",
        "whiteMagic"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；蕾达剧情加入；四条路线均有加入条件。",
        "costNote": "支援3；名声7–9；另需交付物品",
        "autoRoutes": [
          "蕾达"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [
              {
                "originalName": "Glirmosa",
                "name": "古尔马欧萨",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [
              {
                "originalName": "Glirmosa",
                "name": "古尔马欧萨",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [
              {
                "originalName": "Glirmosa",
                "name": "古尔马欧萨",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 1
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 7,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-19",
          "url": "https://www.gamersky.com/handbook/202609/2211429_19.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "effectiveGrowthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "Mu*为Signs of Growth生效后；各项比Mu基础高20个百分点。"
        },
        {
          "field": "growthModifier",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "note": "首项个人能力在升级时增强基础成长。"
        },
        {
          "field": "effectiveGrowthRates.crossCheck",
          "sourceId": "gs-char-19",
          "url": "https://www.gamersky.com/handbook/202609/2211429_19.shtml",
          "note": "游民数值与SF的Mu*有效成长一致，故不是来源数值冲突。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-19",
          "url": "https://www.gamersky.com/handbook/202609/2211429_19.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "growthModifier": {
        "originalName": "Signs of Growth",
        "name": "个人成长加成（名称未核对官中）",
        "appliesTo": "九项基础成长率",
        "percentagePoints": 20,
        "condition": "升级时，个人技能生效；职业成长仍须另加",
        "learnedLevel": null,
        "levelNote": "SF将其列为首项不可移除个人能力，未给出具体获得等级；不虚构20级或35级门槛。",
        "sourceIds": [
          "sf-growth",
          "sf-personal"
        ]
      },
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "成长迹象",
          "nameEn": "Signs of Growth",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "基础属性成长增强，幅度未列",
          "trigger": "升级时；不要重复加到已含个人能力的成长表",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "战士之血",
          "nameEn": "Warrior’s Blood",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "随装备武器类型增加属性，属性及幅度未列",
          "trigger": "依当前武器类型",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "战士之血+",
          "nameEn": "Warrior’s Blood+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "随装备武器类型较大幅增加属性，属性及幅度未列",
          "trigger": "依当前武器类型",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。",
        "成长增强与按武器增幅缺具体数值；不能自行补+20%成长或各武器对应属性。"
      ],
      "roleTags": [
        "成长强化",
        "武器条件强化"
      ],
      "roleEvidence": [
        {
          "tag": "成长强化",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "升级时；不要重复加到已含个人能力的成长表"
        },
        {
          "tag": "武器条件强化",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "依当前武器类型"
        },
        {
          "tag": "武器条件强化",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "依当前武器类型"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          0,
          40
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "成长增强只计成长表一次；武器对应属性的增幅未知，培养后个人机制采用宽区间。"
      ],
      "media": {
        "originalName": "Mu",
        "id": "recruit-19",
        "name": "穆",
        "ptTier": "A",
        "kgTier": "S",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-14",
      "originalName": "Lilian",
      "name": "莉利安",
      "growthRates": {
        "hp": 35,
        "strength": 35,
        "magic": 30,
        "speed": 40,
        "dexterity": 55,
        "defense": 30,
        "resistance": 35,
        "luck": 50,
        "charm": 25
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "弓术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "bow",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；赛奥朵拉剧情加入；四条路线均有加入条件。",
        "costNote": "支援2；名声7–8；5000G",
        "autoRoutes": [
          "赛奥朵拉"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 8,
            "gold": 5000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 8,
            "gold": 5000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 7,
            "gold": 5000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 7,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-14",
          "url": "https://www.gamersky.com/handbook/202609/2211429_14.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-14",
          "url": "https://www.gamersky.com/handbook/202609/2211429_14.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-14",
          "url": "https://www.gamersky.com/handbook/202609/2211429_14.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "莉莲"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "安全第一",
          "nameEn": "Safety First",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "命中+10",
          "trigger": "敌人无法反击；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "占据上风",
          "nameEn": "Upper Hand",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+3",
          "trigger": "自身命中率=100%；攻击时",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "占据上风+",
          "nameEn": "Upper Hand+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+5",
          "trigger": "自身命中率=100%；攻击时",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "无反击命中",
        "必中条件输出"
      ],
      "roleEvidence": [
        {
          "tag": "无反击命中",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人无法反击；限本次战斗"
        },
        {
          "tag": "必中条件输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身命中率=100%；攻击时"
        },
        {
          "tag": "必中条件输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身命中率=100%；攻击时"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          4,
          10
        ],
        [
          8,
          37
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "命中优势先要求敌人不能反击；伤害提升依赖100%命中，不能视为无条件加攻。"
      ],
      "media": {
        "originalName": "Lilian",
        "id": "recruit-14",
        "name": "莉利安",
        "ptTier": "A",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "hong-hua",
      "originalName": "Hong Hua",
      "name": "红花",
      "growthRates": null,
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [],
      "proficiencyCodes": [],
      "availability": {
        "phase": "III",
        "routeNote": "序章与第三部剧情加入。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": null,
        "prologuePlayable": true
      },
      "evidence": [
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": false,
      "dataStatus": {
        "growth": "missing",
        "proficiencies": "missing",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "绯红魔法",
          "nameEn": "Crimson Magic",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": null,
          "slotKind": "fixed_personal",
          "description": "魔法攻击时增加命中，具体幅度未确认",
          "trigger": "使用魔法攻击；发动概率未说明",
          "sourceId": "sf-social5",
          "url": "https://serenesforest.net/2026/07/30/fortunes-weave-japanese-twitter-information-part-5/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "versionScope": "发售前展示",
          "notes": [
            "未以宣传片等级推定学习等级。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "个人能力主表未列该角色，未知保持null；不以缺失判为无能力或低强度。"
      ],
      "roleTags": [
        "魔法命中"
      ],
      "roleEvidence": [
        {
          "tag": "魔法命中",
          "abilityIndex": 0,
          "sourceId": "sf-social5",
          "url": "https://serenesforest.net/2026/07/30/fortunes-weave-japanese-twitter-information-part-5/",
          "condition": "使用魔法攻击；发动概率未说明"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          35
        ],
        [
          0,
          65
        ],
        [
          0,
          0
        ],
        [
          0,
          35
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "魔法命中增幅尚未确认，无法作精确机制评价。"
      ],
      "media": {
        "originalName": "Hong Hua",
        "id": "hong-hua",
        "name": "红花",
        "ptTier": "A",
        "kgTier": null,
        "ptStatus": "ranked",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "dante",
      "originalName": "Dante",
      "name": "丹提",
      "growthRates": {
        "hp": 30,
        "strength": 30,
        "magic": 45,
        "speed": 40,
        "dexterity": 40,
        "defense": 20,
        "resistance": 40,
        "luck": 45,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "白魔术",
        "指挥术",
        "黑魔术"
      ],
      "proficiencyCodes": [
        "whiteMagic",
        "authority",
        "blackMagic"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援2–3；名声6–10；8000G",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": 8000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 3
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 8,
            "gold": 8000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": 8000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": 8000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-27",
          "url": "https://www.gamersky.com/handbook/202609/2211429_27.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-27",
          "url": "https://www.gamersky.com/handbook/202609/2211429_27.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-27",
          "url": "https://www.gamersky.com/handbook/202609/2211429_27.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "但丁"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "舞台指导",
          "nameEn": "Stage Direction",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "2格内友军必杀回避+10",
          "trigger": "友军战斗时；发动率=该友军魅力÷2%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [],
          "corroboratingSources": [
            {
              "sourceId": "gs-char-27",
              "url": "https://www.gamersky.com/handbook/202609/2211429_27.shtml"
            }
          ]
        },
        {
          "nameZh": "戏剧效果",
          "nameEn": "Dramatic Effect",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "目标友军命中+10",
          "trigger": "舞台指导发动时",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "戏剧效果+",
          "nameEn": "Dramatic Effect+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "目标友军命中、必杀+10",
          "trigger": "舞台指导发动时",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "概率团队防护",
        "概率团队命中",
        "概率团队必杀"
      ],
      "roleEvidence": [
        {
          "tag": "概率团队防护",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "友军战斗时；发动率=该友军魅力÷2%"
        },
        {
          "tag": "概率团队命中",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "舞台指导发动时"
        },
        {
          "tag": "概率团队命中",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "舞台指导发动时"
        },
        {
          "tag": "概率团队必杀",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "舞台指导发动时"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          8,
          20
        ],
        [
          18,
          44
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "团队魅力按20–40的情境假设，则发动率10%–20%；必杀回避不是普通回避，范围内受益人数假设1–3。"
      ],
      "media": {
        "originalName": "Dante",
        "id": "dante",
        "name": "丹提",
        "ptTier": "A",
        "kgTier": "S",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "diego",
      "originalName": "Diego",
      "name": "迪雅各",
      "growthRates": {
        "hp": 45,
        "strength": 40,
        "magic": 20,
        "speed": 45,
        "dexterity": 60,
        "defense": 35,
        "resistance": 20,
        "luck": 35,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "弓术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "sword",
        "bow",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援2–3；名声8–10；另需外传",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Orchel"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Orchel"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Orchel"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Orchel"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 8,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-25",
          "url": "https://www.gamersky.com/handbook/202609/2211429_25.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-25",
          "url": "https://www.gamersky.com/handbook/202609/2211429_25.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-25",
          "url": "https://www.gamersky.com/handbook/202609/2211429_25.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "迭戈"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "守护者",
          "nameEn": "Caretaker",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "相邻友军不受追击",
          "trigger": "友军战斗时；发动率5%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "毫不留情",
          "nameEn": "No Mercy",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "命中、必杀+5",
          "trigger": "自身追击时",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": null,
          "nameEn": null,
          "nameZhStatus": null,
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": null,
          "trigger": null,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "原资料以问号占位。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "概率团队防追击",
        "追击强化"
      ],
      "roleEvidence": [
        {
          "tag": "概率团队防追击",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "友军战斗时；发动率5%"
        },
        {
          "tag": "追击强化",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身追击时"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          4,
          28
        ],
        [
          2,
          7
        ],
        [
          2,
          22
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "阻止队友受追击仅5%概率；个人命中必杀需自身先能追击，未知第三项保留范围。"
      ],
      "media": {
        "originalName": "Diego",
        "id": "diego",
        "name": "迪雅各",
        "ptTier": "A",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-34",
      "originalName": "Catania",
      "name": "卡塔妮雅",
      "growthRates": {
        "hp": 35,
        "strength": 35,
        "magic": 35,
        "speed": 55,
        "dexterity": 50,
        "defense": 30,
        "resistance": 35,
        "luck": 40,
        "charm": 45
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "枪术",
        "飞行术"
      ],
      "proficiencyCodes": [
        "sword",
        "spear",
        "flying"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；蕾达剧情加入；四条路线均有加入条件。",
        "costNote": "支援1–3；名声7–10",
        "autoRoutes": [
          "蕾达"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 3
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 6
          },
          "蕾达": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "本路线挖角教学自动加入"
            ],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 7,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-34",
          "url": "https://www.gamersky.com/handbook/202609/2211429_34.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-34",
          "url": "https://www.gamersky.com/handbook/202609/2211429_34.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-34",
          "url": "https://www.gamersky.com/handbook/202609/2211429_34.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "卡塔妮娅"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "惩戒狂风",
          "nameEn": "Punishing Squall",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "命中+20",
          "trigger": "自身攻速≥敌攻速+3；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "风之友",
          "nameEn": "Wind My Friend",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+3",
          "trigger": "自身攻速≥敌攻速+5；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "风之友+",
          "nameEn": "Wind My Friend+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻速差≥5时攻击+3；攻速差≥8时另有回避+20",
          "trigger": "阈值均比较双方攻速AS，非速度Spd；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "攻速条件命中",
        "攻速条件输出",
        "攻速条件回避"
      ],
      "roleEvidence": [
        {
          "tag": "攻速条件命中",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身攻速≥敌攻速+3；限本次战斗"
        },
        {
          "tag": "攻速条件输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身攻速≥敌攻速+5；限本次战斗"
        },
        {
          "tag": "攻速条件输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "阈值均比较双方攻速AS，非速度Spd；限本次战斗"
        },
        {
          "tag": "攻速条件回避",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "阈值均比较双方攻速AS，非速度Spd；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          7,
          18
        ],
        [
          13,
          58
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "按攻速差3/5/8分段生效；模型不把高速度成长等同于必达攻速阈值。"
      ],
      "media": {
        "originalName": "Catania",
        "id": "recruit-34",
        "name": "卡塔妮雅",
        "ptTier": "A",
        "kgTier": "A",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "gaitz",
      "originalName": "Gaitz",
      "name": "盖茨",
      "growthRates": {
        "hp": 50,
        "strength": 50,
        "magic": 20,
        "speed": 40,
        "dexterity": 45,
        "defense": 45,
        "resistance": 25,
        "luck": 40,
        "charm": 45
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [],
      "proficiencyCodes": [],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；凯伊 / 赛奥朵拉 / 蕾达不可挖角。",
        "costNote": "支援3；名声10；另需外传",
        "autoRoutes": [],
        "unavailableRoutes": [
          "凯伊",
          "赛奥朵拉",
          "蕾达"
        ],
        "costByRoute": {
          "凯伊": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Bertrand"
            ],
            "otherConditions": [
              "对应队伍先在大剑斗祭败退；原作者估计约第12章"
            ]
          },
          "赛奥朵拉": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "迪托利希"
        ],
        "minimumRenownForNegotiatedRecruitment": 10,
        "routeCount": 1,
        "storyGate": {
          "phase": "I",
          "route": "迪托利希",
          "chapterApprox": 12,
          "condition": "相关领主队伍在大剑斗祭败退",
          "sourceId": "rpg-recruitment"
        }
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": false,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "missing",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "勇者援助",
          "nameEn": "Brave Assist",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "相邻友军防守+3",
          "trigger": "保持相邻",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "闪牙",
          "nameEn": "Flashing Fang",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+4、命中+50",
          "trigger": "攻击时；发动率20%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "闪牙+",
          "nameEn": "Flashing Fang+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+7、命中+100",
          "trigger": "攻击时；发动率20%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "团队物防",
        "概率输出"
      ],
      "roleEvidence": [
        {
          "tag": "团队物防",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "保持相邻"
        },
        {
          "tag": "概率输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "攻击时；发动率20%"
        },
        {
          "tag": "概率输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "攻击时；发动率20%"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          17,
          36
        ],
        [
          25,
          40
        ],
        [
          25,
          40
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "防守光环只归团队；攻击命中大加成先乘20%发动概率，再考虑攻击覆盖。"
      ],
      "media": {
        "originalName": "Gaitz",
        "id": "gaitz",
        "name": "盖茨",
        "ptTier": "A",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-8",
      "originalName": "Ultand",
      "name": "乌尔坦德",
      "growthRates": {
        "hp": 45,
        "strength": 40,
        "magic": 40,
        "speed": 35,
        "dexterity": 40,
        "defense": 35,
        "resistance": 45,
        "luck": 55,
        "charm": 50
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "枪术",
        "白魔术",
        "飞行术"
      ],
      "proficiencyCodes": [
        "spear",
        "whiteMagic",
        "flying"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；凯伊剧情加入；四条路线均有加入条件。",
        "costNote": "支援3；名声5–8；另需委托",
        "autoRoutes": [
          "凯伊"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "chapter": 6,
            "earliestChapterAccordingToGamersky": 6
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 5,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 5,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-8",
          "url": "https://www.gamersky.com/handbook/202609/2211429_8.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-8",
          "url": "https://www.gamersky.com/handbook/202609/2211429_8.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-8",
          "url": "https://www.gamersky.com/handbook/202609/2211429_8.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "战后包扎",
          "nameEn": "Patch Up",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "为相邻友军回复少量HP，数值未记载",
          "trigger": "相邻友军战斗后",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "平安祈愿",
          "nameEn": "Pray for Safety",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "相邻友军必杀回避+10",
          "trigger": "保持相邻",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "平安祈愿+",
          "nameEn": "Pray for Safety+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "相邻友军必杀回避+20",
          "trigger": "保持相邻",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。",
        "邻接治疗量仅记作a little，不自行填5HP或其他固定数值。"
      ],
      "roleTags": [
        "邻接治疗",
        "团队必杀防护"
      ],
      "roleEvidence": [
        {
          "tag": "邻接治疗",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "相邻友军战斗后"
        },
        {
          "tag": "团队必杀防护",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "保持相邻"
        },
        {
          "tag": "团队必杀防护",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "保持相邻"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          18,
          42
        ],
        [
          33,
          67
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "邻接治疗量未公开，范围保守；额外效果为必杀回避，非普通回避。"
      ],
      "media": {
        "originalName": "Ultand",
        "id": "recruit-8",
        "name": "乌尔坦德",
        "ptTier": "A",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "alexandra",
      "originalName": "Alexandra",
      "name": "亚历珊德拉",
      "growthRates": {
        "hp": 30,
        "strength": 35,
        "magic": 35,
        "speed": 55,
        "dexterity": 45,
        "defense": 30,
        "resistance": 40,
        "luck": 50,
        "charm": 50
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {
        "defense": [
          30,
          35
        ]
      },
      "proficiencies": [
        "剑术",
        "枪术",
        "飞行术"
      ],
      "proficiencyCodes": [
        "sword",
        "spear",
        "flying"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援1–3；名声6–10",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 7
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 7
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 6,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 7
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 4,
        "capitalAppearanceApproxDate": "5/29"
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-36",
          "url": "https://www.gamersky.com/handbook/202609/2211429_36.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-36",
          "url": "https://www.gamersky.com/handbook/202609/2211429_36.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-36",
          "url": "https://www.gamersky.com/handbook/202609/2211429_36.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "growthRates.defense",
          "values": [
            {
              "value": 30,
              "sourceId": "sf-growth"
            },
            {
              "value": 35,
              "sourceId": "gs-char-36"
            }
          ],
          "resolution": "growthRates暂以SF整表值作基准；模型须同时检查numericIntervals区间。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "亚历桑德拉"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "白银少女",
          "nameEn": "Silver Maiden",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "每名相邻友军使自身命中、回避各+5",
          "trigger": "按相邻友军人数",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "翱翔",
          "nameEn": "Soar",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻速+3",
          "trigger": "位于不可通行地形",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "翱翔+",
          "nameEn": "Soar+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻速+5",
          "trigger": "位于不可通行地形",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "邻接条件命中",
        "邻接条件回避",
        "地形攻速"
      ],
      "roleEvidence": [
        {
          "tag": "邻接条件命中",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "按相邻友军人数"
        },
        {
          "tag": "邻接条件回避",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "按相邻友军人数"
        },
        {
          "tag": "地形攻速",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "位于不可通行地形"
        },
        {
          "tag": "地形攻速",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "位于不可通行地形"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          7,
          30
        ],
        [
          12,
          65
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "相邻友军假设0–2人；攻速加成依赖不可通行地形，按地形覆盖折扣。"
      ],
      "media": {
        "originalName": "Alexandra",
        "id": "alexandra",
        "name": "亚历珊德拉",
        "ptTier": "A",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "creek",
      "originalName": "Creek",
      "name": "齐利科",
      "growthRates": null,
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [],
      "proficiencyCodes": [],
      "availability": {
        "phase": "II",
        "routeNote": "第一部完成亡姐遗物相关支线，再于第二部第2章击败本人。原作者对支线出现路线仍有不确定表述。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": null,
        "chapter": 2,
        "prerequisiteQuest": "My Late Sister's Accessory"
      },
      "evidence": [
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": false,
      "dataStatus": {
        "growth": "missing",
        "proficiencies": "missing",
        "availability": "known"
      },
      "aliases": [
        "克里克"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "稳健应战",
          "nameEn": "Steady Hands",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "攻速+3、回避+10",
          "trigger": "敌人先攻；限本次战斗；原表为guest版本",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。",
        "主表明确标guest，不能保证正式入队版或后续等级能力完全一致。"
      ],
      "roleTags": [
        "客串反击攻速",
        "客串反击回避"
      ],
      "roleEvidence": [
        {
          "tag": "客串反击攻速",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人先攻；限本次战斗；原表为guest版本"
        },
        {
          "tag": "客串反击回避",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人先攻；限本次战斗；原表为guest版本"
        }
      ],
      "abilityConflicts": [
        {
          "field": "personalAbilityName",
          "sources": [
            "sf-personal",
            "sf-social5"
          ],
          "values": [
            "Steady Hands（现行guest资料表）",
            "Knight’s Vanguard（宣传期画面解析）"
          ],
          "resolution": "保留现行表名并标guest范围；早期名字未证明为同一能力，正式入队版待核实。"
        }
      ],
      "rubric": [
        [
          0,
          45
        ],
        [
          0,
          70
        ],
        [
          0,
          0
        ],
        [
          0,
          30
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "仅有客串版本记录，正式加入数值及后续技能未确认。"
      ],
      "media": {
        "originalName": "Creek",
        "id": "creek",
        "name": "齐利科",
        "ptTier": "A",
        "kgTier": null,
        "ptStatus": "ranked",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "recruit-18",
      "originalName": "Olympia",
      "name": "奥琳琵娅",
      "growthRates": {
        "hp": 35,
        "strength": 35,
        "magic": 50,
        "speed": 35,
        "dexterity": 35,
        "defense": 30,
        "resistance": 40,
        "luck": 40,
        "charm": 40
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "斧术",
        "白魔术"
      ],
      "proficiencyCodes": [
        "axe",
        "whiteMagic"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；蕾达剧情加入；四条路线均有加入条件。",
        "costNote": "支援3；名声6–9；另需委托",
        "autoRoutes": [
          "蕾达"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": 3,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [],
            "questCount": 3,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": 3,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-18",
          "url": "https://www.gamersky.com/handbook/202609/2211429_18.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-18",
          "url": "https://www.gamersky.com/handbook/202609/2211429_18.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-18",
          "url": "https://www.gamersky.com/handbook/202609/2211429_18.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "奥林匹亚"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "争胜热情",
          "nameEn": "Competitive Zeal",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "必杀+10",
          "trigger": "装备魔法",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "热忱诺斯费拉托",
          "nameEn": "Ardent Nosferatu",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+3、必杀+5",
          "trigger": "使用Nosferatu；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "热忱诺斯费拉托+",
          "nameEn": "Ardent Nosferatu+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+5、必杀+10",
          "trigger": "使用Nosferatu；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "魔法必杀",
        "指定魔法输出"
      ],
      "roleEvidence": [
        {
          "tag": "魔法必杀",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "装备魔法"
        },
        {
          "tag": "指定魔法输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "使用Nosferatu；限本次战斗"
        },
        {
          "tag": "指定魔法输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "使用Nosferatu；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          8,
          15
        ],
        [
          24,
          54
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "魔法必杀和特定吸血魔法强化归个人；白魔术治疗潜力另由团队维的资质代理计算。"
      ],
      "media": {
        "originalName": "Olympia",
        "id": "recruit-18",
        "name": "奥琳琵娅",
        "ptTier": "A",
        "kgTier": "S",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "nathan",
      "originalName": "Nathan",
      "name": "内森",
      "growthRates": null,
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [],
      "proficiencyCodes": [],
      "availability": {
        "phase": "II",
        "routeNote": "第二部第3章由齐利科完成最后一击；中文招募表称第4章回到据点后可招募。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": null,
        "conditionChapter": 3,
        "requiresCharacter": "Creek"
      },
      "evidence": [
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.routeNote",
          "sourceId": "gs-join",
          "url": "https://www.gamersky.com/handbook/202609/2211366.shtml",
          "note": "第二部第3章触发招募战斗，第4章回据点后招募。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": false,
      "dataStatus": {
        "growth": "missing",
        "proficiencies": "missing",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "奋勇突进",
          "nameEn": "Headlong Rush",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "攻速+3、命中+10",
          "trigger": "自身先攻；限本次战斗；原表为guest版本",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。",
        "主表明确标guest，不能保证正式入队版或后续等级能力完全一致。"
      ],
      "roleTags": [
        "客串主动攻速",
        "客串主动命中"
      ],
      "roleEvidence": [
        {
          "tag": "客串主动攻速",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；限本次战斗；原表为guest版本"
        },
        {
          "tag": "客串主动命中",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；限本次战斗；原表为guest版本"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          42
        ],
        [
          0,
          65
        ],
        [
          0,
          0
        ],
        [
          0,
          30
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "先攻攻速命中资料为客串版本；不当作完整正式版技能组。"
      ],
      "media": {
        "originalName": "Nathan",
        "id": "nathan",
        "name": "内森",
        "ptTier": "A",
        "kgTier": null,
        "ptStatus": "ranked",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "nuzzuo",
      "originalName": "Nuzzuo",
      "name": "努佐",
      "growthRates": {
        "hp": 50,
        "strength": 50,
        "magic": 15,
        "speed": 55,
        "dexterity": 45,
        "defense": 20,
        "resistance": 15,
        "luck": 25,
        "charm": 35
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "弓术"
      ],
      "proficiencyCodes": [
        "sword",
        "bow"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援1–3；名声6–9；另需交付物品",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 6,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Bow",
                "name": "铁弓",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 8
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 9,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Bow",
                "name": "铁弓",
                "quantity": 2
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 6,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Bow",
                "name": "铁弓",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Bow",
                "name": "铁弓",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 4,
        "capitalAppearanceApproxDate": "7/1"
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-40",
          "url": "https://www.gamersky.com/handbook/202609/2211429_40.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-40",
          "url": "https://www.gamersky.com/handbook/202609/2211429_40.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-40",
          "url": "https://www.gamersky.com/handbook/202609/2211429_40.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "哈哈尔智慧",
          "nameEn": "Har Hali Wisdom",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "攻击+3",
          "trigger": "对敌人有特效；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "精准打击",
          "nameEn": "Precision Strike",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "命中+10",
          "trigger": "对敌人有特效；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "精准打击+",
          "nameEn": "Precision Strike+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "命中+20",
          "trigger": "对敌人有特效；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "特效输出",
        "特效命中"
      ],
      "roleEvidence": [
        {
          "tag": "特效输出",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "对敌人有特效；限本次战斗"
        },
        {
          "tag": "特效命中",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "对敌人有特效；限本次战斗"
        },
        {
          "tag": "特效命中",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "对敌人有特效；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          4,
          14
        ],
        [
          7,
          28
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "所有强化依赖特效目标；缺敌人分布，用25%–75%适用区间。"
      ],
      "media": {
        "originalName": "Nuzzuo",
        "id": "nuzzuo",
        "name": "努佐",
        "ptTier": "A",
        "kgTier": "C",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-43",
      "originalName": "Goliath",
      "name": "哥莱亚斯",
      "growthRates": {
        "hp": 55,
        "strength": 60,
        "magic": 5,
        "speed": 15,
        "dexterity": 30,
        "defense": 50,
        "resistance": 20,
        "luck": 35,
        "charm": 20
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {
        "defense": [
          50,
          70
        ],
        "resistance": [
          15,
          20
        ],
        "charm": [
          20,
          25
        ]
      },
      "proficiencies": [
        "斧术",
        "重装术"
      ],
      "proficiencyCodes": [
        "axe",
        "heavyArmor"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援3；名声6–10；另需交付物品",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [
              {
                "originalName": "Giant's Meat",
                "name": "巨大肉",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [
              {
                "originalName": "Giant's Meat",
                "name": "巨大肉",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [
              {
                "originalName": "Giant's Meat",
                "name": "巨大肉",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [
              {
                "originalName": "Giant's Meat",
                "name": "巨大肉",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-43",
          "url": "https://www.gamersky.com/handbook/202609/2211429_43.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-43",
          "url": "https://www.gamersky.com/handbook/202609/2211429_43.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-43",
          "url": "https://www.gamersky.com/handbook/202609/2211429_43.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "growthRates.defense",
          "values": [
            {
              "value": 50,
              "sourceId": "sf-growth"
            },
            {
              "value": 70,
              "sourceId": "gs-char-43"
            }
          ],
          "resolution": "growthRates暂以SF整表值作基准；模型须同时检查numericIntervals区间。"
        },
        {
          "field": "growthRates.resistance",
          "values": [
            {
              "value": 20,
              "sourceId": "sf-growth"
            },
            {
              "value": 15,
              "sourceId": "gs-char-43"
            }
          ],
          "resolution": "growthRates暂以SF整表值作基准；模型须同时检查numericIntervals区间。"
        },
        {
          "field": "growthRates.charm",
          "values": [
            {
              "value": 20,
              "sourceId": "sf-growth"
            },
            {
              "value": 25,
              "sourceId": "gs-char-43"
            }
          ],
          "resolution": "growthRates暂以SF整表值作基准；模型须同时检查numericIntervals区间。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "歌利亚"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "重量级",
          "nameEn": "Heavyweight Class",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "体格+5；不能转骑兵或飞行兵种",
          "trigger": "固定个人能力",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "压制",
          "nameEn": "Pin Down",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "相邻敌人移动-3",
          "trigger": "保持相邻",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "压制+",
          "nameEn": "Pin Down+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "相邻敌人移动-5",
          "trigger": "保持相邻",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "体格强化",
        "职业限制",
        "移动控制"
      ],
      "roleEvidence": [
        {
          "tag": "体格强化",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "固定个人能力"
        },
        {
          "tag": "职业限制",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "固定个人能力"
        },
        {
          "tag": "移动控制",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "保持相邻"
        },
        {
          "tag": "移动控制",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "保持相邻"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          20,
          35
        ],
        [
          20,
          35
        ],
        [
          0,
          0
        ],
        [
          32,
          64
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "体格减轻重量负担只计个人；敌人减移动只计团队控制；禁止骑飞在机动维处理。"
      ],
      "media": {
        "originalName": "Goliath",
        "id": "recruit-43",
        "name": "哥莱亚斯",
        "ptTier": "A",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "aswan",
      "originalName": "Aswan",
      "name": "阿斯旺",
      "growthRates": null,
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [],
      "proficiencyCodes": [],
      "availability": {
        "phase": "III",
        "routeNote": "第三部第5节加入；必须在第二部第3章客串参战时存活。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": 5,
        "guestPhase": "II",
        "survivalRequired": true,
        "guestChapter": 3
      },
      "evidence": [
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": false,
      "dataStatus": {
        "growth": "missing",
        "proficiencies": "missing",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": null,
          "nameEn": null,
          "level": null,
          "description": null,
          "trigger": null,
          "sourceId": null,
          "url": null,
          "notes": [
            "已浏览资料未找到可核验个人能力。"
          ]
        }
      ],
      "abilityQuality": "missing",
      "abilityNotes": [
        "个人能力主表未列该角色，未知保持null；不以缺失判为无能力或低强度。"
      ],
      "roleTags": [],
      "roleEvidence": [],
      "abilityConflicts": [],
      "rubric": null,
      "media": {
        "originalName": "Aswan",
        "id": "aswan",
        "name": "阿斯旺",
        "ptTier": "A",
        "kgTier": null,
        "ptStatus": "ranked",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "inyoni",
      "originalName": "Inyoni",
      "name": "易尼奥尼",
      "growthRates": {
        "hp": 40,
        "strength": 50,
        "magic": 20,
        "speed": 35,
        "dexterity": 40,
        "defense": 40,
        "resistance": 30,
        "luck": 40,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "斧术",
        "弓术"
      ],
      "proficiencyCodes": [
        "axe",
        "bow"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援1–3；名声7–9；3000–6000G",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": 6000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "numericIntervals": {
              "supportLevel": [
                1,
                3
              ]
            },
            "earliestChapterAccordingToGamersky": 8
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": 6000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 9,
            "gold": 4000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 7,
            "gold": 3000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 7,
        "routeCount": 4,
        "capitalAppearanceApproxDate": "7/10"
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-52",
          "url": "https://www.gamersky.com/handbook/202609/2211429_52.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-52",
          "url": "https://www.gamersky.com/handbook/202609/2211429_52.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-52",
          "url": "https://www.gamersky.com/handbook/202609/2211429_52.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "availability.costByRoute.凯伊.supportLevel",
          "values": [
            {
              "value": 3,
              "sourceId": "rpg-recruitment"
            },
            {
              "value": 1,
              "sourceId": "gs-char-52"
            }
          ],
          "resolution": "路线成本暂以RPG原文为基准；保留区间，不把差异强行平均。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "伊尼奥妮"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "重弓手",
          "nameEn": "Heavy-Bow User",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "力量+3",
          "trigger": "装备弓",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "贯穿",
          "nameEn": "Pierce",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+2、必杀+5",
          "trigger": "弓战技攻击",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "贯穿+",
          "nameEn": "Pierce+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+4、必杀+10",
          "trigger": "弓战技攻击",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "弓力量",
        "弓战技输出"
      ],
      "roleEvidence": [
        {
          "tag": "弓力量",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "装备弓"
        },
        {
          "tag": "弓战技输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "弓战技攻击"
        },
        {
          "tag": "弓战技输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "弓战技攻击"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          12,
          23
        ],
        [
          25,
          50
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "装备弓与弓战技分别有条件；假设按弓方向培养，不能跨任意职业套用。"
      ],
      "media": {
        "originalName": "Inyoni",
        "id": "inyoni",
        "name": "易尼奥尼",
        "ptTier": "A",
        "kgTier": "C",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "jasmine",
      "originalName": "Jasmine",
      "name": "嘉丝敏",
      "growthRates": {
        "hp": 50,
        "strength": 40,
        "magic": 20,
        "speed": 30,
        "dexterity": 45,
        "defense": 45,
        "resistance": 25,
        "luck": 40,
        "charm": 45
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [],
      "proficiencyCodes": [],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援1–3；名声4–9；500–5000G",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 8,
            "gold": 2000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": 5000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": 5000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 4,
            "gold": 500,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 4,
        "routeCount": 4,
        "capitalAppearanceApproxDate": "5/8"
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": false,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "missing",
        "availability": "known"
      },
      "aliases": [
        "贾斯敏"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "反击专家",
          "nameEn": "Expert Counter",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "命中+20",
          "trigger": "敌人先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "怒涛反击",
          "nameEn": "Raging Counter",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+3",
          "trigger": "敌人先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "怒涛反击+",
          "nameEn": "Raging Counter+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+3、必杀+10",
          "trigger": "敌人先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "反击命中",
        "反击输出"
      ],
      "roleEvidence": [
        {
          "tag": "反击命中",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人先攻；限本次战斗"
        },
        {
          "tag": "反击输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人先攻；限本次战斗"
        },
        {
          "tag": "反击输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人先攻；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          6,
          12
        ],
        [
          17,
          34
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "只在敌先攻生效，按约一半交战阶段折扣。"
      ],
      "media": {
        "originalName": "Jasmine",
        "id": "jasmine",
        "name": "嘉丝敏",
        "ptTier": "A",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "troy",
      "originalName": "Troy",
      "name": "特洛伊亚",
      "growthRates": null,
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [],
      "proficiencyCodes": [],
      "availability": {
        "phase": "III",
        "routeNote": "序章与第三部剧情加入。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": null,
        "prologuePlayable": true
      },
      "evidence": [
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": false,
      "dataStatus": {
        "growth": "missing",
        "proficiencies": "missing",
        "availability": "known"
      },
      "aliases": [
        "特洛伊"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "专属火器／压缩激光",
          "nameEn": "Zerberus / Compressed Laser",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": null,
          "slotKind": "personal_weapon",
          "description": "专属Zerberus可远程攻击；展示为A级魔法拳套，耐久5，附带Compressed Laser战技",
          "trigger": "需对应专属武器；正式版数值待核对",
          "sourceId": "sf-social5",
          "url": "https://serenesforest.net/2026/07/30/fortunes-weave-japanese-twitter-information-part-5/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "versionScope": "发售前展示",
          "notes": [
            "未以宣传片等级推定学习等级。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "个人能力主表未列该角色，未知保持null；不以缺失判为无能力或低强度。"
      ],
      "roleTags": [
        "专属远程武器"
      ],
      "roleEvidence": [
        {
          "tag": "专属远程武器",
          "abilityIndex": 0,
          "sourceId": "sf-social5",
          "url": "https://serenesforest.net/2026/07/30/fortunes-weave-japanese-twitter-information-part-5/",
          "condition": "需对应专属武器；正式版数值待核对"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          50
        ],
        [
          0,
          80
        ],
        [
          0,
          0
        ],
        [
          0,
          30
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "专属武器资料来自宣传画面，正式版参数未确认；不用于确定排名。"
      ],
      "media": {
        "originalName": "Troy",
        "id": "troy",
        "name": "特洛伊亚",
        "ptTier": "A",
        "kgTier": null,
        "ptStatus": "ranked",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "seteth",
      "originalName": "Seteth",
      "name": "西提司",
      "growthRates": {
        "hp": 45,
        "strength": 45,
        "magic": 30,
        "speed": 40,
        "dexterity": 45,
        "defense": 40,
        "resistance": 35,
        "luck": 30,
        "charm": 50
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "枪术",
        "斧术",
        "指挥术",
        "飞行术"
      ],
      "proficiencyCodes": [
        "spear",
        "axe",
        "authority",
        "flying"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；迪托利希不可挖角。",
        "costNote": "支援3；名声6–10；另需委托",
        "autoRoutes": [],
        "unavailableRoutes": [
          "迪托利希"
        ],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "迪托利希": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 3
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-49",
          "url": "https://www.gamersky.com/handbook/202609/2211429_49.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-49",
          "url": "https://www.gamersky.com/handbook/202609/2211429_49.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-49",
          "url": "https://www.gamersky.com/handbook/202609/2211429_49.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "赛特斯"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "战备",
          "nameEn": "Ready for Battle",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "自身先出手",
          "trigger": "敌方阶段首次战斗；发动率50%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "施行裁决",
          "nameEn": "Pass Judgement",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+4",
          "trigger": "Diadem of Balance发动时；该前置详情未核实",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "施行裁决+",
          "nameEn": "Pass Judgement+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+7",
          "trigger": "Diadem of Balance发动时；该前置详情未核实",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。",
        "Diadem of Balance的来源与发动条件未在此资料核实，Pass Judgement不计作常驻攻击加成。"
      ],
      "roleTags": [
        "首战概率抢先",
        "前置联动输出"
      ],
      "roleEvidence": [
        {
          "tag": "首战概率抢先",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌方阶段首次战斗；发动率50%"
        },
        {
          "tag": "前置联动输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "Diadem of Balance发动时；该前置详情未核实"
        },
        {
          "tag": "前置联动输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "Diadem of Balance发动时；该前置详情未核实"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          8,
          18
        ],
        [
          8,
          50
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "先攻只有敌方阶段首次战斗再判50%；追加攻击的前置技能不完整。"
      ],
      "media": {
        "originalName": "Seteth",
        "id": "seteth",
        "name": "西提司",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "tobias",
      "originalName": "Tobias",
      "name": "托比亚斯",
      "growthRates": {
        "hp": 55,
        "strength": 60,
        "magic": 15,
        "speed": 25,
        "dexterity": 30,
        "defense": 45,
        "resistance": 20,
        "luck": 40,
        "charm": 35
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "斧术",
        "骑术",
        "重装术"
      ],
      "proficiencyCodes": [
        "axe",
        "riding",
        "heavyArmor"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；赛奥朵拉剧情加入；凯伊 / 迪托利希 / 蕾达不可挖角。",
        "costNote": "本路线剧情加入；未列挖角支出。",
        "autoRoutes": [
          "赛奥朵拉"
        ],
        "unavailableRoutes": [
          "凯伊",
          "迪托利希",
          "蕾达"
        ],
        "costByRoute": {
          "凯伊": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 1
          },
          "蕾达": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "赛奥朵拉"
        ],
        "minimumRenownForNegotiatedRecruitment": null,
        "routeCount": 1
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-13",
          "url": "https://www.gamersky.com/handbook/202609/2211429_13.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-13",
          "url": "https://www.gamersky.com/handbook/202609/2211429_13.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-13",
          "url": "https://www.gamersky.com/handbook/202609/2211429_13.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "强力战技",
          "nameEn": "Power Arts",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "攻击+3",
          "trigger": "战技攻击",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "全力攻击",
          "nameEn": "All-Out Attack",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "伤害×1.3",
          "trigger": "战技攻击；发动率30%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": null,
          "nameEn": null,
          "nameZhStatus": null,
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": null,
          "trigger": null,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "原资料以问号占位。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "战技输出",
        "概率战技输出"
      ],
      "roleEvidence": [
        {
          "tag": "战技输出",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战技攻击"
        },
        {
          "tag": "概率战技输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战技攻击；发动率30%"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          12,
          23
        ],
        [
          17,
          40
        ],
        [
          0,
          0
        ],
        [
          0,
          15
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "战技攻击才有固定加攻；伤害乘算另有30%发动，第三项未公开。"
      ],
      "media": {
        "originalName": "Tobias",
        "id": "tobias",
        "name": "托比亚斯",
        "ptTier": "B",
        "kgTier": "A",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-24",
      "originalName": "Ursula",
      "name": "乌修拉",
      "growthRates": {
        "hp": 40,
        "strength": 35,
        "magic": 35,
        "speed": 50,
        "dexterity": 50,
        "defense": 35,
        "resistance": 30,
        "luck": 40,
        "charm": 45
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "弓术",
        "格斗术"
      ],
      "proficiencyCodes": [
        "sword",
        "bow",
        "gauntlet"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；蕾达不可挖角。",
        "costNote": "支援3；名声7–10；另需外传",
        "autoRoutes": [],
        "unavailableRoutes": [
          "蕾达"
        ],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Talimun"
            ],
            "otherConditions": [
              "连续三次回答是"
            ],
            "earliestChapterAccordingToGamersky": 6
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Talimun"
            ],
            "otherConditions": [
              "连续三次回答是"
            ],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Talimun"
            ],
            "otherConditions": [
              "连续三次回答是"
            ],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉"
        ],
        "minimumRenownForNegotiatedRecruitment": 7,
        "routeCount": 3
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-24",
          "url": "https://www.gamersky.com/handbook/202609/2211429_24.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-24",
          "url": "https://www.gamersky.com/handbook/202609/2211429_24.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-24",
          "url": "https://www.gamersky.com/handbook/202609/2211429_24.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "厄休拉"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "物资管理",
          "nameEn": "Management Skills",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "自身和2格内友军可访问仓库",
          "trigger": "2格内范围条件",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "把握机会",
          "nameEn": "Seize the Chance",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "伤害×1.3",
          "trigger": "攻击时；发动率=幸运÷2%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "把握机会+",
          "nameEn": "Seize the Chance+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "伤害×1.5",
          "trigger": "攻击时；发动率=幸运÷2%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "战场仓库",
        "概率输出"
      ],
      "roleEvidence": [
        {
          "tag": "战场仓库",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "2格内范围条件"
        },
        {
          "tag": "概率输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "攻击时；发动率=幸运÷2%"
        },
        {
          "tag": "概率输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "攻击时；发动率=幸运÷2%"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          5,
          20
        ],
        [
          48,
          65
        ],
        [
          48,
          65
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "仓库服务只计团队；幸运按20–40的情境假设，伤害发动率为10%–20%。"
      ],
      "media": {
        "originalName": "Ursula",
        "id": "recruit-24",
        "name": "乌修拉",
        "ptTier": "B",
        "kgTier": "A",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-28",
      "originalName": "Simon",
      "name": "希蒙",
      "growthRates": {
        "hp": 50,
        "strength": 50,
        "magic": 20,
        "speed": 35,
        "dexterity": 40,
        "defense": 40,
        "resistance": 25,
        "luck": 50,
        "charm": 35
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "斧术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "sword",
        "axe",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援3；名声6–8",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "抛硬币选择反面"
            ]
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "抛硬币选择反面"
            ],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "抛硬币选择反面"
            ],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "抛硬币选择反面"
            ],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-28",
          "url": "https://www.gamersky.com/handbook/202609/2211429_28.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-28",
          "url": "https://www.gamersky.com/handbook/202609/2211429_28.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-28",
          "url": "https://www.gamersky.com/handbook/202609/2211429_28.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "西蒙"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "死里逃生",
          "nameEn": "Close Call",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "致死伤害后保留1HP",
          "trigger": "受击前HP≥2；发动率=幸运%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "恶魔运气",
          "nameEn": "Devil’s Luck",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "击败敌人后幸运+1，累计上限+10",
          "trigger": "持续至地图结束",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "恶魔运气+",
          "nameEn": "Devil’s Luck+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "击败敌人后幸运+2，累计上限+10",
          "trigger": "持续至地图结束",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "概率保命",
        "地图内击杀成长"
      ],
      "roleEvidence": [
        {
          "tag": "概率保命",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "受击前HP≥2；发动率=幸运%"
        },
        {
          "tag": "地图内击杀成长",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "持续至地图结束"
        },
        {
          "tag": "地图内击杀成长",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "持续至地图结束"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          12,
          30
        ],
        [
          14,
          38
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "免死依赖生命≥2及幸运概率；不能把潜在免死当确定承伤。幸运假设20–40，击杀叠层0–3次。"
      ],
      "media": {
        "originalName": "Simon",
        "id": "recruit-28",
        "name": "希蒙",
        "ptTier": "B",
        "kgTier": "A",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "ludia",
      "originalName": "Ludia",
      "name": "露露蒂雅",
      "growthRates": {
        "hp": 40,
        "strength": 35,
        "magic": 20,
        "speed": 55,
        "dexterity": 45,
        "defense": 30,
        "resistance": 20,
        "luck": 30,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "枪术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "sword",
        "spear",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援3；名声7–9；另需委托",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 6
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": 1,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 7,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-45",
          "url": "https://www.gamersky.com/handbook/202609/2211429_45.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-45",
          "url": "https://www.gamersky.com/handbook/202609/2211429_45.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-45",
          "url": "https://www.gamersky.com/handbook/202609/2211429_45.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "露迪亚"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "猎隼",
          "nameEn": "Falcon",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "攻速+3",
          "trigger": "自身先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "洞察",
          "nameEn": "Perception",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "回避+10",
          "trigger": "自身能够追击；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "洞察+",
          "nameEn": "Perception+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "回避+20",
          "trigger": "自身能够追击；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "主动攻速",
        "追击条件回避"
      ],
      "roleEvidence": [
        {
          "tag": "主动攻速",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；限本次战斗"
        },
        {
          "tag": "追击条件回避",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身能够追击；限本次战斗"
        },
        {
          "tag": "追击条件回避",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身能够追击；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          15,
          24
        ],
        [
          20,
          45
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "主动攻速加成不等于移动；后续回避要求先满足追击。"
      ],
      "media": {
        "originalName": "Ludia",
        "id": "ludia",
        "name": "露露蒂雅",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "halvin",
      "originalName": "Halvin",
      "name": "哈尔温",
      "growthRates": {
        "hp": 35,
        "strength": 35,
        "magic": 30,
        "speed": 45,
        "dexterity": 60,
        "defense": 30,
        "resistance": 25,
        "luck": 40,
        "charm": 35
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "弓术",
        "骑术"
      ],
      "proficiencyCodes": [
        "bow",
        "riding"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援3；名声7–9；另需交付物品",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [
              {
                "originalName": "Dates",
                "name": "椰枣",
                "quantity": 10
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "numericIntervals": {
              "renownLevel": [
                5,
                9
              ]
            }
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [
              {
                "originalName": "Dates",
                "name": "椰枣",
                "quantity": 10
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [
              {
                "originalName": "Dates",
                "name": "椰枣",
                "quantity": 10
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [
              {
                "originalName": "Dates",
                "name": "椰枣",
                "quantity": 10
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 7,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-48",
          "url": "https://www.gamersky.com/handbook/202609/2211429_48.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-48",
          "url": "https://www.gamersky.com/handbook/202609/2211429_48.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-48",
          "url": "https://www.gamersky.com/handbook/202609/2211429_48.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "availability.costByRoute.凯伊.renownLevel",
          "values": [
            {
              "value": 9,
              "sourceId": "rpg-recruitment"
            },
            {
              "value": 5,
              "sourceId": "gs-char-48"
            }
          ],
          "resolution": "路线成本暂以RPG原文为基准；保留区间，不把差异强行平均。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "适应力",
          "nameEn": "Adaptability",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "战斗后命中+2，累计上限+30",
          "trigger": "持续至地图结束",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "阻止推进",
          "nameEn": "Halt Advance",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "敌人速度-2",
          "trigger": "自身先攻战斗后；持续至敌人下次战斗结束",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "阻止推进+",
          "nameEn": "Halt Advance+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "敌人速度-3",
          "trigger": "自身先攻战斗后；持续至敌人下次战斗结束",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "地图内命中成长",
        "敌方速度削弱"
      ],
      "roleEvidence": [
        {
          "tag": "地图内命中成长",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "持续至地图结束"
        },
        {
          "tag": "敌方速度削弱",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻战斗后；持续至敌人下次战斗结束"
        },
        {
          "tag": "敌方速度削弱",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻战斗后；持续至敌人下次战斗结束"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          6,
          20
        ],
        [
          6,
          20
        ],
        [
          0,
          0
        ],
        [
          18,
          34
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "累计命中假设经历2–6战；攻击后减速只归团队后续交战。"
      ],
      "media": {
        "originalName": "Halvin",
        "id": "halvin",
        "name": "哈尔温",
        "ptTier": "B",
        "kgTier": "A",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-16",
      "originalName": "Buccar",
      "name": "巴卡尼亚",
      "growthRates": {
        "hp": 50,
        "strength": 50,
        "magic": 20,
        "speed": 25,
        "dexterity": 40,
        "defense": 45,
        "resistance": 20,
        "luck": 30,
        "charm": 35
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "枪术",
        "斧术",
        "骑术",
        "重装术"
      ],
      "proficiencyCodes": [
        "spear",
        "axe",
        "riding",
        "heavyArmor"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；蕾达剧情加入；凯伊不可挖角。",
        "costNote": "支援3；名声8；另需外传",
        "autoRoutes": [
          "蕾达"
        ],
        "unavailableRoutes": [
          "凯伊"
        ],
        "costByRoute": {
          "凯伊": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Leda"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Leda"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 1
          }
        },
        "availableRoutes": [
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 8,
        "routeCount": 3
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-16",
          "url": "https://www.gamersky.com/handbook/202609/2211429_16.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-16",
          "url": "https://www.gamersky.com/handbook/202609/2211429_16.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-16",
          "url": "https://www.gamersky.com/handbook/202609/2211429_16.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "布卡尔"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "护卫职责",
          "nameEn": "Guardian’s Duty",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "所受伤害×0.9，即减伤10%",
          "trigger": "受到攻击时",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [],
          "corroboratingSources": [
            {
              "sourceId": "gs-char-16",
              "url": "https://www.gamersky.com/handbook/202609/2211429_16.shtml"
            }
          ]
        },
        {
          "nameZh": "报复一击",
          "nameEn": "Retaliatory Blow",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "伤害×1.3",
          "trigger": "敌人先攻；自身攻击时；发动率5%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "报复一击+",
          "nameEn": "Retaliatory Blow+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "伤害×1.3",
          "trigger": "敌人先攻；自身攻击时；发动率10%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "稳定减伤",
        "概率反击输出"
      ],
      "roleEvidence": [
        {
          "tag": "稳定减伤",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "受到攻击时"
        },
        {
          "tag": "概率反击输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人先攻；自身攻击时；发动率5%"
        },
        {
          "tag": "概率反击输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人先攻；自身攻击时；发动率10%"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          13,
          17
        ],
        [
          14,
          21
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "固有只减伤10%；培养后增伤仅敌先攻且5%/10%发动，不能按1.3倍常驻。"
      ],
      "media": {
        "originalName": "Buccar",
        "id": "recruit-16",
        "name": "巴卡尼亚",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "fianna",
      "originalName": "Fianna",
      "name": "绯亚娜",
      "growthRates": {
        "hp": 30,
        "strength": 35,
        "magic": 55,
        "speed": 30,
        "dexterity": 40,
        "defense": 20,
        "resistance": 45,
        "luck": 25,
        "charm": 40
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "白魔术",
        "黑魔术",
        "骑术"
      ],
      "proficiencyCodes": [
        "whiteMagic",
        "blackMagic",
        "riding"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援3；名声5–9；3000G",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": 3000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": 3000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": 3000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 5,
            "gold": 3000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 5,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-46",
          "url": "https://www.gamersky.com/handbook/202609/2211429_46.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-46",
          "url": "https://www.gamersky.com/handbook/202609/2211429_46.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-46",
          "url": "https://www.gamersky.com/handbook/202609/2211429_46.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "菲安娜"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "优雅之光",
          "nameEn": "Graceful Light",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "治疗魔法消耗归零",
          "trigger": "用魔法治疗友军；发动率=幸运%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "信仰赠礼",
          "nameEn": "Gift of Faith",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "治疗量+20HP",
          "trigger": "用魔法治疗友军；发动率=幸运%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "信仰赠礼+",
          "nameEn": "Gift of Faith+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "治疗量+30HP",
          "trigger": "用魔法治疗友军；发动率=幸运%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "概率治疗节耗",
        "概率治疗强化"
      ],
      "roleEvidence": [
        {
          "tag": "概率治疗节耗",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "用魔法治疗友军；发动率=幸运%"
        },
        {
          "tag": "概率治疗强化",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "用魔法治疗友军；发动率=幸运%"
        },
        {
          "tag": "概率治疗强化",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "用魔法治疗友军；发动率=幸运%"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          12,
          28
        ],
        [
          32,
          60
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "治疗免消耗与额外治疗先按幸运20–40的发动情境折扣，再受治疗行动和过量治疗限制。"
      ],
      "media": {
        "originalName": "Fianna",
        "id": "fianna",
        "name": "绯亚娜",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "recruit-30",
      "originalName": "Nezha",
      "name": "哪吒",
      "growthRates": {
        "hp": 45,
        "strength": 45,
        "magic": 25,
        "speed": 45,
        "dexterity": 50,
        "defense": 35,
        "resistance": 25,
        "luck": 30,
        "charm": 25
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "格斗术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "sword",
        "gauntlet",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援2–3；名声6–10；另需交付物品",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [
              {
                "originalName": "Sandworm Meat",
                "name": "沙虫肉",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [
              {
                "originalName": "Sandworm Meat",
                "name": "沙虫肉",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 6,
            "gold": null,
            "items": [
              {
                "originalName": "Sandworm Meat",
                "name": "沙虫肉",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [
              {
                "originalName": "Sandworm Meat",
                "name": "沙虫肉",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-30",
          "url": "https://www.gamersky.com/handbook/202609/2211429_30.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-30",
          "url": "https://www.gamersky.com/handbook/202609/2211429_30.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-30",
          "url": "https://www.gamersky.com/handbook/202609/2211429_30.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "快攻",
          "nameEn": "Quick Draw",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "攻击+3",
          "trigger": "自身先攻；发动率50%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "永不停步",
          "nameEn": "Never Stop",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+5",
          "trigger": "Quick Draw之后攻击时；发动率30%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": null,
          "nameEn": null,
          "nameZhStatus": null,
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": null,
          "trigger": null,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "原资料以问号占位。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "概率主动输出",
        "连锁概率输出"
      ],
      "roleEvidence": [
        {
          "tag": "概率主动输出",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；发动率50%"
        },
        {
          "tag": "连锁概率输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "Quick Draw之后攻击时；发动率30%"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          5,
          10
        ],
        [
          7,
          28
        ],
        [
          0,
          0
        ],
        [
          0,
          15
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "50%加攻再受自身先攻限制；后项还依赖前项发动，不把概率简单相加。"
      ],
      "media": {
        "originalName": "Nezha",
        "id": "recruit-30",
        "name": "哪吒",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "recruit-29",
      "originalName": "Ninae",
      "name": "妮涅",
      "growthRates": {
        "hp": 45,
        "strength": 45,
        "magic": 35,
        "speed": 35,
        "dexterity": 45,
        "defense": 35,
        "resistance": 45,
        "luck": 50,
        "charm": 40
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "枪术",
        "白魔术",
        "骑术"
      ],
      "proficiencyCodes": [
        "spear",
        "whiteMagic",
        "riding"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援3；名声6–8；另需交付物品",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [
              {
                "originalName": "Paradise Fish",
                "name": "辉鱼",
                "quantity": 1
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [
              {
                "originalName": "Paradise Fish",
                "name": "辉鱼",
                "quantity": 1
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [
              {
                "originalName": "Paradise Fish",
                "name": "辉鱼",
                "quantity": 1
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [
              {
                "originalName": "Paradise Fish",
                "name": "辉鱼",
                "quantity": 1
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "numericIntervals": {
              "renownLevel": [
                6,
                8
              ]
            },
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-29",
          "url": "https://www.gamersky.com/handbook/202609/2211429_29.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-29",
          "url": "https://www.gamersky.com/handbook/202609/2211429_29.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-29",
          "url": "https://www.gamersky.com/handbook/202609/2211429_29.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "availability.costByRoute.蕾达.renownLevel",
          "values": [
            {
              "value": 6,
              "sourceId": "rpg-recruitment"
            },
            {
              "value": 8,
              "sourceId": "gs-char-29"
            }
          ],
          "resolution": "路线成本暂以RPG原文为基准；保留区间，不把差异强行平均。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "妮娜"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "精灵之声",
          "nameEn": "Spirits’ Voice",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "命中、回避+10",
          "trigger": "敌人使用魔法；限战斗中",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "精灵引导",
          "nameEn": "Spirits’ Guidance",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "相邻友军获得精灵之声",
          "trigger": "保持相邻；仍需敌人使用魔法",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "精灵引导+",
          "nameEn": "Spirits’ Guidance+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "2格内友军获得精灵之声",
          "trigger": "2格内；仍需敌人使用魔法",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "对魔命中",
        "对魔回避",
        "团队对魔"
      ],
      "roleEvidence": [
        {
          "tag": "对魔命中",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人使用魔法；限战斗中"
        },
        {
          "tag": "对魔回避",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人使用魔法；限战斗中"
        },
        {
          "tag": "团队对魔",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "保持相邻；仍需敌人使用魔法"
        },
        {
          "tag": "团队对魔",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "2格内；仍需敌人使用魔法"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          5,
          15
        ],
        [
          5,
          15
        ],
        [
          0,
          0
        ],
        [
          12,
          45
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "敌人必须用魔法；抗魔敌覆盖假设25%–75%，本人效果与分享光环各归一个维度。"
      ],
      "media": {
        "originalName": "Ninae",
        "id": "recruit-29",
        "name": "妮涅",
        "ptTier": "B",
        "kgTier": "A",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-11",
      "originalName": "Mikaela",
      "name": "米迦艾拉",
      "growthRates": {
        "hp": 50,
        "strength": 45,
        "magic": 30,
        "speed": 40,
        "dexterity": 35,
        "defense": 40,
        "resistance": 25,
        "luck": 30,
        "charm": 40
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "斧术",
        "弓术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "axe",
        "bow",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；迪托利希剧情加入；四条路线均有加入条件。",
        "costNote": "支援3；名声5–8；3000G",
        "autoRoutes": [
          "迪托利希"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 5,
            "gold": 3000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": 3000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": 3000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 5,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-11",
          "url": "https://www.gamersky.com/handbook/202609/2211429_11.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-11",
          "url": "https://www.gamersky.com/handbook/202609/2211429_11.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-11",
          "url": "https://www.gamersky.com/handbook/202609/2211429_11.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "米凯伊拉"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "老兵气魄",
          "nameEn": "Veteran’s Mettle",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "命中+10",
          "trigger": "与相邻敌人战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "赤刃意志",
          "nameEn": "Redblade’s Will",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+3",
          "trigger": "与相邻敌人战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "赤刃意志+",
          "nameEn": "Redblade’s Will+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "相邻战斗攻击+3；攻击相邻敌人时另有30%概率攻击再+3",
          "trigger": "基础部分限相邻战斗；额外部分攻击时独立满足30%发动",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "近战命中",
        "近战输出",
        "概率输出"
      ],
      "roleEvidence": [
        {
          "tag": "近战命中",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "与相邻敌人战斗"
        },
        {
          "tag": "近战输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "与相邻敌人战斗"
        },
        {
          "tag": "近战输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "基础部分限相邻战斗；额外部分攻击时独立满足30%发动"
        },
        {
          "tag": "概率输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "基础部分限相邻战斗；额外部分攻击时独立满足30%发动"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          7,
          10
        ],
        [
          25,
          37
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "相邻交战才生效；强化版额外攻击仍需主动攻击且30%发动。"
      ],
      "media": {
        "originalName": "Mikaela",
        "id": "recruit-11",
        "name": "米迦艾拉",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "kiroc",
      "originalName": "Kiroc",
      "name": "奇洛伊卡",
      "growthRates": {
        "hp": 55,
        "strength": 40,
        "magic": 15,
        "speed": 55,
        "dexterity": 50,
        "defense": 30,
        "resistance": 15,
        "luck": 30,
        "charm": 25
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "弓术"
      ],
      "proficiencyCodes": [
        "bow"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援1–3；名声4–10；另需交付物品",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [
              {
                "originalName": "Pure Water",
                "name": "圣水",
                "quantity": 8
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 4,
            "gold": null,
            "items": [
              {
                "originalName": "Pure Water",
                "name": "圣水",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 6
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [
              {
                "originalName": "Pure Water",
                "name": "圣水",
                "quantity": 8
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 4,
            "gold": null,
            "items": [
              {
                "originalName": "Pure Water",
                "name": "圣水",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 7
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 4,
        "routeCount": 4,
        "capitalAppearanceApproxDate": "5/4"
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-51",
          "url": "https://www.gamersky.com/handbook/202609/2211429_51.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-51",
          "url": "https://www.gamersky.com/handbook/202609/2211429_51.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-51",
          "url": "https://www.gamersky.com/handbook/202609/2211429_51.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "基洛克"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "暴虐",
          "nameEn": "Tyranny",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "攻击+3、必杀+10",
          "trigger": "敌人有状态效果；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "威慑",
          "nameEn": "Menace",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "敌人必杀回避减半",
          "trigger": "战斗中；发动率10%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "威慑+",
          "nameEn": "Menace+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "敌人必杀回避减半",
          "trigger": "战斗中；发动率20%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "异常状态连携",
        "概率必杀辅助"
      ],
      "roleEvidence": [
        {
          "tag": "异常状态连携",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人有状态效果；限本次战斗"
        },
        {
          "tag": "概率必杀辅助",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战斗中；发动率10%"
        },
        {
          "tag": "概率必杀辅助",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战斗中；发动率20%"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          7,
          21
        ],
        [
          8,
          29
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "先要敌人处于状态异常；削必杀回避是概率效果，不能等同直接必杀。"
      ],
      "media": {
        "originalName": "Kiroc",
        "id": "kiroc",
        "name": "奇洛伊卡",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "dadao",
      "originalName": "Dadao",
      "name": "大刀",
      "growthRates": {
        "hp": 50,
        "strength": 55,
        "magic": 20,
        "speed": 30,
        "dexterity": 35,
        "defense": 45,
        "resistance": 20,
        "luck": 25,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "斧术",
        "重装术"
      ],
      "proficiencyCodes": [
        "axe",
        "heavyArmor"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援2–3；名声5–10；另需交付物品",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [
              {
                "originalName": "Kothar Gar",
                "name": "科夏鲁加",
                "quantity": 2
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [
              {
                "originalName": "Kothar Gar",
                "name": "科夏鲁加",
                "quantity": 2
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 5,
            "gold": null,
            "items": [
              {
                "originalName": "Kothar Gar",
                "name": "科夏鲁加",
                "quantity": 2
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 5,
            "gold": null,
            "items": [
              {
                "originalName": "Kothar Gar",
                "name": "科夏鲁加",
                "quantity": 2
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 5,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-47",
          "url": "https://www.gamersky.com/handbook/202609/2211429_47.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-47",
          "url": "https://www.gamersky.com/handbook/202609/2211429_47.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-47",
          "url": "https://www.gamersky.com/handbook/202609/2211429_47.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "一击之机",
          "nameEn": "One Chance",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "攻击+5",
          "trigger": "双方均不能追击；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "全力",
          "nameEn": "Full Strength",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "伤害×1.3",
          "trigger": "攻击时；发动率=力量÷2%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "全力+",
          "nameEn": "Full Strength+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "伤害×1.5",
          "trigger": "攻击时；发动率=力量÷2%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "无追击输出",
        "概率输出"
      ],
      "roleEvidence": [
        {
          "tag": "无追击输出",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "双方均不能追击；限本次战斗"
        },
        {
          "tag": "概率输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "攻击时；发动率=力量÷2%"
        },
        {
          "tag": "概率输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "攻击时；发动率=力量÷2%"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          8,
          24
        ],
        [
          12,
          42
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "双方都不能追击的局面才加攻；力量情境20–40，对应增伤发动10%–20%。"
      ],
      "media": {
        "originalName": "Dadao",
        "id": "dadao",
        "name": "大刀",
        "ptTier": "B",
        "kgTier": "A",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "jester",
      "originalName": "Jester",
      "name": "杰斯塔",
      "growthRates": {
        "hp": 40,
        "strength": 35,
        "magic": 15,
        "speed": 60,
        "dexterity": 45,
        "defense": 35,
        "resistance": 25,
        "luck": 40,
        "charm": 40
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "步兵术",
        "弓术"
      ],
      "proficiencyCodes": [
        "sword",
        "infantry",
        "bow"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援3；名声6–10；另需委托",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [],
            "questCount": 3,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 3
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [],
            "questCount": 3,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": 3,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [],
            "questCount": 3,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-44",
          "url": "https://www.gamersky.com/handbook/202609/2211429_44.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-44",
          "url": "https://www.gamersky.com/handbook/202609/2211429_44.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-44",
          "url": "https://www.gamersky.com/handbook/202609/2211429_44.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "杰斯特"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "转瞬之间",
          "nameEn": "Blink of an Eye",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "防守+3",
          "trigger": "使用Swap后，至自身下个阶段",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "闪烁锋刃",
          "nameEn": "Flickering Edge",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+3",
          "trigger": "闪避攻击时；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "闪烁锋刃+",
          "nameEn": "Flickering Edge+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+5",
          "trigger": "闪避攻击时；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "换位防守",
        "闪避反打"
      ],
      "roleEvidence": [
        {
          "tag": "换位防守",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "使用Swap后，至自身下个阶段"
        },
        {
          "tag": "闪避反打",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "闪避攻击时；限本次战斗"
        },
        {
          "tag": "闪避反打",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "闪避攻击时；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          6,
          18
        ],
        [
          10,
          36
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "先换位才加防；额外攻击先要求闪避成功，不当常驻。"
      ],
      "media": {
        "originalName": "Jester",
        "id": "jester",
        "name": "杰斯塔",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "yang-jie",
      "originalName": "Yang Jie",
      "name": "杨界",
      "growthRates": {
        "hp": 50,
        "strength": 30,
        "magic": 40,
        "speed": 35,
        "dexterity": 35,
        "defense": 30,
        "resistance": 40,
        "luck": 40,
        "charm": 25
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {
        "strength": [
          30,
          35
        ]
      },
      "proficiencies": [
        "斧术",
        "白魔术"
      ],
      "proficiencyCodes": [
        "axe",
        "whiteMagic"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；迪托利希剧情加入；四条路线均有加入条件。",
        "costNote": "支援2–3；名声3–9",
        "autoRoutes": [
          "迪托利希"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 3,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "回答招募问题"
            ],
            "earliestChapterAccordingToGamersky": 3
          },
          "迪托利希": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "本路线挖角教学自动加入"
            ],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "回答招募问题"
            ],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "回答招募问题"
            ],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 3,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-38",
          "url": "https://www.gamersky.com/handbook/202609/2211429_38.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-38",
          "url": "https://www.gamersky.com/handbook/202609/2211429_38.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability.costByRoute.蕾达",
          "sourceId": "gs-char-38",
          "url": "https://www.gamersky.com/handbook/202609/2211429_38.shtml",
          "note": "明确列支援Lv3、名声Lv8；修复英文网页排版错位。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-38",
          "url": "https://www.gamersky.com/handbook/202609/2211429_38.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "growthRates.strength",
          "values": [
            {
              "value": 30,
              "sourceId": "sf-growth"
            },
            {
              "value": 35,
              "sourceId": "gs-char-38"
            }
          ],
          "resolution": "growthRates暂以SF整表值作基准；模型须同时检查numericIntervals区间。"
        },
        {
          "field": "availability.costByRoute.蕾达",
          "type": "source_format",
          "note": "RPG原文将3S/8R一行错排在蕾达标题之前；由游民第38页明确路线值确认。",
          "resolution": "采用游民支援3、名声8。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "僧兵神威",
          "nameEn": "Monkly Havoc",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "自身回复最大HP值，等同回满",
          "trigger": "击败敌人后；发动率=幸运÷2%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "强健体魄",
          "nameEn": "Robust Health",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "防御力Shld+3",
          "trigger": "受攻击时；发动率=当前剩余HP数值%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "强健体魄+",
          "nameEn": "Robust Health+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "防御力Shld+5",
          "trigger": "受攻击时；发动率=当前剩余HP数值%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。",
        "Robust Health概率依剩余HP数值，不是剩余HP百分比；超过100时的截断、取整均未记载。"
      ],
      "roleTags": [
        "概率击杀自愈",
        "生命关联防护"
      ],
      "roleEvidence": [
        {
          "tag": "概率击杀自愈",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "击败敌人后；发动率=幸运÷2%"
        },
        {
          "tag": "生命关联防护",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "受攻击时；发动率=当前剩余HP数值%"
        },
        {
          "tag": "生命关联防护",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "受攻击时；发动率=当前剩余HP数值%"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          8,
          25
        ],
        [
          13,
          43
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "回满需击杀再按幸运÷2发动；减伤项发动率是剩余生命数值%，不是生命比例。情境生命20–40。"
      ],
      "media": {
        "originalName": "Yang Jie",
        "id": "yang-jie",
        "name": "杨界",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "recruit-33",
      "originalName": "Io",
      "name": "伊欧",
      "growthRates": {
        "hp": 45,
        "strength": 40,
        "magic": 25,
        "speed": 35,
        "dexterity": 45,
        "defense": 40,
        "resistance": 25,
        "luck": 35,
        "charm": 35
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "枪术",
        "斧术",
        "骑术"
      ],
      "proficiencyCodes": [
        "spear",
        "axe",
        "riding"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援1–3；名声3–10；800–4000G",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": 4000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 3
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 3,
            "gold": 800,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": 4000,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 6,
            "gold": 1500,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 3,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-33",
          "url": "https://www.gamersky.com/handbook/202609/2211429_33.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-33",
          "url": "https://www.gamersky.com/handbook/202609/2211429_33.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-33",
          "url": "https://www.gamersky.com/handbook/202609/2211429_33.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "与战马同行",
          "nameEn": "With My Steed",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "防御力Shld+3、必杀回避+30",
          "trigger": "骑兵且自身先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [],
          "corroboratingSources": [
            {
              "sourceId": "gs-char-33",
              "url": "https://www.gamersky.com/handbook/202609/2211429_33.shtml"
            }
          ]
        },
        {
          "nameZh": "骑乘推进",
          "nameEn": "Mounted Push",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "命中+10",
          "trigger": "骑兵且自身先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "骑乘推进+",
          "nameEn": "Mounted Push+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "命中+10、攻击+3",
          "trigger": "骑兵且自身先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "骑兵主动防护",
        "骑兵主动命中",
        "骑兵主动输出"
      ],
      "roleEvidence": [
        {
          "tag": "骑兵主动防护",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "骑兵且自身先攻；限本次战斗"
        },
        {
          "tag": "骑兵主动命中",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "骑兵且自身先攻；限本次战斗"
        },
        {
          "tag": "骑兵主动命中",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "骑兵且自身先攻；限本次战斗"
        },
        {
          "tag": "骑兵主动输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "骑兵且自身先攻；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          14,
          26
        ],
        [
          25,
          43
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "假设走骑兵方向且先攻；30是必杀回避，不能视为普通回避；实际职业不符则本项不适用。"
      ],
      "media": {
        "originalName": "Io",
        "id": "recruit-33",
        "name": "伊欧",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "noctula",
      "originalName": "Noctula",
      "name": "诺克裘拉",
      "growthRates": {
        "hp": 50,
        "strength": 45,
        "magic": 20,
        "speed": 45,
        "dexterity": 40,
        "defense": 40,
        "resistance": 20,
        "luck": 35,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "斧术",
        "格斗术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "axe",
        "gauntlet",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援1–3；名声3–8",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 4,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 3
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 6,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 3,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 3,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-37",
          "url": "https://www.gamersky.com/handbook/202609/2211429_37.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-37",
          "url": "https://www.gamersky.com/handbook/202609/2211429_37.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-37",
          "url": "https://www.gamersky.com/handbook/202609/2211429_37.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "诺库图拉"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "战士明澈",
          "nameEn": "Warrior’s Clarity",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "回避+3",
          "trigger": "战斗后；至自身下个阶段",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "协调",
          "nameEn": "Attuned",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "回避+10",
          "trigger": "Warrior’s Clarity发动时；发动率10%；至自身下个阶段",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "协调+",
          "nameEn": "Attuned+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "回避+10",
          "trigger": "Warrior’s Clarity发动时；发动率20%；至自身下个阶段",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "战后回避",
        "概率战后回避"
      ],
      "roleEvidence": [
        {
          "tag": "战后回避",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战斗后；至自身下个阶段"
        },
        {
          "tag": "概率战后回避",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "Warrior’s Clarity发动时；发动率10%；至自身下个阶段"
        },
        {
          "tag": "概率战后回避",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "Warrior’s Clarity发动时；发动率20%；至自身下个阶段"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          3,
          6
        ],
        [
          4,
          9
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "战后回避持续至下个自身阶段；额外回避只有10%/20%发动。"
      ],
      "media": {
        "originalName": "Noctula",
        "id": "noctula",
        "name": "诺克裘拉",
        "ptTier": "B",
        "kgTier": "A",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "nydine",
      "originalName": "Nydine",
      "name": "努蒂奴",
      "growthRates": {
        "hp": 45,
        "strength": 40,
        "magic": 30,
        "speed": 45,
        "dexterity": 40,
        "defense": 30,
        "resistance": 25,
        "luck": 35,
        "charm": 35
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "斧术",
        "黑魔术",
        "飞行术",
        "骑术"
      ],
      "proficiencyCodes": [
        "axe",
        "blackMagic",
        "flying",
        "riding"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援1–3；名声5–10；另需交付物品",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 6,
            "gold": null,
            "items": [
              {
                "originalName": "Bronze Axe",
                "name": "青铜斧",
                "quantity": 2
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 3
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 5,
            "gold": null,
            "items": [
              {
                "originalName": "Bronze Axe",
                "name": "青铜斧",
                "quantity": 2
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 5,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Axe",
                "name": "铁斧",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Axe",
                "name": "铁斧",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 5,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-32",
          "url": "https://www.gamersky.com/handbook/202609/2211429_32.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-32",
          "url": "https://www.gamersky.com/handbook/202609/2211429_32.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-32",
          "url": "https://www.gamersky.com/handbook/202609/2211429_32.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "奈丁"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "强行穿越",
          "nameEn": "Barge Through",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "可穿过敌人所在格，大型敌人除外",
          "trigger": "骑兵",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "疾驰",
          "nameEn": "At a Gallop",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "地形移动消耗-1，最低1",
          "trigger": "骑兵；不会降至0",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "疾驰+",
          "nameEn": "At a Gallop+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "地形移动消耗-2，最低1",
          "trigger": "骑兵；不会降至0",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "骑兵穿敌",
        "骑兵地形机动"
      ],
      "roleEvidence": [
        {
          "tag": "骑兵穿敌",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "骑兵"
        },
        {
          "tag": "骑兵地形机动",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "骑兵；不会降至0"
        },
        {
          "tag": "骑兵地形机动",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "骑兵；不会降至0"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          18,
          26
        ],
        [
          28,
          38
        ],
        "穿越敌人与地形减耗只归机动，需骑兵且不能穿大型敌人。"
      ],
      "media": {
        "originalName": "Nydine",
        "id": "nydine",
        "name": "努蒂奴",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "recruit-53",
      "originalName": "Peppe",
      "name": "佩佩",
      "growthRates": {
        "hp": 30,
        "strength": 30,
        "magic": 25,
        "speed": 60,
        "dexterity": 45,
        "defense": 30,
        "resistance": 30,
        "luck": 45,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "弓术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "sword",
        "bow",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；蕾达不可挖角。",
        "costNote": "支援1–3；名声7–9；另需外传",
        "autoRoutes": [],
        "unavailableRoutes": [
          "蕾达"
        ],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Bertrand"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 3
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Bertrand"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Bertrand"
            ],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉"
        ],
        "minimumRenownForNegotiatedRecruitment": 7,
        "routeCount": 3
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-53",
          "url": "https://www.gamersky.com/handbook/202609/2211429_53.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-53",
          "url": "https://www.gamersky.com/handbook/202609/2211429_53.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-53",
          "url": "https://www.gamersky.com/handbook/202609/2211429_53.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "猎人圈套",
          "nameEn": "Hunter’s Snare",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "自身先出手",
          "trigger": "敌方阶段；敌人HP非满；发动率30%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "王者威严",
          "nameEn": "King’s Majesty",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+2、必杀+5",
          "trigger": "敌人HP非满；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "王者威严+",
          "nameEn": "King’s Majesty+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+4、必杀+10",
          "trigger": "敌人HP非满；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "概率抢先",
        "残血敌输出"
      ],
      "roleEvidence": [
        {
          "tag": "概率抢先",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌方阶段；敌人HP非满；发动率30%"
        },
        {
          "tag": "残血敌输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人HP非满；限本次战斗"
        },
        {
          "tag": "残血敌输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人HP非满；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          6,
          15
        ],
        [
          16,
          43
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "敌人先受伤；先攻又依赖敌方阶段与30%发动，按协同准备成本折扣。"
      ],
      "media": {
        "originalName": "Peppe",
        "id": "recruit-53",
        "name": "佩佩",
        "ptTier": "B",
        "kgTier": "C",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "recruit-50",
      "originalName": "Loretta",
      "name": "罗蕾塔",
      "growthRates": {
        "hp": 35,
        "strength": 35,
        "magic": 35,
        "speed": 55,
        "dexterity": 40,
        "defense": 30,
        "resistance": 40,
        "luck": 30,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "枪术",
        "飞行术"
      ],
      "proficiencyCodes": [
        "sword",
        "spear",
        "flying"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援3；名声5–9；另需交付物品",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Sword",
                "name": "铁剑",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Sword",
                "name": "铁剑",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4,
            "numericIntervals": {
              "renownLevel": [
                8,
                9
              ]
            }
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 5,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Sword",
                "name": "铁剑",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 5,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Sword",
                "name": "铁剑",
                "quantity": 3
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 5,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-50",
          "url": "https://www.gamersky.com/handbook/202609/2211429_50.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-50",
          "url": "https://www.gamersky.com/handbook/202609/2211429_50.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-50",
          "url": "https://www.gamersky.com/handbook/202609/2211429_50.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "availability.costByRoute.迪托利希.renownLevel",
          "type": "within_source",
          "values": [
            {
              "value": 9,
              "sourceId": "rpg-recruitment",
              "location": "角色逐项表"
            },
            {
              "value": 8,
              "sourceId": "rpg-recruitment",
              "location": "文章导言示例"
            }
          ],
          "resolution": "采用逐项表9，并以游民第50页的9交叉支持。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "洛蕾塔"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "坚定不移",
          "nameEn": "Steadfast",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "回避+10",
          "trigger": "自身HP≥50%；限战斗中",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "巅峰状态",
          "nameEn": "Peak Form",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+3",
          "trigger": "自身HP=100%；限战斗中",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "巅峰状态+",
          "nameEn": "Peak Form+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+3、回避+10",
          "trigger": "自身HP=100%；限战斗中",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "高血量回避",
        "满血输出",
        "满血回避"
      ],
      "roleEvidence": [
        {
          "tag": "高血量回避",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身HP≥50%；限战斗中"
        },
        {
          "tag": "满血输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身HP=100%；限战斗中"
        },
        {
          "tag": "满血输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身HP=100%；限战斗中"
        },
        {
          "tag": "满血回避",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身HP=100%；限战斗中"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          7,
          10
        ],
        [
          12,
          32
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "半血回避与满血攻击分开判；满血条件覆盖假设25%–75%。"
      ],
      "media": {
        "originalName": "Loretta",
        "id": "recruit-50",
        "name": "罗蕾塔",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "recruit-15",
      "originalName": "Lysander",
      "name": "莱桑达",
      "growthRates": {
        "hp": 45,
        "strength": 40,
        "magic": 25,
        "speed": 50,
        "dexterity": 35,
        "defense": 40,
        "resistance": 25,
        "luck": 30,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {
        "resistance": [
          25,
          30
        ],
        "luck": [
          30,
          35
        ]
      },
      "proficiencies": [
        "枪术",
        "斧术",
        "骑术",
        "飞行术"
      ],
      "proficiencyCodes": [
        "spear",
        "axe",
        "riding",
        "flying"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；赛奥朵拉剧情加入；四条路线均有加入条件。",
        "costNote": "支援3；名声6–8；另需交付物品",
        "autoRoutes": [
          "赛奥朵拉"
        ],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Spear",
                "name": "铁枪",
                "quantity": 5
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 6,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Spear",
                "name": "铁枪",
                "quantity": 5
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 4
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [
              {
                "originalName": "Iron Spear",
                "name": "铁枪",
                "quantity": 5
              }
            ],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 6,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-15",
          "url": "https://www.gamersky.com/handbook/202609/2211429_15.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-15",
          "url": "https://www.gamersky.com/handbook/202609/2211429_15.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-15",
          "url": "https://www.gamersky.com/handbook/202609/2211429_15.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "growthRates.resistance",
          "values": [
            {
              "value": 25,
              "sourceId": "sf-growth"
            },
            {
              "value": 30,
              "sourceId": "gs-char-15"
            }
          ],
          "resolution": "growthRates暂以SF整表值作基准；模型须同时检查numericIntervals区间。"
        },
        {
          "field": "growthRates.luck",
          "values": [
            {
              "value": 30,
              "sourceId": "sf-growth"
            },
            {
              "value": 35,
              "sourceId": "gs-char-15"
            }
          ],
          "resolution": "growthRates暂以SF整表值作基准；模型须同时检查numericIntervals区间。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "莱桑德"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "疾驰攻击",
          "nameEn": "Racing Attack",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "回避+15",
          "trigger": "自身先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "加速",
          "nameEn": "Accelerate",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "击败敌人后速度+1，累计上限+10",
          "trigger": "持续至地图结束",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "加速+",
          "nameEn": "Accelerate+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "击败敌人后速度+2，累计上限+10",
          "trigger": "持续至地图结束",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "主动回避",
        "地图内击杀成长"
      ],
      "roleEvidence": [
        {
          "tag": "主动回避",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；限本次战斗"
        },
        {
          "tag": "地图内击杀成长",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "持续至地图结束"
        },
        {
          "tag": "地图内击杀成长",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "持续至地图结束"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          8,
          14
        ],
        [
          8,
          46
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "主动回避与击杀叠速：叠层按0–3次击杀，不能默认每张图都到+10。"
      ],
      "media": {
        "originalName": "Lysander",
        "id": "recruit-15",
        "name": "莱桑达",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "sha-lan",
      "originalName": "Sha Lan",
      "name": "沙兰",
      "growthRates": {
        "hp": 35,
        "strength": 30,
        "magic": 45,
        "speed": 35,
        "dexterity": 50,
        "defense": 30,
        "resistance": 45,
        "luck": 35,
        "charm": 40
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "枪术",
        "白魔术",
        "指挥术"
      ],
      "proficiencyCodes": [
        "spear",
        "whiteMagic",
        "authority"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；凯伊 / 赛奥朵拉不可挖角。",
        "costNote": "支援3；名声8–10；另需外传",
        "autoRoutes": [],
        "unavailableRoutes": [
          "凯伊",
          "赛奥朵拉"
        ],
        "costByRoute": {
          "凯伊": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 10,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Anatolia"
            ],
            "otherConditions": [
              "回答招募问题"
            ]
          },
          "赛奥朵拉": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [
              "Anatolia"
            ],
            "otherConditions": [
              "回答招募问题"
            ],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "迪托利希",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 8,
        "routeCount": 2
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-26",
          "url": "https://www.gamersky.com/handbook/202609/2211429_26.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-26",
          "url": "https://www.gamersky.com/handbook/202609/2211429_26.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-26",
          "url": "https://www.gamersky.com/handbook/202609/2211429_26.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "冷静应对",
          "nameEn": "Cooler Heads",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "使用Draw Back后仍可用辅助魔法",
          "trigger": "先使用Draw Back；来源不等于无限再动",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "警觉",
          "nameEn": "Watchfulness",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "相邻友军速度+2",
          "trigger": "保持相邻",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": null,
          "nameEn": null,
          "nameZhStatus": null,
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": null,
          "trigger": null,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "原资料以问号占位。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "位移后辅助魔法",
        "团队速度"
      ],
      "roleEvidence": [
        {
          "tag": "位移后辅助魔法",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "先使用Draw Back；来源不等于无限再动"
        },
        {
          "tag": "团队速度",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "保持相邻"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          0,
          15
        ],
        [
          40,
          57
        ],
        [
          56,
          81
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "后撤后还可使用辅助魔法，属于行动压缩但不是无限再动；速度光环只归团队。"
      ],
      "media": {
        "originalName": "Sha Lan",
        "id": "sha-lan",
        "name": "沙兰",
        "ptTier": "B",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "centurio",
      "originalName": "Centurio",
      "name": "盛托利翁",
      "growthRates": {
        "hp": 45,
        "strength": 45,
        "magic": 25,
        "speed": 40,
        "dexterity": 50,
        "defense": 50,
        "resistance": 30,
        "luck": 30,
        "charm": 30
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "枪术",
        "斧术",
        "重装术"
      ],
      "proficiencyCodes": [
        "spear",
        "axe",
        "heavyArmor"
      ],
      "availability": {
        "phase": "III",
        "routeNote": "第三部第2节完成营救本人支线后加入。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": 2
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-23",
          "url": "https://www.gamersky.com/handbook/202609/2211429_23.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-23",
          "url": "https://www.gamersky.com/handbook/202609/2211429_23.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "森图里奥"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "坚硬刚玉",
          "nameEn": "Sturdy Corundum",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "所受伤害×0.5",
          "trigger": "每个敌方阶段首次战斗；不是全部敌方战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "首战减伤"
      ],
      "roleEvidence": [
        {
          "tag": "首战减伤",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "每个敌方阶段首次战斗；不是全部敌方战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          14,
          30
        ],
        [
          14,
          45
        ],
        [
          0,
          0
        ],
        [
          0,
          15
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "50%减伤只限每个敌方阶段首次战斗；其余技能覆盖不全。"
      ],
      "media": {
        "originalName": "Centurio",
        "id": "centurio",
        "name": "盛托利翁",
        "ptTier": "B",
        "kgTier": null,
        "ptStatus": "ranked",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "tahonia",
      "originalName": "Tahonia",
      "name": "塔霍妮娅",
      "growthRates": null,
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [],
      "proficiencyCodes": [],
      "availability": {
        "phase": "III",
        "routeNote": "第三部第5节加入；必须在第二部第3章客串参战时存活。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": 5,
        "guestPhase": "II",
        "survivalRequired": true,
        "guestChapter": 3
      },
      "evidence": [
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": false,
      "dataStatus": {
        "growth": "missing",
        "proficiencies": "missing",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": null,
          "nameEn": null,
          "level": null,
          "description": null,
          "trigger": null,
          "sourceId": null,
          "url": null,
          "notes": [
            "已浏览资料未找到可核验个人能力。"
          ]
        }
      ],
      "abilityQuality": "missing",
      "abilityNotes": [
        "个人能力主表未列该角色，未知保持null；不以缺失判为无能力或低强度。"
      ],
      "roleTags": [],
      "roleEvidence": [],
      "abilityConflicts": [],
      "rubric": null,
      "media": {
        "originalName": "Tahonia",
        "id": "tahonia",
        "name": "塔霍妮娅",
        "ptTier": "B",
        "kgTier": null,
        "ptStatus": "ranked",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "zarcone",
      "originalName": "Zarcone",
      "name": "札可捏",
      "growthRates": {
        "hp": 40,
        "strength": 30,
        "magic": 20,
        "speed": 35,
        "dexterity": 60,
        "defense": 30,
        "resistance": 25,
        "luck": 30,
        "charm": 15
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "斧术"
      ],
      "proficiencyCodes": [
        "sword",
        "axe"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援1–3；名声4–8；10G",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": 10,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "交涉压价后支付10G"
            ],
            "earliestChapterAccordingToGamersky": 5
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": 10,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "交涉压价后支付10G"
            ],
            "earliestChapterAccordingToGamersky": 4
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 4,
            "gold": 10,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "交涉压价后支付10G"
            ],
            "earliestChapterAccordingToGamersky": 5
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 5,
            "gold": 10,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "交涉压价后支付10G"
            ],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 4,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-42",
          "url": "https://www.gamersky.com/handbook/202609/2211429_42.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-42",
          "url": "https://www.gamersky.com/handbook/202609/2211429_42.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-42",
          "url": "https://www.gamersky.com/handbook/202609/2211429_42.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "扎尔科内"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "斧手",
          "nameEn": "Hatchet Man",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "命中+10",
          "trigger": "装备斧",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "粗暴作风",
          "nameEn": "Vulgar Conduct",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "命中+20",
          "trigger": "敌人HP≤50%；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "粗暴作风+",
          "nameEn": "Vulgar Conduct+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "命中+20、攻击+3",
          "trigger": "敌人HP≤50%；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "斧命中",
        "半血敌命中",
        "半血敌输出"
      ],
      "roleEvidence": [
        {
          "tag": "斧命中",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "装备斧"
        },
        {
          "tag": "半血敌命中",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人HP≤50%；限本次战斗"
        },
        {
          "tag": "半血敌命中",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人HP≤50%；限本次战斗"
        },
        {
          "tag": "半血敌输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "敌人HP≤50%；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          7,
          10
        ],
        [
          12,
          35
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "装备斧固定命中；额外强化需敌方半血，按25%–75%条件覆盖。"
      ],
      "media": {
        "originalName": "Zarcone",
        "id": "zarcone",
        "name": "札可捏",
        "ptTier": "C",
        "kgTier": "B",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "different"
      }
    },
    {
      "id": "majide",
      "originalName": "Majide",
      "name": "马吉迪",
      "growthRates": {
        "hp": 65,
        "strength": 50,
        "magic": 15,
        "speed": 20,
        "dexterity": 30,
        "defense": 40,
        "resistance": 10,
        "luck": 25,
        "charm": 5
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "斧术",
        "格斗术"
      ],
      "proficiencyCodes": [
        "axe",
        "gauntlet"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援2–3；名声5–9",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 5,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "回答同一问题三次"
            ],
            "earliestChapterAccordingToGamersky": 5
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "回答同一问题三次"
            ]
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "回答同一问题三次"
            ],
            "earliestChapterAccordingToGamersky": 6
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [
              "回答同一问题三次"
            ],
            "earliestChapterAccordingToGamersky": 4
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 5,
        "routeCount": 4
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-41",
          "url": "https://www.gamersky.com/handbook/202609/2211429_41.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-41",
          "url": "https://www.gamersky.com/handbook/202609/2211429_41.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-41",
          "url": "https://www.gamersky.com/handbook/202609/2211429_41.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "马吉德"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "执着战斧",
          "nameEn": "Hellbent Axe",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "力量+3",
          "trigger": "装备斧",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "无所畏惧",
          "nameEn": "Fear Nothing",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+3，自身回避-30",
          "trigger": "自身先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "无所畏惧+",
          "nameEn": "Fear Nothing+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "攻击+6，自身回避-30",
          "trigger": "自身先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "斧力量",
        "主动输出",
        "主动回避代价"
      ],
      "roleEvidence": [
        {
          "tag": "斧力量",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "装备斧"
        },
        {
          "tag": "主动输出",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；限本次战斗"
        },
        {
          "tag": "主动回避代价",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；限本次战斗"
        },
        {
          "tag": "主动输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；限本次战斗"
        },
        {
          "tag": "主动回避代价",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；限本次战斗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          12,
          23
        ],
        [
          5,
          32
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "主动加攻伴随自身回避-30，净机制评分减去代价，不只取增益。"
      ],
      "media": {
        "originalName": "Majide",
        "id": "majide",
        "name": "马吉迪",
        "ptTier": "C",
        "kgTier": "C",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "benditz",
      "originalName": "Benditz",
      "name": "班迪兹",
      "growthRates": {
        "hp": 50,
        "strength": 35,
        "magic": 20,
        "speed": 35,
        "dexterity": 50,
        "defense": 35,
        "resistance": 25,
        "luck": 30,
        "charm": 35
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "弓术",
        "指挥术",
        "骑术"
      ],
      "proficiencyCodes": [
        "bow",
        "authority",
        "riding"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；四条路线均有加入条件。",
        "costNote": "支援1–3；名声7–9",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 9,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": true,
            "status": "requirements",
            "supportLevel": 2,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 5
          },
          "赛奥朵拉": {
            "available": true,
            "status": "requirements",
            "supportLevel": 1,
            "renownLevel": 8,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 7
          },
          "蕾达": {
            "available": true,
            "status": "requirements",
            "supportLevel": 3,
            "renownLevel": 7,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": [],
            "earliestChapterAccordingToGamersky": 6
          }
        },
        "availableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": 7,
        "routeCount": 4,
        "capitalAppearanceApproxDate": "4/11"
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-35",
          "url": "https://www.gamersky.com/handbook/202609/2211429_35.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-35",
          "url": "https://www.gamersky.com/handbook/202609/2211429_35.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-35",
          "url": "https://www.gamersky.com/handbook/202609/2211429_35.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [
        "本迪茨"
      ],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": "轮上战士",
          "nameEn": "Wheeled Warrior",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "命中+20",
          "trigger": "骑兵且为战车兵",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "战车冲击",
          "nameEn": "Chariot Stagger",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "staggering blows使用次数+1",
          "trigger": "战车兵；原表未说明重置单位",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "战车冲击+",
          "nameEn": "Chariot Stagger+",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "staggering blows使用次数+2",
          "trigger": "战车兵；原表未说明重置单位",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。",
        "增加使用次数的周期未说明，不能擅称每地图或每次战斗。"
      ],
      "roleTags": [
        "战车命中",
        "战车次数增加"
      ],
      "roleEvidence": [
        {
          "tag": "战车命中",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "骑兵且为战车兵"
        },
        {
          "tag": "战车次数增加",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战车兵；原表未说明重置单位"
        },
        {
          "tag": "战车次数增加",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战车兵；原表未说明重置单位"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          5,
          14
        ],
        [
          10,
          35
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "限定战车兵；额外次数重置单位未明，不能假定每回合无限使用。"
      ],
      "media": {
        "originalName": "Benditz",
        "id": "benditz",
        "name": "班迪兹",
        "ptTier": "C",
        "kgTier": "C",
        "ptStatus": "ranked",
        "kgStatus": "ranked_part_i",
        "kgLordRank": null,
        "agreement": "same"
      }
    },
    {
      "id": "eshmel",
      "originalName": "Eshmel",
      "name": "伊修玛尔",
      "growthRates": {
        "hp": 50,
        "strength": 45,
        "magic": 40,
        "speed": 45,
        "dexterity": 45,
        "defense": 35,
        "resistance": 35,
        "luck": 40,
        "charm": 50
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "枪术",
        "指挥术"
      ],
      "proficiencyCodes": [
        "spear",
        "authority"
      ],
      "availability": {
        "phase": "III",
        "routeNote": "序章主角；第三部可参战，独立于四领主第一部挖角路线。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": 1,
        "prologuePlayable": true
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "gs-char-1",
          "url": "https://www.gamersky.com/handbook/202609/2211429.shtml",
          "note": "游民人物页列出的成长率，SF当前整表没有此人。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-1",
          "url": "https://www.gamersky.com/handbook/202609/2211429.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-prologue",
          "url": "https://www.rpgsite.net/guide/21324-fire-emblem-fortunes-weave-prologue-walkthrough",
          "note": "序章结束可由Eshmel、Hong Hua与Troy进入第三部。"
        },
        {
          "field": "availability.phase",
          "sourceId": "rpg-part-iii",
          "url": "https://www.rpgsite.net/guide/21433-fire-emblem-fortunes-weave-part-iii-salvation-walkthrough",
          "note": "第三部第一节战斗以Eshmel阵亡为失败条件；后续可参与战斗。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "protagonist",
      "abilities": [
        {
          "nameZh": "净化闪击",
          "nameEn": "Purifying Flash",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": null,
          "slotKind": "unique_mechanic",
          "description": "消耗11HP；3格内选择中心，十字范围最多5目标；对不死敌人有特效",
          "trigger": "Blaze Art；宣传画面数据，量表门槛和次数未完整核实",
          "sourceId": "sf-social5",
          "url": "https://serenesforest.net/2026/07/30/fortunes-weave-japanese-twitter-information-part-5/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "versionScope": "发售前展示",
          "notes": [
            "未以宣传片等级推定学习等级。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "个人能力主表未列该角色，未知保持null；不以缺失判为无能力或低强度。"
      ],
      "roleTags": [
        "范围攻击",
        "对不死特效"
      ],
      "roleEvidence": [
        {
          "tag": "范围攻击",
          "abilityIndex": 0,
          "sourceId": "sf-social5",
          "url": "https://serenesforest.net/2026/07/30/fortunes-weave-japanese-twitter-information-part-5/",
          "condition": "Blaze Art；宣传画面数据，量表门槛和次数未完整核实"
        },
        {
          "tag": "对不死特效",
          "abilityIndex": 0,
          "sourceId": "sf-social5",
          "url": "https://serenesforest.net/2026/07/30/fortunes-weave-japanese-twitter-information-part-5/",
          "condition": "Blaze Art；宣传画面数据，量表门槛和次数未完整核实"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          60
        ],
        [
          0,
          85
        ],
        [
          0,
          45
        ],
        [
          0,
          70
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "目前主要是宣传期范围技；生命消耗与正式版参数不足，覆盖不够不出确定名次。"
      ],
      "media": {
        "originalName": "Eshmel",
        "id": "eshmel",
        "name": "伊修玛尔",
        "ptTier": null,
        "kgTier": null,
        "ptStatus": "excluded_protagonist",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "cai",
      "originalName": "Cai",
      "name": "凯伊",
      "growthRates": {
        "hp": 45,
        "strength": 45,
        "magic": 40,
        "speed": 45,
        "dexterity": 45,
        "defense": 35,
        "resistance": 35,
        "luck": 40,
        "charm": 40
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "枪术",
        "骑术",
        "白魔术"
      ],
      "proficiencyCodes": [
        "sword",
        "spear",
        "riding",
        "whiteMagic"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；凯伊剧情加入；迪托利希 / 赛奥朵拉 / 蕾达不可挖角。",
        "costNote": "本路线剧情加入；未列挖角支出。",
        "autoRoutes": [
          "凯伊"
        ],
        "unavailableRoutes": [
          "迪托利希",
          "赛奥朵拉",
          "蕾达"
        ],
        "costByRoute": {
          "凯伊": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "凯伊"
        ],
        "minimumRenownForNegotiatedRecruitment": null,
        "routeCount": 1
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-2",
          "url": "https://www.gamersky.com/handbook/202609/2211429_2.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-2",
          "url": "https://www.gamersky.com/handbook/202609/2211429_2.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-2",
          "url": "https://www.gamersky.com/handbook/202609/2211429_2.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": "cai",
      "kind": "lord",
      "abilities": [
        {
          "nameZh": "活力",
          "nameEn": "Brio",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "移动+1",
          "trigger": "固定个人能力",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": null,
          "nameEn": null,
          "nameZhStatus": null,
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": null,
          "trigger": null,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "原资料以问号占位。"
          ]
        },
        {
          "nameZh": "护火者",
          "nameEn": "Flamekeeper",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "自身及友军不受冥界火焰影响；位于其中时受攻击伤害×0.5",
          "trigger": "限冥界火焰地形；友军范围未注明",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "冥界火焰",
          "nameEn": "Underworld Flames / Netherflame",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": null,
          "slotKind": "unique_mechanic",
          "description": "火焰范围攻击，命中多名敌人并在战场留下火焰地形",
          "trigger": "消耗自身HP；6月演示中一次攻击击中5敌且自身损失14HP，这些不是已确认的固定上限或消耗",
          "sourceId": "sf-june",
          "url": "https://serenesforest.net/2026/06/09/fortunes-weave-9th-june-nintendo-direct-analysis/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "versionScope": "发售前展示",
          "notes": [
            "未以宣传片等级推定学习等级。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "移动强化",
        "团队地形防护",
        "范围攻击",
        "火焰地形"
      ],
      "roleEvidence": [
        {
          "tag": "移动强化",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "固定个人能力"
        },
        {
          "tag": "团队地形防护",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "限冥界火焰地形；友军范围未注明"
        },
        {
          "tag": "范围攻击",
          "abilityIndex": 3,
          "sourceId": "sf-june",
          "url": "https://serenesforest.net/2026/06/09/fortunes-weave-9th-june-nintendo-direct-analysis/",
          "condition": "消耗自身HP；6月演示中一次攻击击中5敌且自身损失14HP，这些不是已确认的固定上限或消耗"
        },
        {
          "tag": "火焰地形",
          "abilityIndex": 3,
          "sourceId": "sf-june",
          "url": "https://serenesforest.net/2026/06/09/fortunes-weave-9th-june-nintendo-direct-analysis/",
          "condition": "消耗自身HP；6月演示中一次攻击击中5敌且自身损失14HP，这些不是已确认的固定上限或消耗"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          0,
          0
        ],
        [
          0,
          20
        ],
        [
          0,
          0
        ],
        [
          5,
          50
        ],
        [
          25,
          30
        ],
        [
          25,
          30
        ],
        "移动+1仅计机动；冥界火焰防护依赖特定地形，宣传范围技不纳入正式版数值。"
      ],
      "media": {
        "originalName": "Cai",
        "id": "cai",
        "name": "凯伊",
        "ptTier": null,
        "kgTier": null,
        "ptStatus": "excluded_protagonist",
        "kgStatus": "separate_lord_order",
        "kgLordRank": 4,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "dietrich",
      "originalName": "Dietrich",
      "name": "迪托利希",
      "growthRates": {
        "hp": 50,
        "strength": 45,
        "magic": 30,
        "speed": 50,
        "dexterity": 60,
        "defense": 40,
        "resistance": 30,
        "luck": 50,
        "charm": 60
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "sword",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；迪托利希剧情加入；凯伊 / 赛奥朵拉 / 蕾达不可挖角。",
        "costNote": "本路线剧情加入；未列挖角支出。",
        "autoRoutes": [
          "迪托利希"
        ],
        "unavailableRoutes": [
          "凯伊",
          "赛奥朵拉",
          "蕾达"
        ],
        "costByRoute": {
          "凯伊": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "迪托利希"
        ],
        "minimumRenownForNegotiatedRecruitment": null,
        "routeCount": 1
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-3",
          "url": "https://www.gamersky.com/handbook/202609/2211429_3.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-3",
          "url": "https://www.gamersky.com/handbook/202609/2211429_3.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-3",
          "url": "https://www.gamersky.com/handbook/202609/2211429_3.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": "dietrich",
      "kind": "lord",
      "abilities": [
        {
          "nameZh": "杀意",
          "nameEn": "Murderous Intent",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "必杀+5",
          "trigger": "自身先攻；限本次战斗",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "兽性冲动",
          "nameEn": "Bestial Impulse",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "必杀+2",
          "trigger": "战斗后；持续至有单位打出必杀，原文未明确是哪方单位",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": null,
          "nameEn": null,
          "nameZhStatus": null,
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": null,
          "trigger": null,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "原资料以问号占位。"
          ]
        },
        {
          "nameZh": "移动之影",
          "nameEn": "Moving Shadow",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": null,
          "slotKind": "unique_mechanic",
          "description": "传送至3格内位置，之后仍可攻击",
          "trigger": "消耗HP的Blaze Art；不能等同无限移动或完整再行动",
          "sourceId": "sf-debut",
          "url": "https://serenesforest.net/2025/09/12/fortunes-weave-september-2025-nintendo-direct-analysis/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "versionScope": "发售前展示",
          "notes": [
            "未以宣传片等级推定学习等级。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。",
        "Bestial Impulse原文写until a unit makes a critical，未明确对象与叠加上限，不据此假定无限叠加。"
      ],
      "roleTags": [
        "主动必杀",
        "战后必杀积累",
        "传送突进"
      ],
      "roleEvidence": [
        {
          "tag": "主动必杀",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；限本次战斗"
        },
        {
          "tag": "战后必杀积累",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "战斗后；持续至有单位打出必杀，原文未明确是哪方单位"
        },
        {
          "tag": "传送突进",
          "abilityIndex": 3,
          "sourceId": "sf-debut",
          "url": "https://serenesforest.net/2025/09/12/fortunes-weave-september-2025-nintendo-direct-analysis/",
          "condition": "消耗HP的Blaze Art；不能等同无限移动或完整再行动"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          3,
          5
        ],
        [
          5,
          16
        ],
        [
          0,
          0
        ],
        [
          0,
          15
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "主动必杀与首次必杀前累计按条件估值；宣传版传送技不冒充正式版固定收益。"
      ],
      "media": {
        "originalName": "Dietrich",
        "id": "dietrich",
        "name": "迪托利希",
        "ptTier": null,
        "kgTier": null,
        "ptStatus": "excluded_protagonist",
        "kgStatus": "separate_lord_order",
        "kgLordRank": 1,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "leda",
      "originalName": "Leda",
      "name": "蕾达",
      "growthRates": {
        "hp": 40,
        "strength": 35,
        "magic": 35,
        "speed": 65,
        "dexterity": 50,
        "defense": 30,
        "resistance": 35,
        "luck": 25,
        "charm": 55
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [
        "剑术",
        "弓术",
        "白魔术",
        "步兵术"
      ],
      "proficiencyCodes": [
        "sword",
        "bow",
        "whiteMagic",
        "infantry"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；蕾达剧情加入；凯伊 / 迪托利希 / 赛奥朵拉不可挖角。",
        "costNote": "本路线剧情加入；未列挖角支出。",
        "autoRoutes": [
          "蕾达"
        ],
        "unavailableRoutes": [
          "凯伊",
          "迪托利希",
          "赛奥朵拉"
        ],
        "costByRoute": {
          "凯伊": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "蕾达"
        ],
        "minimumRenownForNegotiatedRecruitment": null,
        "routeCount": 1
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-5",
          "url": "https://www.gamersky.com/handbook/202609/2211429_5.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-5",
          "url": "https://www.gamersky.com/handbook/202609/2211429_5.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-5",
          "url": "https://www.gamersky.com/handbook/202609/2211429_5.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": "leda",
      "kind": "lord",
      "abilities": [
        {
          "nameZh": "出其不意",
          "nameEn": "Blindside",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "敌人不能反击",
          "trigger": "自身先攻；发动率5%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": null,
          "nameEn": null,
          "nameZhStatus": null,
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": null,
          "trigger": null,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "原资料以问号占位。"
          ]
        },
        {
          "nameZh": "即兴演奏",
          "nameEn": "Improviso",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "使用Blaze Arts后仍可攻击",
          "trigger": "仅Overblaze期间；来源未称完整再行动",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "咒歌",
          "nameEn": "Spellsongs",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": null,
          "slotKind": "unique_mechanic",
          "description": "给友军提供战斗增益；可通过酒馆演出委托学习新的Blaze Arts",
          "trigger": "消耗自身HP；具体增益、范围、持续时间和次数依歌曲，本文未列",
          "sourceId": "gamespot-preview",
          "url": "https://www.gamespot.com/articles/fire-emblem-fortunes-weave-feels-like-four-games-worth-of-fire-emblem/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "versionScope": "媒体实际试玩前期",
          "notes": [
            "未以宣传片等级推定学习等级。"
          ]
        },
        {
          "nameZh": "魔兽之歌",
          "nameEn": "Song of Beasts",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": null,
          "slotKind": "unique_mechanic",
          "description": "召唤魔兽；首支预告界面注明每地图一次",
          "trigger": "首支预告：量表至少半满；界面显示消耗11HP、Blaze+4；固定消耗公式与正式版未确认",
          "sourceId": "sensatez-blaze",
          "url": "https://sensatez.net/blaze-arts-fire-emblem-fortunes-weave-new-major-mechanic.html",
          "perMapLimit": 1,
          "perBattleLimit": null,
          "versionScope": "发售前展示",
          "notes": [
            "未以宣传片等级推定学习等级。"
          ]
        }
      ],
      "abilityQuality": "partial",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。",
        "Improviso只说明仍可攻击，不足以证明可再次移动、再用辅助或无限再动。"
      ],
      "roleTags": [
        "概率封锁反击",
        "特殊技后攻击",
        "团队歌曲辅助",
        "受限魔兽召唤"
      ],
      "roleEvidence": [
        {
          "tag": "概率封锁反击",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "自身先攻；发动率5%"
        },
        {
          "tag": "特殊技后攻击",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "仅Overblaze期间；来源未称完整再行动"
        },
        {
          "tag": "团队歌曲辅助",
          "abilityIndex": 3,
          "sourceId": "gamespot-preview",
          "url": "https://www.gamespot.com/articles/fire-emblem-fortunes-weave-feels-like-four-games-worth-of-fire-emblem/",
          "condition": "消耗自身HP；具体增益、范围、持续时间和次数依歌曲，本文未列"
        },
        {
          "tag": "受限魔兽召唤",
          "abilityIndex": 4,
          "sourceId": "sensatez-blaze",
          "url": "https://sensatez.net/blaze-arts-fire-emblem-fortunes-weave-new-major-mechanic.html",
          "condition": "首支预告：量表至少半满；界面显示消耗11HP、Blaze+4；固定消耗公式与正式版未确认"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          1,
          4
        ],
        [
          8,
          43
        ],
        [
          0,
          0
        ],
        [
          0,
          20
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "5%阻止反击不可依赖；额外攻击仅限特定爆发状态，不等于完整再行动。歌曲与召唤宣传参数未计。"
      ],
      "media": {
        "originalName": "Leda",
        "id": "leda",
        "name": "蕾达",
        "ptTier": null,
        "kgTier": null,
        "ptStatus": "excluded_protagonist",
        "kgStatus": "separate_lord_order",
        "kgLordRank": 3,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "theodora",
      "originalName": "Theodora",
      "name": "赛奥朵拉",
      "growthRates": {
        "hp": 70,
        "strength": 50,
        "magic": 30,
        "speed": 40,
        "dexterity": 40,
        "defense": 40,
        "resistance": 30,
        "luck": 30,
        "charm": 50
      },
      "effectiveGrowthRates": null,
      "numericIntervals": {
        "dexterity": [
          40,
          50
        ]
      },
      "proficiencies": [
        "枪术",
        "白魔术",
        "指挥术"
      ],
      "proficiencyCodes": [
        "spear",
        "whiteMagic",
        "authority"
      ],
      "availability": {
        "phase": "I",
        "routeNote": "第一部；赛奥朵拉剧情加入；凯伊 / 迪托利希 / 蕾达不可挖角。",
        "costNote": "本路线剧情加入；未列挖角支出。",
        "autoRoutes": [
          "赛奥朵拉"
        ],
        "unavailableRoutes": [
          "凯伊",
          "迪托利希",
          "蕾达"
        ],
        "costByRoute": {
          "凯伊": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "迪托利希": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "赛奥朵拉": {
            "available": true,
            "status": "story",
            "supportLevel": null,
            "renownLevel": null,
            "gold": 0,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          },
          "蕾达": {
            "available": false,
            "status": "unavailable",
            "supportLevel": null,
            "renownLevel": null,
            "gold": null,
            "items": [],
            "questCount": null,
            "paralogues": [],
            "otherConditions": []
          }
        },
        "availableRoutes": [
          "赛奥朵拉"
        ],
        "minimumRenownForNegotiatedRecruitment": null,
        "routeCount": 1
      },
      "evidence": [
        {
          "field": "growthRates",
          "sourceId": "sf-growth",
          "url": "https://serenesforest.net/fortunes-weave/characters/growth-rates/",
          "note": "个人基础成长率，单位%；不含职业加成。"
        },
        {
          "field": "proficiencies",
          "sourceId": "gs-char-4",
          "url": "https://www.gamersky.com/handbook/202609/2211429_4.shtml",
          "note": "人物页擅长技能；不代表当前技能等级或固定武器许可。"
        },
        {
          "field": "growthRates.crossCheck",
          "sourceId": "gs-char-4",
          "url": "https://www.gamersky.com/handbook/202609/2211429_4.shtml",
          "note": "交叉核对人物页；差异列于conflicts。"
        },
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        },
        {
          "field": "availability.crossCheck",
          "sourceId": "gs-char-4",
          "url": "https://www.gamersky.com/handbook/202609/2211429_4.shtml",
          "note": "对照中文人物页支援/名声；章节仅为该页列示，不等于实测全局最早时间。"
        }
      ],
      "conflicts": [
        {
          "field": "growthRates.dexterity",
          "values": [
            {
              "value": 40,
              "sourceId": "sf-growth"
            },
            {
              "value": 50,
              "sourceId": "gs-char-4"
            }
          ],
          "resolution": "growthRates暂以SF整表值作基准；模型须同时检查numericIntervals区间。"
        }
      ],
      "proficienciesKnown": true,
      "dataStatus": {
        "growth": "known",
        "proficiencies": "known",
        "availability": "known"
      },
      "aliases": [],
      "portrait": "theodora",
      "kind": "lord",
      "abilities": [
        {
          "nameZh": "王者决意",
          "nameEn": "Royal Resolve",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 1,
          "slotKind": "fixed_personal",
          "description": "所受伤害×0.5",
          "trigger": "受攻击时；发动率30%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": []
        },
        {
          "nameZh": "不可阻挡",
          "nameEn": "Unstoppable Force",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 2,
          "slotKind": "additional_or_upgrade",
          "description": "对障碍伤害×3",
          "trigger": "攻击障碍物",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "直接命中",
          "nameEn": "Direct Hit",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": 3,
          "slotKind": "additional_or_upgrade",
          "description": "伤害+10",
          "trigger": "使用Blaze Arts攻击；发动率30%",
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "notes": [
            "额外能力需学习并装备；+版本替换同名基础版，不与基础版相加。"
          ]
        },
        {
          "nameZh": "大地投掷",
          "nameEn": "Earthen Throw",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": null,
          "slotKind": "unique_mechanic",
          "description": "向直线远处投掷地块攻击",
          "trigger": "消耗自身HP；具体射程和伤害未列",
          "sourceId": "gamespot-preview",
          "url": "https://www.gamespot.com/articles/fire-emblem-fortunes-weave-feels-like-four-games-worth-of-fire-emblem/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "versionScope": "媒体实际试玩前期",
          "notes": [
            "未以宣传片等级推定学习等级。"
          ]
        },
        {
          "nameZh": "骑士团",
          "nameEn": "Battalions",
          "nameZhStatus": "本站工作译名，未核对官中",
          "level": null,
          "slotOrder": null,
          "slotKind": "unique_mechanic",
          "description": "分配骑士团强化单位；团体战术可限制敌人移动",
          "trigger": "需分配对应骑士团；准确次数与数值未记载",
          "sourceId": "sf-debut",
          "url": "https://serenesforest.net/2025/09/12/fortunes-weave-september-2025-nintendo-direct-analysis/",
          "perMapLimit": null,
          "perBattleLimit": null,
          "versionScope": "发售前展示",
          "notes": [
            "未以宣传片等级推定学习等级。"
          ],
          "corroboratingSources": [
            {
              "sourceId": "gamespot-preview",
              "url": "https://www.gamespot.com/articles/fire-emblem-fortunes-weave-feels-like-four-games-worth-of-fire-emblem/"
            }
          ]
        }
      ],
      "abilityQuality": "direct",
      "abilityNotes": [
        "来源标注持续完善中；direct指已直接读到已列能力，不保证所有等级或最终形态完整。"
      ],
      "roleTags": [
        "概率减伤",
        "障碍破坏",
        "概率特殊技输出",
        "直线远程攻击",
        "团队骑士团辅助",
        "移动控制"
      ],
      "roleEvidence": [
        {
          "tag": "概率减伤",
          "abilityIndex": 0,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "受攻击时；发动率30%"
        },
        {
          "tag": "障碍破坏",
          "abilityIndex": 1,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "攻击障碍物"
        },
        {
          "tag": "概率特殊技输出",
          "abilityIndex": 2,
          "sourceId": "sf-personal",
          "url": "https://serenesforest.net/fortunes-weave/characters/personal-abilities/",
          "condition": "使用Blaze Arts攻击；发动率30%"
        },
        {
          "tag": "直线远程攻击",
          "abilityIndex": 3,
          "sourceId": "gamespot-preview",
          "url": "https://www.gamespot.com/articles/fire-emblem-fortunes-weave-feels-like-four-games-worth-of-fire-emblem/",
          "condition": "消耗自身HP；具体射程和伤害未列"
        },
        {
          "tag": "团队骑士团辅助",
          "abilityIndex": 4,
          "sourceId": "sf-debut",
          "url": "https://serenesforest.net/2025/09/12/fortunes-weave-september-2025-nintendo-direct-analysis/",
          "condition": "需分配对应骑士团；准确次数与数值未记载"
        },
        {
          "tag": "移动控制",
          "abilityIndex": 4,
          "sourceId": "sf-debut",
          "url": "https://serenesforest.net/2025/09/12/fortunes-weave-september-2025-nintendo-direct-analysis/",
          "condition": "需分配对应骑士团；准确次数与数值未记载"
        }
      ],
      "abilityConflicts": [],
      "rubric": [
        [
          19,
          26
        ],
        [
          21,
          39
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        "受击30%概率减半，平均减伤15%但不保证生存；障碍物三倍伤害不是对敌三倍。"
      ],
      "media": {
        "originalName": "Theodora",
        "id": "theodora",
        "name": "赛奥朵拉",
        "ptTier": null,
        "kgTier": null,
        "ptStatus": "excluded_protagonist",
        "kgStatus": "separate_lord_order",
        "kgLordRank": 2,
        "agreement": "not_comparable"
      }
    },
    {
      "id": "klapka",
      "originalName": "Klapka",
      "name": "克拉普卡",
      "growthRates": null,
      "effectiveGrowthRates": null,
      "numericIntervals": {},
      "proficiencies": [],
      "proficiencyCodes": [],
      "availability": {
        "phase": "III",
        "routeNote": "第三部第6节加入；必须在第5节客串参战时存活。",
        "costNote": "条件为剧情、前置事件或战场存活；来源未列固定挖角金币数。",
        "autoRoutes": [],
        "unavailableRoutes": [],
        "costByRoute": {},
        "availableRoutes": [],
        "routeCount": null,
        "section": 6,
        "guestPhase": "III",
        "survivalRequired": true,
        "guestSection": 5
      },
      "evidence": [
        {
          "field": "availability",
          "sourceId": "rpg-recruitment",
          "url": "https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them",
          "note": "按该角色条目结构化路线条件；金钱null仅表示来源未给数值，不表示免费。"
        }
      ],
      "conflicts": [],
      "proficienciesKnown": false,
      "dataStatus": {
        "growth": "missing",
        "proficiencies": "missing",
        "availability": "known"
      },
      "aliases": [],
      "portrait": null,
      "kind": "recruit",
      "abilities": [
        {
          "nameZh": null,
          "nameEn": null,
          "level": null,
          "description": null,
          "trigger": null,
          "sourceId": null,
          "url": null,
          "notes": [
            "已浏览资料未找到可核验个人能力。"
          ]
        }
      ],
      "abilityQuality": "missing",
      "abilityNotes": [
        "个人能力主表未列该角色，未知保持null；不以缺失判为无能力或低强度。"
      ],
      "roleTags": [],
      "roleEvidence": [],
      "abilityConflicts": [],
      "rubric": null,
      "media": {
        "originalName": "Klapka",
        "id": "klapka",
        "name": "克拉普卡",
        "ptTier": null,
        "kgTier": null,
        "ptStatus": "not_listed",
        "kgStatus": "outside_scope_or_not_listed",
        "kgLordRank": null,
        "agreement": "not_comparable"
      }
    }
  ]
};
