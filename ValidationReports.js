describe('testing menu site ValidationReports', function () {
  beforeEach(function () {
    cy.visit('http://localhost:8000/login')
    cy.contains('Local Admin').click()
    cy.contains('Local Admin').click()
    cy.contains('Validation Reports').click()
  })

  it('get headline(pageTitle)and check words "Validation Reports"', () => {
    cy.get('.pageTitle').contains('Validation Reports')
  })
  it('get second headline(instructions)and check words "Here is a list of generated reports for this account"', () => {
    cy.get('.instructions').contains('Here is a list of generated reports for this account')
  })
  it('exist a dropdown Date Filter', () => {
    cy.get('#dateFilter')//.click()
  })
  it('exist a dropdown User Filter', () => {
    cy.get('#userFilter')//.click()
  })
  it('exist a dropdown Profile Filter', () => {
    cy.get('#profileFilter')//.click()
    /// dropdown menu
  })
  it('count rows(shadedRow) and with text"Data Profile Name [test4]"', () => {
    cy.get('.shadedRow').should('have.length', 5)
      .contains('Data Profile Name [test4]')
    //.contains('View Report').click()//('[id="viewReport + report.name"]')
    /// get the View Report
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