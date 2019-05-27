describe('Resources', () => {
    it('login', () => {
        cy.visit('http://localhost:8000/login')
        cy.contains('Local Admin').click()
        cy.contains('Local Admin').click()
    cy.contains('Resources').click()
    })
    it('check items', () => {
        cy.get('.pageTitle').contains('Resources')
        cy.get('.instructions').contains('The list of resources that are available for validation by Lintol')
        cy.get('#addFromURLButton').contains('Add From URL') 
        cy.get('#uploadYourFiles').contains('Upload your Files')
        cy.get('#typeFilter')//.contains('Upload your Files')
        cy.get('#sourceFilter')//.contains('Upload your Files')
        cy.get('#dateFilter')
        cy.get('#searchValidations')
        cy.get('#resourceAction__BV_toggle_')
        cy.get('#numberOfSelectedResources')
        cy.get('.headerContainer').contains('Resource Name')
        cy.get('.headerContainer').contains('File Type')
        cy.get('.headerContainer').contains('Source')
        cy.get('.headerContainer').contains('Date Added')
        cy.get('.headerContainer').contains('Owner')
        cy.get('.headerContainer').contains('Status')
        cy.get('.headerContainer').contains('Action')
    })

    it('count items', () => {
        cy.get('.checkmark').should('have.length', 25)
        cy.get('[data-v-28ea4cf6=""]').should('have.length', 98)
        cy.get('.statusLabel').should('have.length', 25)   
        cy.get('.page-item').should('have.length', 8)
        cy.get('.page-link').should('have.length', 8)
    })

    it('click items', () => {

    })
})    