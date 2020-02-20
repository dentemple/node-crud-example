module.exports = {
  moduleFileExtensions: ["ts", "js", "json", "node"],
  setupFiles: [`<rootDir>/config/loadershim.js`],
  setupFilesAfterEnv: ["<rootDir>/config/setupTests.js"],
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  testURL: `http://localhost`,
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.ts$"
};
