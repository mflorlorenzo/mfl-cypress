const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 768,
  viewportWidth: 1024,
  retries: {
    runMode: 2,
    openMode: 0
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    charts: true,
    embeddedScreenshots: true,
    videoOnFailOnly: true,
    inlineAssets: false,
    saveAllAttempts: true,
    overwrite: true,
    reportFilename: "report-[datetime]",
    timestamp: "longDate"
  },
  e2e: {
    baseUrl: 'https://thecatsite.com/',
    excludeSpecPattern: '**/examples/*',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      return require('./cypress/plugins/index.js')(on, config)
    }
  },
})
