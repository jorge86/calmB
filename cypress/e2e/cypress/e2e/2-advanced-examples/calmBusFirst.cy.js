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
    cy.get('#Email').clear().type('geo1@example.com', {force: true});
    cy.get('#Company').clear().type('Geo Inc.', {force: true});
    cy.get('#company_size__c').select('5-20', {force: true});
    cy.get('#Title').clear().type('QA', {force: true});
    cy.get('#Country').select('Greece', {force: true});
    cy.get('#Form_Submission_Notes__c').clear().type('test', {force: true});

    // Click on the "book a demo" button
    cy.contains('Book demo').click()

    // Assert that the page has been navigated to the correct URL
    cy.url().should('include', 'info.calm.com/Demo-Request')

    // Assert that the form has been submitted successfully
    //cy.get('.main main--thanks').should('be.visible')

    cy.log('Test finished')
  })
})
