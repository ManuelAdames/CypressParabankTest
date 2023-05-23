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
     login(dataJson.username,dataJson.password);
  })
  it('Click Home Button', () => {
    clickAboutUsSqareButton();
    clickHomeButton();
  })
  it('Click About Us square button', () => {

    clickAboutUsSqareButton();
  })
  it('Click Contact button', () => {
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
