describe('MySuit', () => {
    it('Capture screen shots and video', () => {
        cy.visit('https://demo.opencart.com/')

        cy.screenshot('homepage');
        cy.get("img[title='Your Store']").screenshot('logo');


        // cy.get("li:nth-child(7) > a:nth-child(1)").click()
        // cy.get("div[id='content'] h2").should('have.text','Cameras');
    })
})