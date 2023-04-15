export class SideMenuPages {
  
    AboutUsPage(){

      const aboutUsButton = cy.xpath("//ul[@class='leftmenu']//a[contains(.,'About Us')]")
      aboutUsButton.click()
      const aboutUsValidation = cy.xpath("//h1[contains(.,'ParaSoft Demo Website')]")
      aboutUsValidation.should('be.visible')
    }
    
    ServicesPage(){

      const servicesButton = cy.xpath("//ul[@class='leftmenu']//a[contains(.,'Services')]")
      servicesButton.click()
      const servicesValidation = cy.xpath("//span[contains(.,'Available Bookstore SOAP services:')]")
      servicesValidation.should('be.visible')
    }
      
   AdminPage(){

      const adminPageButton = cy.xpath("//ul[@class='leftmenu']//a[contains(.,'Admin')]")
      adminPageButton.click()
      const adminValidation = cy.xpath("//h1[contains(.,'Administration')]")
      adminValidation.should('be.visible')
   }

   /*
    it('Products page', () => {
    //Test case 4 - visit Products
  
    cy.xpath("//ul[@class='leftmenu']//a[contains(.,'Products')]").click()
    cy.get(cy.xpath("//h1[contains(.,'Innovative and Intelligent Software Testing Platform')]"))
    })
  */



}