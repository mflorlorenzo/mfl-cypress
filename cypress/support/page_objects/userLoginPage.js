import selectors from "../../fixtures/index.json"

export class UserLoginPage{

  login(){
    cy.get(selectors.loginButton).click()
    cy.get(selectors.emailTextBox).type(Cypress.env('username'))
    cy.get(selectors.passTextBox).type(Cypress.env('password'))
    cy.get(selectors.submitLoginButton).click()
  }

  logout(){
    cy.get(selectors.logoutButton).click()
  }

}

export const onUserLoginPage = new UserLoginPage()
