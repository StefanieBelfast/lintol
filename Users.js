describe('testing menu site Users', function () {
    before(function () {
        cy.visit('http://localhost:8000/login')
        cy.contains('Local Admin').click()
        cy.contains('Local Admin').click()
        cy.contains('Users').click()
    })
    it('get headline(pageTitle)and check words "UserTable"', () => {
        cy.get('.pageTitle').contains('UserTable')
    })
    it('get second headline(instructions)and check words "List of accessible users"', () => {
        cy.get('.instructions').contains('List of accessible users')
    })
    it('count checkboxes', () => {
        cy.get('.checkmark').should('have.length', 3)
    })
    it('count rows(shadedRow)', () => {
        cy.get('.shadedRow').should('have.length', 3)
    })
    it('count left column down and check words "Dat Aowner"', () => {
        cy.get('.rightSeparator').should('have.length', 3)
            .contains('Dat Aowner')
    })
    it(' left column down and check word "seeder"', () => {
        cy.get('.rightSeparator').contains('seeder').click()
    })
    it(' left column down and check words "Ad Min"', () => {
        cy.get('.rightSeparator').contains('Ad Min')
    })
    it('exist button(resourcesButton) with text"Add new Resource"', () => {
        cy.get('#resourcesButton').contains('Add new Resource')
    })
    it('exist a search field(userSearch)', () => {
        cy.get('.userSearch').click().type('seeder')
        cy.get('.rightSeparator').contains('seeder')
    })
})