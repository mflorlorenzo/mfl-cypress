export class Utility {
  getBaseUrl() {
    let envi = Cypress.env('ENV')
    switch (envi){
      case 'prod':
        return "http://automationpractice.com/"
      case 'staging':
        return "https://google.com/"
      default:
        return "/"
    }
  }
}
