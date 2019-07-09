describe('Login Page check', ()=> {

  it('Go to PHP Travel website', ()=> {
    cy.visit('https://www.phptravels.net/login')
    cy.title().should('eq','Login')
  })  
  
  it('Enter username', ()=> {
      cy.get(':nth-child(1) > .form-control')
        .type('hello@gmail.com')
  })

  it('Enter password',()=> {
      cy.get('.panel-body > :nth-child(2) > .form-control')
        .type('Password123')   
  })

  it('Click submit button',()=>{
    cy.get('.btn-action').click()
  })

  it('Then error message should be displayed and verified', ()=>{
    cy.get('.alert').should('be.visible')
    cy.get('.alert').contains('Email or Password')
  })


})