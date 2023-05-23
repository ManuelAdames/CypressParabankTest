import { homeElements } from "../elements/home-Elements";
import { adminElements } from "../elements/admin-page-Elements"
import { servicesElements } from "../elements/servicesPage-Elements"
import { aboutUsPageElements } from "../elements/aboutUs-page-Elements";

  
export function clickAboutUsSidemenu(){

      cy.xpath(homeElements.aboutUsButton.sideMenuSelector)
      .click()
      .wait(250)
      
      cy.xpath(aboutUsPageElements.aboutUsVerify.selector)
      .should('be.visible')
    }
    
export function clickServicesSidemenu(){

      cy.xpath(homeElements.serviceButton.selector)
      .click()
      .wait(250)

      cy.xpath(servicesElements.servicesPageVerify.selector)
      .should('be.visible')
    }
      
export function clickAdminSidemenu(){

      cy.xpath(homeElements.adminButton.selector)
      .click()
      .wait(250)
      
      cy.xpath(adminElements.adminPageVerify.selector)
      .should('be.visible')
   }
