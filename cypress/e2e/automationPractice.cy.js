import { onPracticeHomePage } from "../support/page_objects/practiceHomePage"
import selectors from "../fixtures/index.json"

context('Automation Practice Web', () => {

  describe('User info', () => {
    beforeEach(() => {
      cy.openHomePage()
    })

    it('Login and logout', () => {
      onPracticeHomePage.login('flor@kryptomon.co', 'automation12345')
      cy.get(selectors.userPageHeadingClass).invoke('text').should('contains', 'My account')
      cy.get(selectors.logoutButton).should('be.visible')
      onPracticeHomePage.logout()
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

  describe('Orders', () => {

    it('Place an order', () => {

    })

    it('Delete an existing order', () => {

    })

  })

})
