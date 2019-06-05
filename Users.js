describe('testing menu site Users', function () {
    beforeEach(function () {
        cy.visit('http://localhost:8000/login')
        cy.contains('Local Admin').click()
            .wait(5000)
        cy.get('body').then(($body) => {
            cy.log($body)
            if ($body.text().includes('Please Login')) {
                // yup found it
                cy.log('if')
                cy.get('.local-admin').click()
            } else {
                // nope not here
                cy.contains('Users').click()
                cy.log('else')
            }
        })
        cy.contains('Users').click()
    })
    //using if else, because login need 2x but sometime only one, to avoid any error cause this reason using if else
    //using beforeEach, because this website is logging out after a certain time
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