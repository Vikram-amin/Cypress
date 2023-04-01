


Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click();
})