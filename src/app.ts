import { enkephalin } from "./index";
import NotionClient from "./scripts/notion";
import OfficialDataExporter from "./scripts/official-data-exporter";

async function syncNotion(dataExporter: OfficialDataExporter) {
	const notion = new NotionClient({
		databaseId: process.env.NOTION_DATABASE_ID ?? "",
		apiKey: process.env.NOTION_API_KEY ?? "",
	});
	await notion.syncDatabase(dataExporter.thirdRarityPersonalities);
}

async function main() {
	const steamPath = process.env.STEAM_INSTALL_PATH; // `${process.env.APPDATA}/steam`;
	if (!steamPath) {
		return;
	}
	const dataExporter = new OfficialDataExporter(steamPath);
	await dataExporter.init();

	const command = process.argv[2];
	switch (command) {
		case "start": {
			enkephalin.test();
			break;
		}

		case "sync": {
			syncNotion(dataExporter);
			break;
		}

		default: {
			dataExporter.test();
		}
	}
}

main();
