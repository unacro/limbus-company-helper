// data/team-code-samples.json
var personalities = [
  {
    description: "第 1 人格",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmqSLsaGsLANDKykhgAAAA"
  },
  {
    description: "第 2 人格",
    code: "H4sIAAAAAAAAA3NMd0x3BAJnIAQBTyAEAaoIO9raAgDjhr3IYAAAAA=="
  },
  {
    description: "第 3 人格",
    code: "H4sIAAAAAAAAA3Msd0x3BAIXR2cQ5ejr6AmmqSLsaGsLAE5TFSlgAAAA"
  },
  {
    description: "第 4 人格",
    code: "H4sIAAAAAAAAA3NydEx3BAJXR2cQ5Rjo6AminKgh7OhoawsAwBYf92AAAAA="
  },
  {
    description: "第 5 人格",
    code: "H4sIAAAAAAAAA3MKdEx3BAI3R2cQ5Rjq6AminKgh7OhoawsAirD0/GAAAAA="
  },
  {
    description: "第 6 人格",
    code: "H4sIAAAAAAAAA3NKd0x3BAJ3R2cQ5Rjp6AminKgh7OhoawsAufyDfGAAAAA="
  },
  {
    description: "第 7 人格",
    code: "H4sIAAAAAAAAA3Mqd0x3BAIPR2cQ5Zjs6AminKgh7OhoawsAv+xMRGAAAAA="
  },
  {
    description: "第 8 人格",
    code: "H4sIAAAAAAAAA3N2dEx3BAJPR2cQBeR4gihnagg7OtraAgDMToZnYAAAAA=="
  },
  {
    description: "第 9 人格",
    code: "H4sIAAAAAAAAA3MOdEx3BAIvR2cQ5Zjt6AminKkh7OhoawsAutWnDWAAAAA="
  },
  {
    description: "第 10 人格",
    code: "H4sIAAAAAAAAA3NOd0x3BAJvR2cQ5Zjv6AminKkh7OhoawsAtaQa7GAAAAA="
  },
  {
    description: "第 11 人格",
    code: "H4sIAAAAAAAAA3Mud0x3BAIfR2cQ5Vjs6AminKkh7OhoawsAXDbsr2AAAAA="
  },
  {
    description: "第 12 人格",
    code: "H4sIAAAAAAAAA3NxdEx3BAJfR2cQ5Vju6AmiXKgh7OhoawsA5HWFbGAAAAA="
  },
  {
    description: "第 13 人格",
    code: "H4sIAAAAAAAAA3MJdEx3BAI/R2cQ5Wjg6AmiXKgh7OhoawsABH0uJmAAAAA="
  }
];

