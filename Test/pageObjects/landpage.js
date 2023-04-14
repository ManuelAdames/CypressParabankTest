export class Landpage {

    GoToLandpage(){

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get(cy.xpath("//p[contains(.,'Experience the difference')]"))
    }
}