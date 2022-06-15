const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 768,
  viewportWidth: 1024,
  video: false,
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://automationpractice.com/',
    excludeSpecPattern: '**/examples/*'
  },
})
