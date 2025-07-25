import egos from "../../data/egos.json" with { type: "json" };
import personalities from "../../data/personalities.json" with { type: "json" };
import utils from "./utils";

type SinnerInfo = {
	sinnerId: number;
	identityId: number;
	order: number;
	egos: {
		ZAYIN: number;
		TETH?: number;
		HE?: number;
		WAW?: number;
		ALEPH?: number;
	};
};

type IdentityDetails = {
	id: number;
	title: string;
	name: string;
	nameWithTitle: string;
	desc: string;
	titleRaw: string;
	nameRaw: string;
};

type EgoDetails =
	| {
			id: number;
			name: string;
			desc: string;
			nameRaw: string;
			descRaw: string;
	  }
	| undefined;

type EgoLevel = "ZAYIN" | "TETH" | "HE" | "WAW" | "ALEPH";

type SinnerDetails = {
	sinnerId: number;
	identity?: IdentityDetails;
	order: number;
	egos: Record<EgoLevel, EgoDetails>;
};

function queryPersonalityDetails(personalityId: number | undefined) {
	if (!personalityId) {
		return;
	}
	return personalities
		.filter((personality) => personality.id === personalityId)
		.pop();
}

function queryEgoDetails(egoId: number | undefined) {
	if (!egoId) {
		return;
	}
	return egos.filter((ego) => ego.id === egoId).pop();
}

class TeamCodec {
	/**
	 * @function #getRawDataFromTeamCode
	 * @param compressedBase64 team code base64
	 * @returns
	 * @description 1st base64 => gzip => 2nd base64
	 */
	#getRawDataFromTeamCode(compressedBase64: string): string[] {
		try {
			const compressedBytes = utils.getBinaryFromBase64(compressedBase64); // 不定长 (gzip 压缩后)
			// @ts-ignore TODO: 使用本地库加载 pako
			const decompressedBytes: Uint8Array = pako.inflate(compressedBytes); // ungzip() => 96 bytes
			const decompressedBase64Chars = [];
			for (let i = 0; i < decompressedBytes.length; i++) {
				const asciiCharCode = decompressedBytes[i] as number;
				decompressedBase64Chars.push(String.fromCharCode(asciiCharCode));
			}
			const rawDataBytes = utils.getBinaryFromBase64(
				decompressedBase64Chars.join(""),
			); // 70 bytes
			const rawDataBinaryList = []; // 560 bits
			for (let i = 0; i < rawDataBytes.length; i++) {
				const byte = rawDataBytes[i] as number;
				const binary = byte.toString(2).padStart(8, "0");
				rawDataBinaryList.push(...binary);
			}
			// console.debug({
			// 	debug: "decode",
			// 	decompressed: {
			// 		data: decompressedBase64Chars.join(""),
			// 		length: decompressedBase64Chars.length,
			// 	},
			// 	binary: {
			// 		data: rawDataBinaryList.join(""),
			// 		length: rawDataBinaryList.length,
			// 	},
			// });
			return rawDataBinaryList;
		} catch (error) {
			console.warn("Parse team code failed:", error);
		}
		return [];
	}

	decode(teamCodeBase64: string) {
		const rawBinaryBits = this.#getRawDataFromTeamCode(teamCodeBase64);
		if (!utils.isValidArray(rawBinaryBits)) {
			return [];
		}
		const sinnerBits = 8 + 4 + 7 * 4 + 6;
		const getValueFromBinary = (binary: string[], start: number, end: number) =>
			Number.parseInt(binary.slice(start, end).join(""), 2);
		const getPropertyId = (
			sinnerId: number,
			propertyNumero: number,
			isEgo = true,
		) =>
			propertyNumero > 0
				? Number.parseInt(
						[
							isEgo ? 2 : 1,
							sinnerId.toString().padStart(2, "0"),
							propertyNumero.toString().padStart(2, "0"),
						].join(""),
					)
				: undefined;
		const sinnerDataList: SinnerInfo[] = [];
		for (let sinnerId = 1; sinnerId <= 12; sinnerId++) {
			const startIndex = (sinnerId - 1) * sinnerBits;
			const sinnerBinary = rawBinaryBits.slice(
				startIndex,
				startIndex + sinnerBits,
			);
			sinnerDataList.push({
				sinnerId,
				identityId: getPropertyId(
					sinnerId,
					getValueFromBinary(sinnerBinary, 0, 8),
					false,
				) as number,
				order: getValueFromBinary(sinnerBinary, 8, 12),
				egos: {
					ZAYIN: getPropertyId(
						sinnerId,
						getValueFromBinary(sinnerBinary, 12, 19),
					) as number,
					TETH: getPropertyId(
						sinnerId,
						getValueFromBinary(sinnerBinary, 19, 26),
					),
					HE: getPropertyId(sinnerId, getValueFromBinary(sinnerBinary, 26, 33)),
					WAW: getPropertyId(
						sinnerId,
						getValueFromBinary(sinnerBinary, 33, 40),
					),
					ALEPH: getPropertyId(
						sinnerId,
						getValueFromBinary(sinnerBinary, 40, 46),
					),
				},
			});
		}
		return sinnerDataList;
	}

	#getTeamCodeFromRawData(rawDataBinaryString: string): string | undefined {
		try {
			const base64String = utils.getBase64FromBinary(rawDataBinaryString);
			if (!base64String || base64String.length !== 96) {
				return;
			}
			const base64Bytes = new Uint8Array(base64String.length);
			for (let i = 0; i < base64String.length; i++) {
				base64Bytes[i] = base64String.charCodeAt(i);
			}
			// @ts-ignore TODO: 使用本地库加载 pako
			// https://nodeca.github.io/pako/#deflate
			const compressedBytes = pako.gzip(base64Bytes, { level: 9 });
			return utils.getBase64FromBinary(compressedBytes);
		} catch (error) {
			console.warn("Generate team code failed:", error);
		}
		return;
	}

	encode(sinnerInfoList: SinnerInfo[]) {
		const binaryDataString =
			sinnerInfoList
				.map((sinnerInfo) =>
					[
						utils.getBinary(sinnerInfo.identityId % 100, { padLength: 8 }),
						utils.getBinary(sinnerInfo.order, { padLength: 4 }),
						Object.entries(sinnerInfo.egos)
							.map(([egoLevel, egoId]) =>
								egoLevel === "ALEPH"
									? utils.getBinary((egoId ?? 0) % 100, { padLength: 6 })
									: utils.getBinary((egoId ?? 0) % 100, { padLength: 7 }),
							)
							.join(""),
					].join(""),
				)
				.join("") + "0".repeat(8);
		return this.#getTeamCodeFromRawData(binaryDataString);
	}

	loadSinnerDetails(sinner: SinnerInfo) {
		const personalityInfo: SinnerDetails = {
			sinnerId: sinner.sinnerId,
			identity: queryPersonalityDetails(sinner.identityId),
			egos: {
				ZAYIN: undefined,
				TETH: undefined,
				HE: undefined,
				WAW: undefined,
				ALEPH: undefined,
			},
			order: sinner.order,
		};
		Object.entries(sinner.egos).map(([egoLevel, egoId]) => {
			personalityInfo.egos[egoLevel as EgoLevel] = queryEgoDetails(egoId);
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

export { TeamCodec, type SinnerInfo, type SinnerDetails };
