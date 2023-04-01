
describe('Custom Commands', () => {
    beforeEach(() => {
        cy.visit('https://demo.nopcommerce.com/')
    })

    it('Handle Links', () => {
       //direct -without using custom command
       cy.get("div[class='page-body'] div:nth-child(1) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
       cy.get("div[class='product-name'] h1").should('have.text','Build your own computer');

    //Using Custom Command
      cy.clickLink('Apple MacBook Pro 13-inch');
      cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })


    it('OverWriting Existing Command',()=>{
      cy.clickLink('APPLE MACBOOK PRO 13-INCH');
      cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');

  })


  it.only('Login Command',()=>{
    //login 
    cy.clickLink('Log in');
    cy.get("form[method='post'] strong").should('have.text','Returning Customer');
     cy.loginapp('testing@gmail.com','test123');

  })
})