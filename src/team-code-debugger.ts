import { sampleList } from "../data/team-code-samples.json" with {
	type: "json",
};
import { TeamCodeConverter } from "./core/team-code-converter";
import utils from "./core/utils";

(() => {
	const teamCodeConverter = new TeamCodeConverter();
	const setting = teamCodeConverter.getSettings();
	const teamDataStore: {
		binaryData: Uint8Array | undefined;
		description: string;
	}[] = [];
	const standardTeamCode =
		"H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmqSLsaGsLANDKykhgAAAA";
	const standardTeamBinaryData = teamCodeConverter.debugParse(
		standardTeamCode,
	) as Uint8Array;

	type TeamInfo = {
		teamIndex: number;
		binaryData: Uint8Array;
		differences: number[];
		description: string;
	};

	function isDifferent(targetByte: number, byteIndex: number) {
		return targetByte !== standardTeamBinaryData[byteIndex];
	}

	function compareBytes(
		teamData: {
			binaryData: Uint8Array | undefined;
			description: string;
		},
		teamIndex: number,
	): TeamInfo | undefined {
		if (!teamData.binaryData) {
			return;
		}
		const diffLocationList = [];
		for (let i = 0; i < teamData.binaryData.length; i++) {
			const byte = teamData.binaryData[i];
			if (byte && isDifferent(byte, i)) {
				diffLocationList.push(i);
			}
		}
		return {
			teamIndex,
			binaryData: teamData.binaryData,
			differences: [...diffLocationList],
			description: teamData.description,
		};
	}

	function getByteCharsFromIndexRange(
		byteList: Uint8Array,
		indexRange: number[],
	) {
		return indexRange
			.map((index) => byteList[index])
			.map((byte) => String.fromCodePoint(byte ?? 63))
			.join("");
	}

	function getTooltipFromIndexRange(
		byteList: Uint8Array,
		indexRange: number[],
	) {
		return [
			indexRange
				.map((index) => byteList[index])
				.map((byte) => utils.getBinary(byte ?? 0))
				.join(" "),
			`(${indexRange
				.map((index) => byteList[index])
				.map((byte) => `'${String.fromCodePoint(byte ?? 63)}'`)
				.join(" ")})`,
		].join(" ");
	}

	function getSpanElementHtml(
		binaryData: Uint8Array,
		indexRange: number[],
		differences: number[] = [],
		fieldType: "identity" | "ego" | "redundant" = "redundant",
	) {
		if (indexRange.length === 0 || indexRange[0] === undefined) {
			return;
		}
		const htmlSlices: string[] = [];
		const byteChars = getByteCharsFromIndexRange(binaryData, indexRange);
		const tooltipSlices = [];
		const isModified = utils.hasIntersection(differences, indexRange);
		const sinnerInfo = teamCodeConverter.getSinnerInfoFromByteIndex(
			indexRange[0],
		);
		if (sinnerInfo) {
			tooltipSlices.push(
				`${sinnerInfo.name} ${sinnerInfo.nameRaw} (id: ${sinnerInfo.id}, startIndex: ${indexRange[0]})`,
			);
		}
		if (isModified) {
			tooltipSlices.push(
				`${getTooltipFromIndexRange(standardTeamBinaryData, indexRange)} standard`,
			);
			tooltipSlices.push(
				`${getTooltipFromIndexRange(binaryData, indexRange)} current`,
			);
		}
		const tooltipStr =
			tooltipSlices.length === 0
				? ""
				: ` title="${tooltipSlices.join("&#10;")}"`;
		htmlSlices.push(
			`<span data-field-type="${fieldType}" data-field-start-index="${indexRange[0]}"
data-field-bytes="${indexRange.map((index) => binaryData[index])}"
data-field-modified="${isModified}"${tooltipStr}>${byteChars}</span>`,
		);
		return htmlSlices.join("");
	}

	function renderTeamInfo(teamInfo: TeamInfo | undefined) {
		if (!teamInfo) {
			return;
		}
		const teamHtml = [];
		for (let i = 0; i < setting.groupCount; i++) {
			for (let j = 0; j < Math.floor(12 / setting.groupCount); j++) {
				const startIndex = i * 23 + j * 8;
				const indexRanges = {
					identity: Array.from(
						{ length: setting.identityBytesLength },
						(_, k) => startIndex + k,
					),
					ego: Array.from(
						{ length: setting.egoBytesLength },
						(_, k) => startIndex + setting.identityBytesLength + k,
					),
					redundant: Array.from(
						{
							length:
								j === 2
									? 7 - setting.identityBytesLength - setting.egoBytesLength
									: 8 - setting.identityBytesLength - setting.egoBytesLength,
						},
						(_, k) =>
							startIndex +
							setting.identityBytesLength +
							setting.egoBytesLength +
							k,
					),
				};
				const sinnerHtml = [];
				sinnerHtml.push(
					getSpanElementHtml(
						teamInfo.binaryData,
						indexRanges.identity,
						teamInfo.differences,
						"identity",
					),
				);
				sinnerHtml.push(
					getSpanElementHtml(
						teamInfo.binaryData,
						indexRanges.ego,
						teamInfo.differences,
						"ego",
					),
				);
				sinnerHtml.push(
					getSpanElementHtml(
						teamInfo.binaryData,
						indexRanges.redundant,
						teamInfo.differences,
						"redundant",
					),
				);
				teamHtml.push(
					`<code class="sinner" data-sinner-id="${i * 3 + j + 1}">${sinnerHtml.join("")}</code>`,
				);
			}
			teamHtml.push(`<code class="divider"> </code>`);
		}
		teamHtml.unshift(
			`<span data-button="copyTeamCode" data-team-index="${teamInfo.teamIndex}"
title="点击复制 ${teamInfo.teamIndex + 1} 号编队码">${(teamInfo.teamIndex + 1).toString().padStart(2, "0")}</span>&ensp;`,
		);
		teamHtml.push(
			[
				`<code data-field-type="end" data-field-start-index="92">`,
				Array.from({ length: 4 }, (_, i) =>
					String.fromCodePoint(teamInfo.binaryData[92 + i] ?? 63),
				).join(""),
				`</code>&ensp;`,
				teamInfo.description,
			].join(""),
		);
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

	function getDifferenceDetails(byteList: number[], startIndex: number) {
		const standardDataSlice: number[] = Array.from(
			standardTeamBinaryData,
		).slice(startIndex, startIndex + byteList.length);
		const differenceDetails = {
			standard: standardDataSlice.map((byte) => utils.getBinary(byte)),
			selected: byteList.map((byte) => utils.getBinary(byte)),
			difference: [] as number[],
		};
		differenceDetails.difference = Array.from(
			{ length: byteList.length },
			(_, i) => i,
		).map((i) => (byteList[i] as number) - (standardDataSlice[i] as number));
		return differenceDetails;
	}

	function initApp() {
		const teamCodeContainer = document.querySelector("#team-code-container");
		if (!teamCodeContainer) {
			throw new Error("Team code container element not found");
		}
		const teamInfoElement = document.createElement("div");
		teamInfoElement.classList.add("lc-team");
		teamInfoElement.innerHTML = `00&ensp;<code>${new TextDecoder()
			.decode(standardTeamBinaryData)
			.match(/.{1,23}/g)
			?.join(" ")}</code>&ensp;默认编队`;
		teamCodeContainer.prepend(teamInfoElement);

		const teamCodeParser = document.querySelector("#team-code-parser");
		if (teamCodeParser) {
			const inputElement = teamCodeParser.querySelector(
				"div#team-code-parser > input#team-code-input",
			) as HTMLInputElement;
			const buttonElement = teamCodeParser.querySelector(
				"div#team-code-parser > button",
			);
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
						description: new Date().toLocaleTimeString(),
					};
					teamDataStore.push(teamInfo);
					renderTeamInfo(compareBytes(teamInfo, teamDataStore.length - 1));
				});
			}
		}

		const differenceDisplay = document.querySelector("#difference-display");
		if (differenceDisplay) {
			teamCodeContainer.addEventListener("click", (event) => {
				const clickedElement = event.target as HTMLElement;
				if (clickedElement.dataset.button === "copyTeamCode") {
					if (clickedElement.dataset.teamIndex) {
						const teamIndex = Number.parseInt(clickedElement.dataset.teamIndex);
						const { binaryData } = teamDataStore[teamIndex] ?? {};
						let teamCodeBase64 = `检索 ${teamIndex + 1} 编队码失败`;
						if (binaryData) {
							teamCodeBase64 =
								teamCodeConverter.stringify(binaryData) ?? teamCodeBase64;
						}
						navigator.clipboard.writeText(teamCodeBase64);
						console.log(`已复制 ${teamIndex + 1} 号编队码:`, teamCodeBase64);
						return;
					}
				} else if (clickedElement.dataset.fieldModified === "true") {
					const clickedData = {
						startIndex: clickedElement.dataset.fieldStartIndex,
						differentData: clickedElement.dataset.fieldBytes
							?.split(",")
							.map((byte) => Number.parseInt(byte)),
					};
					if (!clickedData.differentData) {
						return;
					}
					const startIndex = Number.parseInt(clickedData.startIndex as string);
					const differenceDetails = getDifferenceDetails(
						clickedData.differentData,
						startIndex,
					);
					const displayContent = [
						[differenceDetails.standard.join(" "), "默认初始状态"].join(" "),
						[
							`<span class="display-remark">+</span><i>`,
							differenceDetails.difference
								.map((num) =>
									num === 0 ? " ".repeat(8) : utils.getBinary(num),
								)
								.join(" "),
							"</i> 差值 (二进制)",
						].join(""),
						[
							`<div class="display-hint"><span class="display-remark">+</span><i>`,
							differenceDetails.difference
								.map((num) =>
									num === 0 ? " ".repeat(8) : num.toString().padStart(8, " "),
								)
								.join(" "),
							"</i> 差值 (十进制)</div>",
						].join(""),
						[
							`<span class="display-remark">=</span>`,
							differenceDetails.selected
								.map((byte, index) => {
									const standardByte = differenceDetails.standard[index];
									if (!standardByte) {
										return;
									}
									const html = [];
									for (let i = 0; i < standardByte.length; i++) {
										if (byte[i] !== standardByte[i]) {
											html.push(`<span class="highlight">${byte[i]}</span>`);
										} else {
											html.push(byte[i]);
										}
									}
									return html.join("");
								})
								.join(" "),
							" 点击的差异部分",
						].join(""),
					];
					differenceDisplay.innerHTML = `<pre>${displayContent.join("<br>")}</pre>`;
				}
			});
		}
	}

	initApp();
	Object.assign(window, {
		debugTeamCode: () => {
			return teamCodeConverter.test();
		},
	});

	// console.table(sampleList);
	sampleList
		.slice(0, Math.floor(sampleList.length / 2))
		.map((teamCodeSample) => {
			teamDataStore.push({
				binaryData: teamCodeConverter.debugParse(teamCodeSample.code),
				description: teamCodeSample.description,
			});
		});
	teamDataStore.map(compareBytes).map(renderTeamInfo);
})();
