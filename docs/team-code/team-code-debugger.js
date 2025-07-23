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

// data/game-mechanics.json
var sinners = {
  "1": { id: 1, nameRaw: "Yi Sang", name: "李箱" },
  "2": { id: 2, nameRaw: "Faust", name: "浮士德" },
  "3": { id: 3, nameRaw: "Don Quixote", name: "堂吉诃德" },
  "4": { id: 4, nameRaw: "Ryōshū", name: "良秀" },
  "5": { id: 5, nameRaw: "Meursault", name: "默尔索" },
  "6": { id: 6, nameRaw: "Hong Lu", name: "鸿璐" },
  "7": { id: 7, nameRaw: "Heathcliff", name: "希斯克利夫" },
  "8": { id: 8, nameRaw: "Ishmael", name: "以实玛利" },
  "9": { id: 9, nameRaw: "Rodion", name: "罗佳" },
  "10": { id: 10, nameRaw: "Sinclair", name: "辛克莱" },
  "11": { id: 11, nameRaw: "Outis", name: "奥提斯" },
  "12": { id: 12, nameRaw: "Gregor", name: "格里高尔" }
};

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
  getBinary(num, hasPrefix = false, separator = "", separation = 4) {
    if (num < 0) {
      return num.toString(2).padStart(8, " ");
    }
    let binaryString = num.toString(2).padStart(8, "0");
    if (separator && separator !== "") {
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

// src/core/team-builder.ts
var sinnersInfo = sinners;

class TeamBuilder {
  #settings = {
    maxBytesLength: 96,
    groupBytesLength: 23,
    groupCount: 4,
    identityBytesLength: 2,
    egoBytesLength: 4
  };
  #byteMask;
  get #settingGroupLength() {
    return Math.floor(12 / this.#settings.groupCount);
  }
  #getSinnerIdFromByteIndex(byteIndex) {
    const trioIndex = Math.floor(byteIndex / this.#settings.groupBytesLength);
    const innerTrioIndex = Math.floor(byteIndex % this.#settings.groupBytesLength / 8);
    return trioIndex * this.#settingGroupLength + innerTrioIndex + 1;
  }
  #getStartIndexFromSinnerId(sinnerId) {
    const sinnerIndex = sinnerId - 1;
    const trioIndex = Math.floor(sinnerIndex / this.#settingGroupLength);
    const innerTrioIndex = sinnerIndex % this.#settingGroupLength;
    return trioIndex * this.#settings.groupBytesLength + innerTrioIndex * 8;
  }
  constructor() {
    const byteMask = [];
    const redundantStartIndex = this.#settings.maxBytesLength - this.#settings.maxBytesLength % this.#settings.groupBytesLength;
    for (let i = 0;i < this.#settings.maxBytesLength; i++) {
      const innerIndex = i % this.#settings.groupBytesLength % 8;
      const mask = {
        id: this.#getSinnerIdFromByteIndex(i),
        byteType: "unknown"
      };
      if (i >= redundantStartIndex) {
        mask.byteType = "redundant";
      } else if (innerIndex < this.#settings.identityBytesLength) {
        mask.byteType = "identity";
      } else if (innerIndex < this.#settings.identityBytesLength + this.#settings.egoBytesLength) {
        mask.byteType = "ego";
      } else {
        mask.byteType = "redundant";
      }
      byteMask.push(mask);
    }
    this.#byteMask = [...byteMask];
  }
  getSettings() {
    return this.#settings;
  }
  #decompressBase64(teamCodeBase64) {
    try {
      const binaryString = atob(teamCodeBase64);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0;i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const decompressed = pako.inflate(bytes);
      return decompressed;
    } catch (error) {
      console.warn("Parse team code failed:", error);
    }
    return;
  }
  parse(teamCodeBase64) {
    const rawBinaryData = this.#decompressBase64(teamCodeBase64);
    return rawBinaryData;
  }
  #compressBase64(binaryData) {
    try {
      const compressed = pako.gzip(binaryData);
      let binaryString = "";
      for (let i = 0;i < compressed.length; i++) {
        binaryString += String.fromCharCode(compressed[i]);
      }
      return btoa(binaryString);
    } catch (error) {
      console.warn("Generate team code failed:", error);
    }
    return;
  }
  stringify(binaryData) {
    return this.#compressBase64(binaryData);
  }
  getPersonalityNumeroFromBytes([byte1, byte2], encodeType) {
    let personalityNumero = -1;
    if (!byte1 || !byte2) {
      return personalityNumero;
    }
    switch (encodeType) {
      case 0: {
        personalityNumero = ((byte1 & 15) << 2) + (byte2 >> 4) - 8;
        break;
      }
      case 1: {
        personalityNumero = byte1 - 65;
        break;
      }
      case 2: {
        const [offset, value, feature] = [
          byte1 >> 6 ^ 1,
          byte1 >> 2 & 15,
          byte1 & 3
        ];
        personalityNumero = offset + value - (feature >> 1);
        break;
      }
      default: {
        break;
      }
    }
    return personalityNumero;
  }
  getPersonalityIdFromBytes(sinnerId, bytes) {
    const padNumber = (num) => num.toString().padStart(2, "0");
    const personalityNumero = this.getPersonalityNumeroFromBytes(bytes, (sinnerId - 1) % this.#settingGroupLength);
    if (personalityNumero < 1) {
      return;
    }
    return Number.parseInt(["1", padNumber(sinnerId), padNumber(personalityNumero)].join(""));
  }
  getPersonalityInfoFromBytes(sinnerId, bytes) {
    if (!utils_default.isValidArray(bytes)) {
      return;
    }
    const personalityId = this.getPersonalityIdFromBytes(sinnerId, bytes);
    if (!personalityId) {
      return;
    }
    const foundPersonality = personalities_default.filter((personality) => personality.id === personalityId).pop();
    return { ...foundPersonality };
  }
  getSinnerInfoFromByteIndex(byteIndex, bytes = []) {
    const sinnerId = this.#getSinnerIdFromByteIndex(byteIndex);
    const sinnerInfo = sinnersInfo[sinnerId.toString()];
    const personality = this.getPersonalityInfoFromBytes(sinnerId, bytes);
    return { ...sinnerInfo, personality };
  }
  debugParse(teamCodeBase64) {
    const rawBinaryData = this.#decompressBase64(teamCodeBase64);
    return rawBinaryData;
  }
  test() {
    const unitTestResult = {
      id: [],
      index: [],
      mask: this.#byteMask
    };
    for (let i = 0;i < 12; i++) {
      unitTestResult.index.push(this.#getStartIndexFromSinnerId(i + 1));
    }
    for (let i = 0;i < this.#settings.maxBytesLength; i++) {
      unitTestResult.id.push(this.#getSinnerIdFromByteIndex(i));
    }
    Object.entries(unitTestResult).map(([key, value]) => {
      console.dir({ [key]: value });
    });
    return true;
  }
}
var team_builder_default = TeamBuilder;

// src/team-code-debugger.ts
(() => {
  const teamCodeConverter = new team_builder_default;
  const setting = teamCodeConverter.getSettings();
  const teamDataStore = [];
  const standardTeamCode = "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmqSLsaGsLANDKykhgAAAA";
  const standardTeamBinaryData = teamCodeConverter.debugParse(standardTeamCode);
  function isDifferent(targetByte, byteIndex) {
    return targetByte !== standardTeamBinaryData[byteIndex];
  }
  function compareBytes(teamData, teamIndex) {
    if (!teamData.binaryData) {
      return;
    }
    const diffLocationList = [];
    for (let i = 0;i < teamData.binaryData.length; i++) {
      const byte = teamData.binaryData[i];
      if (byte && isDifferent(byte, i)) {
        diffLocationList.push(i);
      }
    }
    return {
      teamIndex,
      binaryData: teamData.binaryData,
      differences: [...diffLocationList],
      description: teamData.description
    };
  }
  function getByteCharsFromIndexRange(byteList, indexRange) {
    return indexRange.map((index) => byteList[index]).map((byte) => String.fromCodePoint(byte ?? 63)).join("");
  }
  function getTooltipFromIndexRange(byteList, indexRange) {
    return [
      indexRange.map((index) => byteList[index]).map((byte) => utils_default.getBinary(byte ?? 0)).join(" "),
      `(${indexRange.map((index) => byteList[index]).map((byte) => `'${String.fromCodePoint(byte ?? 63)}'`).join(" ")})`
    ].join(" ");
  }
  function getSpanElementHtml(binaryData, indexRange, differences = [], fieldType = "redundant") {
    if (indexRange.length === 0 || indexRange[0] === undefined) {
      return;
    }
    const htmlSlices = [];
    const byteChars = getByteCharsFromIndexRange(binaryData, indexRange);
    const tooltipSlices = [];
    const isModified = utils_default.hasIntersection(differences, indexRange);
    const sinnerInfo = teamCodeConverter.getSinnerInfoFromByteIndex(indexRange[0], indexRange.map((index) => binaryData[index]));
    if (sinnerInfo) {
      tooltipSlices.push(`${sinnerInfo.name} ${sinnerInfo.nameRaw} (id: ${sinnerInfo.id}, startIndex: ${indexRange[0]})`);
      if (fieldType === "identity" && sinnerInfo.personality?.id) {
        tooltipSlices.push("", `${sinnerInfo.personality.title} (${sinnerInfo.personality.desc})`, "");
      }
    }
    if (isModified) {
      tooltipSlices.push(`${getTooltipFromIndexRange(standardTeamBinaryData, indexRange)} standard`);
      tooltipSlices.push(`${getTooltipFromIndexRange(binaryData, indexRange)} current`);
    }
    const tooltipStr = tooltipSlices.length === 0 ? "" : ` title="${tooltipSlices.join("&#10;")}"`;
    htmlSlices.push(`<span data-field-type="${fieldType}" data-field-start-index="${indexRange[0]}"
data-field-bytes="${indexRange.map((index) => binaryData[index])}"
data-field-modified="${isModified}"${tooltipStr}>${byteChars}</span>`);
    return htmlSlices.join("");
  }
  function renderTeamInfo(teamInfo) {
    if (!teamInfo) {
      return;
    }
    const teamHtml = [];
    for (let i = 0;i < setting.groupCount; i++) {
      for (let j = 0;j < Math.floor(12 / setting.groupCount); j++) {
        const startIndex = i * 23 + j * 8;
        const indexRanges = {
          identity: Array.from({ length: setting.identityBytesLength }, (_, k) => startIndex + k),
          ego: Array.from({ length: setting.egoBytesLength }, (_, k) => startIndex + setting.identityBytesLength + k),
          redundant: Array.from({
            length: j === 2 ? 7 - setting.identityBytesLength - setting.egoBytesLength : 8 - setting.identityBytesLength - setting.egoBytesLength
          }, (_, k) => startIndex + setting.identityBytesLength + setting.egoBytesLength + k)
        };
        const sinnerHtml = [];
        sinnerHtml.push(getSpanElementHtml(teamInfo.binaryData, indexRanges.identity, teamInfo.differences, "identity"));
        sinnerHtml.push(getSpanElementHtml(teamInfo.binaryData, indexRanges.ego, teamInfo.differences, "ego"));
        sinnerHtml.push(getSpanElementHtml(teamInfo.binaryData, indexRanges.redundant, teamInfo.differences, "redundant"));
        teamHtml.push(`<code class="sinner" data-sinner-id="${i * 3 + j + 1}">${sinnerHtml.join("")}</code>`);
      }
      teamHtml.push(`<code class="divider"> </code>`);
    }
    teamHtml.unshift(`<span data-button="copyTeamCode" data-team-index="${teamInfo.teamIndex}"
title="点击复制 ${teamInfo.teamIndex + 1} 号编队码">${(teamInfo.teamIndex + 1).toString().padStart(2, "0")}</span>&ensp;`);
    teamHtml.push([
      `<code data-field-type="end" data-field-start-index="92">`,
      Array.from({ length: 4 }, (_, i) => String.fromCodePoint(teamInfo.binaryData[92 + i] ?? 63)).join(""),
      `</code>&ensp;`,
      teamInfo.description
    ].join(""));
    const teamCodeContainer = document.querySelector("#team-code-container");
    if (!teamCodeContainer) {
      throw new Error("Team code container element not found");
    }
    const teamInfoElement = document.createElement("div");
    teamInfoElement.classList.add("lc-team");
    teamInfoElement.dataset.teamIndex = teamInfo.teamIndex.toString();
    teamInfoElement.innerHTML = teamHtml.join("");
    teamCodeContainer.append(teamInfoElement);
  }
  function getDifferenceDetails(byteList, startIndex) {
    const standardDataSlice = Array.from(standardTeamBinaryData).slice(startIndex, startIndex + byteList.length);
    const differenceDetails = {
      standard: standardDataSlice.map((byte) => utils_default.getBinary(byte)),
      selected: byteList.map((byte) => utils_default.getBinary(byte)),
      difference: []
    };
    differenceDetails.difference = Array.from({ length: byteList.length }, (_, i) => i).map((i) => byteList[i] - standardDataSlice[i]);
    return differenceDetails;
  }
  function initApp() {
    const teamCodeContainer = document.querySelector("#team-code-container");
    if (!teamCodeContainer) {
      throw new Error("Team code container element not found");
    }
    const teamInfoElement = document.createElement("div");
    teamInfoElement.classList.add("lc-team");
    teamInfoElement.innerHTML = `00&ensp;<code>${new TextDecoder().decode(standardTeamBinaryData).match(/.{1,23}/g)?.join(" ")}</code>&ensp;默认编队`;
    teamCodeContainer.prepend(teamInfoElement);
    const teamCodeParser = document.querySelector("#team-code-parser");
    if (teamCodeParser) {
      const inputElement = teamCodeParser.querySelector("div#team-code-parser > input#team-code-input");
      const buttonElement = teamCodeParser.querySelector("div#team-code-parser > button");
      if (inputElement && buttonElement) {
        buttonElement.addEventListener("click", () => {
          const inputText = inputElement.value;
          if (!inputText || inputText === "") {
            return;
          }
          const binaryData = teamCodeConverter.debugParse(inputText);
          if (!binaryData) {
            return;
          }
          const teamInfo = {
            binaryData,
            description: new Date().toLocaleTimeString()
          };
          teamDataStore.push(teamInfo);
          renderTeamInfo(compareBytes(teamInfo, teamDataStore.length - 1));
        });
      }
    }
    const differenceDisplay = document.querySelector("#difference-display");
    if (differenceDisplay) {
      teamCodeContainer.addEventListener("click", (event) => {
        const clickedElement = event.target;
        if (clickedElement.dataset.button === "copyTeamCode") {
          if (clickedElement.dataset.teamIndex) {
            const teamIndex = Number.parseInt(clickedElement.dataset.teamIndex);
            const { binaryData } = teamDataStore[teamIndex] ?? {};
            let teamCodeBase64 = `检索 ${teamIndex + 1} 编队码失败`;
            if (binaryData) {
              teamCodeBase64 = teamCodeConverter.stringify(binaryData) ?? teamCodeBase64;
            }
            navigator.clipboard.writeText(teamCodeBase64);
            console.log(`已复制 ${teamIndex + 1} 号编队码:`, teamCodeBase64);
            return;
          }
        } else if (clickedElement.dataset.fieldModified === "true") {
          const clickedData = {
            startIndex: clickedElement.dataset.fieldStartIndex,
            bytes: clickedElement.dataset.fieldBytes,
            differentData: clickedElement.dataset.fieldBytes?.split(",").map((byte) => Number.parseInt(byte))
          };
          if (!clickedData.differentData) {
            return;
          }
          const startIndex = Number.parseInt(clickedData.startIndex);
          const differenceDetails = getDifferenceDetails(clickedData.differentData, startIndex);
          const displayContent = [
            [
              differenceDetails.standard.join(" "),
              differenceDetails.standard.map((binStr) => String.fromCharCode(Number.parseInt(binStr, 2))).join(""),
              differenceDetails.standard.map((binStr) => Number.parseInt(binStr, 2)).join(","),
              "默认初始状态"
            ].join(" "),
            [
              `<span class="display-remark">+</span><i>`,
              differenceDetails.difference.map((num) => num === 0 ? " ".repeat(8) : utils_default.getBinary(num)).join(" "),
              "</i>    差值 (二进制)"
            ].join(""),
            [
              `<div class="display-hint"><span class="display-remark">+</span><i>`,
              differenceDetails.difference.map((num) => num === 0 ? " ".repeat(8) : num.toString().padStart(8, " ")).join(" "),
              "</i>    差值 (十进制)</div>"
            ].join(""),
            [
              `<span class="display-remark">=</span>`,
              differenceDetails.selected.map((byte, index) => {
                const standardByte = differenceDetails.standard[index];
                if (!standardByte) {
                  return;
                }
                const html = [];
                for (let i = 0;i < standardByte.length; i++) {
                  if (byte[i] !== standardByte[i]) {
                    html.push(`<span class="highlight">${byte[i]}</span>`);
                  } else {
                    html.push(byte[i]);
                  }
                }
                return html.join("");
              }).join(" "),
              " ",
              clickedData.differentData.map((byte) => String.fromCharCode(byte)).join(""),
              " ",
              clickedData.differentData.join(","),
              " 点击的差异部分"
            ].join("")
          ];
          const extraInfo = [];
          const bytes = clickedData.bytes?.split(",").map((byteString) => Number.parseInt(byteString));
          if (clickedData.startIndex && bytes && bytes.length === 2 && bytes[0]) {
            const sinnerInfo = teamCodeConverter.getSinnerInfoFromByteIndex(Number.parseInt(clickedData.startIndex), bytes);
            if (sinnerInfo.personality?.title) {
              const bin = (num) => {
                return num.toString(2).padStart(4, "0");
              };
              const hex = (num) => {
                return num.toString(16);
              };
              const [left, right] = [bytes[0] >> 4, bytes[0] & 15];
              if (sinnerInfo.id && sinnerInfo.id % 3 === 0) {
                extraInfo.push(`${bin(left)}(${hex(left)}) ${bin(right)}(${hex(right)})`, "&emsp;");
              }
              extraInfo.push(`[${sinnerInfo.id}]${sinnerInfo.name} - [${sinnerInfo.personality.id}]`, `${sinnerInfo.personality.title.replaceAll(`
`, " ")}`);
            }
          }
          differenceDisplay.innerHTML = `<pre>${displayContent.join("<br>")}</pre>${extraInfo.join("")}`;
        }
      });
    }
  }
  initApp();
  Object.assign(window, {
    debugTeamCode: () => {
      return teamCodeConverter.test();
    }
  });
  personalities.map((teamCodeSample) => {
    teamDataStore.push({
      binaryData: teamCodeConverter.debugParse(teamCodeSample.code),
      description: teamCodeSample.description
    });
  });
  teamDataStore.map(compareBytes).map(renderTeamInfo);
})();
