import { navigateTo } from "../support/page_objects/navigationPage"
import { selectElement } from "../support/page_objects/selectElementPage"
import { onbuttonsLayoutsPage } from "../support/page_objects/buttonsPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"

context('DemoQA tool web', () => {

  describe('Elements Suite', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/')
    })

    it('Buttons test', () => {
      navigateTo.elementsPage()
      selectElement.buttons()
      onbuttonsLayoutsPage.clickButtons()
      get('#doubleClickMessage').should('contains', 'You have done a double click')
      get('#rightClickMessage').should('contains', 'You have done a right click')
      get('#rightClickMessage').should('contains', 'You have done a dynamic click')
    })

    it('Radio buttons', () => {
      //TODO
      navigateTo.elementsPage()
      selectElement.radioButtons() //TODO
      cy.get('.custom-radio').contains("Yes").check()
      get('.mt-3').should('contains', 'You have selected')
      get('.text-success').should('contains', 'Yes')
    })

  })

  describe('Forms Suite', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/')
    })

    it('Practice Form', () => {
      navigateTo.formsPage()
      selectElement.practiceForm()
      onFormLayoutsPage.submitStudentRegistrationForm('Florencia')
    })

  })

})
