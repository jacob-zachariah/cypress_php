import LoginPage from './pageobjects/LoginPage';
import Header from './pageobjects/Header';
import Register from './pageobjects/Register';

describe('When the user is PHPTravel Home and clicks "Register"', ()=> {
    it('Home page of PHP Travel',()=> {
        cy.visit('/');
    })

    it('When the user clicks "MyAccount >> Register"', ()=> {
        const header = new Header();
        header.clickMyAccount();

        const register = header.clickRegister();
        register.getRegisterPageTile().should('eq','Register');
        
    })

    it('When the user reaches "Register" page check title', ()=> {
        
    })
})
