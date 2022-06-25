/// <reference types="cypress" />

describe('Testing Input Filter...', () => {
  it('Checks input filter shows entered id result', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="filter"]').type('2').wait(2000);
    cy.get('tbody tr:first td').first().should('have.text', '2');
    cy.get('tbody').should('have.length', '1');
  });

  it('Checks input filter shows data not found', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="filter"]').type('9999').wait(2000);
    cy.get('tbody').contains('Product not found!');
  });

  it('Checks input filter only allows numbers', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="filter"]')
      .type('abc')
      .should('have.value', '')
      .type('!@#')
      .should('have.value', '')
      .type('123')
      .should('have.value', '123');
  });
});
