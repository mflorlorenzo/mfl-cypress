export class Utility {
  getBaseUrl() {
    let envi = Cypress.env('ENV')
    switch (envi){
      case 'prod':
        return "http://automationpractice.com/"
      case 'stage':
        return "https://google.com/"
      default:
        return "/"
    }
  }
}
