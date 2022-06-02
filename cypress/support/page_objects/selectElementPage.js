export class SelectElementPage{

  buttons(){
    cy.get('.btn').contains('Buttons').click()
  }

  practiceForm(){
    cy.get('.btn').contains('Practice Form').click()
  }

}

export const selectElement = new SelectElementPage()