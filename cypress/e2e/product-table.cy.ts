/// <reference types="cypress" />

const ROWS_PER_PAGE = 5;

describe('Testing Product Table...', () => {
  it('Checks the table shows only 5 products per page', () => {
    cy.visit('http://localhost:3000').wait(2000);
    cy.get('tbody > *').should('have.length', ROWS_PER_PAGE);
  });

  it('Checks pagination previous and next page button', () => {
    cy.visit('http://localhost:3000');

    cy.get('tfoot ul li').last().click().wait(2000);
    cy.get('tbody tr > td').first().should('have.text', '6');

    cy.get('tfoot ul li').first().click().wait(2000);
    cy.get('tbody tr > td').first().should('have.text', '1');
  });

  it('Checks pagination has 5 buttons incluing next and previous buttons', () => {
    cy.visit('http://localhost:3000').wait(2000);
    cy.get('tfoot ul > *').should('have.length', 5);
  });
});
