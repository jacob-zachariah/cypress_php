import LoginPage from './pageobjects/LoginPage';

describe('Login Page check', ()=> {
    it('Go to PHP Travel website', ()=> {
        const loginPage = new LoginPage();

        loginPage.visit();
        loginPage.enterEmailId('helloworld@gmail.com');
        loginPage.enterPassword('Password123');
        loginPage.clickLoginButton();
        loginPage.getErrorMessage().should('exist');
    })
})