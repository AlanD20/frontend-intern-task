/// <reference types="cypress" />

describe('Testing Filter Parameters On Page Load...', () => {
  it('Checks the table shows 2nd page on load', () => {
    cy.visit('http://localhost:3000?page=2').wait(2000);

    cy.get('tbody tr > td').first().should('have.text', '6');

    cy.get('tfoot ul li:nth-child(3) > button').should(
      'have.attr',
      'aria-current'
    );
  });

  it('Checks shows the filtered id on load', () => {
    cy.visit('http://localhost:3000?filter_id=10').wait(2000);

    cy.get('input[name="filter"]').should('have.value', '10');

    cy.get('tbody tr > td').first().should('have.text', '10');
  });
});
