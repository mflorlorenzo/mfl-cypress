import selectors from "../../fixtures/index.json"

export class PracticeHomePage{

  login(email, pass){
    cy.get(selectors.loginButton).click()
    cy.get(selectors.emailTextBox).type(email)
    cy.get(selectors.passTextBox).type(pass)
    cy.get(selectors.submitLoginButton).click()
  }

}

export const onPracticeHomePage = new PracticeHomePage()
