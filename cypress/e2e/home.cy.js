describe("home page", () => {
    beforeEach(() => { // beforEach() hook. This is a function that will get called “before each” test is run
      cy.visit("https://cypress-realworld-testing-course-app.vercel.app")
    })
  
    context("Hero Section" , () => { // organizing tests with context
      it("the h1 contains the correct text", () => {
        //  cy.visit("https://cypress-realworld-testing-course-app.vercel.app")
          cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
        })
      
        it("the features on the home page are corect",() => { 
        //  cy.visit("https://cypress-realworld-testing-course-app.vercel.app")
          cy.get("dt").eq(0).contains("4 Courses")  // page as 3 dt elemet cypress return dt in array to get first dt element ".eq(index num)" is used
          cy.get("dt").eq(1).contains("25+ Lessons")
          cy.get("dt").eq(2).contains("Free and Open Source")
        })
    })
  
    context("Courses section", () => { 
      // it.only("Course: Testing your First Next.js Application", () => { // ".only" used to run this test only
  
      it("Course: Testing your First Next.js Application", () => { 
        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application") //Testing the correct URL or pathname
      })
  
      it("Course: Testing Foundations", () => {
        cy.getByData("course-1").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-foundations")
      })
    
      it("Course: Cypress Fundamentals", () => {
        cy.getByData("course-2").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/cypress-fundamentals")
      })
    })
  })