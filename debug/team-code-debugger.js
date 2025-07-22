// data/team-code-samples.json
var sampleList = [
  {
    description: "10107 裴廓德号 大副",
    code: "H4sIAAAAAAAACnMqd0x3BAInR2cQ5ejq6AmmA6kh7GhrCwA1VNYGYAAAAA=="
  },
  {
    description: "10109 环箱",
    code: "H4sIAAAAAAAACnMOdEx3BAInR2cQ5ejq6AmmqSLsaGsLABXXti1gAAAA"
  },
  {
    description: "编队 1 2 3 4 5 6",
    code: "H4sIAAAAAAAACnMMckx3BAInT2cQ5eha7gmmQ6HCoRBht3SIcCBU2BGq2hGvsKOtLQB7yDA5YAAAAA=="
  },
  {
    description: "编队 2 1 4 3 6 5",
    code: "H4sIAAAAAAAACnMMdkx3BAInV2cQ5ejm6AmmQ6DCkVDhQIhwIFTYESLs6ohX2NHWFgANTYsWYAAAAA=="
  },
  {
    description: "10206 七浮",
    code: "H4sIAAAAAAAACnMMdEx3BAJ3R2cQ5ejq6AmmocJOFAk72toCAOyka5tgAAAA"
  },
  {
    description: "10210 裂纹浮",
    code: "H4sIAAAAAAAACnMMdEx3BAJvR2cQ5ejq6AmmocJOFAk72toCAMLItsxgAAAA"
  },
  {
    description: "10211 火浮",
    code: "H4sIAAAAAAAACnMMdEx3BAIfR2cQ5ejq6AmmocJOFAk72toCAMw2nbBgAAAA"
  },
  {
    description: "10212 兔头",
    code: "H4sIAAAAAAAACnMMdEx3BAJfR2cQ5ejq6AmmocJOFAk72toCANV+WOdgAAAA"
  },
  {
    description: "液囊",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cgdnR0dfQEcR2RhB3JFna0tQUAgSvOpmAAAAA="
  },
  {
    description: "液囊 + 另一个EGO",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cPJyDt6ugJ4joihMFc8oQdbW0BCBNB8WAAAAA="
  },
  {
    description: "小唐 3 EGO",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6OkY6OHoiEUYBEgTdrS1BQAMFrCyYAAAAA=="
  },
  {
    description: "10310 血魔唐",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5Zjv6Amm0YRdyRJ2tLUFAHA0qKNgAAAA"
  },
  {
    description: "10312 憎恶唐",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5Vju6Amm0YRdyRJ2tLUFAMlznFtgAAAA"
  },
  {
    description: "10410 蜘蛛良",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AminNOxCjtiV41L2NHWFgBktKbVYAAAAA=="
  },
  {
    description: "10411 卯兔良",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AminMuxCjtiV41L2NHWFgCqqr01YAAAAA=="
  },
  {
    description: "10511 五默",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmocI+2IVxqEYXdrS1BQCwqiEgYAAAAA=="
  },
  {
    description: "10512 雷横",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmocK+2IVxqEYXdrS1BQBW+MugYAAAAA=="
  },
  {
    description: "10611 句点宝",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6Amm0YSLsQvjUA0TdrS1BQCLR1DpYAAAAA=="
  },
  {
    description: "10710 狼夫",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmsQs7p5Oi2tHR1hYAXXNafGAAAAA="
  },
  {
    description: "10711 句点夫",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmsQs7l5Oi2tHR1hYAIK/l5GAAAAA="
  },
  {
    description: "10812 惜春",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6Amm8Qv7Eqfa0dYWAG9sH5BgAAAA"
  },
  {
    description: "10913 绝望罗",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmiRM2wK/a0dYWAFeTQwZgAAAA"
  },
  {
    description: "11005 N辛",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmSRJ2wqHa0dYWABPnXvtgAAAA"
  },
  {
    description: "11111 剪刀奥",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmyRL2QRN2tLUFAEbct9xgAAAA"
  },
  {
    description: "11210 神父虫",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmKRLOhwo72toCAIMd+SxgAAAA"
  },
  {
    description: "11211 炎拳虫",
    code: "H4sIAAAAAAAACnMMdEx3BAInR2cQ5ejq6AmmKRIuhgo72toCAI9LFYhgAAAA"
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

// src/core/team-code-converter.ts
var sinnersInfo = sinners;

class TeamCodeConverter {
  #config = {
    maxBytesLength: 96,
    groupBytesLength: 23,
    groupCount: 4,
    identityBytesLength: 2,
    egoBytesLength: 4
  };
  #byteMask;
  #getSinnerIdFromByteIndex(byteIndex) {
    const trioIndex = Math.floor(byteIndex / this.#config.groupBytesLength);
    const innerTrioIndex = Math.floor(byteIndex % this.#config.groupBytesLength / 8);
    return trioIndex * Math.floor(12 / this.#config.groupCount) + innerTrioIndex + 1;
  }
  #getStartIndexFromSinnerId(sinnerId) {
    const sinnerIndex = sinnerId - 1;
    const trioIndex = Math.floor(sinnerIndex / Math.floor(12 / this.#config.groupCount));
    const innerTrioIndex = sinnerIndex % Math.floor(12 / this.#config.groupCount);
    return trioIndex * this.#config.groupBytesLength + innerTrioIndex * 8;
  }
  constructor() {
    const byteMask = [];
    const redundantStartIndex = this.#config.maxBytesLength - this.#config.maxBytesLength % this.#config.groupBytesLength;
    for (let i = 0;i < this.#config.maxBytesLength; i++) {
      const innerIndex = i % this.#config.groupBytesLength % 8;
      const mask = {
        id: this.#getSinnerIdFromByteIndex(i),
        byteType: "unknown"
      };
      if (i >= redundantStartIndex) {
        mask.byteType = "redundant";
      } else if (innerIndex < this.#config.identityBytesLength) {
        mask.byteType = "identity";
      } else if (innerIndex < this.#config.identityBytesLength + this.#config.egoBytesLength) {
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
  parse(teamCodeBase64) {
    const rawBinaryData = this.#decompressBase64(teamCodeBase64);
    return rawBinaryData;
  }
  getSinnerInfoFromByteIndex(byteIndex) {
    const sinnerId = this.#getSinnerIdFromByteIndex(byteIndex).toString();
    return sinnersInfo[sinnerId];
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
    for (let i = 0;i < this.#config.maxBytesLength; i++) {
      unitTestResult.id.push(this.#getSinnerIdFromByteIndex(i));
    }
    Object.entries(unitTestResult).map(([key, value]) => {
      console.dir({ [key]: value });
    });
    return true;
  }
}

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

// src/team-code-debugger.ts
(() => {
  const teamCodeConverter = new TeamCodeConverter;
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
    const sinnerInfo = teamCodeConverter.getSinnerInfoFromByteIndex(indexRange[0]);
    if (sinnerInfo) {
      tooltipSlices.push(`${sinnerInfo.name} ${sinnerInfo.nameRaw} (id: ${sinnerInfo.id}, startIndex: ${indexRange[0]})`);
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
            differentData: clickedElement.dataset.fieldBytes?.split(",").map((byte) => Number.parseInt(byte))
          };
          if (!clickedData.differentData) {
            return;
          }
          const startIndex = Number.parseInt(clickedData.startIndex);
          const differenceDetails = getDifferenceDetails(clickedData.differentData, startIndex);
          const displayContent = [
            [differenceDetails.standard.join(" "), "默认初始状态"].join(" "),
            [
              `<span class="display-remark">+</span><i>`,
              differenceDetails.difference.map((num) => num === 0 ? " ".repeat(8) : utils_default.getBinary(num)).join(" "),
              "</i> 差值 (二进制)"
            ].join(""),
            [
              `<div class="display-hint"><span class="display-remark">+</span><i>`,
              differenceDetails.difference.map((num) => num === 0 ? " ".repeat(8) : num.toString().padStart(8, " ")).join(" "),
              "</i> 差值 (十进制)</div>"
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
              " 点击的差异部分"
            ].join("")
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
    }
  });
  sampleList.slice(0, Math.floor(sampleList.length / 2)).map((teamCodeSample) => {
    teamDataStore.push({
      binaryData: teamCodeConverter.debugParse(teamCodeSample.code),
      description: teamCodeSample.description
    });
  });
  teamDataStore.map(compareBytes).map(renderTeamInfo);
})();
