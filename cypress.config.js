const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: null,
    experimentalSourceRewriting: true
  }
});
