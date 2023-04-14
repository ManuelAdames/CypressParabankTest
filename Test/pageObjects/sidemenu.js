export class SideMenuPages {

    AboutUsPage(){

        cy.xpath("//ul[@class='leftmenu']//a[contains(.,'About Us')]").click()
        cy.get(cy.xpath("//h1[contains(.,'ParaSoft Demo Website')]"))

    }
    
    ServicesPage(){

        cy.xpath("//ul[@class='leftmenu']//a[contains(.,'Services')]").click()
        cy.get(cy.xpath("//span[contains(.,'Available Bookstore SOAP services:')]"))
    }
      /*
    it('Products page', () => {
    //Test case 4 - visit Products
  
    cy.xpath("//ul[@class='leftmenu']//a[contains(.,'Products')]").click()
    cy.get(cy.xpath("//h1[contains(.,'Innovative and Intelligent Software Testing Platform')]"))
    })
  */
   AdminPage(){

         cy.xpath("//ul[@class='leftmenu']//a[contains(.,'Admin')]").click()
         cy.get(cy.xpath("//h1[contains(.,'Administration')]"))
   }



}