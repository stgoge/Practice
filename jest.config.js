const { defaults } = require("jest-config");

/** @type {import('jest').Config} */
const config = {
  bail: 1,
  testMatch: ["<rootDir>/dist/**/*.test.js"],
};

module.exports = config;
