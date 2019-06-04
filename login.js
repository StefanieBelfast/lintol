describe('LINTOL login website', () => {
    it('exist certain button(Term & Conditions)', () => {
        cy.visit('http://localhost:8000/login')
        cy.contains(' Terms & Conditions')
      })
    //if you use a index before, you will not need it 
     
    it('LINTOL login process', () => {
        cy.contains('Please Login with the following services')
        cy.contains('Sign in with CKAN')
        cy.contains('Local Admin').click()
        cy.contains('Local Admin').click()
        cy.url().should('include','/application/profiles/profiletable')
        })
    }) 