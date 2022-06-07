import selectors from "../../fixtures/index.json"

export class UserLoginPage{

  login(email, pass){
    cy.get(selectors.loginButton).click()
    cy.get(selectors.emailTextBox).type(email)
    cy.get(selectors.passTextBox).type(pass)
    cy.get(selectors.submitLoginButton).click()
  }

  logout(){
    cy.get(selectors.logoutButton).click()
  }

}

export const userLoginPage = new UserLoginPage()
