const { cy } = require('cypress');

describe('Example Test', () => {
  it('should visit home page', () => {
    cy.visit('/');
    cy.contains('Example').should('be.visible');
  });
});
