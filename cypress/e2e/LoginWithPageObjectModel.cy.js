import Login from "../PageObjects/Login.js"

describe("Page Object Model", () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    // General Approach
    it.skip('Login Test', () => {
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get('input[placeholder="Password"]').type('admin123');
        cy.get("button[type='submit']").click();
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    })

    // Using Page Object Model
    it.skip('Login Test With POM', () => {
        const ln = new Login();
        ln.setUserName('Admin');
        ln.setPassword('admin123');
        ln.clickSubmit();
        ln.verifyLogin();
    })

    // Using Page Object Model and with Fixtures
    it('Login Test With POM and Fixtures', () => {
        cy.fixture('user.json').then((data) => {
            const ln = new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
        })
    })
})