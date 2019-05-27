describe('Data Profiles', () => {
        it('login', () => {
            cy.visit('http://localhost:8000/login')
            cy.contains('Local Admin').click()
            cy.contains('Local Admin').click()
        cy.contains('Data Profiles')
        
        })
    //if you use a index before, you will not need it 
     
    it('check items', () => {
        cy.get('.pageTitle').contains('Data Profiles')
        cy.get('.instructions').contains('A List of Data Profiles associated with this account. You can add more data profiles by clicking the "Add New Data Profile" button.')
        cy.get('#addNewProfileButton').contains('Add new Data Profile')
        cy.get('.container').contains('Users')
        cy.get('.container').contains('Validation Reports')
        cy.get('.container').contains('Data Processors')
        cy.get('.container').contains('Data Profiles')
        cy.get('[src="/img/logo.474572e2.svg"]')
        })

    it('count items', () => {
        cy.get('.profileRow').should('have.length', 3)
        cy.get('.profileColumn').should('have.length', 15)
        cy.get('.profileMainColumn').should('have.length', 3)   
        cy.get('[data-v-47b830ea=""]').should('have.length', 17)
        cy.get('.nav-item').should('have.length', 6)
           
        })
    
    it('Add new Data Profile1', () => {
       cy.visit('http://localhost:8000/login')
        cy.contains('Local Admin').click()
        cy.contains('Local Admin').click()
        cy.get('#addNewProfileButton').click()
        .wait(500)
        //cy.url().should('include', '/addprofile')
        cy.get('.pageTitle').contains('Add Data Profile')
        cy.get('.inputName')
        cy.get('.formItem')
        cy.get('[placeholder="Search for a Processor"]')
        cy.get('#addProfile').contains('Add Profile')
    
    }) 
    it('Add new Data Profile2', () => {
       cy.visit('http://localhost:8000/login')
       cy.contains('Local Admin').click()
       cy.contains('Local Admin').click()
       cy.contains('Data Profiles')
        cy.get('#addNewProfileButton').click()
        cy.url().should('include', '/profiles/addprofile')
        cy.get('.row').contains('Add Data Profile')
        cy.get('.inputName').type("test")
        cy.get('.inputDescription').type('this is a describtion')
        cy.get('[placeholder="Search for a Processor"]').click()
        cy.get('.dropdown-menu').contains('CSV Checking by CSVLint').click()
        cy.get('.editConfigurationLabel').click()
        cy.get('.field-wrap').click()
        cy.get('.xmark').click()
        
    }) 
    it('Add new Data Profile3', () => {
        cy.visit('http://localhost:8000/login')
        cy.contains('Local Admin').click()
        cy.contains('Local Admin').click()
        cy.contains('Data Profiles')
        cy.get('#addNewProfileButton').click()
        cy.url().should('include', '/profiles/addprofile')
        cy.get('.row').contains('Add Data Profile')
        cy.get('.inputName').type("test")
        cy.get('.inputDescription').type('this is a describtion')
        cy.get('[placeholder="Search for a Processor"]').click()
        cy.get('.dropdown-menu').contains('CSV Checking by GoodTables').click()
        cy.get('.editConfigurationLabel').click()
        cy.get('.field-wrap').click()
        cy.get('.xmark').click()
    })    
    
}) 