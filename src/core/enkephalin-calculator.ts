import GameMechanics from "../../data/game-mechanics.json" with {
	type: "json",
};
import utils from "./utils";

interface IGameMechanics {
	sinners: {
		[key: string]: {
			id: number;
			name: string;
			nameRaw: string;
		};
	};
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
	levelUp: { nextLevel: number; needExp: number }[];
	luxcavationRewards: {
		exp: {
			[key: string]: {
				stage: number;
				difficultyLevel: number;
				rewards: [number, number, number, number];
			};
		};
		thread: {
			[key: string]: {
				stage: number;
				difficultyLevel: number;
				rewards: number;
			};
		};
	};
}

const gameMechanics = GameMechanics as unknown as IGameMechanics;

function getEnkephalinModuleCost(needEgoshards: number) {
	return utils.ceil((needEgoshards * 5) / 18);
}

function getNeedMirrorDungeonTimes(needEgoshards: number) {
	return utils.ceil(needEgoshards / 18);
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
		return utils
			.round((this.#hadEgoshards * 100) / this.targetEgoshards)
			.toFixed(2);
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
				`还需要 ${egoshards.needEgoshards} 个 [${id.toString().padStart(2, "0")}]${gameMechanics.sinners[egoshards.id.toString()]?.name} 的自我碎片 (当前完成度 ${egoshards.progress}%)`,
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
		const rewardsCount =
			gameMechanics.luxcavationRewards.exp[stage.toString()]?.rewards;
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
		const totalNeedExp = gameMechanics.levelUp
			.filter(
				(level) =>
					level.nextLevel > currentLevel && level.nextLevel <= expectedLevel,
			)
			.reduce(
				(needExpSum, currentLevel) => needExpSum + currentLevel.needExp,
				0,
			);
		const needExpLuxcavationTimes = utils.ceil(totalNeedExp / levelRewardExp);
		const enkephalinModuleCost = skipBattle
			? needExpLuxcavationTimes * 6
			: needExpLuxcavationTimes * 3;
		console.log(
			`\n从 ${currentLevel} 级升到 ${expectedLevel} 级预计所需要人格经验为: ${totalNeedExp}`,
			`\n需要消耗至少 ${enkephalinModuleCost} 脑啡肽模块 去刷 ${needExpLuxcavationTimes} 次经验采光`,
			`(Difficulty Lv ${gameMechanics.luxcavationRewards.exp[stage.toString()]?.difficultyLevel} 每次${skipBattle ? "跳过" : "不跳过"}战斗 获得 ${levelRewardExp} 经验)`,
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
		const identitiesUpgradeRequire = {
			ratity1: [0, 0, 50, 20], // Tier 2 纺锤, Tier 3 纺锤, Tier 4 纺锤 & 人格碎片
			ratity2: [10, 40, 100, 30],
			ratity3: [20, 80, 150, 50],
		};
		const egoUpgradeRequire = {
			ZAYIN: [20, 60, 110, 80], // 纺锤, 纺锤, 纺锤 & 人格碎片
			TETH: [25, 70, 130, 90],
			HE: [30, 80, 150, 100],
			WAW: [35, 90, 170, 150],
			ALEPH: [40, 100, 200, 250],
		};
		console.debug({
			identitiesUpgradeRequire,
			egoUpgradeRequire,
			luxcavationRewards: gameMechanics.luxcavationRewards.thread,
		});
		throw new Error("TODO: Not implemented");
	}

	test() {
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
