export class ButtonsLayoutPage{

  clickButtons(){
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#rightClickBtn').rightclick()
    cy.get('#KeA7o').click()
  }

}

export const onbuttonsLayoutsPage = new ButtonsLayoutPage()