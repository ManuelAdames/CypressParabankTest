export class Landpage {

    GoToLandpage(){

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.xpath("//p[contains(.,'Experience the difference')]").should('be.visible')
    }
}