import Register from './Register';

class Header {

    getHotel() { return cy.get('[data-title="hotels"] > .text-center'); }
    getFlights() { return cy.get('[data-title="flights"] > .text-center > .hidden-xs'); }
    getTour() {return cy.get('[data-title="tours"] > .text-center'); }

    clickMyAccount() {
        const my_account = cy.get('.hidden-sm > .navbar-side > #li_myaccount > .dropdown-toggle');
        my_account.click();
    }
    
    clickLogin() {
    const loginLink =cy.get('.hidden-sm > .navbar-side > #li_myaccount > .dropdown-menu > :nth-child(1) > .go-text-right');
    loginLink.click();
    }

    clickRegister() {
        const registerLink =cy.get('.hidden-sm > .navbar-side > #li_myaccount > .dropdown-menu > :nth-child(2) > .go-text-right');
        registerLink.click();

        const register = new Register();
        return register;
    }


}
export default Header;