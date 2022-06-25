/// <reference types="cypress" />

describe('Testing Filter Parameters On Page Load...', () => {
  it('Loads page from url parameter', () => {
    cy.visit('?page=2');

    cy.wait(2000);
    cy.get('tbody tr').first().find('td').first().should('have.text', '6');

    cy.get('tfoot ul li:nth-child(3) > button').should(
      'have.attr',
      'aria-current'
    );
  });

  it('Loads product id from url parameter', () => {
    cy.visit('?filter_id=10');

    cy.wait(1000);
    cy.get('input[name="filter"]')
      .should('be.visible')
      .should('have.value', '10');

    cy.get('tbody tr > td')
      .first()
      .should('be.visible')
      .should('have.text', '10');
  });
});
