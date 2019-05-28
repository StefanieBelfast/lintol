// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

//#const accessToken =
//#  'pk.eyJ1IjoibWFwc29mc3VtaXQiLCJhIjoiY2l1ZDF3dHE5MDAxZDMwbjA0cTR3dG50eSJ9.63Xci-GKFikhAobboF0DVQ';

describe('BeforeEach1', function () {
  beforeEach(function () {
    cy.visit('http://localhost:8000/login')
  //  cy.contains('Local Admin').click()
  //  cy.contains('Local Admin').click()
  })
})
 