// data/egos.json
var egos_default = [{ id: 20101, name: "乌瞰刀", desc: "李箱的基础E.G.O装备", nameRaw: "Crow’s Eye View", descRaw: "Yi Sang’s Base E.G.O" }, { id: 20102, name: "终末火柴之光", desc: "李箱的专用E.G.O装备", nameRaw: "4th Match Flame", descRaw: "Yi Sang’s E.G.O Gear" }, { id: 20103, name: "祈愿石", desc: "李箱的专用E.G.O装备", nameRaw: "Wishing Cairn", descRaw: "Yi Sang’s E.G.O Gear" }, { id: 20201, name: "表象放射器", desc: "浮士德的基础E.G.O装备", nameRaw: "Representation Emitter", descRaw: "Faust’s Base E.G.O" }, { id: 20202, name: "液囊", desc: "浮士德的专用E.G.O装备", nameRaw: "Fluid Sac", descRaw: "Faust’s E.G.O Gear" }, { id: 20203, name: "诅咒之钉", desc: "浮士德的专用E.G.O装备", nameRaw: "Hex Nail", descRaw: "Faust’s E.G.O Gear" }, { id: 20301, name: "桑丘之血", desc: "堂吉诃德的基础E.G.O装备", nameRaw: "La Sangre de Sancho", descRaw: "Don Quixote’s Base E.G.O" }, { id: 20302, name: "液囊", desc: "堂吉诃德的专用E.G.O装备", nameRaw: "Fluid Sac", descRaw: "Don Quixote’s E.G.O Gear" }, { id: 20401, name: "森罗炎象", desc: "良秀的基础E.G.O装备", nameRaw: "Forest for the Flames", descRaw: "Ryōshū’s Base E.G.O" }, { id: 20402, name: "终末火柴之光", desc: "良秀的专用E.G.O装备", nameRaw: "4th Match Flame", descRaw: "Ryōshū’s E.G.O Gear" }, { id: 20501, name: "他人之锁", desc: "默尔索的基础E.G.O装备", nameRaw: "Chains of Others", descRaw: "Meursault’s Base E.G.O" }, { id: 20502, name: "脱线一击", desc: "默尔索的专用E.G.O装备", nameRaw: "Screwloose Wallop", descRaw: "Meursault’s E.G.O Gear" }, { id: 20503, name: "执行", desc: "默尔索的专用E.G.O装备", nameRaw: "Pursuance", descRaw: "Meursault’s E.G.O Gear" }, { id: 20601, name: "太虚幻境", desc: "鸿璐的基础E.G.O装备", nameRaw: "Land of Illusion", descRaw: "Hong Lu’s Base E.G.O" }, { id: 20602, name: "粉红欲望", desc: "鸿璐的专用E.G.O装备", nameRaw: "Roseate Desire", descRaw: "Hong Lu’s E.G.O Gear" }, { id: 20701, name: "裹尸袋", desc: "希斯克利夫的基础E.G.O装备", nameRaw: "Bodysack", descRaw: "Heathcliff’s Base E.G.O" }, { id: 20702, name: "电线杆", desc: "希斯克利夫的专用E.G.O装备", nameRaw: "Telepole", descRaw: "Heathcliff’s E.G.O Gear" }, { id: 20801, name: "捕鲸叉", desc: "以实玛利的基础E.G.O装备", nameRaw: "Snagharpoon", descRaw: "Ishmael’s Base E.G.O" }, { id: 20802, name: "粉红欲望", desc: "以实玛利的专用E.G.O装备", nameRaw: "Roseate Desire", descRaw: "Ishmael’s E.G.O Gear" }, { id: 20803, name: "红艳煞", desc: "以实玛利的专用E.G.O装备", nameRaw: "Ardor Blossom Star", descRaw: "Ishmael’s E.G.O Gear" }, { id: 20901, name: "覆水难收", desc: "罗佳的基础E.G.O装备", nameRaw: "What is Cast", descRaw: "Rodion’s Base E.G.O" }, { id: 20902, name: "终末火柴之光", desc: "罗佳的专用E.G.O装备", nameRaw: "4th Match Flame", descRaw: "Rodion’s E.G.O Gear" }, { id: 20903, name: "冰结之爪", desc: "罗佳的专用E.G.O装备", nameRaw: "Rime Shank", descRaw: "Rodion’s E.G.O Gear" }, { id: 21001, name: "智慧的青枝", desc: "辛克莱的基础E.G.O装备", nameRaw: "Branch of Knowledge", descRaw: "Sinclair’s Base E.G.O" }, { id: 21002, name: "迫近之日", desc: "辛克莱的专用E.G.O装备", nameRaw: "Impending Day", descRaw: "Sinclair’s E.G.O Gear" }, { id: 21101, name: "致智慧与苦难", desc: "奥提斯的基础E.G.O装备", nameRaw: "To Páthos Máthos", descRaw: "Outis’s Base E.G.O" }, { id: 21102, name: "黑檀枝干", desc: "奥提斯的专用E.G.O装备", nameRaw: "Ebony Stem", descRaw: "Outis’s E.G.O Gear" }, { id: 21103, name: "空即是色", desc: "奥提斯的专用E.G.O装备", nameRaw: "Ya Śūnyatā Tad Rūpam", descRaw: "Outis’s E.G.O Gear" }, { id: 21201, name: "某一日，突然", desc: "格里高尔的基础E.G.O装备", nameRaw: "Suddenly, One Day", descRaw: "Gregor’s Base E.G.O" }, { id: 21202, name: "障眼把戏", desc: "格里高尔的专用E.G.O装备", nameRaw: "Legerdemain", descRaw: "Gregor’s E.G.O Gear" }, { id: 21203, name: "提灯", desc: "格里高尔的专用E.G.O装备", nameRaw: "Lantern", descRaw: "Gregor’s E.G.O Gear" }, { id: 20303, name: "电线杆", desc: "堂吉诃德的专用E.G.O装备", nameRaw: "Telepole", descRaw: "Don Quixote’s E.G.O Gear" }, { id: 20204, name: "电线杆", desc: "浮士德的专用E.G.O装备", nameRaw: "Telepole", descRaw: "Faust’s E.G.O Gear" }, { id: 20304, name: "一生炖菜", desc: "堂吉诃德的专用E.G.O装备", nameRaw: "Lifetime Stew", descRaw: "Don Quixote’s E.G.O Gear" }, { id: 21003, name: "一生炖菜", desc: "辛克莱的专用E.G.O装备", nameRaw: "Lifetime Stew", descRaw: "Sinclair’s E.G.O Gear" }, { id: 20104, name: "次元撕裂者", desc: "李箱的专用E.G.O装备", nameRaw: "Dimension Shredder", descRaw: "Yi Sang’s E.G.O Gear" }, { id: 20603, name: "次元撕裂者", desc: "鸿璐的专用E.G.O装备", nameRaw: "Dimension Shredder", descRaw: "Hong Lu’s E.G.O Gear" }, { id: 20504, name: "斗牛披风", desc: "默尔索的专用E.G.O装备", nameRaw: "Capote", descRaw: "Meursault’s E.G.O Gear" }, { id: 20804, name: "斗牛披风", desc: "以实玛利的专用E.G.O装备", nameRaw: "Capote", descRaw: "Ishmael’s E.G.O Gear" }, { id: 21104, name: "狐雨", desc: "奥提斯的专用E.G.O装备", nameRaw: "Sunshower", descRaw: "Outis’s E.G.O Gear" }, { id: 21204, name: "AEDD", desc: "格里高尔的专用E.G.O装备", nameRaw: "AEDD", descRaw: "Gregor’s E.G.O Gear" }, { id: 20703, name: "AEDD", desc: "希斯克利夫的专用E.G.O装备", nameRaw: "AEDD", descRaw: "Heathcliff’s E.G.O Gear" }, { id: 20105, name: "狐雨", desc: "李箱的专用E.G.O装备", nameRaw: "Sunshower", descRaw: "Yi Sang’s E.G.O Gear" }, { id: 20403, name: "赤瞳", desc: "良秀的专用E.G.O装备", nameRaw: "Red Eyes", descRaw: "Ryōshū’s E.G.O Gear" }, { id: 20404, name: "赤瞳（开）", desc: "良秀的专用E.G.O装备", nameRaw: "Red Eyes (Open)", descRaw: "Ryōshū’s E.G.O Gear" }, { id: 20405, name: "美味苏打", desc: "良秀的专用E.G.O装备", nameRaw: "Soda", descRaw: "Ryōshū’s E.G.O Gear" }, { id: 20604, name: "美味苏打", desc: "鸿璐的专用E.G.O装备", nameRaw: "Soda", descRaw: "Hong Lu’s E.G.O Gear" }, { id: 21004, name: "提灯", desc: "辛克莱的专用E.G.O装备", nameRaw: "Lantern", descRaw: "Sinclair’s E.G.O Gear" }, { id: 20704, name: "空即是色", desc: "希斯克利夫的专用E.G.O装备", nameRaw: "Ya Śūnyatā Tad Rūpam", descRaw: "Heathcliff’s E.G.O Gear" }, { id: 20505, name: "悔恨", desc: "默尔索的专用E.G.O装备", nameRaw: "Regret", descRaw: "Meursault’s E.G.O Gear" }, { id: 20605, name: "沸腾腐蚀", desc: "鸿璐的专用E.G.O装备", nameRaw: "Effervescent Corrosion", descRaw: "Hong Lu’s E.G.O Gear" }, { id: 20205, name: "9章2节", desc: "浮士德的专用E.G.O装备", nameRaw: "9:2", descRaw: "Faust’s E.G.O Gear" }, { id: 20406, name: "盲目", desc: "良秀的专用E.G.O装备", nameRaw: "Blind Obsession", descRaw: "Ryōshū’s E.G.O Gear" }, { id: 20805, name: "盲目", desc: "以实玛利的专用E.G.O装备", nameRaw: "Blind Obsession", descRaw: "Ishmael’s E.G.O Gear" }, { id: 20904, name: "沸腾腐蚀", desc: "罗佳的专用E.G.O装备", nameRaw: "Effervescent Corrosion", descRaw: "Rodion’s E.G.O Gear" }, { id: 21005, name: "9章2节", desc: "辛克莱的专用E.G.O装备", nameRaw: "9:2", descRaw: "Sinclair’s E.G.O Gear" }, { id: 20905, name: "执行", desc: "罗佳的专用E.G.O装备", nameRaw: "Pursuance", descRaw: "Rodion’s E.G.O Gear" }, { id: 20705, name: "悲惨假日", desc: "希斯克利夫的专用E.G.O装备", nameRaw: "Holiday", descRaw: "Heathcliff’s E.G.O Gear" }, { id: 21105, name: "悲惨假日", desc: "奥提斯的专用E.G.O装备", nameRaw: "Holiday", descRaw: "Outis’s E.G.O Gear" }, { id: 20305, name: "祈愿石", desc: "堂吉诃德的专用E.G.O装备", nameRaw: "Wishing Cairn", descRaw: "Don Quixote’s E.G.O Gear" }, { id: 21205, name: "荆棘花园", desc: "格里高尔的专用E.G.O装备", nameRaw: "Garden of Thorns", descRaw: "Gregor’s E.G.O Gear" }, { id: 21206, name: "往昔", desc: "格里高尔的专用E.G.O装备", nameRaw: "Bygone Days", descRaw: "Gregor’s E.G.O Gear" }, { id: 20106, name: "往昔", desc: "李箱的专用E.G.O装备", nameRaw: "Bygone Days", descRaw: "Yi Sang’s E.G.O Gear" }, { id: 20306, name: "电子哀鸣", desc: "堂吉诃德的专用E.G.O装备", nameRaw: "Electric Screaming", descRaw: "Don Quixote’s E.G.O Gear" }, { id: 20506, name: "电子哀鸣", desc: "默尔索的专用E.G.O装备", nameRaw: "Electric Screaming", descRaw: "Meursault’s E.G.O Gear" }, { id: 21106, name: "拘束", desc: "奥提斯的专用E.G.O装备", nameRaw: "Binds", descRaw: "Outis’s E.G.O Gear" }, { id: 20706, name: "拘束", desc: "希斯克利夫的专用E.G.O装备", nameRaw: "Binds", descRaw: "Heathcliff’s E.G.O Gear" }, { id: 20806, name: "翅振", desc: "以实玛利的专用E.G.O装备", nameRaw: "Wingbeat", descRaw: "Ishmael’s E.G.O Gear" }, { id: 20906, name: "血欲", desc: "罗佳的专用E.G.O装备", nameRaw: "Sanguine Desire", descRaw: "Rodion’s E.G.O Gear" }, { id: 20606, name: "低泣", desc: "鸿璐的专用E.G.O装备", nameRaw: "Cavernous Wailing", descRaw: "Hong Lu’s E.G.O Gear" }, { id: 21006, name: "低泣", desc: "辛克莱的专用E.G.O装备", nameRaw: "Cavernous Wailing", descRaw: "Sinclair’s E.G.O Gear" }, { id: 20206, name: "永恒", desc: "浮士德的专用E.G.O装备", nameRaw: "Everlasting", descRaw: "Faust’s E.G.O Gear" }, { id: 20407, name: "轻蔑，敬畏", desc: "良秀的专用E.G.O装备", nameRaw: "Contempt, Awe", descRaw: "Ryōshū’s E.G.O Gear" }, { id: 20707, name: "凶弹", desc: "希斯克利夫的专用E.G.O装备", nameRaw: "Fell Bullet", descRaw: "Heathcliff’s E.G.O Gear" }, { id: 21107, name: "次元撕裂者", desc: "奥提斯的专用E.G.O装备", nameRaw: "Dimension Shredder", descRaw: "Outis’s E.G.O Gear" }, { id: 21207, name: "庄严哀悼", desc: "格里高尔的专用E.G.O装备", nameRaw: "Solemn Lament", descRaw: "Gregor’s E.G.O Gear" }, { id: 20807, name: "往昔", desc: "以实玛利的专用E.G.O装备", nameRaw: "Bygone Days", descRaw: "Ishmael’s E.G.O Gear" }, { id: 20207, name: "套索", desc: "浮士德的专用E.G.O装备", nameRaw: "Lasso", descRaw: "Faust’s E.G.O Gear" }, { id: 20607, name: "套索", desc: "鸿璐的专用E.G.O装备", nameRaw: "Lasso", descRaw: "Hong Lu’s E.G.O Gear" }, { id: 21007, name: "诅咒之钉", desc: "辛克莱的专用E.G.O装备", nameRaw: "Hex Nail", descRaw: "Sinclair’s E.G.O Gear" }, { id: 20907, name: "诅咒之钉", desc: "罗佳的专用E.G.O装备", nameRaw: "Hex Nail", descRaw: "Rodion’s E.G.O Gear" }, { id: 20507, name: "渴望-蜜卡拉", desc: "默尔索的专用E.G.O装备", nameRaw: "Yearning-Mircalla", descRaw: "Meursault’s E.G.O Gear" }, { id: 20307, name: "渴望-蜜卡拉", desc: "堂吉诃德的专用E.G.O装备", nameRaw: "Yearning-Mircalla", descRaw: "Don Quixote’s E.G.O Gear" }, { id: 20107, name: "凶弹", desc: "李箱的专用E.G.O装备", nameRaw: "Fell Bullet", descRaw: "Yi Sang’s E.G.O Gear" }, { id: 20708, name: "失衡惯性", desc: "希斯克利夫的专用E.G.O装备", nameRaw: "Asymmetrical Inertia", descRaw: "Heathcliff’s E.G.O Gear" }, { id: 20808, name: "圣诞梦魇", desc: "以实玛利的专用E.G.O装备", nameRaw: "Christmas Nightmare", descRaw: "Ishmael’s E.G.O Gear" }, { id: 21208, name: "圣诞梦魇", desc: "格里高尔的专用E.G.O装备", nameRaw: "Christmas Nightmare", descRaw: "Gregor’s E.G.O Gear" }, { id: 21108, name: "魔弹", desc: "奥提斯的专用E.G.O装备", nameRaw: "Magic Bullet", descRaw: "Outis’s E.G.O Gear" }, { id: 20408, name: "胸痛", desc: "良秀的专用E.G.O装备", nameRaw: "Thoracalgia", descRaw: "Ryōshū’s E.G.O Gear" }, { id: 20208, name: "胸痛", desc: "浮士德的专用E.G.O装备", nameRaw: "Thoracalgia", descRaw: "Faust’s E.G.O Gear" }, { id: 20908, name: "指定审判", desc: "罗佳的专用E.G.O装备", nameRaw: "Indicant's Trial", descRaw: "Rodion’s E.G.O Gear" }, { id: 20308, name: "朱符", desc: "堂吉诃德的专用E.G.O装备", nameRaw: "Red Sheet", descRaw: "Don Quixote’s E.G.O Gear" }, { id: 20809, name: "蝍蛆杀", desc: "以实玛利的专用E.G.O装备", nameRaw: "Hundred-Footed Death Maggot [蝍蛆殺]", descRaw: "Ishmael’s E.G.O Gear" }, { id: 21008, name: "污血泣泪", desc: "辛克莱的专用E.G.O装备", nameRaw: "Tears of the Tarnished Blood [汚血泣淚]", descRaw: "Sinclair’s E.G.O Gear" }, { id: 20608, name: "污血泣泪", desc: "鸿璐的专用E.G.O装备", nameRaw: "Tears of the Tarnished Blood [汚血泣淚]", descRaw: "Hong Lu’s E.G.O Gear" }, { id: 20309, name: "以爱与憎之名", desc: "堂吉诃德的专用E.G.O装备", nameRaw: "In the Name of Love and Hate", descRaw: "Don Quixote’s E.G.O Gear" }];

