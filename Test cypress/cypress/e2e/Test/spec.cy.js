import { loadLandpage,  } from './actions/landpageAction';
import { login } from './actions/loginAction';
import { 
  clickHomeButton, 
  clickAboutUsSqareButton, 
  clickContactButton
  } from './actions/homeButtonsAction';
import { 
  clickAboutUsSidemenu, 
  clickServicesSidemenu, 
  clickAdminSidemenu
  } from './actions/sidemenuActions';

const dataJson = require('../../fixtures/data.json');

describe('Parabank test cases', () => {
  beforeEach(() => {
     loadLandpage();
  })
  
  require('cypress-xpath')
  require('chai');
  
  it('Log In', () => {
    //Test case 1 - Log in 
     login(dataJson.username,dataJson.password);
  })
  it('Click Home Button', () => {
    //Test case 2 - visit About Us page
    clickAboutUsSqareButton();
    clickHomeButton();
    //cy.xpath("//h1[contains(.,'ParaSoft Demo Website')]").should('be.visible')
  })
  it('Click About Us square button', () => {
    //Test case 3 - visit Services page
    clickAboutUsSqareButton();
  })
  it('Click Contact button', () => {
    //Test case 4 - visit Admin page
    clickContactButton();
  })

  it('Click the About Us button of the Sidemenu', () => {
     clickAboutUsSidemenu();
  })

  it('Click the Services button of the Sidemenu', () => {
    clickServicesSidemenu();
  })

  it('Click the Admin button of the Sidemenu', () => {
    clickAdminSidemenu();
  })
})