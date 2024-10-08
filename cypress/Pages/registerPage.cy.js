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
    othergender:'#signupStaffDetailForm-otherGender',
    next:'#signupStaffDetailForm-Next',
    countries:'input[placeholder="Select Country"]',
    countrysecondOption:'#mat-autocomplete-1',
    province:'input[placeholder="Select Province/State/Region"]',
    provinceOption:'#mat-autocomplete-3',
    city:'input[placeholder="Select City"]',
    cityoption:'#mat-autocomplete-4',
    Address1:'#addressDetail-addressLine1',
    PostCode:"#addressDetail-zipCode",
    Living:'label[for="addressDetail-addressYear"]',
    howLongDropdown:"#addressDetail-addressYear-panel",
    Continue:'button[type="submit"]',
    Kinfirstname:"#staffNextOfKinForm-firstName",
    Kinlastname:"#staffNextOfKinForm-lastName",
    Kincountry:"#mat-input-34",
    kincondropdown:"#mat-autocomplete-2",
    Kinprovince:"#mat-input-44",
    kinprovdropdown:"#mat-autocomplete-7",
    kincity: "#mat-input-46",
    kincitydropdown:"#mat-autocomplete-8",
    kinaddress:'label[for="staffNextOfKinForm-addressLine1"]',
    kinmobile:'#staffNextOfKinForm-phoneNumber',
    kinrelation:'#staffNextOfKinForm-relationshipToKIN',
    kinemail:'#staffNextOfKinForm-email'
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
choosecountryFirstPage(Country){
    cy.get(this.weblocators.choosecountry).eq(0).type(Country)
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
clikcbutton(){
cy.get(this.weblocators.next).click({ force: true })
}

choosecountrySecondPage(countries){
        cy.get(this.weblocators.countries).first().type(countries, { force: true });
        cy.wait(2000);
        cy.get(this.weblocators.countrysecondOption).contains(countries).scrollIntoView() .should('be.visible').click({ force: true });
    }

    chooseprovinceSecondPage(province){
        cy.wait(2000);


        // if (province) {
        //     cy.wait(2000);
        //     cy.get(this.weblocators.province).first().type(province, { force: true });
        //     cy.get(this.weblocators.provinceOption).contains(province).click();
        // } else {
        //     throw new Error("Province value is undefined. Please provide a valid province.");
        // }
        cy.get(this.weblocators.province).first().type(province ,{ force: true });
        cy.get(this.weblocators.provinceOption).contains(province).scrollIntoView().click();
    }
    choosecitySecondPage(city){
       
        cy.get(this.weblocators.city).first().type(city ,{ force: true });

        cy.get(this.weblocators.cityoption,{ timeout: 15000 }).invoke('show').should('be.visible').contains(city).scrollIntoView().click({ force: true }).then(($el)=>{
            if ($el.length===0){
                cy.wait(1000);
                cy.get(this.weblocators.cityoption).contains(city).click({ force: true });

            }
        }) ;
    }
    enteradress(address){
        cy.get(this.weblocators.Address1).type(address);

    }

    enterpostal(postCode){
        cy.get(this.weblocators.PostCode).type(postCode);

    }
    
    selectDuration(duration) {
        cy.get(this.weblocators.Living).click( { force: true });
        const validDurations = ['3 Years', 'More than 3 years'];
        const randomDuration = validDurations[Cypress._.random(0, validDurations.length - 1)];

        cy.get(this.weblocators.howLongDropdown).contains(randomDuration , { timeout: 10000 }).should('be.visible').click({ force: true });

        // Optionally, assert that the correct option was selected
        cy.get(this.weblocators.howLongDropdown).should('contain', randomDuration);
    }
    clikccontinue(){
        cy.get(this.weblocators.Continue).should('be.visible').click({ force: true, multiple: true });
        }

    entername(Name){
            cy.get(this.weblocators.Kinfirstname).type(Name)
        }

        enterlast(Last){
            cy.get(this.weblocators.Kinlastname).type(Last)
        }
        

}
