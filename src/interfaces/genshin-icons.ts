export type GenshinIcons = {
  namespace: string
  icons: Record<string, string>
}

export const GenshinCharacterIcons: GenshinIcons = {
  namespace: 'character_icon',
  icons: {
    神里绫华: 'UI_AvatarIcon_Ayaka',
    琴: 'UI_AvatarIcon_Qin',
    空: 'UI_AvatarIcon_PlayerBoy',
    丽莎: 'UI_AvatarIcon_Lisa',
    荧: 'UI_AvatarIcon_PlayerGirl',
    芭芭拉: 'UI_AvatarIcon_Barbara',
    凯亚: 'UI_AvatarIcon_Kaeya',
    迪卢克: 'UI_AvatarIcon_Diluc',
    雷泽: 'UI_AvatarIcon_Razor',
    安柏: 'UI_AvatarIcon_Ambor',
    温迪: 'UI_AvatarIcon_Venti',
    香菱: 'UI_AvatarIcon_Xiangling',
    北斗: 'UI_AvatarIcon_Beidou',
    行秋: 'UI_AvatarIcon_Xingqiu',
    魈: 'UI_AvatarIcon_Xiao',
    凝光: 'UI_AvatarIcon_Ningguang',
    可莉: 'UI_AvatarIcon_Klee',
    钟离: 'UI_AvatarIcon_Zhongli',
    菲谢尔: 'UI_AvatarIcon_Fischl',
    班尼特: 'UI_AvatarIcon_Bennett',
    达达利亚: 'UI_AvatarIcon_Tartaglia',
    诺艾尔: 'UI_AvatarIcon_Noel',
    七七: 'UI_AvatarIcon_Qiqi',
    重云: 'UI_AvatarIcon_Chongyun',
    甘雨: 'UI_AvatarIcon_Ganyu',
    阿贝多: 'UI_AvatarIcon_Albedo',
    迪奥娜: 'UI_AvatarIcon_Diona',
    莫娜: 'UI_AvatarIcon_Mona',
    刻晴: 'UI_AvatarIcon_Keqing',
    砂糖: 'UI_AvatarIcon_Sucrose',
    辛焱: 'UI_AvatarIcon_Xinyan',
    罗莎莉亚: 'UI_AvatarIcon_Rosaria',
    胡桃: 'UI_AvatarIcon_Hutao',
    枫原万叶: 'UI_AvatarIcon_Kazuha',
    烟绯: 'UI_AvatarIcon_Feiyan',
    宵宫: 'UI_AvatarIcon_Yoimiya',
    托马: 'UI_AvatarIcon_Tohma',
    优菈: 'UI_AvatarIcon_Eula',
    雷电将军: 'UI_AvatarIcon_Shougun',
    早柚: 'UI_AvatarIcon_Sayu',
    珊瑚宫心海: 'UI_AvatarIcon_Kokomi',
    五郎: 'UI_AvatarIcon_Gorou',
    九条裟罗: 'UI_AvatarIcon_Sara',
    荒泷一斗: 'UI_AvatarIcon_Itto',
    八重神子: 'UI_AvatarIcon_Yae',
    鹿野院平藏: 'UI_AvatarIcon_Heizo',
    夜兰: 'UI_AvatarIcon_Yelan',
    埃洛伊: 'UI_AvatarIcon_Aloy',
    申鹤: 'UI_AvatarIcon_Shenhe',
    云堇: 'UI_AvatarIcon_Yunjin',
    久岐忍: 'UI_AvatarIcon_Shinobu',
    神里绫人: 'UI_AvatarIcon_Ayato',
    柯莱: 'UI_AvatarIcon_Collei',
    多莉: 'UI_AvatarIcon_Dori',
    提纳里: 'UI_AvatarIcon_Tighnari',
    妮露: 'UI_AvatarIcon_Nilou',
    赛诺: 'UI_AvatarIcon_Cyno',
    坎蒂丝: 'UI_AvatarIcon_Candace',
    纳西妲: 'UI_AvatarIcon_Nahida',
    莱依拉: 'UI_AvatarIcon_Layla',
    流浪者: 'UI_AvatarIcon_Wanderer',
    珐露珊: 'UI_AvatarIcon_Faruzan',
    瑶瑶: 'UI_AvatarIcon_Yaoyao',
    艾尔海森: 'UI_AvatarIcon_Alhaitham', // TODO: 404 not found
    迪希雅: 'UI_AvatarIcon_Dehya',
    米卡: 'UI_AvatarIcon_Mika'
  }
}

