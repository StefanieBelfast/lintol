describe('Data Profiles', () => {
    describe('LINTOL login', () => {
        it('login', () => {
            cy.visit('http://localhost:8000/login')
            cy.contains('Local Admin').click()
            cy.contains('Local Admin').click()
        cy.contains('Data Profiles')
        
        })
    //if you use a index before, you will not need it 
     
        it('existing items', () => {
            cy.get('.instructions').contains('A List of Data Profiles associated with this account. You can add more data profiles by clicking the "Add New Data Profile" button.')
            cy.get('.custom-select').contains('Filter by Group').click()

         //   cy.get('.cardHeader').should('have.length', 2)
         //     .contains('Household Statistics')
         //   cy.get('.cardHeader').contains('Council Statistics')
         //   cy.get('.btn-primary').should('have.length', 2)
         //     .contains('Previous Quarter')
         //   cy.get('.btn-primary').contains('Next Quarter')    
        
    
           
        })
        })
    }) 