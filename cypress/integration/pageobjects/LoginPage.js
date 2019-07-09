class LoginPage {
    
    visit() {
        cy.visit('/login')
    }
    
    getEmailField() { return cy.get(':nth-child(1) > .form-control'); }
    getPasswordField() { return cy.get('.panel-body > :nth-child(2) > .form-control'); }
    getLoginButton() { return cy.get('.btn-action'); }
    getErrorMessage() { return cy.get('.alert'); }
  
    enterEmailId(emailId) {
        const email = this.getEmailField();
        email.clear();
        email.type(emailId);
        return this
    }

    enterPassword(passwordKey) {
        const password = this.getPasswordField()
        password.clear();
        password.type(passwordKey)
        return this;
    }

    clickLoginButton() {
        const loginButton = this.getLoginButton();
        loginButton.click();
    }

}

export default LoginPage;