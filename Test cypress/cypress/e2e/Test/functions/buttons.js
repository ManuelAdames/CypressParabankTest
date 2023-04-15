export class Buttons {

    HomeButton(){

        cy.xpath("//ul[@class='leftmenu']//a[contains(.,'About Us')]").click()
        cy.get(cy.xpath("//h1[contains(.,'ParaSoft Demo Website')]"))
        cy.xpath("//a[contains(.,'home')]").click()
        cy.xpath("//p[contains(.,'Experience the difference')]").should('be.visible')
    }

    AboutUsButton(){
        cy.xpath("//a[contains(.,'about')]").click()
        cy.xpath("//h1[contains(.,'ParaSoft Demo Website')]").should('be.visible')
    }

    ContactButton(){
        cy.xpath("//a[contains(.,'contact')]").click()
        cy.xpath("//h1[contains(.,'Customer Care')]").should('be.visible')
    }
}