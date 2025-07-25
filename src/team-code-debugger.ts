import { personalities as sampleList } from "../data/team-code-samples.json" with {
	type: "json",
};
import {
	type SinnerDetails,
	type SinnerInfo,
	TeamCodec,
} from "./core/team-codec";

type TeamInfo = {
	sinners: SinnerInfo[];
	description: string;
};

(() => {
	const teamCodec = new TeamCodec();
	const teamInfoStore: TeamInfo[] = [];

	function getSinnerHtml(sinnerDetails: SinnerDetails) {
		if (!sinnerDetails || !sinnerDetails.identity) {
			return;
		}
		const htmlSlices: string[] = [];
		const tooltipSlices = [];
		tooltipSlices.push(
			`${sinnerDetails.identity.name} ${sinnerDetails.identity.nameRaw} (id: ${sinnerDetails.identity.id})`,
			"",
			`${sinnerDetails.identity.title} (${sinnerDetails.identity.desc})`,
		);
		const tooltipString =
			tooltipSlices.length === 0
				? ""
				: ` title="${tooltipSlices.join("&#10;")}"`;
		htmlSlices.push(
			`<span data-limbus-sinner="${sinnerDetails.sinnerId}"
data-sinner-identity="${sinnerDetails.identity.id}"
data-sinner-egos="${Object.values(sinnerDetails.egos).map((ego) => ego?.id)}"
data-sinner-order="${sinnerDetails.order}"
${tooltipString}>${sinnerDetails.identity.name}</span>`,
		);
		return htmlSlices.join("");
	}

	function renderTeamInfo(teamInfo: TeamInfo, newTeamIndex: number) {
		const { sinners, description: teamDescription } = teamInfo;
		if (!sinners) {
			return;
		}
		const teamRowHtml = [];
		teamRowHtml.push(
			[
				`<div data-limbus-sinner-list="${newTeamIndex}">`,
				sinners
					.map((sinnerInfo) =>
						getSinnerHtml(teamCodec.loadSinnerDetails(sinnerInfo)),
					)
					.join(""),
				"</div>",
			].join(""),
		);
		teamRowHtml.unshift(
			`<div data-button-usage="copyTeamCode" title="点击复制 ${newTeamIndex + 1} 号队伍编队码">${(
				newTeamIndex + 1
			)
				.toString()
				.padStart(2, "0")}</div>`,
		);
		teamRowHtml.push(
			["<div data-team-description>", teamDescription, "</div>"].join(""),
		);
		const teamInfoContainer = document.querySelector("#limbus-team-list");
		if (!teamInfoContainer) {
			throw new Error("Team code container element not found");
		}
		const teamInfoElement = document.createElement("div");
		teamInfoElement.dataset.limbusTeam = newTeamIndex.toString();
		teamInfoElement.innerHTML = teamRowHtml.join("");
		teamInfoContainer.append(teamInfoElement);
	}

	function initApp() {
		const teamInfoContainer = document.querySelector("#limbus-team-list");
		if (!teamInfoContainer) {
			throw new Error("Team container element not found");
		}

		const importButtonElement = document.querySelector("button#load-team-code");
		if (importButtonElement) {
			importButtonElement.addEventListener("click", async () => {
				const teamCodeInClipboard = await navigator.clipboard.readText();
				if (!teamCodeInClipboard || teamCodeInClipboard === "") {
					return;
				}
				const sinners = teamCodec.decode(teamCodeInClipboard);
				if (!sinners || !Array.isArray(sinners) || sinners.length === 0) {
					alert(
						`载入剪贴板中的编队码失败，请检查格式是否正确：\n${teamCodeInClipboard}`,
					);
					return;
				}
				const teamInfo: TeamInfo = {
					sinners,
					description: new Date().toLocaleTimeString(),
				};
				teamInfoStore.push(teamInfo);
				renderTeamInfo(teamInfo, teamInfoStore.length - 1);
				alert("已载入剪贴板中的编队码");
			});
		}

		const detailsDisplay = document.querySelector("[data-sinner-details]");
		if (detailsDisplay) {
			teamInfoContainer.addEventListener("click", (event) => {
				const clickedElement = event.target as HTMLElement;
				if (clickedElement.dataset.buttonUsage === "copyTeamCode") {
					if (clickedElement.parentElement?.dataset.limbusTeam) {
						const teamIndex = Number.parseInt(
							clickedElement.parentElement.dataset.limbusTeam,
						);
						const { sinners } = teamInfoStore[teamIndex] ?? {};
						let teamCodeBase64 = `检索 ${teamIndex + 1} 号队伍编队码失败`;
						if (sinners) {
							teamCodeBase64 = teamCodec.encode(sinners) ?? teamCodeBase64;
						}
						navigator.clipboard.writeText(teamCodeBase64);
						console.info(
							`已复制 ${teamIndex + 1} 号队伍编队码:`,
							teamCodeBase64,
						);
						return;
					}
				} else if (clickedElement.dataset.limbusSinner) {
					const clickedData = {
						sinnerId: clickedElement.dataset.limbusSinner
							? Number.parseInt(clickedElement.dataset.limbusSinner)
							: 0,
						identityId: clickedElement.dataset.sinnerIdentity
							? Number.parseInt(clickedElement.dataset.sinnerIdentity)
							: 0,
						order: clickedElement.dataset.sinnerOrder
							? Number.parseInt(clickedElement.dataset.sinnerOrder)
							: 0,
						egos: clickedElement.dataset.sinnerEgos
							?.split(",")
							.map((egoId) => (egoId ? Number.parseInt(egoId) : undefined)),
					};
					const sinnerDetails = teamCodec.loadSinnerDetails({
						sinnerId: clickedData.sinnerId,
						identityId: clickedData.identityId,
						order: clickedData.order,
						egos: {
							ZAYIN: clickedData.egos?.[0] ?? 0,
							TETH: clickedData.egos?.[1],
							HE: clickedData.egos?.[2],
							WAW: clickedData.egos?.[3],
							ALEPH: clickedData.egos?.[4],
						},
					});
					if (!sinnerDetails.identity) {
						console.error({ msg: "sinner not found", sinnerDetails });
						return;
					}
					const displayContent: string[] = [
						`<div data-display-identity style="background-image: url('HoverBorder.png'), url('Tier3.png'), url('identities/${sinnerDetails.identity.id}_normal_info.avif')">`,
						`<div title="[${sinnerDetails.sinnerId}] ${sinnerDetails.identity.nameRaw}">${sinnerDetails.identity.name}</div>`,
						`<div title="${sinnerDetails.identity.titleRaw}\n\n[${sinnerDetails.identity.id}] ${sinnerDetails.identity.desc}">`,
						`${sinnerDetails.identity.title.replaceAll("\n", "<br>")}</div>`,
						`</div>`,
					];
					const extraInfo: string[] = [
						"<div>",
						"<div data-display-egos>",
						...Object.entries(sinnerDetails.egos).map(
							([egoLevel, egoDetails]) =>
								egoDetails
									? `<div data-display-ego-level="${egoLevel}" data-ego-id="${egoDetails.id}"
title="<${egoLevel}>\n${egoDetails.nameRaw}\n[${egoDetails.id}] ${egoDetails.desc}">${egoDetails.name}</div>`
									: "",
						),
						"</div>",
						`<div>(出战顺序: ${sinnerDetails.order})</div>`,
						"</div>",
					];
					detailsDisplay.innerHTML = `${displayContent.join("")}${extraInfo.join("")}`;
				}
			});
		}
	}

	initApp();
	Object.assign(window, {
		debugTeamCode: () => {
			return teamCodec.test();
		},
	});

	// console.table(sampleList);
	sampleList.map((teamCodeSample) => {
		teamInfoStore.push({
			sinners: teamCodec.decode(teamCodeSample.code),
			description: teamCodeSample.description,
		});
	});
	teamInfoStore.map(renderTeamInfo);
})();
