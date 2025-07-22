import { expect, test } from "bun:test";
import { TeamCodeConverter } from "../src/core/team-code-converter";

const teamCodeConverter = new TeamCodeConverter();

test("TeamCodeConverter", () => {
	expect(teamCodeConverter.test()).toBeTrue();
});
