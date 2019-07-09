describe('Register to PHP Travel', ()=> {
it('Go to PHP Travel website and Click Register',()=> {
    cy.visit('https://www.phptravels.net/login')
    cy.title().should('eq','Login')
    cy.get('.zoomInDown > :nth-child(1) > .btn').click()
    cy.title().should('eq','Register')
})

})