describe('testing menu site Resources', function () {

    //using beforeEach, because this website is logging out after a certain time
    beforeEach(function () {
        cy.visit('http://localhost:8000/login')
        cy.contains('Local Admin').click()
            .wait(5000)
        cy.get('body').then(($body) => {

            cy.log($body)
            //using if else, because login need 2x but sometime only one, to avoid any error cause this reason using if else
            if ($body.text().includes('Please Login')) {
                // yup found it
                cy.log('if')
                cy.get('.local-admin').click()
            } else {
                // nope not here
                cy.contains('Resources').click()
                cy.log('else')
            }
        })

        cy.contains('Resources').click()
    })

    it('get headline(pageTitle)and check words "Resources"', () => {
        cy.get('.pageTitle').contains('Resources')
    })
    it('get second headline(instructions)and check words "The list of resources that are available for validation by Lintol"', () => {
        cy.get('.instructions').contains('The list of resources that are available for validation by Lintol')
    })
    it('exist a button with text "Add From URL"', () => {
        cy.get('#addFromURLButton').contains('Add From URL')
    })
    it('exist a button with text "Upload your Files"', () => {
        cy.get('#uploadYourFiles').contains('Upload your Files')
    })
    it('exist a dropdown Type Filter & process, check if its work', () => {
        cy.get('.custom-select').contains('Filter by Type').click({ force: true })

        cy.get('[value="geojson"]').click({ force: true })
        cy.get('.filenameLabel').contains('waste-sites.geojson',{ force: true })

    })
    it('exist a dropdown source Filter', () => {
        cy.get('#sourceFilter').contains('Filter by Source')
    })
    it('exist a dropdown date Filter', () => {
        cy.get('#dateFilter')
    })
    it('exist a Search field,input text "google1",check if its works ', () => {
        cy.get('#searchValidations').type('google1')
        cy.get('.filenameLabel').contains('google1.com')
    })
    it('exist a dropdown with text "Choose Function', () => {
        cy.get('#resourceAction__BV_toggle_')
    })
    it('exist a field with text Selected ', () => {
        cy.get('#numberOfSelectedResources').contains('Selected')
    })
    it('exist in the header of the container text"Resource Name" ', () => {
        cy.get('.headerContainer').contains('Resource Name')
    })
    it('exist in the header of the container text"File Type"', () => {
        cy.get('.headerContainer').contains('File Type')
    })
    it('exist in the header of the container text"Source"', () => {
        cy.get('.headerContainer').contains('Source')
    })
    it('exist in the header of the container text"Date Added"', () => {
        cy.get('.headerContainer').contains('Date Added')
    })
    it('exist in the header of the container text"Owner"', () => {
        cy.get('.headerContainer').contains('Owner')
    })
    it('exist in the header of the container text"Status"', () => {
        cy.get('.headerContainer').contains('Status')
    })
    it('exist in the header of the container text"Action"', () => {
        cy.get('.headerContainer').contains('Action')
    })
    it('count checkboxes', () => {
        cy.get('.checkmark').should('have.length', 25)
    })
    it('count status label with text "New Resource"', () => {
        cy.get('.statusLabel').should('have.length', 25)
    })
    it('count page boxes in the bottom', () => {
        cy.get('.page-item').should('have.length', 8)
    })
    it('count plot of page boxes in the bottom', () => {
        cy.get('.page-link').should('have.length', 8)
    })

    it('use a button "Add From URL" without fill in to get a warning text"The Url Link field is required."', () => {
        cy.get('#addFromURLButton').click()
        cy.get('#addURLs').contains('Add URLs to Lintol', { force: true }).click()
        cy.get('.warningText').contains('The Url Link field is required.')
        cy.get('.close', { force: true }).click()
    })

    it('use a button "upload button" without response', () => {
        cy.get('#uploadYourFiles').click()
    })

    it('count rows, click checkboxes and check the result', () => {
        cy.get('.resourceRow').contains('noids-2017-18-wk-0.csv')
        cy.get('[for="activebd11a398-6ad1-4555-a53d-c74fca963098"]').click()
        cy.get('[for="actived1d2a057-496b-4a14-bb45-f39bc1b89a8f"]').click()
        cy.get('[for="active94aef71a-56a0-497a-b067-ddaffda7dc05"]').click()
        cy.get('.numberOfSelected').contains('3')

    })



    it('click the dropdownmenu Choose Funktion to find text "Run Profile"', () => {
        cy.get('#resourceAction__BV_toggle_').contains('Choose Function').click()
        cy.get('.dropdown-item').contains('Run Profile').click()
        cy.get('[selected="selected"]')///.contains('CSV profile').click()
        cy.get('.runProfileButton').contains('Run Profile')
        cy.get('.close').click()
    })


    it('click the dropdownmenu Choose Funktion to find text "Delete" and can control application confirms', function (done) {
        let count = 0
        cy.on('window:confirm', (str) => {
            count += 1
            throw error
        })

        // click the button causing the confirm to fire
        cy.get('#resourceAction__BV_toggle_').click()
        cy.get('.dropdown-item').contains('Delete').click()
        //TO DO grab the pop up window

    })


})    