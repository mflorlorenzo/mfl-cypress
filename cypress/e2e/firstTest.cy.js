import { navigateTo } from "../support/page_objects/navigationPage"
import { selectElement } from "../support/page_objects/selectElementPage"
import { onbuttonsLayoutsPage } from "../support/page_objects/buttonsPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"

context('mflorenzo cypress framework', () => {
  beforeEach(() => {
    cy.openHomePage()
  })
  
  describe('Elements Suite', () => {

    it.only('Buttons test', () => {
      navigateTo.elementsPage()
      selectElement.buttons()
      onbuttonsLayoutsPage.clickButtons()
      get('#doubleClickMessage').should('contains', 'You have done a double click')
      get('#rightClickMessage').should('contains', 'You have done a right click')
    })

  })

  describe('Forms Suite', () => {
  
    it('Practice Form', () => {
      navigateTo.formsPage()
      selectElement.practiceForm()
      onFormLayoutsPage.submitStudentRegistrationForm('Florencia')
    })

  })

})