export const GenshinEquipIcons: GenshinIcons = {
  namespace: 'equip',
  icons: {
    无锋剑: 'UI_EquipIcon_Sword_Blunt',
    银剑: 'UI_EquipIcon_Sword_Silver',
    冷刃: 'UI_EquipIcon_Sword_Steel',
    黎明神剑: 'UI_EquipIcon_Sword_Dawn',
    旅行剑: 'UI_EquipIcon_Sword_Traveler',
    暗铁剑: 'UI_EquipIcon_Sword_Darker',
    吃虎鱼刀: 'UI_EquipIcon_Sword_Sashimi',
    飞天御剑: 'UI_EquipIcon_Sword_Mitsurugi',
    西风剑: 'UI_EquipIcon_Sword_Zephyrus',
    笛剑: 'UI_EquipIcon_Sword_Troupe',
    祭礼剑: 'UI_EquipIcon_Sword_Fossil',
    宗室长剑: 'UI_EquipIcon_Sword_Theocrat',
    匣里龙吟: 'UI_EquipIcon_Sword_Rockkiller',
    试作斩岩: 'UI_EquipIcon_Sword_Proto',
    铁蜂刺: 'UI_EquipIcon_Sword_Exotic',
    黑岩长剑: 'UI_EquipIcon_Sword_Blackrock',
    黑剑: 'UI_EquipIcon_Sword_Bloodstained',
    暗巷闪光: 'UI_EquipIcon_Sword_Outlaw',
    降临之剑: 'UI_EquipIcon_Sword_Psalmus',
    腐殖之剑: 'UI_EquipIcon_Sword_Magnum',
    天目影打刀: 'UI_EquipIcon_Sword_Bakufu',
    辰砂之纺锤: 'UI_EquipIcon_Sword_Opus',
    笼钓瓶一心: 'UI_EquipIcon_Sword_Youtou',
    原木刀: 'UI_EquipIcon_Sword_Arakalari',
    西福斯的月光: 'UI_EquipIcon_Sword_Pleroma',
    东花坊时雨: 'UI_EquipIcon_Sword_Kasabouzu',
    风鹰剑: 'UI_EquipIcon_Sword_Falcon',
    天空之刃: 'UI_EquipIcon_Sword_Dvalin',
    苍古自由之誓: 'UI_EquipIcon_Sword_Widsith',
    斫峰之刃: 'UI_EquipIcon_Sword_Kunwu',
    磐岩结绿: 'UI_EquipIcon_Sword_Morax',
    雾切之回光: 'UI_EquipIcon_Sword_Narukami',
    波乱月白经津: 'UI_EquipIcon_Sword_Amenoma',
    圣显之钥: 'UI_EquipIcon_Sword_Deshret',
    裁叶萃光: 'UI_EquipIcon_Sword_Ayus',
    训练大剑: 'UI_EquipIcon_Claymore_Aniki',
    佣兵重剑: 'UI_EquipIcon_Claymore_Oyaji',
    铁影阔剑: 'UI_EquipIcon_Claymore_Glaive',
    沐浴龙血的剑: 'UI_EquipIcon_Claymore_Siegfry',
    白铁大剑: 'UI_EquipIcon_Claymore_Tin',
    石英大剑: 'UI_EquipIcon_Claymore_Quartz',
    以理服人: 'UI_EquipIcon_Claymore_Reasoning',
    飞天大御剑: 'UI_EquipIcon_Claymore_Mitsurugi',
    西风大剑: 'UI_EquipIcon_Claymore_Zephyrus',
    钟剑: 'UI_EquipIcon_Claymore_Troupe',
    祭礼大剑: 'UI_EquipIcon_Claymore_Fossil',
    宗室大剑: 'UI_EquipIcon_Claymore_Theocrat',
    雨裁: 'UI_EquipIcon_Claymore_Perdue',
    试作古华: 'UI_EquipIcon_Claymore_Proto',
    白影剑: 'UI_EquipIcon_Claymore_Exotic',
    黑岩斩刀: 'UI_EquipIcon_Claymore_Blackrock',
    螭骨剑: 'UI_EquipIcon_Claymore_Kione',
    千岩古剑: 'UI_EquipIcon_Claymore_Lapis',
    雪葬的星银: 'UI_EquipIcon_Claymore_Dragonfell',
    衔珠海皇: 'UI_EquipIcon_Claymore_MillenniaTuna',
    桂木斩长正: 'UI_EquipIcon_Claymore_Bakufu',
    玛海菈的水色: 'UI_EquipIcon_Claymore_Pleroma',
    恶王丸: 'UI_EquipIcon_Claymore_Maria',
    森林王器: 'UI_EquipIcon_Claymore_Arakalari',
    饰铁之花: 'UI_EquipIcon_Claymore_Fleurfair',
    天空之傲: 'UI_EquipIcon_Claymore_Dvalin',
    狼的末路: 'UI_EquipIcon_Claymore_Wolfmound',
    松籁响起之时: 'UI_EquipIcon_Claymore_Widsith',
    无工之剑: 'UI_EquipIcon_Claymore_Kunwu',
    赤角石溃杵: 'UI_EquipIcon_Claymore_Itadorimaru',
    苇海信标: 'UI_EquipIcon_Claymore_Deshret',
    新手长枪: 'UI_EquipIcon_Pole_Gewalt',
    铁尖枪: 'UI_EquipIcon_Pole_Rod',
    白缨枪: 'UI_EquipIcon_Pole_Ruby',
    钺矛: 'UI_EquipIcon_Pole_Halberd',
    黑缨枪: 'UI_EquipIcon_Pole_Noire',
    '「旗杆」': 'UI_EquipIcon_Pole_Flagpole',
    匣里灭辰: 'UI_EquipIcon_Pole_Stardust',
    试作星镰: 'UI_EquipIcon_Pole_Proto',
    流月针: 'UI_EquipIcon_Pole_Exotic',
    黑岩刺枪: 'UI_EquipIcon_Pole_Blackrock',
    决斗之枪: 'UI_EquipIcon_Pole_Gladiator',
    千岩长枪: 'UI_EquipIcon_Pole_Lapis',
    西风长枪: 'UI_EquipIcon_Pole_Zephyrus',
    宗室猎枪: 'UI_EquipIcon_Pole_Theocrat',
    龙脊长枪: 'UI_EquipIcon_Pole_Everfrost',
    喜多院十文字: 'UI_EquipIcon_Pole_Bakufu',
    '「渔获」': 'UI_EquipIcon_Pole_Mori',
    断浪长鳍: 'UI_EquipIcon_Pole_Maria',
    贯月矢: 'UI_EquipIcon_Pole_Arakalari',
    风信之锋: 'UI_EquipIcon_Pole_Windvane',
    护摩之杖: 'UI_EquipIcon_Pole_Homa',
    天空之脊: 'UI_EquipIcon_Pole_Dvalin',
    贯虹之槊: 'UI_EquipIcon_Pole_Kunwu',
    和璞鸢: 'UI_EquipIcon_Pole_Morax',
    息灾: 'UI_EquipIcon_Pole_Santika',
    薙草之稻光: 'UI_EquipIcon_Pole_Narukami',
    赤沙之杖: 'UI_EquipIcon_Pole_Deshret',
    学徒笔记: 'UI_EquipIcon_Catalyst_Apprentice',
    口袋魔导书: 'UI_EquipIcon_Catalyst_Pocket',
    魔导绪论: 'UI_EquipIcon_Catalyst_Intro',
    讨龙英杰谭: 'UI_EquipIcon_Catalyst_Pulpfic',
    异世界行记: 'UI_EquipIcon_Catalyst_Lightnov',
    翡玉法球: 'UI_EquipIcon_Catalyst_Jade',
    甲级宝珏: 'UI_EquipIcon_Catalyst_Phoney',
    琥珀玥: 'UI_EquipIcon_Catalyst_Amber',
    西风秘典: 'UI_EquipIcon_Catalyst_Zephyrus',
    流浪乐章: 'UI_EquipIcon_Catalyst_Troupe',
    祭礼残章: 'UI_EquipIcon_Catalyst_Fossil',
    宗室秘法录: 'UI_EquipIcon_Catalyst_Theocrat',
    匣里日月: 'UI_EquipIcon_Catalyst_Resurrection',
    试作金珀: 'UI_EquipIcon_Catalyst_Proto',
    万国诸海图谱: 'UI_EquipIcon_Catalyst_Exotic',
    黑岩绯玉: 'UI_EquipIcon_Catalyst_Blackrock',
    昭心: 'UI_EquipIcon_Catalyst_Truelens',
    暗巷的酒与诗: 'UI_EquipIcon_Catalyst_Outlaw',
    忍冬之果: 'UI_EquipIcon_Catalyst_Everfrost',
    嘟嘟可故事集: 'UI_EquipIcon_Catalyst_Ludiharpastum',
    白辰之环: 'UI_EquipIcon_Catalyst_Bakufu',
    证誓之明瞳: 'UI_EquipIcon_Catalyst_Jyanome',
    流浪的晚星: 'UI_EquipIcon_Catalyst_Pleroma',
    盈满之实: 'UI_EquipIcon_Catalyst_Arakalari',
    天空之卷: 'UI_EquipIcon_Catalyst_Dvalin',
    四风原典: 'UI_EquipIcon_Catalyst_Fourwinds',
    尘世之锁: 'UI_EquipIcon_Catalyst_Kunwu',
    不灭月华: 'UI_EquipIcon_Catalyst_Kaleido',
    神乐之真意: 'UI_EquipIcon_Catalyst_Narukami',
    千夜浮梦: 'UI_EquipIcon_Catalyst_Ayus',
    图莱杜拉的回忆: 'UI_EquipIcon_Catalyst_Alaya',
    猎弓: 'UI_EquipIcon_Bow_Hunters',
    历练的猎弓: 'UI_EquipIcon_Bow_Old',
    鸦羽弓: 'UI_EquipIcon_Bow_Crowfeather',
    神射手之誓: 'UI_EquipIcon_Bow_Arjuna',
    反曲弓: 'UI_EquipIcon_Bow_Curve',
    弹弓: 'UI_EquipIcon_Bow_Sling',
    信使: 'UI_EquipIcon_Bow_Msg',
    黑檀弓: 'UI_EquipIcon_Bow_Hardwood',
    西风猎弓: 'UI_EquipIcon_Bow_Zephyrus',
    绝弦: 'UI_EquipIcon_Bow_Troupe',
    祭礼弓: 'UI_EquipIcon_Bow_Fossil',
    宗室长弓: 'UI_EquipIcon_Bow_Theocrat',
    弓藏: 'UI_EquipIcon_Bow_Recluse',
    试作澹月: 'UI_EquipIcon_Bow_Proto',
    钢轮弓: 'UI_EquipIcon_Bow_Exotic',
    黑岩战弓: 'UI_EquipIcon_Bow_Blackrock',
    苍翠猎弓: 'UI_EquipIcon_Bow_Viridescent',
    暗巷猎手: 'UI_EquipIcon_Bow_Outlaw',
    落霞: 'UI_EquipIcon_Bow_Fallensun',
    幽夜华尔兹: 'UI_EquipIcon_Bow_Nachtblind',
    风花之颂: 'UI_EquipIcon_Bow_Fleurfair',
    破魔之弓: 'UI_EquipIcon_Bow_Bakufu',
    掠食者: 'UI_EquipIcon_Bow_Predator',
    曚云之月: 'UI_EquipIcon_Bow_Maria',
    王下近侍: 'UI_EquipIcon_Bow_Arakalari',
    竭泽: 'UI_EquipIcon_Bow_Fin',
    天空之翼: 'UI_EquipIcon_Bow_Dvalin',
    阿莫斯之弓: 'UI_EquipIcon_Bow_Amos',
    终末嗟叹之诗: 'UI_EquipIcon_Bow_Widsith',
    冬极白星: 'UI_EquipIcon_Bow_Worldbane',
    若水: 'UI_EquipIcon_Bow_Kirin',
    飞雷之弦振: 'UI_EquipIcon_Bow_Narukami',
    猎人之径: 'UI_EquipIcon_Bow_Ayus'
  }
}

export function getGenshinIconUrl (name: string, isEquip: boolean): string | undefined {
  const ref = isEquip ? GenshinEquipIcons : GenshinCharacterIcons
  const icon = ref.icons[name]
  if (!icon) return undefined
  return `https://upload-bbs.mihoyo.com/game_record/genshin/${ref.namespace}/${icon}.png`
}
