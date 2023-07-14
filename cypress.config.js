const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // This registers a log task as seen in the Cypress docs for cy.task as well as a table task for sending tabular data to the terminal.
    setupNodeEvents (on, config) {
      on('task', {
        log (message) {
          console.log(message)
          return null
        },
        table (message) {
          console.table(message)
          return null
        }
      })
    },
    baseUrl: 'http://localhost:8080/',
    // sets cypress' automatic video recording to false when cypress is run
    video: false

  }
}
);
