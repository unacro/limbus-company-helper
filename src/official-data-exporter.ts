function isValidArray<T>(
	targetArray: T[] | null | undefined,
): targetArray is T[] {
	return !!targetArray && Array.isArray(targetArray) && targetArray.length > 0;
}

async function readJsonFile(filepath: string) {
	const file = Bun.file(filepath);
	// 提前检查 否则即便使用 try-catch 也捕获不到文件不存在的 **同步错误**
	if (!(await file.exists())) {
		console.error(`File not found: ${filepath}\n`);
		return {};
	}
	try {
		return await file.json();
	} catch (error) {
		console.error(error);
	}
	return {};
}

type SupportedLanguage = "en" | "zhcn";
type PersonalityObject = {
	id: number;
	title: string;
	titleRaw: string;
	name: string;
	nameWithTitle: string;
	desc: string;
};

class OfficialDataExporter {
	#gameInstalledPath: string;
	personalitiesData: PersonalityObject[];

	constructor(steamPath: string) {
		this.#gameInstalledPath = `${steamPath}/steamapps/common/Limbus Company/`;
		this.personalitiesData = [];
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

	#getPersonalitiesFilepath(lang: SupportedLanguage = "en") {
		const personalities: Record<SupportedLanguage, string> = {
			en: `${this.#enLangPath}/EN_Personalities.json`,
			zhcn: `${this.#zhcnLangPath}/Personalities.json`,
		};
		return personalities[lang];
	}

	async export() {
		if (!this.personalitiesData) {
			throw new Error("Personalities data not initialized");
		}
		const path = Bun.file("./data/personalities.json");
		return await Bun.write(path, JSON.stringify(this.personalitiesData));
	}

	async init() {
		const { dataList: personalitiesRawData } = await readJsonFile(
			this.#getPersonalitiesFilepath("en"),
		);
		const { dataList: personalitiesLocalizedData } = await readJsonFile(
			this.#getPersonalitiesFilepath("zhcn"),
		);
		for (const readResult of [
			personalitiesRawData,
			personalitiesLocalizedData,
		]) {
			if (!isValidArray(readResult)) {
				return false;
			}
		}
		const personalitiesData: PersonalityObject[] = [];
		for (const rawPersonality of personalitiesRawData) {
			const localizedPersonality = personalitiesLocalizedData.find(
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
			}
		}
		this.personalitiesData = personalitiesData;
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
		console.table(personalities);
	}
}

export default OfficialDataExporter;
