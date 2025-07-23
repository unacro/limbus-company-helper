import utils from "../core/utils";

type SupportedLanguage = "en" | "zh_cn";
type PersonalityObject = {
	id: number;
	title: string;
	titleRaw: string;
	name: string;
	nameWithTitle: string;
	desc: string;
};
type EgoObject = {
	id: number;
	name: string;
	nameRaw: string;
	desc: string;
	descRaw: string;
};

class OfficialDataExporter {
	#gameInstalledPath: string;
	personalitiesData: PersonalityObject[];
	egosData: EgoObject[];

	constructor(steamPath: string) {
		this.#gameInstalledPath = `${steamPath}/steamapps/common/Limbus Company/`;
		this.personalitiesData = [];
		this.egosData = [];
	}

	get #enLangPath() {
		return `${this.#gameInstalledPath}/LimbusCompany_Data/Assets/Resources_moved/Localize/en`;
	}

	/**
	 * @description LocalizeLimbusCompany
	 * @author 都市零协会汉化组
	 * @see https://github.com/LocalizeLimbusCompany/LocalizeLimbusCompany
	 */
	get #zhcnLangPath() {
		return `${this.#gameInstalledPath}/LimbusCompany_Data/Lang/LLC_zh-CN`;
	}

	#getLocalDataFilepath(
		lang: SupportedLanguage = "en",
		targetData: "personality" | "ego",
	) {
		const fileType = targetData === "ego" ? "Egos" : "Personalities";
		const filepath: Record<SupportedLanguage, string> = {
			en: `${this.#enLangPath}/EN_${fileType}.json`,
			zh_cn: `${this.#zhcnLangPath}/${fileType}.json`,
		};
		return filepath[lang];
	}

	async export() {
		if (!this.personalitiesData || !this.egosData) {
			throw new Error("Data not initialized");
		}
		const filepaths = {
			personalities: Bun.file("./data/personalities.json"),
			egos: Bun.file("./data/egos.json"),
		};
		const results = [];
		results.push(
			await Bun.write(
				filepaths.personalities,
				JSON.stringify(this.personalitiesData),
			),
		);
		results.push(
			await Bun.write(filepaths.egos, JSON.stringify(this.egosData)),
		);
		return !results.some((success) => !success); // [].every(Boolean) === true
	}

	async #mergeData(dataType: "personality" | "ego") {
		const dataList = [];
		const { dataList: rawData } = await utils.readJsonFile(
			this.#getLocalDataFilepath("en", dataType),
		);
		const { dataList: localizedData } = await utils.readJsonFile(
			this.#getLocalDataFilepath("zh_cn", dataType),
		);
		dataList.push(rawData, localizedData);
		for (const loadResult of dataList) {
			if (!utils.isValidArray(loadResult)) {
				return false;
			}
		}
		switch (dataType) {
			case "personality": {
				const personalitiesData: PersonalityObject[] = [];
				for (const rawPersonality of dataList[0]) {
					const localizedPersonality = dataList[1].find(
						(personality: PersonalityObject) =>
							personality.id === rawPersonality.id,
					);
					if (localizedPersonality) {
						const newPersonality: PersonalityObject = {
							...localizedPersonality,
							title: localizedPersonality.title,
							titleRaw: rawPersonality.title,
							nameRaw: rawPersonality.name,
						};
						personalitiesData.push(newPersonality);
					} else {
						console.warn(
							"指定人格未找到本地化数据 检查是否安装了最新汉化",
							rawPersonality,
						);
						return false;
					}
				}
				this.personalitiesData = personalitiesData;
				break;
			}

			case "ego": {
				const egosData: EgoObject[] = [];
				for (const rawEgo of dataList[0]) {
					const localizedEgo = dataList[1].find(
						(ego: EgoObject) => ego.id === rawEgo.id,
					);
					if (localizedEgo) {
						const newEgo: EgoObject = {
							...localizedEgo,
							nameRaw: rawEgo.name,
							descRaw: rawEgo.desc,
						};
						egosData.push(newEgo);
					} else {
						console.warn(
							"指定 E.G.O 未找到本地化数据 检查是否安装了最新汉化",
							rawEgo,
						);
						return false;
					}
				}
				this.egosData = egosData;
				break;
			}

			default: {
				break;
			}
		}
		return true;
	}

	async init() {
		const allTaskSuccess = (
			await Promise.all([
				this.#mergeData("personality"),
				this.#mergeData("ego"),
			])
		).every(Boolean);
		if (!allTaskSuccess) {
			return false;
		}
		return await this.export();
	}

	get thirdRarityPersonalities() {
		const thirdRarityPersonalitiesIdList = [
			...[10103, 10104, 10106, 10109, 10110, 10112, 10113], // 剑 绽放 W 环 蝶 六 N
			...[10204, 10206, 10207, 10208, 10210, 10211, 10212], // N 七 悔恨 剑 裂纹 火 子路(卯兔)
			...[10302, 10305, 10306, 10309, 10310, 10311, 10312], // W 南五 中指 T 血魔 东五 憎恨
			...[10403, 10404, 10405, 10408, 10410, 10411], // 黑云 肉 W 女仆 蜘蛛 卯兔
			...[10503, 10504, 10506, 10508, 10510, 10511, 10512], // W N R(犀牛) 金笠(剑) 十 五 雷横(拇指)
			...[10603, 10605, 10608, 10609, 10611, 10612], // 豆 K 十 圣愚 句点 R(鹿)
			...[10703, 10705, 10707, 10708, 10710, 10711, 10712], // R(兔) 伞 鱼叉 十一 狼 句点 黑云
			...[10802, 10806, 10807, 10808, 10810, 10811, 10812], // R(鹿) 六 臼齿(水) 亚哈(船长) 二 黑云 惜春
			...[10902, 10905, 10907, 10908, 10910, 10911, 10912, 10913], // 黑云 玫瑰 十 六 九 公主 巳蛇 绝望
			...[11002, 11005, 11008, 11009, 11011, 11012, 11013], // 剑 N 五 菲利普(黎明) 九 中指 拇指
			...[11104, 11105, 11107, 11108, 11110, 11111, 11112], // 七 臼齿 魔弹 管家 W 理发师(剪刀) 卯兔
			...[11203, 11206, 11207, 11209, 11210, 11211, 11212], // G 二 海盗 林顿 神父 炎拳 巳蛇
		];
		return this.personalitiesData.filter((personality) =>
			thirdRarityPersonalitiesIdList.includes(personality.id),
		);
		// .toSorted((a, b) => a.id - b.id);
	}

	test() {
		const personalities = this.thirdRarityPersonalities.map(
			(personality: PersonalityObject) => {
				if (!personality) {
					return {};
				}
				return {
					...personality,
					title: personality.title.replaceAll("\n", " "),
					titleRaw: personality.titleRaw.replaceAll("\n", " "),
				};
			},
		);
		console.table(this.egosData);
		console.table(personalities);
	}
}

export default OfficialDataExporter;