// data/personalities.json
var personalities_default = [{ id: 10101, title: `LCB
罪人`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Yi Sang" }, { id: 10201, title: `LCB
罪人`, name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Faust" }, { id: 10301, title: `LCB
罪人`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Don Quixote" }, { id: 10401, title: `LCB
罪人`, name: "良秀", nameWithTitle: "良秀", desc: "良秀的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Ryōshū" }, { id: 10501, title: `LCB
罪人`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Meursault" }, { id: 10601, title: `LCB
罪人`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Hong Lu" }, { id: 10701, title: `LCB
罪人`, name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Heathcliff" }, { id: 10801, title: `LCB
罪人`, name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Ishmael" }, { id: 10901, title: `LCB
罪人`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Rodion" }, { id: 11001, title: `LCB
罪人`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Sinclair" }, { id: 11101, title: `LCB
罪人`, name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Outis" }, { id: 11201, title: `LCB
罪人`, name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第1人格", titleRaw: `LCB
Sinner`, nameRaw: "Gregor" }, { id: 10102, title: `Seven协会
南部6科`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第2人格", titleRaw: `Seven Assoc.
South Section 6`, nameRaw: "Yi Sang" }, { id: 10202, title: `W公司 2级
清扫人员`, name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第2人格", titleRaw: `W Corp. L2
Cleanup Agent`, nameRaw: "Faust" }, { id: 10302, title: `W公司 3级
清扫人员`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第2人格", titleRaw: `W Corp. L3
Cleanup Agent`, nameRaw: "Don Quixote" }, { id: 10402, title: `Seven协会
南部6科`, name: "良秀", nameWithTitle: "良秀", desc: "良秀的第2人格", titleRaw: `Seven Assoc.
South Section 6`, nameRaw: "Ryōshū" }, { id: 10502, title: `六协会
南部6科`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第2人格", titleRaw: `Liu Assoc.
South Section 6`, nameRaw: "Meursault" }, { id: 10602, title: `黑云会
若众`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第2人格", titleRaw: `Kurokumo Clan
Wakashu`, nameRaw: "Hong Lu" }, { id: 10702, title: `し协会
南部5科`, name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第2人格", titleRaw: `Shi Assoc.
South Section 5`, nameRaw: "Heathcliff" }, { id: 10802, title: `R公司
第四集团军
驯鹿队`, name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第2人格", titleRaw: `R Corp. 4th Pack
Reindeer`, nameRaw: "Ishmael" }, { id: 10902, title: `黑云会
若众`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第2人格", titleRaw: `Kurokumo Clan
Wakashu`, nameRaw: "Rodion" }, { id: 11002, title: `剑契组
杀手`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第2人格", titleRaw: `Blade Lineage
Salsu`, nameRaw: "Sinclair" }, { id: 11102, title: `剑契组
杀手`, name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第2人格", titleRaw: `Blade Lineage
Salsu`, nameRaw: "Outis" }, { id: 11202, title: `六协会
南部6科`, name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第2人格", titleRaw: `Liu Assoc.
South Section 6`, nameRaw: "Gregor" }, { id: 10103, title: `剑契组
杀手`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第3人格", titleRaw: `Blade Lineage
Salsu`, nameRaw: "Yi Sang" }, { id: 10203, title: `脑叶公司
幸存者`, name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第3人格", titleRaw: "Lobotomy Corp. Remnant", nameRaw: "Faust" }, { id: 10403, title: `黑云会
若众`, name: "良秀", nameWithTitle: "良秀", desc: "良秀的第3人格", titleRaw: `Kurokumo Clan
Wakashu`, nameRaw: "Ryōshū" }, { id: 10503, title: `W公司 2级
清扫人员`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第3人格", titleRaw: `W Corp. L2
Cleanup Agent`, nameRaw: "Meursault" }, { id: 10603, title: `豆豆帮
帮主`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第3人格", titleRaw: `Tingtang Gang
Gangleader`, nameRaw: "Hong Lu" }, { id: 10703, title: `R公司
第四集团军
兔子队`, name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第3人格", titleRaw: `R Corp. 4th Pack
Rabbit`, nameRaw: "Heathcliff" }, { id: 10803, title: `し协会
南部5科`, name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第3人格", titleRaw: `Shi Assoc.
South Section 5`, nameRaw: "Ishmael" }, { id: 10903, title: `LCCB
系长`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第3人格", titleRaw: `LCCB
Assistant Manager`, nameRaw: "Rodion" }, { id: 11003, title: `Zwei协会
南部6科`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第3人格", titleRaw: `Zwei Assoc.
South Section 6`, nameRaw: "Sinclair" }, { id: 11103, title: `G公司
部长`, name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第3人格", titleRaw: `G Corp.
Head Manager`, nameRaw: "Outis" }, { id: 11203, title: `G公司
科长代理`, name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第3人格", titleRaw: `G Corp.
Manager Corporal`, nameRaw: "Gregor" }, { id: 10804, title: `LCCB
系长`, name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第4人格", titleRaw: `LCCB
Assistant Manager`, nameRaw: "Ishmael" }, { id: 11004, title: `流浪乐队
头目`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第4人格", titleRaw: `Los Mariachis
Jefe`, nameRaw: "Sinclair" }, { id: 10303, title: `し协会
南部5科科长`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第3人格", titleRaw: `Shi Assoc.
South Section 5 Director`, nameRaw: "Don Quixote" }, { id: 10504, title: `N公司
大锤`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第4人格", titleRaw: `N Corp.
Großhammer`, nameRaw: "Meursault" }, { id: 10904, title: `N公司
中锤`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第4人格", titleRaw: `N Corp.
Mittelhammer`, nameRaw: "Rodion" }, { id: 10204, title: "执柄者", name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第4人格", titleRaw: "The One Who Grips", nameRaw: "Faust" }, { id: 10704, title: `N公司
小锤`, name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第4人格", titleRaw: `N Corp.
Kleinhammer`, nameRaw: "Heathcliff" }, { id: 11104, title: `Seven协会
南部6科科长`, name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第4人格", titleRaw: `Seven Assoc.
South Section 6 Director`, nameRaw: "Outis" }, { id: 10604, title: `六协会
南部5科`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第4人格", titleRaw: `Liu Assoc.
South Section 5`, nameRaw: "Hong Lu" }, { id: 10404, title: `良·派
厨师长`, name: "良秀", nameWithTitle: "良秀", desc: "良秀的第4人格", titleRaw: `R.B.
Chef de Cuisine`, nameRaw: "Ryōshū" }, { id: 11204, title: `良·派
帮厨`, name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第4人格", titleRaw: `R.B.
Sous-chef`, nameRaw: "Gregor" }, { id: 10304, title: `N公司
中锤`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第4人格", titleRaw: `N Corp.
Mittelhammer`, nameRaw: "Don Quixote" }, { id: 11005, title: "准执柄者", name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第5人格", titleRaw: "The One Who Shall Grip", nameRaw: "Sinclair" }, { id: 10905, title: `玫瑰扳手工坊
代表`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第5人格", titleRaw: `Rosespanner Workshop
Rep`, nameRaw: "Rodion" }, { id: 10505, title: `玫瑰扳手工坊
收尾人`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第5人格", titleRaw: "Rosespanner Workshop Fixer", nameRaw: "Meursault" }, { id: 10705, title: `脑叶公司E.G.O::
狐雨`, name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第5人格", titleRaw: `Lobotomy E.G.O::
Sunshower`, nameRaw: "Heathcliff" }, { id: 11205, title: `玫瑰扳手工坊
收尾人`, name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第5人格", titleRaw: `Rosespanner Workshop
Fixer`, nameRaw: "Gregor" }, { id: 10104, title: `绽放E.G.O::
山茶花`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第4人格", titleRaw: "Effloresced E.G.O::Spicebush", nameRaw: "Yi Sang" }, { id: 10805, title: `脑叶公司E.G.O::
荡漾`, name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第5人格", titleRaw: "Lobotomy E.G.O::Sloshing", nameRaw: "Ishmael" }, { id: 10605, title: `K公司 3级
摘除人员`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第5人格", titleRaw: `K Corp. Class 3
Excision Staff`, nameRaw: "Hong Lu" }, { id: 11006, title: `脑叶公司E.G.O::
朱符`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第6人格", titleRaw: "Lobotomy E.G.O::Red Sheet", nameRaw: "Sinclair" }, { id: 10806, title: `六协会
南部4科`, name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第6人格", titleRaw: `Liu Assoc.
South Section 4`, nameRaw: "Ishmael" }, { id: 10506, title: `R公司
第四集团军
犀牛队`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第6人格 ", titleRaw: `R Corp. 4th Pack
Rhino`, nameRaw: "Meursault" }, { id: 10906, title: `Zwei协会
南部5科`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第6人格", titleRaw: `Zwei Assoc.
South Section 5`, nameRaw: "Rodion" }, { id: 10305, title: `Cinq协会
南部5科科长`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第5人格", titleRaw: `Cinq Assoc.
South Section 5 Director`, nameRaw: "Don Quixote" }, { id: 10807, title: `臼齿修船厂
收尾人`, name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第7人格", titleRaw: `Molar Boatworks
Fixer`, nameRaw: "Ishmael" }, { id: 11007, title: `臼齿修船厂
收尾人`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第7人格", titleRaw: `Molar Boatworks
Fixer`, nameRaw: "Sinclair" }, { id: 11206, title: `Zwei协会
南部4科`, name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第6人格", titleRaw: `Zwei Assoc.
South Section 4`, nameRaw: "Gregor" }, { id: 10205, title: `Zwei协会
南部4科`, name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第5人格", titleRaw: `Zwei Assoc.
South Section 4`, nameRaw: "Faust" }, { id: 10405, title: `W公司 3级
清扫人员`, name: "良秀", nameWithTitle: "良秀", desc: "良秀的第5人格", titleRaw: `W Corp. L3
Cleanup Agent`, nameRaw: "Ryōshū" }, { id: 10606, title: `W公司 2级
清扫人员`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第6人格", titleRaw: `W Corp. L2
Cleanup Agent`, nameRaw: "Hong Lu" }, { id: 10206, title: `Seven协会
南部4科`, name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第6人格", titleRaw: `Seven Assoc.
South Section 4`, nameRaw: "Faust" }, { id: 10706, title: `Seven协会
南部4科`, name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第6人格", titleRaw: `Seven Assoc.
South Section 4`, nameRaw: "Heathcliff" }, { id: 10105, title: `臼齿事务所
收尾人`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第5人格", titleRaw: `Molar Office
Fixer`, nameRaw: "Yi Sang" }, { id: 11105, title: `臼齿事务所
收尾人`, name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第5人格", titleRaw: `Molar Office
Fixer`, nameRaw: "Outis" }, { id: 10907, title: `Dieci协会
南部4科`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第7人格", titleRaw: `Dieci Assoc.
South Section 4`, nameRaw: "Rodion" }, { id: 10207, title: `脑叶公司E.G.O::
悔恨`, name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第7人格", titleRaw: "Lobotomy E.G.O::Regret", nameRaw: "Faust" }, { id: 10607, title: `吊钩事务所
收尾人`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第7人格", titleRaw: `Hook Office
Fixer`, nameRaw: "Hong Lu" }, { id: 10106, title: `W公司 3级
清扫人员`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第6人格", titleRaw: `W Corp. L3
Cleanup Agent`, nameRaw: "Yi Sang" }, { id: 11207, title: `双钩海盗团
大副`, name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第7人格", titleRaw: `Twinhook Pirates
First Mate`, nameRaw: "Gregor" }, { id: 10406, title: `LCCB
系长`, name: "良秀", nameWithTitle: "良秀", desc: "良秀的第6人格", titleRaw: `LCCB
Assistant Manager`, nameRaw: "Ryōshū" }, { id: 10306, title: `中指
幼妹`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第6人格", titleRaw: `The Middle
Little Sister`, nameRaw: "Don Quixote" }, { id: 10507, title: `中指
幼弟`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第7人格", titleRaw: `The Middle
Little Brother`, nameRaw: "Meursault" }, { id: 10707, title: `裴廓德号
鱼叉手`, name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第7人格", titleRaw: `The Pequod
Harpooneer`, nameRaw: "Heathcliff" }, { id: 10107, title: `裴廓德号
大副`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第7人格", titleRaw: `The Pequod
First Mate`, nameRaw: "Yi Sang" }, { id: 11008, title: `Cinq协会
南部4科科长`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第8人格", titleRaw: `Cinq Assoc.
South Section 4 Director`, nameRaw: "Sinclair" }, { id: 11106, title: `Cinq协会
南部4科`, name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第6人格", titleRaw: `Cinq Assoc.
South Section 4`, nameRaw: "Outis" }, { id: 11107, title: `脑叶公司E.G.O::
魔弹`, name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第7人格", titleRaw: "Lobotomy E.G.O::Magic Bullet", nameRaw: "Outis" }, { id: 10307, title: `脑叶公司E.G.O::
提灯`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第7人格", titleRaw: "Lobotomy E.G.O::Lantern", nameRaw: "Don Quixote" }, { id: 10608, title: `Dieci协会
南部4科`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第8人格", titleRaw: `Dieci Assoc.
South Section 4`, nameRaw: "Hong Lu" }, { id: 10108, title: `Dieci协会
南部4科`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第8人格", titleRaw: `Dieci Assoc.
South Section 4`, nameRaw: "Yi Sang" }, { id: 10808, title: `裴廓德号
船长`, name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第8人格", titleRaw: `The Pequod
Captain`, nameRaw: "Ishmael" }, { id: 10508, title: `剑契组
头领`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第8人格", titleRaw: `Blade Lineage
Mentor`, nameRaw: "Meursault" }, { id: 10208, title: `剑契组
杀手`, name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第8人格", titleRaw: `Blade Lineage
Salsu`, nameRaw: "Faust" }, { id: 10308, title: `剑契组
杀手`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第8人格", titleRaw: `Blade Lineage
Salsu`, nameRaw: "Don Quixote" }, { id: 11208, title: `黑云会
副会长`, name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第8人格", titleRaw: `Kurokumo Clan
Captain`, nameRaw: "Gregor" }, { id: 10908, title: `六协会
南部4科科长`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第8人格", titleRaw: `Liu Assoc.
South Section 4 Director`, nameRaw: "Rodion" }, { id: 10407, title: `六协会
南部4科`, name: "良秀", nameWithTitle: "良秀", desc: "良秀的第7人格", titleRaw: `Liu Assoc.
South Section 4`, nameRaw: "Ryōshū" }, { id: 10708, title: `Öufi协会
南部3科`, name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第8人格", titleRaw: `Öufi Assoc.
South Section 3`, nameRaw: "Heathcliff" }, { id: 11108, title: `呼啸山庄
首席管家`, name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第8人格", titleRaw: `Wuthering Heights
Chief Butler`, nameRaw: "Outis" }, { id: 10509, title: `死兔帮
老大`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第9人格", titleRaw: `Dead Rabbits
Boss`, nameRaw: "Meursault" }, { id: 11209, title: `埃德加家族
继承人`, name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第9人格", titleRaw: `Edgar Family
Heir`, nameRaw: "Gregor" }, { id: 10209, title: `呼啸山庄
管家`, name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第9人格", titleRaw: `Wuthering Heights
Butler`, nameRaw: "Faust" }, { id: 9999, title: "猩红凝视", name: "维吉里乌斯", nameWithTitle: "", desc: "", titleRaw: "The Red Gaze", nameRaw: "Vergilius" }, { id: 10408, title: `埃德加家族
首席管家`, name: "良秀", nameWithTitle: "良秀", desc: "良秀的第8人格", titleRaw: `Edgar Family
Chief Butler`, nameRaw: "Ryōshū" }, { id: 10809, title: `埃德加家族
管家`, name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第9人格", titleRaw: `Edgar Family
Butler`, nameRaw: "Ishmael" }, { id: 11009, title: `黎明事务所
收尾人`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第9人格", titleRaw: `Dawn Office
Fixer`, nameRaw: "Sinclair" }, { id: 10109, title: `环指 点彩派
学徒`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第9人格", titleRaw: `The Ring Pointillist
Student`, nameRaw: "Yi Sang" }, { id: 11109, title: `环指 点彩派
学徒`, name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第9人格", titleRaw: `The Ring Pointillist
Student`, nameRaw: "Outis" }, { id: 10609, title: `20区
圣愚`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第9人格", titleRaw: `District 20
Yurodivy`, nameRaw: "Hong Lu" }, { id: 10409, title: `20区
圣愚`, name: "良秀", nameWithTitle: "良秀", desc: "良秀的第9人格", titleRaw: `District 20
Yurodivy`, nameRaw: "Ryōshū" }, { id: 10309, title: `T公司 3级
征收人员`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第9人格", titleRaw: `T Corp. Class 3
Collection Staff`, nameRaw: "Don Quixote" }, { id: 10909, title: `T公司 2级
征收人员`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第9人格", titleRaw: `T Corp. Class 2
Collection Staff`, nameRaw: "Rodion" }, { id: 10510, title: `Dieci协会
南部4科科长`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第10人格", titleRaw: `Dieci Assoc.
South Section 4 Director`, nameRaw: "Meursault" }, { id: 11110, title: `W公司 3级
清扫组长`, name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第10人格", titleRaw: `W Corp. L3
Cleanup Captain`, nameRaw: "Outis" }, { id: 10210, title: `多裂纹事务所
代表`, name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第10人格", titleRaw: `MultiCrack Office
Rep`, nameRaw: "Faust" }, { id: 10709, title: `多裂纹事务所
收尾人`, name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第9人格", titleRaw: `MultiCrack Office
Fixer`, nameRaw: "Heathcliff" }, { id: 10710, title: "狂猎", name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第10人格", titleRaw: "Wild Hunt", nameRaw: "Heathcliff" }, { id: 10110, title: `脑叶公司E.G.O::
庄严哀悼`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第10人格", titleRaw: `Lobotomy E.G.O::
Solemn Lament`, nameRaw: "Yi Sang" }, { id: 10410, title: `脑叶公司E.G.O::
赤瞳·忏悔`, name: "良秀", nameWithTitle: "良秀", desc: "良秀的第10人格", titleRaw: `Lobotomy E.G.O::
Red Eyes &
Penitence`, nameRaw: "Ryōshū" }, { id: 10910, title: `Девять协会
北部3科`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第10人格", titleRaw: `Devyat' Assoc.
North Section 3`, nameRaw: "Rodion" }, { id: 10810, title: `Zwei协会
西部3科`, name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第10人格", titleRaw: `Zwei Assoc.
West Section 3`, nameRaw: "Ishmael" }, { id: 10511, title: `Cinq协会
西部3科`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第11人格", titleRaw: `Cinq Assoc.
West Section 3`, nameRaw: "Meursault" }, { id: 11010, title: `Zwei协会
西部3科`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第10人格", titleRaw: `Zwei Assoc.
West Section 3`, nameRaw: "Sinclair" }, { id: 11111, title: `拉·曼却领
理发师`, name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第11人格", titleRaw: `The Barber
of La Manchaland`, nameRaw: "Outis" }, { id: 10610, title: `猎牙事务所
收尾人`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第10人格", titleRaw: `Fanghunt Office
Fixer`, nameRaw: "Hong Lu" }, { id: 11210, title: `拉·曼却领
神父`, name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第10人格", titleRaw: `The Priest
of La Manchaland`, nameRaw: "Gregor" }, { id: 10911, title: `拉·曼却领
公主`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第11人格", titleRaw: `The Princess
of La Manchaland`, nameRaw: "Rodion" }, { id: 11011, title: `Девять协会
北部3科`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第11人格 ", titleRaw: `Devyat' Assoc.
North Section 3`, nameRaw: "Sinclair" }, { id: 10310, title: `拉·曼却领
总督`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第10人格", titleRaw: `The Manager
of La Manchaland`, nameRaw: "Don Quixote" }, { id: 10611, title: `句点事务所
代表`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第11人格", titleRaw: `Full-Stop Office
Rep`, nameRaw: "Hong Lu" }, { id: 10711, title: `句点事务所
收尾人`, name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第11人格", titleRaw: `Full-Stop Office
Fixer`, nameRaw: "Heathcliff" }, { id: 10211, title: `LCE E.G.O::
红艳煞`, name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第11人格", titleRaw: `LCE E.G.O::
Ardor Blossom
Star`, nameRaw: "Faust" }, { id: 10111, title: `LCE E.G.O::
提灯`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第11人格", titleRaw: `LCE E.G.O::
Lantern`, nameRaw: "Yi Sang" }, { id: 10811, title: `黑云会
副会长`, name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第11人格", titleRaw: `Kurokumo Clan
Captain`, nameRaw: "Ishmael" }, { id: 10712, title: `黑云会
若众`, name: "希斯克利夫", nameWithTitle: "希斯克利夫", desc: "希斯克利夫的第12人格", titleRaw: `Kurokumo Clan
Wakashu`, nameRaw: "Heathcliff" }, { id: 10112, title: `六协会
南部3科`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第12人格", titleRaw: `Liu Assoc.
South Section 3`, nameRaw: "Yi Sang" }, { id: 10311, title: `Cinq协会
东部3科`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第11人格", titleRaw: `Cinq Assoc.
East Section 3`, nameRaw: "Don Quixote" }, { id: 11211, title: `炎拳事务所
幸存者`, name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第11人格", titleRaw: `Firefist Office
Survivor`, nameRaw: "Gregor" }, { id: 11112, title: "黑兽 - 卯", name: "奥提斯", nameWithTitle: "奥提斯", desc: "奥提斯的第12人格", titleRaw: "Heishou Pack - Mao Branch", nameRaw: "Outis" }, { id: 10411, title: "黑兽 - 卯", name: "良秀", nameWithTitle: "良秀", desc: "良秀的第11人格", titleRaw: "Heishou Pack - Mao Branch", nameRaw: "Ryōshū" }, { id: 11012, title: `中指
幼弟`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第12人格", titleRaw: `The Middle
Little Brother`, nameRaw: "Sinclair" }, { id: 10612, title: `R公司
第四集团军
驯鹿队`, name: "鸿璐", nameWithTitle: "鸿璐", desc: "鸿璐的第12人格", titleRaw: `R Corp. 4th Pack
Reindeer`, nameRaw: "Hong Lu" }, { id: 11212, title: "黑兽 - 巳", name: "格里高尔", nameWithTitle: "格里高尔", desc: "格里高尔的第12人格", titleRaw: "Heishou Pack - Si Branch", nameRaw: "Gregor" }, { id: 10912, title: "黑兽 - 巳", name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第12人格", titleRaw: "Heishou Pack - Si Branch", nameRaw: "Rodion" }, { id: 10212, title: "黑兽 - 卯 魁首", name: "浮士德", nameWithTitle: "浮士德", desc: "浮士德的第12人格", titleRaw: `Heishou Pack -
Mao Branch Adept`, nameRaw: "Faust" }, { id: 10812, title: "家主候选人", name: "以实玛利", nameWithTitle: "以实玛利", desc: "以实玛利的第12人格", titleRaw: "Family Hierarch Candidate", nameRaw: "Ishmael" }, { id: 10512, title: `拇指 东部
指挥官IIII`, name: "默尔索", nameWithTitle: "默尔索", desc: "默尔索的第12人格", titleRaw: `The Thumb
East Capo IIII`, nameRaw: "Meursault" }, { id: 11013, title: `拇指 东部
士兵II`, name: "辛克莱", nameWithTitle: "辛克莱", desc: "辛克莱的第13人格", titleRaw: `The Thumb
East Soldato II`, nameRaw: "Sinclair" }, { id: 10113, title: `N公司E.G.O::
凶弹`, name: "李箱", nameWithTitle: "李箱", desc: "李箱的第13人格", titleRaw: `N Corp. E.G.O::
Fell Bullet`, nameRaw: "Yi Sang" }, { id: 10312, title: `脑叶公司E.G.O::
以爱与憎之名`, name: "堂吉诃德", nameWithTitle: "堂吉诃德", desc: "堂吉诃德的第12人格", titleRaw: `Lobotomy E.G.O::
In the Name of
Love and Hate`, nameRaw: "Don Quixote" }, { id: 10913, title: `脑叶公司E.G.O::
泪锋之剑`, name: "罗佳", nameWithTitle: "罗佳", desc: "罗佳的第13人格", titleRaw: `Lobotomy E.G.O::
The Sword Sharpened
with Tears`, nameRaw: "Rodion" }];

// src/core/utils.ts
var Utils = {
  round(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  },
  ceil(num) {
    return Math.ceil(this.round(num));
  },
  getBinary(num, { hasPrefix = false, padLength = 8, separator = "", separation = 4 } = {}) {
    if (num < 0) {
      return num.toString(2).padStart(padLength, " ");
    }
    let binaryString = num.toString(2).padStart(padLength, "0");
    if (separator && typeof separator === "string" && separator !== "") {
      binaryString = binaryString.replace(new RegExp(`\\B(?=(\\d{${separation}})+$)`, "g"), separator);
    }
    return hasPrefix ? `0b${binaryString}` : binaryString;
  },
  isValidArray(targetArray) {
    return !!targetArray && Array.isArray(targetArray) && targetArray.length > 0;
  },
  hasIntersection(templateArray, targetArray) {
    if ([templateArray, targetArray].some((array) => !this.isValidArray(array))) {
      return false;
    }
    const uniqueSet = new Set(targetArray);
    return templateArray.some((element) => uniqueSet.has(element));
  },
  getBinaryFromBase64(asciiString) {
    const binaryString = atob(asciiString);
    const rawBytes = new Uint8Array(binaryString.length);
    for (let i = 0;i < binaryString.length; i++) {
      rawBytes[i] = binaryString.charCodeAt(i);
    }
    return rawBytes;
  },
  getBase64FromBinary(binary) {
    if (typeof binary === "string" && binary.length % 8 !== 0) {
      console.error("不是有效的二进制字符串");
      return;
    }
    let binaryBytes = null;
    if (typeof binary === "string") {
      binaryBytes = new Uint8Array(Math.ceil(binary.length / 8));
      for (let i = 0;i < binaryBytes.length; i++) {
        const byte = Number.parseInt(binary.slice(i * 8, i * 8 + 8), 2);
        if (Number.isNaN(byte)) {
          console.error(`将目标二进制字符串 ${binary} 的切片 ${binary.slice(i * 8, i * 8 + 8)} 转换为字节失败`);
          return;
        }
        binaryBytes[i] = byte;
      }
    } else if (binary instanceof Uint8Array) {
      binaryBytes = new Uint8Array(binary.length);
      binaryBytes.set(binary);
    }
    if (!binaryBytes) {
      console.error({ msg: "读取要编码的二进制数据失败", binary });
      return;
    }
    const base64CharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const asciiCharList = [];
    for (let i = 0;i < binaryBytes.length; i += 3) {
      const [byte1, byte2, byte3] = [
        binaryBytes[i],
        binaryBytes[i + 1],
        binaryBytes[i + 2]
      ];
      const enc1 = byte1 >> 2;
      const enc2 = (byte1 & 3) << 4 | byte2 >> 4;
      const enc3 = (byte2 & 15) << 2 | byte3 >> 6;
      const enc4 = byte3 & 63;
      asciiCharList.push([
        base64CharSet.charAt(enc1),
        base64CharSet.charAt(enc2),
        Number.isNaN(byte2) ? "" : base64CharSet.charAt(enc3),
        Number.isNaN(byte3) ? "" : base64CharSet.charAt(enc4),
        Number.isNaN(byte2) ? "==" : Number.isNaN(byte3) ? "=" : ""
      ].join(""));
    }
    const base64String = asciiCharList.join("");
    return base64String;
  },
  async readJsonFile(filepath) {
    const file = Bun.file(filepath);
    if (!await file.exists()) {
      console.error(`File not found: ${filepath}
`);
      return {};
    }
    try {
      return await file.json();
    } catch (error) {
      console.error(error);
    }
    return {};
  }
};
var utils_default = Utils;

// src/core/team-codec.ts
function queryPersonalityDetails(personalityId) {
  if (!personalityId) {
    return;
  }
  return personalities_default.filter((personality) => personality.id === personalityId).pop();
}
function queryEgoDetails(egoId) {
  if (!egoId) {
    return;
  }
  return egos_default.filter((ego) => ego.id === egoId).pop();
}

class TeamCodec {
  #getRawDataFromTeamCode(compressedBase64) {
    try {
      const compressedBytes = utils_default.getBinaryFromBase64(compressedBase64);
      const decompressedBytes = pako.inflate(compressedBytes);
      const decompressedBase64Chars = [];
      for (let i = 0;i < decompressedBytes.length; i++) {
        const asciiCharCode = decompressedBytes[i];
        decompressedBase64Chars.push(String.fromCharCode(asciiCharCode));
      }
      const rawDataBytes = utils_default.getBinaryFromBase64(decompressedBase64Chars.join(""));
      const rawDataBinaryList = [];
      for (let i = 0;i < rawDataBytes.length; i++) {
        const byte = rawDataBytes[i];
        const binary = byte.toString(2).padStart(8, "0");
        rawDataBinaryList.push(...binary);
      }
      return rawDataBinaryList;
    } catch (error) {
      console.warn("Parse team code failed:", error);
    }
    return [];
  }
  decode(teamCodeBase64) {
    const rawBinaryBits = this.#getRawDataFromTeamCode(teamCodeBase64);
    if (!utils_default.isValidArray(rawBinaryBits)) {
      return [];
    }
    const sinnerBits = 8 + 4 + 7 * 4 + 6;
    const getValueFromBinary = (binary, start, end) => Number.parseInt(binary.slice(start, end).join(""), 2);
    const getPropertyId = (sinnerId, propertyNumero, isEgo = true) => propertyNumero > 0 ? Number.parseInt([
      isEgo ? 2 : 1,
      sinnerId.toString().padStart(2, "0"),
      propertyNumero.toString().padStart(2, "0")
    ].join("")) : undefined;
    const sinnerDataList = [];
    for (let sinnerId = 1;sinnerId <= 12; sinnerId++) {
      const startIndex = (sinnerId - 1) * sinnerBits;
      const sinnerBinary = rawBinaryBits.slice(startIndex, startIndex + sinnerBits);
      sinnerDataList.push({
        sinnerId,
        identityId: getPropertyId(sinnerId, getValueFromBinary(sinnerBinary, 0, 8), false),
        order: getValueFromBinary(sinnerBinary, 8, 12),
        egos: {
          ZAYIN: getPropertyId(sinnerId, getValueFromBinary(sinnerBinary, 12, 19)),
          TETH: getPropertyId(sinnerId, getValueFromBinary(sinnerBinary, 19, 26)),
          HE: getPropertyId(sinnerId, getValueFromBinary(sinnerBinary, 26, 33)),
          WAW: getPropertyId(sinnerId, getValueFromBinary(sinnerBinary, 33, 40)),
          ALEPH: getPropertyId(sinnerId, getValueFromBinary(sinnerBinary, 40, 46))
        }
      });
    }
    return sinnerDataList;
  }
  #getTeamCodeFromRawData(rawDataBinaryString) {
    try {
      const base64String = utils_default.getBase64FromBinary(rawDataBinaryString);
      if (!base64String || base64String.length !== 96) {
        return;
      }
      const base64Bytes = new Uint8Array(base64String.length);
      for (let i = 0;i < base64String.length; i++) {
        base64Bytes[i] = base64String.charCodeAt(i);
      }
      const compressedBytes = pako.gzip(base64Bytes, { level: 9 });
      return utils_default.getBase64FromBinary(compressedBytes);
    } catch (error) {
      console.warn("Generate team code failed:", error);
    }
    return;
  }
  encode(sinnerInfoList) {
    const binaryDataString = sinnerInfoList.map((sinnerInfo) => [
      utils_default.getBinary(sinnerInfo.identityId % 100, { padLength: 8 }),
      utils_default.getBinary(sinnerInfo.order, { padLength: 4 }),
      Object.entries(sinnerInfo.egos).map(([egoLevel, egoId]) => egoLevel === "ALEPH" ? utils_default.getBinary((egoId ?? 0) % 100, { padLength: 6 }) : utils_default.getBinary((egoId ?? 0) % 100, { padLength: 7 })).join("")
    ].join("")).join("") + "0".repeat(8);
    return this.#getTeamCodeFromRawData(binaryDataString);
  }
  loadSinnerDetails(sinner) {
    const personalityInfo = {
      sinnerId: sinner.sinnerId,
      identity: queryPersonalityDetails(sinner.identityId),
      egos: {
        ZAYIN: undefined,
        TETH: undefined,
        HE: undefined,
        WAW: undefined,
        ALEPH: undefined
      },
      order: sinner.order
    };
    Object.entries(sinner.egos).map(([egoLevel, egoId]) => {
      personalityInfo.egos[egoLevel] = queryEgoDetails(egoId);
    });
    return personalityInfo;
  }
  test() {
    const e2eTestResult = {};
    Object.entries(e2eTestResult).map(([key, value]) => {
      console.dir({ [key]: value });
    });
    return true;
  }
}

// src/team-code-debugger.ts
(() => {
  const teamCodec = new TeamCodec;
  const teamInfoStore = [];
  function getSinnerHtml(sinnerDetails) {
    if (!sinnerDetails || !sinnerDetails.identity) {
      return;
    }
    const htmlSlices = [];
    const tooltipSlices = [];
    tooltipSlices.push(`${sinnerDetails.identity.name} ${sinnerDetails.identity.nameRaw} (id: ${sinnerDetails.identity.id})`, "", `${sinnerDetails.identity.title} (${sinnerDetails.identity.desc})`);
    const tooltipString = tooltipSlices.length === 0 ? "" : ` title="${tooltipSlices.join("&#10;")}"`;
    htmlSlices.push(`<span data-limbus-sinner="${sinnerDetails.sinnerId}"
data-sinner-identity="${sinnerDetails.identity.id}"
data-sinner-egos="${Object.values(sinnerDetails.egos).map((ego) => ego?.id)}"
data-sinner-order="${sinnerDetails.order}"
${tooltipString}>${sinnerDetails.identity.name}</span>`);
    return htmlSlices.join("");
  }
  function renderTeamInfo(teamInfo, newTeamIndex) {
    const { sinners, description: teamDescription } = teamInfo;
    if (!sinners) {
      return;
    }
    const teamRowHtml = [];
    teamRowHtml.push([
      `<div data-limbus-sinner-list="${newTeamIndex}">`,
      sinners.map((sinnerInfo) => getSinnerHtml(teamCodec.loadSinnerDetails(sinnerInfo))).join(""),
      "</div>"
    ].join(""));
    teamRowHtml.unshift(`<div data-button-usage="copyTeamCode" title="点击复制 ${newTeamIndex + 1} 号队伍编队码">${(newTeamIndex + 1).toString().padStart(2, "0")}</div>`);
    teamRowHtml.push(["<div data-team-description>", teamDescription, "</div>"].join(""));
    const teamInfoContainer = document.querySelector("#limbus-team-list");
    if (!teamInfoContainer) {
      throw new Error("Team code container element not found");
    }
    const teamInfoElement = document.createElement("div");
    teamInfoElement.dataset.limbusTeam = newTeamIndex.toString();
    teamInfoElement.innerHTML = teamRowHtml.join("");
    teamInfoContainer.append(teamInfoElement);
  }
  function initApp() {
    const teamInfoContainer = document.querySelector("#limbus-team-list");
    if (!teamInfoContainer) {
      throw new Error("Team container element not found");
    }
    const importButtonElement = document.querySelector("button#load-team-code");
    if (importButtonElement) {
      importButtonElement.addEventListener("click", async () => {
        const teamCodeInClipboard = await navigator.clipboard.readText();
        if (!teamCodeInClipboard || teamCodeInClipboard === "") {
          return;
        }
        const sinners = teamCodec.decode(teamCodeInClipboard);
        if (!sinners || !Array.isArray(sinners) || sinners.length === 0) {
          alert(`载入剪贴板中的编队码失败，请检查格式是否正确：
${teamCodeInClipboard}`);
          return;
        }
        const teamInfo = {
          sinners,
          description: new Date().toLocaleTimeString()
        };
        teamInfoStore.push(teamInfo);
        renderTeamInfo(teamInfo, teamInfoStore.length - 1);
        alert("已载入剪贴板中的编队码");
      });
    }
    const detailsDisplay = document.querySelector("[data-sinner-details]");
    if (detailsDisplay) {
      teamInfoContainer.addEventListener("click", (event) => {
        const clickedElement = event.target;
        if (clickedElement.dataset.buttonUsage === "copyTeamCode") {
          if (clickedElement.parentElement?.dataset.limbusTeam) {
            const teamIndex = Number.parseInt(clickedElement.parentElement.dataset.limbusTeam);
            const { sinners } = teamInfoStore[teamIndex] ?? {};
            let teamCodeBase64 = `检索 ${teamIndex + 1} 号队伍编队码失败`;
            if (sinners) {
              teamCodeBase64 = teamCodec.encode(sinners) ?? teamCodeBase64;
            }
            navigator.clipboard.writeText(teamCodeBase64);
            console.info(`已复制 ${teamIndex + 1} 号队伍编队码:`, teamCodeBase64);
            return;
          }
        } else if (clickedElement.dataset.limbusSinner) {
          const clickedData = {
            sinnerId: clickedElement.dataset.limbusSinner ? Number.parseInt(clickedElement.dataset.limbusSinner) : 0,
            identityId: clickedElement.dataset.sinnerIdentity ? Number.parseInt(clickedElement.dataset.sinnerIdentity) : 0,
            order: clickedElement.dataset.sinnerOrder ? Number.parseInt(clickedElement.dataset.sinnerOrder) : 0,
            egos: clickedElement.dataset.sinnerEgos?.split(",").map((egoId) => egoId ? Number.parseInt(egoId) : undefined)
          };
          const sinnerDetails = teamCodec.loadSinnerDetails({
            sinnerId: clickedData.sinnerId,
            identityId: clickedData.identityId,
            order: clickedData.order,
            egos: {
              ZAYIN: clickedData.egos?.[0] ?? 0,
              TETH: clickedData.egos?.[1],
              HE: clickedData.egos?.[2],
              WAW: clickedData.egos?.[3],
              ALEPH: clickedData.egos?.[4]
            }
          });
          if (!sinnerDetails.identity) {
            console.error({ msg: "sinner not found", sinnerDetails });
            return;
          }
          const displayContent = [
            `<div data-display-identity style="background-image: url('HoverBorder.png'), url('Tier3.png'), url('identities/${sinnerDetails.identity.id}_normal_info.avif')">`,
            `<div title="[${sinnerDetails.sinnerId}] ${sinnerDetails.identity.nameRaw}">${sinnerDetails.identity.name}</div>`,
            `<div title="${sinnerDetails.identity.titleRaw}

[${sinnerDetails.identity.id}] ${sinnerDetails.identity.desc}">`,
            `${sinnerDetails.identity.title.replaceAll(`
`, "<br>")}</div>`,
            `</div>`
          ];
          const extraInfo = [
            "<div>",
            "<div data-display-egos>",
            ...Object.entries(sinnerDetails.egos).map(([egoLevel, egoDetails]) => egoDetails ? `<div data-display-ego-level="${egoLevel}" data-ego-id="${egoDetails.id}"
title="<${egoLevel}>
${egoDetails.nameRaw}
[${egoDetails.id}] ${egoDetails.desc}">${egoDetails.name}</div>` : ""),
            "</div>",
            `<div>(出战顺序: ${sinnerDetails.order})</div>`,
            "</div>"
          ];
          detailsDisplay.innerHTML = `${displayContent.join("")}${extraInfo.join("")}`;
        }
      });
    }
  }
  initApp();
  Object.assign(window, {
    debugTeamCode: () => {
      return teamCodec.test();
    }
  });
  personalities.map((teamCodeSample) => {
    teamInfoStore.push({
      sinners: teamCodec.decode(teamCodeSample.code),
      description: teamCodeSample.description
    });
  });
  teamInfoStore.map(renderTeamInfo);
})();
