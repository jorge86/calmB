describe('Book a demo test', () => {
  it('Should book a demo successfully', () => {
    // Navigate to the website
    Cypress.on('uncaught:exception', () => false)
    cy.visit('https://business.calm.com/')

    // Click on the "get a personalized tour" button
    cy.get('button[data-modal-type="demo-form"]').click({ force: true });

    // Fill in the form with required information
    cy.get('#FirstName').clear().type('Ge', {force: true});
    cy.get('#LastName').clear().type('Gre', {force: true});
    //cy.xpath("//input[@id='LastName']")
    //  .type("your text here");
    cy.get('#Email').clear().type('geo@example.com', {force: true});
    cy.get('#Company').clear().type('Geo Inc.', {force: true});
    cy.get('#company_size__c').select('5-20', {force: true});
    cy.get('#useCase').select('Stress Management')

    // Click on the "book a demo" button
    cy.contains('Book a demo').click()

    // Assert that the page has been navigated to the correct URL
    cy.url().should('include', 'calm.com/schedule-demo')

    // Assert that the page contains the correct title
    cy.title().should('contain', 'Schedule a Demo')

    // Assert that the form has been submitted successfully
    cy.get('.mc-form-thank-you').should('be.visible')
  })
})
