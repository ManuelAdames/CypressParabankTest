import { homeElements } from "../elements/home-Elements"
import { aboutUsPageElements } from "../elements/aboutUs-page-Elements"
import { contactPageElements } from "../elements/contact-page-Elements"


export function clickHomeButton() {

        cy.xpath(homeElements.aboutUsButton.squareButtonSelector)
        .click()
        .wait(250);

        cy.xpath(aboutUsPageElements.aboutUsVerify.selector)
        .should('be.visible')


        cy.xpath(homeElements.homeButton.selector)
        .click()
        .wait(250);
        
        cy.xpath(homeElements.homeVerify.selector)
        .should('be.visible')
    }

export function clickAboutUsSqareButton()

    {
        cy.xpath(homeElements.aboutUsButton.squareButtonSelector)
        .click()
        .wait(250);

        cy.xpath(aboutUsPageElements.aboutUsVerify.selector)
        .should('be.visible')
    }

export function clickContactButton(){
        cy.xpath(homeElements.contactButton.selector)
        .click()
        .wait(250)
        
        cy.xpath(contactPageElements.contactVerify.selector)
        .should('be.visible')
    }

