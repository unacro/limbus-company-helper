import { expect, test } from "bun:test";
import TeamBuilder from "../src/core/team-builder";

const n = (
	num: number | string | undefined,
	toRadix: number = 2 | 10 | 16,
	fromRadix: 2 | 10 | 16 | undefined = undefined,
	hasPrefix = false,
) => {
	if (num === undefined) {
		return "";
	}
	const prefix = toRadix === 2 ? "0b" : "0x";
	const numStr = Number.parseInt(num.toString(), fromRadix)
		.toString(toRadix)
		.padStart(Math.floor(16 / toRadix), "0");
	return hasPrefix ? `${prefix}${numStr}` : numStr;
};
const nn = (
	num: number | string | undefined,
	fromRadix: 2 | 10 | 16 | undefined = undefined,
) => {
	if (num === undefined) {
		return NaN;
	}
	return Number.parseInt(num.toString(), fromRadix);
};
const teamCodeConverter = new TeamBuilder();
const sampleListOfThreeTypes = [
	[
		"AQ",
		"Ag",
		"Aw",
		"BA",
		"BQ",
		"Bg",
		"Bw",
		"CA",
		"CQ",
		"Cg",
		"Cw",
		"DA",
		"DQ",
	],
	[
		"BA",
		"CA",
		"DA",
		"EA",
		"FA",
		"GA",
		"HA",
		"IA",
		"JA",
		"KA",
		"LA",
		"MA",
		"NA",
	],
	[
		"EA",
		"IA",
		"MA",
		"QA",
		"UA",
		"YA",
		"cA",
		"gA",
		"kA",
		"oA",
		"sA",
		"wA",
		"0A",
	],
];
const orderSampleListOfThreeTypes = [
	[],
	[],
	["EQ", "Eg", "Ew", "FA", "FQ", "Fg", "Fw", "GA", "GQ", "Gg", "Gw", "HA"],
];

test("Parse Team Code", () => {
	sampleListOfThreeTypes.map((sampleList, encodeType) => {
		const hasError = sampleList
			.map((sample) =>
				sample.split("").map((byteChar) => byteChar.charCodeAt(0)),
			)
			.some(
				(bytes, index) =>
					teamCodeConverter.getPersonalityNumeroFromBytes(
						bytes as [number, number],
						encodeType as 0 | 1 | 2,
					) !==
					index + 1,
			); // 注意 some() 会短路 提前中断遍历
		expect(!hasError).toBeTrue();
	});
});

test("Debug 3rd Team Code Encode Type", () => {
	// expect(teamCodeConverter.test()).toBeTrue();
	const unitTestResults = sampleListOfThreeTypes[2]
		?.map((bytes) => bytes[0])
		?.map((byteChar, index) => {
			if (!byteChar) {
				return;
			}
			const byte = byteChar.charCodeAt(0);
			const byteBin = n(byte, 2);
			const [a, b, c, d] = byteBin
				.replace(/\B(?=(\d{2})+$)/g, " ")
				.split(" ") as [string, string, string, string];
			return {
				ascii: `'${byteChar}'`,
				dec: byte,
				hex: n(byte, 16, 10, true),
				bin: n(byte, 2, 10, true),
				byte: [a, b, c, d].join(" "),
				debug: `${(nn(a, 2) ^ 0b1) + nn(b + c, 2) - (nn(d, 2) >> 1)}`,
				processResult: teamCodeConverter.getPersonalityNumeroFromBytes(
					[byte, 65],
					2,
				),
				expectResult: index + 1,
			};
		});
	expect(unitTestResults).toBeArray();
	unitTestResults?.map((unitTest) =>
		expect(unitTest?.processResult).toBe(unitTest?.expectResult ?? 404),
	);
	console.table(unitTestResults);
});

test("Debug 3rd Team Code Order", () => {
	const unitTestResults = orderSampleListOfThreeTypes[2]
		?.map((byteString) =>
			byteString.split("").map((byteChar) => byteChar.charCodeAt(0)),
		)
		.map(([byte1, byte2], index) => {
			const [a, b, c, d] = [n(byte1, 2), n(byte2, 2)]
				.join("")
				.replace(/\B(?=(\d{4})+$)/g, " ")
				.split(" ");
			return {
				bytes: [a, b, "|", c, d].join(" "),
				debug: `${a} ${nn(b, 2)} ${nn(c, 2) & 0b11} ${(nn(d, 2) >> 1) & 0b11}`,
				processResult: (nn(b, 2) - 5) * 4 + (nn(c, 2) & 0b11),
				expectResult: index + 1,
			};
		});
	expect(unitTestResults).toBeArrayOfSize(12);
	unitTestResults?.map((unitTest) =>
		expect(unitTest.processResult).toBe(unitTest.expectResult),
	);
	console.table(unitTestResults);
});
