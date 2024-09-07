export class registerPage{


    weblocators={
    signup:'Sign Up',
    firstname:'#signupStaffDetailForm-firstName',
    Middlename:'#signupStaffDetailForm-middleName',
    Lastname:'#signupStaffDetailForm-lastName',
    Dob:'#signupStaffDetailForm-dateOfBirth',
    chooseMonthYearBtn: 'button[aria-label="Choose month and year"]',
    calendarContent: '.mat-calendar-content',
    calendarBody: '.mat-calendar-body',
    overlayBackdrop: '.cdk-overlay-backdrop',
    email:'#signupStaffDetailForm-email',
    conemail:'#signupStaffDetailForm-confirmEmail',
    choosecountry: 'input[placeholder="Select Country of Birth"]',
    countryOption: '#mat-autocomplete-0',
    mobile:'#signupStaffDetailForm-mobileNo',
    gender:'#signupStaffDetailForm-gender',
    genderOptions: '#signupStaffDetailForm-gender-panel',
    othergender:'#signupStaffDetailForm-otherGender'
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
    cy.get(this.weblocators.Dob).click({ force: true });
}

selectRandomYear() {
    cy.get(this.weblocators.chooseMonthYearBtn).click();
    cy.get(this.weblocators.calendarContent).within(() => {
        cy.get('.mat-calendar-body-cell-content').then(years => {
            const randomYearIndex = Cypress._.random(0, years.length - 1);
            cy.wrap(years[randomYearIndex]).click();
        });
    });
}

selectRandomMonth() {
    cy.get(this.weblocators.calendarContent).within(() => {
        cy.get('.mat-calendar-body-cell-content').then(months => {
            const randomMonthIndex = Cypress._.random(0, months.length - 1);
            cy.wrap(months[randomMonthIndex]).click();
        });
    });
}

selectRandomDay() {
    cy.get(this.weblocators.calendarBody).within(() => {
        cy.get('.mat-calendar-body-cell-content').then(days => {
            const randomDayIndex = Cypress._.random(0, days.length - 1);
            cy.wrap(days[randomDayIndex]).click();
        });
    });
} 
enteremail(Email){
    cy.get(this.weblocators.email).type(Email)
}
enterconemail(Email){
    cy.get(this.weblocators.conemail).type(Email)
}
choosecountry(Country){
    cy.get(this.weblocators.choosecountry).type(Country)
    cy.get(this.weblocators.countryOption).contains(Country).click();

}
entermobile(Mobile){
    cy.get(this.weblocators.mobile).type(Mobile)
}
selectRandomGender(){
    cy.get(this.weblocators.gender).click()
    const genders = ['Male', 'Female', 'Other'];
    const randomGender = genders[Cypress._.random(0, genders.length - 1)];
    cy.get(this.weblocators.genderOptions).contains(randomGender).click();
    if (randomGender === 'Other') {
        cy.get(this.weblocators.othergender)
          .should('be.visible')
          .type('Non-binary');
    }
}
}
