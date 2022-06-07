import { onPracticeHomePage } from "../support/page_objects/practiceHomePage"
import selectors from "../fixtures/index.json"

context('Automation Practice Web', () => {

  describe('User info', () => {
    beforeEach(() => {
      cy.openHomePage()
    })

    it('Login and logout', () => {
      onPracticeHomePage.login('flor@kryptomon.co', 'automation12345')
      cy.get(selectors.accountClass).invoke('text').should('contains', 'Flor Automation')
      cy.get('.logout').should('be.visible')
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
