describe('testing menu site ValidationReports', function () {
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
        cy.contains('Validation Reports').click()
        cy.log('else')
      }
    })
    cy.contains('Validation Reports').click()
  })
  //using if else, because login need 2x but sometime only one, to avoid any error cause this reason using if else
  //using beforeEach, because this website is logging out after a certain time

  it('get headline(pageTitle)and check words "Validation Reports"', () => {
    cy.get('.pageTitle').contains('Validation Reports')
  })
  it('get second headline(instructions)and check words "Here is a list of generated reports for this account"', () => {
    cy.get('.instructions').contains('Here is a list of generated reports for this account')
  })

  it('exist a dropdown Date Filter', () => {
    cy.get('#dateFilter')//.select('??', { force: true })
    //  cy.get('.profileName').should('have.length', ??).contains('??')
  })
  it('exist a dropdown User Filter', () => {
    cy.get('#userFilter')//.select('??', { force: true })
    //  cy.get('.profileName').should('have.length', ??).contains('??')
  })
  //TO DO dropdown menu, you have to fill in only the number/name in instead off ??
  it('exist a dropdown Profile Name Filter & process, check if its work', () => {
    cy.get('#profileFilter').select('CSV Profile', { force: true })
    cy.get('.profileName').should('have.length', 3).contains('Report CSV Profile')

  })

  it('count rows(shadedRow) and with text"Data Profile Name [test4]"', () => {
    cy.get('.shadedRow').should('have.length', 5)
      .contains('Data Profile Name [test4]')
  })
  it('count left column(rightSeparator) down', () => {
    cy.get('.rightSeparator').should('have.length', 5)
  })
  it('count middle/right column(reportColumn) down', () => {
    cy.get('.reportColumn').should('have.length', 20)
  })
  it('count right column(col-sm-4) with signs down', () => {
    cy.get('.col-sm-4').should('have.length', 15)
  })
  it('count red circle', () => {
    cy.get('.ragError').should('have.length', 5)
  })
  it('count yellow triangle', () => {
    cy.get('.ragWarning').should('have.length', 5)
  })
  it('count green squares', () => {
    cy.get('.ragPass').should('have.length', 5)
  })
  it('count area of numbers close to the signs', () => {
    cy.get('.ragNumber').should('have.length', 15)
  })
})