module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testMatch: ["<rootDir>/utils/**/*.test.js"],
};
