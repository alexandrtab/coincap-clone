const { defaults } = require("jest-config");

module.exports = {
	preset: "ts-jest/presets/js-with-ts",
	testEnvironment: "jsdom",
	moduleFileExtensions: [...defaults.moduleFileExtensions, "*.test.ts", "*.test.js"],
	"transform": {
		"^.+\\.tsx?$": "esbuild-jest"
	}
};
