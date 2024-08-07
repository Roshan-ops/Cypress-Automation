import { registerPage } from "./../Pages/registerPage.cy";

const registerObj = new registerPage();

describe('Kiibank Automation', () => {

    it('Register flow', () => {
        cy.fixture('staffs.json').then((staff) => {
            registerObj.openURL();
            registerObj.clickbutton();           
            console.log(staff);            
            registerObj.enterfirstname(staff.firstName);
        });
    });
});
