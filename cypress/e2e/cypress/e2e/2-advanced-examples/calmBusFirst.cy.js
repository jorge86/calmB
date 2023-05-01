describe('Book a demo test', () => {
  it('Should book a demo successfully', () => {
    // Navigate to the website
    cy.visit('https://business.calm.com/')

    // Click on the "get a personalized tour" button
    //cy.contains('Get a personalized tour').click()
    cy.get('button[data-modal-type="demo-form"]').click({ force: true });

    // Fill in the form with required information
    cy.get('#name', { timeout: 10000 }).should('be.visible');
    cy.get('#name').type('Ge Gre')
    cy.get('#email').type('geo@example.com')
    cy.get('#phone').type('1234567890')
    cy.get('#company').type('Geo Inc.')
    cy.get('#teamSize').select('11-50')
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
