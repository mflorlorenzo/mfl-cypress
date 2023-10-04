const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 768,
  viewportWidth: 1024,
  video: false,
  retries: {
    runMode: 2,
    openMode: 0
  },
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/report/mochawesome-report"
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://thecatsite.com/',
    excludeSpecPattern: '**/examples/*'
  },
})
