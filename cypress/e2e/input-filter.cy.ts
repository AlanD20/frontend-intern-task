/// <reference types="cypress" />

describe('Testing Input Filter...', () => {

  it('tests input filter shows entered id result', () => {
    cy.visit('/');

    cy.get('input[name="filter"]').type('2');
    cy.wait(1000);

    cy.get('tbody tr:first td').first().should('have.text', '2');
    cy.get('tbody').should('have.length', '1');
  });

  it('tests input filter shows data not found', () => {
    cy.visit('/');
    cy.get('input[name="filter"]').type('9999');
    cy.wait(1000);
    cy.get('tbody').contains('Product not found!');
  });

  it('tests input filter only allows numbers', () => {
    cy.visit('/');
    cy.get('input[name="filter"]')
      .type('abc')
      .should('have.value', '')
      .type('!@#')
      .should('have.value', '')
      .type('123')
      .should('have.value', '123');
  });
});
