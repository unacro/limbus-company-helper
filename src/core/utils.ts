const Utils = {
	round(num: number) {
		return Math.round((num + Number.EPSILON) * 100) / 100;
	},

	ceil(num: number) {
		return Math.ceil(this.round(num));
	},

	getBinary(
		num: number,
		{ hasPrefix = false, padLength = 8, separator = "", separation = 4 } = {},
	) {
		if (num < 0) {
			return num.toString(2).padStart(padLength, " ");
		}
		let binaryString = num.toString(2).padStart(padLength, "0");
		if (separator && typeof separator === "string" && separator !== "") {
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

	getBinaryFromBase64(asciiString: string) {
		const binaryString = atob(asciiString);
		const rawBytes = new Uint8Array(binaryString.length);
		for (let i = 0; i < binaryString.length; i++) {
			rawBytes[i] = binaryString.charCodeAt(i);
		}
		return rawBytes;
	},

	getBase64FromBinary(binary: string | Uint8Array) {
		if (typeof binary === "string" && binary.length % 8 !== 0) {
			console.error("不是有效的二进制字符串");
			return;
		}
		let binaryBytes = null;
		// const binaryBytes = new TextEncoder().encode("UTF-8 字符");
		if (typeof binary === "string") {
			binaryBytes = new Uint8Array(Math.ceil(binary.length / 8));
			for (let i = 0; i < binaryBytes.length; i++) {
				const byte = Number.parseInt(binary.slice(i * 8, i * 8 + 8), 2);
				if (Number.isNaN(byte)) {
					console.error(
						`将目标二进制字符串 ${binary} 的切片 ${binary.slice(i * 8, i * 8 + 8)} 转换为字节失败`,
					);
					return;
				}
				binaryBytes[i] = byte;
			}
		} else if (binary instanceof Uint8Array) {
			binaryBytes = new Uint8Array(binary.length);
			binaryBytes.set(binary);
		}
		if (!binaryBytes) {
			console.error({ msg: "读取要编码的二进制数据失败", binary });
			return;
		}
		// 手写 base64 编码 btoa()
		const base64CharSet =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		const asciiCharList = [];
		for (let i = 0; i < binaryBytes.length; i += 3) {
			const [byte1, byte2, byte3] = [
				binaryBytes[i],
				binaryBytes[i + 1],
				binaryBytes[i + 2],
			] as [number, number, number];
			const enc1 = byte1 >> 2;
			const enc2 = ((byte1 & 0b11) << 4) | (byte2 >> 4);
			const enc3 = ((byte2 & 0b1111) << 2) | (byte3 >> 6);
			const enc4 = byte3 & 0b111111;
			asciiCharList.push(
				[
					base64CharSet.charAt(enc1),
					base64CharSet.charAt(enc2),
					Number.isNaN(byte2) ? "" : base64CharSet.charAt(enc3),
					Number.isNaN(byte3) ? "" : base64CharSet.charAt(enc4),
					Number.isNaN(byte2) ? "==" : Number.isNaN(byte3) ? "=" : "",
				].join(""),
			);
		}
		const base64String = asciiCharList.join("");
		return base64String;
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
