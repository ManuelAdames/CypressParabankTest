import { urlElements } from "../elements/land-page-Elements"

export function loadLandpage(){

    cy.visit(urlElements.parabankURL.selector)
    .wait(500)
    
    cy.xpath(urlElements.urlVerification.selector)
    .should('be.visible')
}