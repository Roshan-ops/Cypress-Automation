export class registerPage{


    weblocators={
    signup:'Sign Up',
    firstname:'#signupStaffDetailForm-firstName',
    Middlename:'#signupStaffDetailForm-middleName',
    Lastname:'#signupStaffDetailForm-lastName',
    Dob:'#signupStaffDetailForm-dateOfBirth'
    }
    openURL(){
        cy.visit(Cypress.env('URL'))
    }


clickbutton(){
    cy.contains(this.weblocators.signup).click()
}
enterfirstname(FName){
    cy.get(this.weblocators.firstname).type(FName)
}
entermiddlename(MName){
    cy.get(this.weblocators.Middlename).type(MName)
}
enterlastname(LName){
    cy.get(this.weblocators.Lastname).type(LName)
}
clickdob(){
    cy.get(this.weblocators.Dob).click()
}

}
