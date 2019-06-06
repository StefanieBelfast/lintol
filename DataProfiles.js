
describe('testing menu site Data Profiles', function () {
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
                cy.contains('Data Profiles').click()
                cy.log('else')
            }
        })

        cy.contains('Data Profiles').click()
    })
    //using if else, because login need 2x but sometime only one, to avoid any error cause this reason using if else
    //using beforeEach, because this website is logging out after a certain time

    it('exist a dropdown Name Filter & process, check if its work', () => {
        cy.get('#nameFilter').select('x', { force: true })
        cy.get('.profileName').should('have.length', 2).contains('x')
    })

    it('get headline(pageTitle)and check words "Data Profiles"', () => {
        cy.get('.pageTitle').contains('Data Profiles')
    })
    it('get second headline(instructions)and check words "A List of Data Profiles associated with this account. You can add more data profiles by clicking the "Add New Data Profile" button."', () => {
        cy.get('.instructions').contains('A List of Data Profiles associated with this account. You can add more data profiles by clicking the "Add New Data Profile" button.')
    })
    it('exist a button with text "Add new Data Profile" ', () => {
        cy.get('#addNewProfileButton').contains('Add new Data Profile')
    })
    it('get left side(container) and check text "Users"', () => {
        cy.get('.container').contains('Users')
    })
    it('get left side(container) and check text "Validation Reports"', () => {
        cy.get('.container').contains('Validation Reports')
    })
    it('get left side(container) and check text "Data Processors"', () => {
        cy.get('.container').contains('Data Processors')
    })
    it('get left side(container) and check text "Data Profiles"', () => {
        cy.get('.container').contains('Data Profiles')
    })
    it('exist LINTOL logo', () => {
        cy.get('[src="/img/logo.474572e2.svg"]')
    })
    it('count rows(profileRow)', () => {
        cy.get('.profileRow').should('have.length', 10)
    })
    it('count right/middle column(profileColumn)', () => {
        cy.get('.profileColumn').should('have.length', 50)
    })
    it('count left column(profileMainColumn) down', () => {
        cy.get('.profileMainColumn').should('have.length', 10)
    })
    it('count menu item', () => {

        cy.get('.nav-item').should('have.length', 6)
    })

    it('exist the process "Add new Data Profile" generally with all buttons', () => {
        cy.get('#addNewProfileButton').click()
            .wait(500)
        //cy.url().should('include', '/addprofile')
        cy.get('.pageTitle').contains('Add Data Profile')
        cy.get('.inputName')
        cy.get('.formItem')
        cy.get('[placeholder="Search for a Processor"]')
        cy.get('#addProfile').contains('Add Profile')

    })
    it('Add new Data Profile with "CSV Checking by CSVLint" and check if its exists and if its editable', () => {

        cy.get('#addNewProfileButton').click()
        cy.url().should('include', '/profiles/addprofile')
        cy.get('.row').contains('Add Data Profile')
        cy.get('.inputName').type("test")
        cy.get('.inputDescription').type('this is a describtion of CSV Checking by CSVLint')
        cy.get('[placeholder="Search for a Processor"]').click()
        cy.get('.dropdown-menu').contains('CSV Checking by CSVLint').click()
        cy.get('.editConfigurationLabel').click()
        //    cy.get('#addProfile').click()
        //    cy.get('.profileMainColumn').contains('this is a describtion of CSV Checking by CSVLint')
        //the 2 comands above are working, I // because every time the test ist running 1 additional Profile appears, so the counting tests given an error   
        ///TO DO get Edit button this line,click and test if its possible to edit it
    })

    it('Add new Data Profile with "CSV Checking by GoodTables"', () => {

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

    it('Add new Data Profile with "Personally-Identifiable Information Spotter"', () => {

        cy.get('#addNewProfileButton').click()
        cy.url().should('include', '/profiles/addprofile')
        cy.get('.row').contains('Add Data Profile')
        cy.get('.inputName').type("test")
        cy.get('.inputDescription').type('this is a describtion')
        cy.get('[placeholder="Search for a Processor"]').click()
        cy.get('.dropdown-menu').contains('Personally-Identifiable Information Spotter').click()

    })

    it('Add new Data Profile with "Boundary"', () => {

        cy.get('#addNewProfileButton').click()
        cy.url().should('include', '/profiles/addprofile')
        cy.get('.row').contains('Add Data Profile')
        cy.get('.inputName').type("test")
        cy.get('.inputDescription').type('this is a describtion')
        cy.get('[placeholder="Search for a Processor"]').click()
        cy.get('.dropdown-menu').contains('Boundary').click()
        cy.get('.editConfigurationLabel').click()
        cy.get('.field-wrap').contains('Belfast')
        cy.get('.xmark').click()

    })

    it('Add new Data Profile with "gov.uk Register"', () => {

        cy.get('#addNewProfileButton').click()
        cy.url().should('include', '/profiles/addprofile')
        cy.get('.row').contains('Add Data Profile')
        cy.get('.inputName').type("test")
        cy.get('.inputDescription').type('this is a describtion')
        cy.get('[placeholder="Search for a Processor"]').click()
        cy.get('.dropdown-menu').contains('gov.uk Register').click()
        cy.get('.xmark').click()
    })

}) 