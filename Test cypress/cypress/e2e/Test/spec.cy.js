import { Login } from './functions/login'
import { SideMenuPages } from './functions/sidemenu';
import { Buttons } from './functions/buttons';
import { Landpage } from './functions/landpage';
const chai = require('chai');

const login = new Login;
const SidePages = new SideMenuPages;
const buttonsC = new Buttons;
const getLandpage = new Landpage

describe('Parabank test cases', () => {
  beforeEach(() => {
     getLandpage.GoToLandpage();
  })
  
  require('cypress-xpath')
  /*
  it('Log In', () => {
    //Test case 1 - Log in 
     login.pageLogIn();

  })*/

    it('About Us page', () => {
    //Test case 2 - visit About Us page
     SidePages.AboutUsPage();
     //cy.xpath("//h1[contains(.,'ParaSoft Demo Website')]").should('be.visible')

  })
    it('Services page', () => {
    //Test case 3 - visit Services page
      SidePages.ServicesPage();
   
  })
    it('Admin page', () => {
    //Test case 4 - visit Admin page
      SidePages.AdminPage();

    })

  it('Home Button', () => {
    //Test case 5 - Home button
    buttonsC.HomeButton();
  })

  it('About Us Button', () => {
    //Test case 6 - About Us button
    buttonsC.AboutUsButton();
  })

  it('Contact Button', () => {
    //Test case 7 - Contact button

    buttonsC.ContactButton();
  })
})