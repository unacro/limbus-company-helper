const Utils = {
	round(num: number) {
		return Math.round((num + Number.EPSILON) * 100) / 100;
	},

	ceil(num: number) {
		return Math.ceil(this.round(num));
	},

	getBinary(num: number, hasPrefix = false, separator = "", separation = 4) {
		if (num < 0) {
			return num.toString(2).padStart(8, " ");
		}
		let binaryString = num.toString(2).padStart(8, "0");
		if (separator && separator !== "") {
			binaryString = binaryString.replace(
				new RegExp(`\\B(?=(\\d{${separation}})+$)`, "g"),
				separator,
			);
		}
		return hasPrefix ? `0b${binaryString}` : binaryString;
	},

	isValidArray<T>(targetArray: T[] | null | undefined): targetArray is T[] {
		return (
			!!targetArray && Array.isArray(targetArray) && targetArray.length > 0
		);
	},

	hasIntersection<T, U extends T>(
		templateArray: T[],
		targetArray: U[],
	): boolean {
		if (
			[templateArray, targetArray].some((array) => !this.isValidArray(array))
		) {
			return false;
		}
		const uniqueSet = new Set(targetArray);
		return templateArray.some((element) => uniqueSet.has(element as U));
	},

	async readJsonFile(filepath: string) {
		const file = Bun.file(filepath);
		// 提前检查 否则即便使用 try-catch 也捕获不到文件不存在的 **同步错误**
		if (!(await file.exists())) {
			console.error(`File not found: ${filepath}\n`);
			return {};
		}
		try {
			return await file.json();
		} catch (error) {
			console.error(error);
		}
		return {};
	},
};

export default Utils;
