import { onPracticeHomePage } from "../support/page_objects/practiceHomePage"
import selectors from "../fixtures/index.json"
import { userLoginPage } from "../support/page_objects/userLoginPage"

context('Automation Practice Web', () => {

  describe.skip('User info', {tags: 'smoke'}, () => {
    beforeEach(() => {
      cy.openHomePage()
    })

    it('Login and logout', () => {
      userLoginPage.login()
      cy.get(selectors.userPageHeadingClass).invoke('text').should('contains', 'My account')
      cy.get(selectors.logoutButton).should('be.visible')
      userLoginPage.logout()
      cy.get(selectors.userPageHeadingClass).invoke('text').should('contains', 'Authentication')
    })

    it('My addresses: check, modify, delete, create info', () => {

    })

  })

  describe('HomePage', {tags: 'regression'}, () => {
    beforeEach(() => {
      cy.openHomePage()
    })
    
    it('Logo', () => {
      cy.get(selectors.headerLogoId).should('be.visible').should('have.attr', 'href').and('contain', 'http://automationpractice.com/')
      cy.get(selectors.headerLogoClass).should('have.attr', 'src', 'http://automationpractice.com/img/logo.jpg')
    })

  })

})
