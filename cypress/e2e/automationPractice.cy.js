import { onPracticeHomePage } from "../support/page_objects/practiceHomePage"
import selectors from "../fixtures/index.json"
import { userLoginPage } from "../support/page_objects/userLoginPage"

context('Automation Practice Web', () => {

  describe('User info', () => {
    beforeEach(() => {
      cy.openHomePage()
    })

    it.only('Login and logout', () => {
      userLoginPage.login()
      cy.get(selectors.userPageHeadingClass).invoke('text').should('contains', 'My account')
      cy.get(selectors.logoutButton).should('be.visible')
      userLoginPage.logout()
      cy.get(selectors.userPageHeadingClass).invoke('text').should('contains', 'Authentication')
    })

    it('My addresses: check info', () => {

    })

    it('My addresses: Modify info', () => {

    })

    it('My addresses: Delete info', () => {

    })

    it('My addresses: Create new info', () => {

    })

  })

  describe('HomePage', () => {
    beforeEach(() => {
      cy.openHomePage()
    })
    
    it('Logo', () => {
      cy.get(selectors.headerLogoId).should('be.visible').should('have.attr', 'href').and('contain', 'http://automationpractice.com/')
      cy.get(selectors.headerLogoClass).should('have.attr', 'src', 'http://automationpractice.com/img/logo.jpg')
    })

  })

})
