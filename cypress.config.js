const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080/',
    // sets cypress' automatic video recording to false when cypress is run
    video: false
  }
});
