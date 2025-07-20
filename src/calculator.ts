function getRoundNumber(num: number) {
	return Math.round((num + Number.EPSILON) * 100) / 100;
}

function getEnkephalinModuleCost(needEgoshards: number) {
	return Math.ceil(getRoundNumber((needEgoshards * 5) / 18));
}

function getNeedMirrorDungeonTimes(needEgoshards: number) {
	return Math.ceil(getRoundNumber(needEgoshards / 18));
}

class EgoshardsRecord {
	#id: number;
	#hadEgoshards: number;
	#wantCount: number;

	constructor(id: number) {
		this.#id = id;
		this.#hadEgoshards = 0;
		this.#wantCount = 0;
	}

	get id() {
		return this.#id;
	}

	set hadEgoshards(newValue: number) {
		if (newValue >= 0) {
			this.#hadEgoshards = newValue;
		}
	}

	get hadEgoshards() {
		return this.#hadEgoshards;
	}

	set wantCount(newValue: number) {
		if (newValue >= 0) {
			this.#wantCount = newValue;
		}
	}

	get wantCount() {
		return this.#wantCount;
	}

	get targetEgoshards() {
		return this.#wantCount * 400;
	}

	get needEgoshards() {
		return Math.max(this.targetEgoshards - this.#hadEgoshards, 0);
	}

	get progress() {
		return getRoundNumber(
			(this.#hadEgoshards * 100) / this.targetEgoshards,
		).toFixed(2);
	}

	get enkephalinModuleCost() {
		return getEnkephalinModuleCost(this.needEgoshards);
	}

	get needMirrorDungeonTimes() {
		return getNeedMirrorDungeonTimes(this.needEgoshards);
	}
}

type UserConfig = {
	egoshards: Map<number, EgoshardsRecord>;
};

class LimbusCompanyCalculator {
	Sinners: {
		[key: number]: {
			id: number;
			nameRaw: string;
			name: string;
		};
	} = {
		1: { id: 1, nameRaw: "Yi Sang", name: "李箱" },
		2: { id: 2, nameRaw: "Faust", name: "浮士德" },
		3: { id: 3, nameRaw: "Don Quixote", name: "堂吉诃德" },
		4: { id: 4, nameRaw: "Ryōshū", name: "良秀" },
		5: { id: 5, nameRaw: "Meursault", name: "默尔索" },
		6: { id: 6, nameRaw: "Hong Lu", name: "鸿璐" },
		7: { id: 7, nameRaw: "Heathcliff", name: "希斯克利夫" },
		8: { id: 8, nameRaw: "Ishmael", name: "以实玛利" },
		9: { id: 9, nameRaw: "Rodion", name: "罗佳" },
		10: { id: 10, nameRaw: "Sinclair", name: "辛克莱" },
		11: { id: 11, nameRaw: "Outis", name: "奥提斯" },
		12: { id: 12, nameRaw: "Gregor", name: "格里高尔" },
	} as const;
	/**
	 * @link https://limbuscompany.huijiwiki.com/wiki/%E7%BB%8F%E9%AA%8C%E6%95%B0%E6%8D%AE
setTimeout(async () => {
	try {
		const result = [];
		for (const trElement of document
			.querySelector("table.wikitable > tbody")
			.querySelectorAll("tr")) {
			const [levelElement, ExpElement] = trElement.querySelectorAll("td");
			const { level, exp } = {
				level: levelElement?.innerText ?? "",
				exp: ExpElement?.innerText ?? "",
			};
			if (/\d+/.test(level) && /\d+/.test(exp)) {
				result.push({
					nextLevel: Number.parseInt(level),
					needExp: Number.parseInt(exp),
				});
			}
		}
		console.dir(result);
		navigator.clipboard.writeText(JSON.stringify(result));
	} catch (err) {
		console.error("复制失败：", err);
	}
}, 1000);
	 */
	LevelUpExp = [
		{ nextLevel: 1, needExp: 0 },
		{ nextLevel: 2, needExp: 10 },
		{ nextLevel: 3, needExp: 12 },
		{ nextLevel: 4, needExp: 15 },
		{ nextLevel: 5, needExp: 20 },
		{ nextLevel: 6, needExp: 27 },
		{ nextLevel: 7, needExp: 40 },
		{ nextLevel: 8, needExp: 59 },
		{ nextLevel: 9, needExp: 88 },
		{ nextLevel: 10, needExp: 125 },
		{ nextLevel: 11, needExp: 168 },
		{ nextLevel: 12, needExp: 227 },
		{ nextLevel: 13, needExp: 298 },
		{ nextLevel: 14, needExp: 381 },
		{ nextLevel: 15, needExp: 482 },
		{ nextLevel: 16, needExp: 591 },
		{ nextLevel: 17, needExp: 728 },
		{ nextLevel: 18, needExp: 885 },
		{ nextLevel: 19, needExp: 1064 },
		{ nextLevel: 20, needExp: 1261 },
		{ nextLevel: 21, needExp: 1488 },
		{ nextLevel: 22, needExp: 1739 },
		{ nextLevel: 23, needExp: 2016 },
		{ nextLevel: 24, needExp: 2327 },
		{ nextLevel: 25, needExp: 2674 },
		{ nextLevel: 26, needExp: 3047 },
		{ nextLevel: 27, needExp: 3456 },
		{ nextLevel: 28, needExp: 3899 },
		{ nextLevel: 29, needExp: 4378 },
		{ nextLevel: 30, needExp: 4899 },
		{ nextLevel: 31, needExp: 3899 },
		{ nextLevel: 32, needExp: 4378 },
		{ nextLevel: 33, needExp: 4899 },
		{ nextLevel: 34, needExp: 5468 },
		{ nextLevel: 35, needExp: 6075 },
		{ nextLevel: 36, needExp: 4899 },
		{ nextLevel: 37, needExp: 5468 },
		{ nextLevel: 38, needExp: 6075 },
		{ nextLevel: 39, needExp: 6722 },
		{ nextLevel: 40, needExp: 7413 },
		{ nextLevel: 41, needExp: 6075 },
		{ nextLevel: 42, needExp: 6722 },
		{ nextLevel: 43, needExp: 7413 },
		{ nextLevel: 44, needExp: 8156 },
		{ nextLevel: 45, needExp: 8953 },
		{ nextLevel: 46, needExp: 7413 },
		{ nextLevel: 47, needExp: 7413 },
		{ nextLevel: 48, needExp: 7413 },
		{ nextLevel: 49, needExp: 7413 },
		{ nextLevel: 50, needExp: 7413 },
		{ nextLevel: 51, needExp: 8156 },
		{ nextLevel: 52, needExp: 8156 },
		{ nextLevel: 53, needExp: 8156 },
		{ nextLevel: 54, needExp: 8156 },
		{ nextLevel: 55, needExp: 8156 },
	] as const;
	ExpLuxcavationRewards: {
		[key: number]: {
			stage: number;
			difficultyLevel: number;
			rewards: [number, number, number, number];
		};
	} = {
		1: { stage: 1, difficultyLevel: 8, rewards: [6, 7, 0, 0] },
		2: { stage: 2, difficultyLevel: 18, rewards: [0, 3, 3, 0] },
		3: { stage: 3, difficultyLevel: 28, rewards: [0, 4, 4, 0] },
		4: { stage: 4, difficultyLevel: 33, rewards: [0, 0, 4, 2] },
		5: { stage: 5, difficultyLevel: 38, rewards: [0, 1, 6, 2] },
		6: { stage: 6, difficultyLevel: 43, rewards: [0, 2, 2, 4] },
		7: { stage: 7, difficultyLevel: 48, rewards: [0, 4, 4, 4] },
		8: { stage: 8, difficultyLevel: 53, rewards: [0, 4, 2, 6] },
	} as const;
	ThreadLuxcavationRewards = {
		1: { stage: 1, difficultyLevel: 20, rewards: 2 },
		2: { stage: 2, difficultyLevel: 30, rewards: 3 },
		3: { stage: 3, difficultyLevel: 40, rewards: 4 },
		4: { stage: 4, difficultyLevel: 50, rewards: 5 },
	} as const;
	#userConfig: UserConfig;

	constructor() {
		this.#userConfig = {
			egoshards: new Map(
				Array.from({ length: 12 }, (_, index) => [
					index + 1,
					new EgoshardsRecord(index + 1),
				]),
			),
		};
	}

	setEgoshardsStatus(id: number, { hadEgoshards = -1, wantCount = -1 } = {}) {
		const egoshards = this.#userConfig.egoshards.get(id);
		if (!egoshards) {
			return false;
		}
		egoshards.hadEgoshards = hadEgoshards;
		egoshards.wantCount = wantCount;
		return true;
	}

	farmMirrorDungeon() {
		let allNeedEgoshards = 0;
		for (let id = 1; id <= 12; id++) {
			const egoshards = this.#userConfig.egoshards.get(id);
			if (!egoshards || egoshards.wantCount <= 0) {
				continue;
			}
			allNeedEgoshards += egoshards.needEgoshards;
			console.log(
				`还需要 ${egoshards.needEgoshards} 个 [${id.toString().padStart(2, "0")}]${this.Sinners[egoshards.id]?.name} 的自我碎片 (当前完成度 ${egoshards.progress}%)`,
			);
		}
		console.log(
			`合计共缺少 ${allNeedEgoshards} 自我碎片 (还需要花费至少 ${getEnkephalinModuleCost(allNeedEgoshards)} 脑啡肽模块 去刷 ${getNeedMirrorDungeonTimes(allNeedEgoshards)} 次镜牢)`,
		);
		return {
			allNeedEgoshards,
			enkephalinModuleCost: getEnkephalinModuleCost(allNeedEgoshards),
			needMirrorDungeonTimes: getNeedMirrorDungeonTimes(allNeedEgoshards),
		};
	}

	farmExpLuxcavation(
		currentLevel: number,
		expectedLevel: number,
		stage = 8,
		skipBattle = false,
	) {
		const rewardsCount = this.ExpLuxcavationRewards[stage]?.rewards;
		if (!rewardsCount) {
			console.error(`未找到 经验采光 #${stage} 的关卡信息`);
			return;
		}
		const rewards = [50, 200, 1000, 3000] as const;
		const basicLevelRewardExp = rewardsCount.reduce(
			(expSum, rewardCount, index) =>
				expSum + rewardCount * (rewards[index] as number),
			0,
		);
		const levelRewardExp = skipBattle
			? basicLevelRewardExp * 1.5
			: basicLevelRewardExp;
		const totalNeedExp = this.LevelUpExp.filter(
			(level) =>
				level.nextLevel > currentLevel && level.nextLevel <= expectedLevel,
		).reduce(
			(needExpSum, currentLevel) => needExpSum + currentLevel.needExp,
			0,
		);
		const needExpLuxcavationTimes = Math.ceil(totalNeedExp / levelRewardExp);
		const enkephalinModuleCost = skipBattle
			? needExpLuxcavationTimes * 6
			: needExpLuxcavationTimes * 3;
		console.log(
			`\n从 ${currentLevel} 级升到 ${expectedLevel} 级预计所需要人格经验为: ${totalNeedExp}`,
			`\n需要消耗至少 ${enkephalinModuleCost} 脑啡肽模块 去刷 ${needExpLuxcavationTimes} 次经验采光`,
			`(Difficulty Lv ${this.ExpLuxcavationRewards[stage]?.difficultyLevel} 每次${skipBattle ? "跳过" : "不跳过"}战斗 获得 ${levelRewardExp} 经验)`,
		);
		return {
			currentLevel,
			expectedLevel,
			totalNeedExp,
			levelRewardExp,
			needExpLuxcavationTimes,
			enkephalinModuleCost,
		};
	}

	farmThreadLuxcavation() {
		throw new Error("TODO: Not implemented.");
	}

	test() {
		this.setEgoshardsStatus(4, { hadEgoshards: 225, wantCount: 1 });
		this.setEgoshardsStatus(1, { hadEgoshards: 65, wantCount: 1 });
		this.setEgoshardsStatus(12, { hadEgoshards: 171, wantCount: 1 });
		this.setEgoshardsStatus(2, { hadEgoshards: 181, wantCount: 1 });
		this.setEgoshardsStatus(5, { hadEgoshards: 100, wantCount: 1 });
		this.setEgoshardsStatus(10, { hadEgoshards: 179, wantCount: 1 });
		this.setEgoshardsStatus(11, { hadEgoshards: 97, wantCount: 2 });
		this.farmMirrorDungeon();

		this.farmExpLuxcavation(1, 55, 7);

		// this.farmThreadLuxcavation();
	}
}

export default LimbusCompanyCalculator;
