describe('DataProcessors', () => {
        it('login', () => {
            cy.visit('http://localhost:8000/login')
            cy.contains('Local Admin').click()
            cy.contains('Local Admin').click()
        cy.contains('Data Processors').click()
        })
        it('check items', () => {
            cy.get('.pageTitle').contains('Data Processors')
            cy.get('.instructions').contains('These are the list of processors available to your profiles.')
            cy.get('.processorSearch')//.should('placeholder')        
    })
    it('count items', () => {
        cy.get('.rightSeparator').should('have.length', 5)
          .contains('CSV Checking by GoodTables')
        cy.get('.rightSeparator').contains('Boundary Checker (impr)')
        cy.get('.description').should('have.length', 5)
          .contains('Tool for searching for Personally-Identifiable Information within CSV data')
        cy.get('.processorColumn').should('have.length', 15)
        //cy.get('.processorColumn').each.contains('Unique Tag')
         // .contains('Unique Tag')//.should('have.length', 3)
          /// he founds only 1 times
        cy.get('.shadedRow').should('have.length', 5)
        cy.get('.configurationsColumn').should('have.length',5)
          .contains('Configurations')
        
    })
})