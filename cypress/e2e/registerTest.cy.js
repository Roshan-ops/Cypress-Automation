import { registerPage } from "./../Pages/registerPage.cy";

const registerObj = new registerPage();

describe('Kiibank Automation', () => {

    it('Register flow', () => {
        cy.fixture('staffs.json').then((staff) => {
            registerObj.openURL();
            registerObj.clickbutton();           
            registerObj.enterfirstname(staff.firstName);
            registerObj.entermiddlename(staff.middleName);
            registerObj.enterlastname(staff.lastName);
            registerObj.clickdob();
            registerObj.selectRandomYear();
            registerObj.selectRandomMonth();
            registerObj.selectRandomDay();
            registerObj.enteremail(staff.Email);
            registerObj.enterconemail(staff.Email);
            registerObj.choosecountryFirstPage(staff.country);
            registerObj.entermobile(staff.Mobile);
            registerObj.selectRandomGender();
            registerObj.clikcbutton();
            registerObj.choosecountrySecondPage(staff.country);
            registerObj.chooseprovinceSecondPage(staff.Province);
            registerObj.choosecitySecondPage(staff.City);
            registerObj.enteradress(staff.Address_Line1);

        });
    });
});
