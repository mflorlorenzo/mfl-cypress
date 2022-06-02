export class FormLayoutsPage{

  submitStudentRegistrationForm(name, lastname, email){
    cy.get('#firstName').type(name)
    cy.get('#lastName').type(lastname)
    cy.get('#userEmail').type(email)
    cy.get('[type="radio"]').check('Other')
    cy.get('#userNumber').type('1234567890')
    //datepicker
    //subjets
    cy.get('[type="checkbox"]').check('Sports')
    //submit file
    cy.get('#currentAddress').type('false Avenue, 123')
    //state
    //city
    cy.get('#submit').click()
  }

}

export const onFormLayoutsPage = new FormLayoutsPage()