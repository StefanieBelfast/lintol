describe('testing menu site DataProcessors', function () {
  before(function () {
    cy.visit('http://localhost:8000/login')
    cy.contains('Local Admin').click()
    cy.contains('Local Admin').click()
    cy.contains('Data Processors').click()
  })

  it('count left column down and check words "CSV Checking by GoodTables"', () => {
    cy.get('.rightSeparator').should('have.length', 5)
      .contains('CSV Checking by GoodTables')
  })
  it('get left column(rightSeparator) and check words "Boundary Checker (impr)"', () => {
    cy.get('.rightSeparator').contains('Boundary Checker (impr)')
  })
  it('count in left column the description area and check words "Tool for searching for Personally-Identifiable Information within CSV data" ', () => {
    cy.get('.description').should('have.length', 5)
      .contains('Tool for searching for Personally-Identifiable Information within CSV data')
  })
  it('count in the middle column(processorColumn)', () => {
    cy.get('.processorColumn').should('have.length', 15)
  })
  it('count rows(shadedRow)', () => {
    cy.get('.shadedRow').should('have.length', 5)
  })

  it('count right column(configurationsColumn) and check words "Configurations"', () => {
    cy.get('.configurationsColumn').should('have.length', 5)
      .contains('Configurations')

  })
  it('get headline(pageTitle)and check words "Data Processors"', () => {
    cy.get('.pageTitle').contains('Data Processors')
  })
  it('get second headline(instructions)and check words "These are the list of processors available to your profiles."', () => {
    cy.get('.instructions').contains('These are the list of processors available to your profiles.')
  })
  it('get search(processorSearch) and test if it works ', () => {
    cy.get('.processorSearch').click().type('boun')
    cy.get('.rightSeparator').contains('Boundary Checker (impr)')
  })
})