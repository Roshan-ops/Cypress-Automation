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
            // registerObj.clickyear();
            registerObj.selectRandomYear();
            registerObj.selectRandomMonth();
            registerObj.selectRandomDay();

        });
    });
});
