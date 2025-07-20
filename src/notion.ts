function isValidString(targetStr: unknown): targetStr is string {
	return !!targetStr && typeof targetStr === "string" && targetStr !== "";
}

type NotionConfigOptions = {
	databaseId: string;
	apiKey: string;
};

/**
 * @see https://developers.notion.com/reference/user
 */
type NotinoPartialUser = {
	object: "user";
	id: string;
	type?: "person" | "bot";
	name?: string;
	avatar_url?: string;
};

/**
 * @see https://developers.notion.com/reference/file-object
 */
type NotionFileObject = {
	type: "file" | "file_upload" | "external";
	file?: { url: string; expiry_time: string };
	file_upload?: { id: string };
	external?: { url: string };
};

// https://developers.notion.com/reference/page
type NotionPageProperties = {
	[key: string]: {
		id: string;
		name: string;
		type:
			| "checkbox"
			| "created_by"
			| "created_time"
			| "date"
			| "email"
			| "files"
			| "formula"
			| "last_edited_by"
			| "last_edited_time"
			| "multi_select"
			| "number"
			| "people"
			| "phone_number"
			| "relation"
			| "rich_text"
			| "rollup"
			| "select"
			| "status"
			| "title"
			| "url";
		title?: {
			type: "text";
			text: {
				content: string;
				link: null;
			};
			annotations: {
				bold: false;
				italic: false;
				strikethrough: false;
				underline: false;
				code: false;
				color: string;
			};
			plain_text: string;
			href: null;
		};
		rich_text?: [
			{
				type: "text";
				text: {
					content: string;
					link: null;
				};
				annotations: {
					bold: false;
					italic: false;
					strikethrough: false;
					underline: false;
					code: false;
					color: string;
				};
				plain_text: string;
				href: null;
			},
		];
		number?: number;
		select?: {
			id: string;
			name: string;
			color: string;
		};
	};
};

/**
 * @see https://developers.notion.com/reference/page
 */
type NotionPageObject = {
	object: "page";
	id: string; // UUIDv4
	created_time?: string; // ISO_8601
	created_by?: NotinoPartialUser;
	last_edited_time?: string;
	last_edited_by?: NotinoPartialUser;
	archived?: boolean;
	in_trash?: boolean;
	icon?:
		| NotionFileObject
		| {
				type: "emoji";
				emoji: string;
		  };
	cover?: NotionFileObject;
	properties?: NotionPageProperties;
	parent?: { type: "database_id"; database_id: string };
	url?: string;
	public_url?: string;
};

type NotionApiResponse = {
	object?: "list";
	results?: NotionPageObject[];
	next_cursor?: string;
	has_more?: boolean;
	type?: string;
	page_or_database?: object;
};

type PersonalityObject = {
	id: number;
	title: string;
	titleRaw: string;
	name: string;
	nameWithTitle: string;
	desc: string;
};

class NotionClient {
	#databaseId: string;
	#apiKey: string;
	#propertiesKey: Record<"id" | "title" | "titleRaw" | "name", string>;

	constructor({ databaseId, apiKey }: NotionConfigOptions) {
		if (!isValidString(databaseId) || !isValidString(apiKey)) {
			throw new Error("Database ID and API Key are required");
		}
		this.#databaseId = databaseId;
		this.#apiKey = apiKey;
		this.#propertiesKey = {
			id: "人格 ID",
			title: "人格名称",
			titleRaw: "人格原名",
			name: "罪人",
		};
	}

	async queryDatabase(): Promise<
		(
			| {
					page_id: string;
					id: number;
					title: string;
					titleRaw: string;
					name: string;
			  }
			| undefined
		)[]
	> {
		const apiUrl = `https://api.notion.com/v1/databases/${this.#databaseId}/query`;
		const response = await fetch(apiUrl, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${this.#apiKey}`,
				"Notion-Version": "2022-06-28",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				// filter: {
				// 	or: [
				// 		{
				// 			property: "伤害属性",
				// 			multi_select: { contains: "烧伤" },
				// 		},
				// 	],
				// },
			}),
		});
		if (!response.ok) {
			const errorResult = await response.json();
			console.error(errorResult);
			throw new Error("Failed to query database");
		}
		const { results: queryResults } =
			(await response.json()) as NotionApiResponse;
		if (!queryResults) {
			return [];
		}
		return queryResults
			.map((result) => {
				const { properties } = result;
				if (!properties) {
					return;
				}
				return {
					page_id: result.id,
					id: properties[this.#propertiesKey.id]?.number ?? -1,
					title:
						properties[this.#propertiesKey.title]?.rich_text?.[0]?.text
							.content ?? "",
					titleRaw:
						properties[this.#propertiesKey.titleRaw]?.rich_text?.[0]?.text
							.content ?? "",
					name: properties[this.#propertiesKey.name]?.select?.name ?? "",
				};
			})
			.filter(Boolean);
	}

	/**
	 * @see https://developers.notion.com/reference/patch-page
	 */
	async updatePageProperties(pageId: string, properties: unknown) {
		const apiUrl = `https://api.notion.com/v1/pages/${pageId}`;
		const updatedResponse = await fetch(apiUrl, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${this.#apiKey}`,
				"Content-Type": "application/json",
				"Notion-Version": "2022-06-28",
			},
			body: JSON.stringify({
				properties,
			}),
		});
		if (!updatedResponse.ok) {
			const errorResult = await updatedResponse.json();
			console.error(errorResult);
			return false;
		}
		return true;
	}

	async syncDatabase(latestData: PersonalityObject[]) {
		const remoteData = await this.queryDatabase();
		for (const remotePersonality of Object.values(remoteData)) {
			if (!remotePersonality) {
				continue;
			}
			const localPersonality = latestData.find(
				(personality) => personality.id === remotePersonality.id,
			);
			if (
				localPersonality &&
				(localPersonality.title !== remotePersonality.title ||
					localPersonality.titleRaw !== remotePersonality.titleRaw ||
					localPersonality.name !== remotePersonality.name)
			) {
				const newProperties = {
					[this.#propertiesKey.title]: {
						rich_text: [{ text: { content: localPersonality.title } }],
					},
					[this.#propertiesKey.titleRaw]: {
						rich_text: [{ text: { content: localPersonality.titleRaw } }],
					},
					[this.#propertiesKey.name]: {
						select: { name: localPersonality.name },
					},
				};
				const updateSucceed = await this.updatePageProperties(
					remotePersonality.page_id,
					newProperties,
				);
				console.table({
					remotePersonality: {
						...remotePersonality,
						title: remotePersonality.title.replaceAll("\n", "\\n"),
						titleRaw: remotePersonality.titleRaw.replaceAll("\n", "\\n"),
					},
					localPersonality: {
						...localPersonality,
						title: localPersonality.title.replaceAll("\n", "\\n"),
						titleRaw: localPersonality.titleRaw.replaceAll("\n", "\\n"),
					},
				});
				if (updateSucceed) {
					console.log("差异数据更新成功");
				} else {
					console.warn("差异数据更新失败");
				}
			}
		}
		console.info("同步最新人格数据到 Notion 数据库完成");
	}
}

export default NotionClient;
