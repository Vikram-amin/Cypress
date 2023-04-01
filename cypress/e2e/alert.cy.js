describe("Alert" , () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })

    // click for js alert button
    it("Simple Alert", () => {
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert', (t) => {
            expect(t).to.contain('I am a JS Alert')
        })
    })

    // click for js confirm button 
    it('Confirm Alert ok button', () => {
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm')
       })
       cy.get('#result').should('have.text','You clicked: Ok')
    })

    
    it('Confirm Alert cancel button',()=>{
        cy.get("button[onclick='jsConfirm()']").click()
        
        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm')
       })
       cy.on('window:confirm',()=>false);
       cy.get('#result').should('have.text','You clicked: Cancel')
    })

    // Javascript Prompt Alert: It will have some text with a text box for user input along with ok

    it("Javascript Prompt Alert", () => {
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('Hello World')
            cy.contains('Click for JS Prompt').click()
          })
          cy.get('#result').should('have.text', 'You entered: Hello World')
    })

    // Authenticated Alert

    it('Authenticated Alert',() => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth : {
                username : "admin",
                password : "admin"
            }
        })
        cy.get("div[class='example'] p").should('have.contain','Congratulations! You must have the proper credentials.')
    })


})