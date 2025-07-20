import NotionClient from "./notion";
import OfficialDataExporter from "./official-data-exporter";

async function main() {
	const steamPath = process.env.STEAM_INSTALL_PATH; // `${process.env.APPDATA}/steam`;
	if (!steamPath) {
		return;
	}
	const dataExporter = new OfficialDataExporter(steamPath);
	await dataExporter.init();
	// dataExporter.test();

	const notion = new NotionClient({
		databaseId: process.env.NOTION_DATABASE_ID ?? "",
		apiKey: process.env.NOTION_API_KEY ?? "",
	});
	await notion.syncDatabase(dataExporter.thirdRarityPersonalities);
}

main();
