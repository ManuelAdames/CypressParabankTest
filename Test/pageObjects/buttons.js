export class Buttons {

    HomeButton(){

        cy.xpath("//ul[@class='leftmenu']//a[contains(.,'About Us')]").click()
        cy.get(cy.xpath("//h1[contains(.,'ParaSoft Demo Website')]"))
        cy.xpath("//a[contains(.,'home')]").click()
        cy.get(cy.xpath("//p[contains(.,'Experience the difference')]"))
    }

    AboutUsButton(){
        cy.xpath("//a[contains(.,'about')]").click()
        cy.get(cy.xpath("//h1[contains(.,'ParaSoft Demo Website')]"))
    }

    ContactButton(){
        cy.xpath("//a[contains(.,'contact')]").click()
        cy.get(cy.xpath("//h1[contains(.,'Customer Care')]"))
    }
}