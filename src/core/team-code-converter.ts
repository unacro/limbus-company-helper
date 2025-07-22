import { sinners } from "../../data/game-mechanics.json" with { type: "json" };

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

class TeamCodeConverter {
	#config = {
		maxBytesLength: 96,
		groupBytesLength: 23,
		groupCount: 4,
		identityBytesLength: 2,
		egoBytesLength: 4,
	} as const;
	#byteMask: ByteMask[];

	#getSinnerIdFromByteIndex(byteIndex: number) {
		const trioIndex = Math.floor(byteIndex / this.#config.groupBytesLength);
		const innerTrioIndex = Math.floor(
			(byteIndex % this.#config.groupBytesLength) / 8,
		);
		return (
			trioIndex * Math.floor(12 / this.#config.groupCount) + innerTrioIndex + 1
		);
	}

	#getStartIndexFromSinnerId(sinnerId: number) {
		const sinnerIndex = sinnerId - 1;
		const trioIndex = Math.floor(
			sinnerIndex / Math.floor(12 / this.#config.groupCount),
		);
		const innerTrioIndex =
			sinnerIndex % Math.floor(12 / this.#config.groupCount);
		return trioIndex * this.#config.groupBytesLength + innerTrioIndex * 8;
	}

	constructor() {
		const byteMask = [];
		const redundantStartIndex =
			this.#config.maxBytesLength -
			(this.#config.maxBytesLength % this.#config.groupBytesLength);
		for (let i = 0; i < this.#config.maxBytesLength; i++) {
			const innerIndex = (i % this.#config.groupBytesLength) % 8;
			const mask: ByteMask = {
				id: this.#getSinnerIdFromByteIndex(i),
				byteType: "unknown",
			};
			if (i >= redundantStartIndex) {
				mask.byteType = "redundant";
			} else if (innerIndex < this.#config.identityBytesLength) {
				mask.byteType = "identity";
			} else if (
				innerIndex <
				this.#config.identityBytesLength + this.#config.egoBytesLength
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
		return this.#config;
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

	parse(teamCodeBase64: string) {
		const rawBinaryData = this.#decompressBase64(teamCodeBase64);
		// TODO: 解析出队伍详情: 人格 / EGO / 编队顺序
		return rawBinaryData;
	}

	getSinnerInfoFromByteIndex(byteIndex: number): SinnerInfo {
		const sinnerId = this.#getSinnerIdFromByteIndex(byteIndex).toString();
		return sinnersInfo[sinnerId] as SinnerInfo;
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
		for (let i = 0; i < this.#config.maxBytesLength; i++) {
			unitTestResult.id.push(this.#getSinnerIdFromByteIndex(i));
		}
		Object.entries(unitTestResult).map(([key, value]) => {
			console.dir({ [key]: value });
		});
		return true;
	}
}

export { TeamCodeConverter };
