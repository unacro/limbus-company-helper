import { sinners } from "../../data/game-mechanics.json" with { type: "json" };
import personalities from "../../data/personalities.json" with { type: "json" };
import utils from "./utils";

type SinnerInfo = {
	id: number;
	name: string;
	nameRaw: string;
};
interface ISinnersInfo {
	[key: string]: SinnerInfo;
}
const sinnersInfo: ISinnersInfo = sinners;

type ByteMask = {
	id: number;
	byteType: "unknown" | "redundant" | "identity" | "ego";
};

class TeamBuilder {
	#settings = {
		maxBytesLength: 96,
		groupBytesLength: 23,
		groupCount: 4,
		identityBytesLength: 2,
		egoBytesLength: 4,
	} as const;
	#byteMask: ByteMask[];

	get #settingGroupLength() {
		return Math.floor(12 / this.#settings.groupCount);
	}

	#getSinnerIdFromByteIndex(byteIndex: number) {
		const trioIndex = Math.floor(byteIndex / this.#settings.groupBytesLength);
		const innerTrioIndex = Math.floor(
			(byteIndex % this.#settings.groupBytesLength) / 8,
		);
		return trioIndex * this.#settingGroupLength + innerTrioIndex + 1;
	}

	#getStartIndexFromSinnerId(sinnerId: number) {
		const sinnerIndex = sinnerId - 1;
		const trioIndex = Math.floor(sinnerIndex / this.#settingGroupLength);
		const innerTrioIndex = sinnerIndex % this.#settingGroupLength;
		return trioIndex * this.#settings.groupBytesLength + innerTrioIndex * 8;
	}

	constructor() {
		const byteMask = [];
		const redundantStartIndex =
			this.#settings.maxBytesLength -
			(this.#settings.maxBytesLength % this.#settings.groupBytesLength);
		for (let i = 0; i < this.#settings.maxBytesLength; i++) {
			const innerIndex = (i % this.#settings.groupBytesLength) % 8;
			const mask: ByteMask = {
				id: this.#getSinnerIdFromByteIndex(i),
				byteType: "unknown",
			};
			if (i >= redundantStartIndex) {
				mask.byteType = "redundant";
			} else if (innerIndex < this.#settings.identityBytesLength) {
				mask.byteType = "identity";
			} else if (
				innerIndex <
				this.#settings.identityBytesLength + this.#settings.egoBytesLength
			) {
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

	#decompressBase64(teamCodeBase64: string): Uint8Array | undefined {
		try {
			const binaryString = atob(teamCodeBase64);
			const bytes = new Uint8Array(binaryString.length);
			for (let i = 0; i < binaryString.length; i++) {
				bytes[i] = binaryString.charCodeAt(i);
			}
			// @ts-ignore TODO: 使用本地库加载 pako
			const decompressed = pako.inflate(bytes);
			return decompressed;
		} catch (error) {
			console.warn("Parse team code failed:", error);
		}
		return;
	}

	parse(teamCodeBase64: string) {
		const rawBinaryData = this.#decompressBase64(teamCodeBase64);
		// TODO: 解析出队伍详情: 人格 / EGO / 编队顺序
		return rawBinaryData;
	}

	#compressBase64(binaryData: Uint8Array): string | undefined {
		try {
			// @ts-ignore TODO: 使用本地库加载 pako
			const compressed = pako.gzip(binaryData);
			let binaryString = "";
			for (let i = 0; i < compressed.length; i++) {
				binaryString += String.fromCharCode(compressed[i]);
			}
			return btoa(binaryString);
		} catch (error) {
			console.warn("Generate team code failed:", error);
		}
		return;
	}

	stringify(binaryData: Uint8Array) {
		return this.#compressBase64(binaryData);
	}

	getPersonalityNumeroFromBytes(
		[byte1, byte2]: [number, number],
		encodeType: 0 | 1 | 2,
	) {
		let personalityNumero = -1;
		if (!byte1 || !byte2) {
			return personalityNumero;
		}
		// 假设把两个 byte 切割成 4 bit 的 4 个十六进制数 序号为 [a, b], [c, d]
		switch (encodeType) {
			case 0: {
				// 由 b, c 决定 (似乎跟 d 也有关 观察到会根据奇偶性变化)
				personalityNumero = ((byte1 & 0b1111) << 2) + (byte2 >> 4) - 8;
				break;
			}

			case 1: {
				// 由 a, b 决定
				personalityNumero = byte1 - 0b01000001;
				break;
			}

			case 2: {
				// 由 a, b 决定

				// TODO: 编队顺序会影响到 b (比如 12 会把 [a, b] 从 0b_0100_0101 变成 0b_0100_1000)
				// 人格的标识特征肯定是 **能够排除** 编队顺序影响的

				// const byteMap = [
				// 	0x45, 0x49, 0x4d, 0x51, 0x55, 0x59, 0x63, 0x67, 0x6b, 0x6f, 0x73,
				// 	0x77, 0x30,
				// ]; // domo 查表法desu 我管你这那的
				// personalityNumero = byteMap.findIndex((byte) => byte === byte1) + 1;

				// 强行构造拟合的算法能通过 **截至目前** 的所有单元验证也不代表和官方实际上是同一种算法 有可能纯属运气
				// 回归后能用就行了 出问题再说
				const [offset, value, feature] = [
					(byte1 >> 6) ^ 0b1,
					(byte1 >> 2) & 0b1111,
					byte1 & 0b11,
				];
				personalityNumero = offset + value - (feature >> 1);
				// console.log({ offset, value, feature, personalityNumero });
				break;
			}

			default: {
				break;
			}
		}
		return personalityNumero;
	}

	getPersonalityIdFromBytes(sinnerId: number, bytes: number[]) {
		const padNumber = (num: number) => num.toString().padStart(2, "0");
		const personalityNumero = this.getPersonalityNumeroFromBytes(
			bytes as [number, number],
			((sinnerId - 1) % this.#settingGroupLength) as 0 | 1 | 2,
		);
		if (personalityNumero < 1) {
			return;
		}
		return Number.parseInt(
			["1", padNumber(sinnerId), padNumber(personalityNumero)].join(""),
		);
	}

	getPersonalityInfoFromBytes(sinnerId: number, bytes: number[]) {
		if (!utils.isValidArray(bytes)) {
			return;
		}
		const personalityId = this.getPersonalityIdFromBytes(sinnerId, bytes);
		if (!personalityId) {
			return;
		}
		const foundPersonality = personalities
			.filter((personality) => personality.id === personalityId)
			.pop();
		return { ...foundPersonality };
	}

	getSinnerInfoFromByteIndex(byteIndex: number, bytes: number[] = []) {
		const sinnerId = this.#getSinnerIdFromByteIndex(byteIndex);
		const sinnerInfo = sinnersInfo[sinnerId.toString()];
		const personality = this.getPersonalityInfoFromBytes(sinnerId, bytes);
		return { ...sinnerInfo, personality };
	}

	debugParse(teamCodeBase64: string) {
		const rawBinaryData = this.#decompressBase64(teamCodeBase64);
		return rawBinaryData;
	}

	test() {
		const unitTestResult: {
			id: number[];
			index: number[];
			mask: ByteMask[];
		} = {
			id: [],
			index: [],
			mask: this.#byteMask,
		};
		for (let i = 0; i < 12; i++) {
			unitTestResult.index.push(this.#getStartIndexFromSinnerId(i + 1));
		}
		for (let i = 0; i < this.#settings.maxBytesLength; i++) {
			unitTestResult.id.push(this.#getSinnerIdFromByteIndex(i));
		}
		Object.entries(unitTestResult).map(([key, value]) => {
			console.dir({ [key]: value });
		});
		return true;
	}
}

export default TeamBuilder;
