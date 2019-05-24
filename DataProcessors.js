describe('Data Profiles', () => {
    describe('LINTOL login', () => {
        it('login', () => {
            cy.visit('http://localhost:8000/login')
            cy.contains('Local Admin').click()
            cy.contains('Local Admin').click()
        cy.contains('Data Profiles')
        
        })
    })
})