export class NavigationPage{

  elementsPage(){
    cy.get('.card').contains('Elements').click()
  }

  formsPage(){
    cy.get('.card').contains('Forms').click()
  }

}

export const navigateTo = new NavigationPage()