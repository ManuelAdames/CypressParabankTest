import { homeElements } from "../elements/home-Elements"

export function login(username, password){

    cy.xpath(homeElements.loginField.selector)
    .clear()
    .type(username)
    .wait(250);


    cy.xpath(homeElements.passwordField.selector)
    .clear()
    .type(password)
    .wait(250);

    /*
    cy.xpath(homeElements.loginButton.selector)
    .click()
    */
}
