const { cyan } = require("ansi-colors")
const { type } = require("ramda")

describe('My First Test', () => {
    it('Visits the Kitchen Sink site.', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        //Should be on new url which includes /commands/actions
        cy.url().should('include', '/commands/actions')

        //get input, type into it and verify value updated
    })
})

describe('My Second Test', () => {
    it('Does even less.', () => {
        expect(true).to.equal(false)
    })
})