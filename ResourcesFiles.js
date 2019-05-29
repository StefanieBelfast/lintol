describe('Resources', function () {
    before(function () {
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
        cy.get('[data-v-28ea4cf6=""]').should('have.length', 101)
        cy.get('.statusLabel').should('have.length', 25)   
        cy.get('.page-item').should('have.length', 8)
        cy.get('.page-link').should('have.length', 8)
        ///cy.get('#resourceName')
        cy.get('.center')
    })

    it('click items/Add From URL', () => {
        cy.get('#addFromURLButton').click()
        cy.get('#addURLs').contains('Add URLs to Lintol', {force:true}).click()
        cy.get('.warningText').contains('The Url Link field is required.')
        cy.get('.close').click()
})

    it('click items/upload button', () => {
        cy.get('#uploadYourFiles').click()
    })

    it('click items/checkbox1', () => {
        cy.get('.resourceRow').contains('noids-2017-18-wk-0.csv')
        cy.get('[for="activebd11a398-6ad1-4555-a53d-c74fca963098"]').click()
        cy.get('[for="actived1d2a057-496b-4a14-bb45-f39bc1b89a8f"]').click()
        cy.get('[for="active94aef71a-56a0-497a-b067-ddaffda7dc05"]').click()
        cy.get('.numberOfSelected').contains('3')
        
    })


     
    it('click Item Choose Funktion1', () =>  {
        cy.get('#resourceAction__BV_toggle_').click()
        cy.get('.dropdown-item').contains('Run Profile').click()
        cy.get('[selected="selected"]')///.contains('CSV profile').click()
        cy.get('.runProfileButton').contains('Run Profile')
        cy.get('.close').click()
    })
    

    it('can control application confirms', function (done) {
        let count = 0
      
        // make sure you bind to this **before** the
        // confirm method is called in your application
        //
        // this event will automatically be unbound when this
        // test ends because it's attached to 'cy'
        cy.on('window:confirm', (str) => {
          count += 1
          throw error
        })
        //switch (count) {

        //done()
   // }
 

  // click the button causing the confirm to fire
    cy.get('#resourceAction__BV_toggle_').click()
    cy.get('.dropdown-item').contains('Delete').click()
})
    /*
        
    //it('click Item Choose Funktion2', () =>  {
        
        //cy.window().should('have.property','confirm')
        //.should('have.property', 'target', true)
        //cy.get('[selected="selected"]')///.contains('CSV profile').click()
        //cy.get('.DeleteButton').contains('Delete')
        //})
    })
    
        
})*/
}) 