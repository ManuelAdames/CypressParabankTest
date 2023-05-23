const loginField = {
  selector: '//input[@name="username"]'
 }

const passwordField = {
  selector: "//input[@name='password']"
 }

const loginButton = {
  selector: "//input[@value='Log In']"
}

const homeButton = {
  selector: "//a[contains(.,'home')]"
}

const aboutUsButton = {
  squareButtonSelector: "//a[contains(.,'about')]",
  sideMenuSelector: "//ul[@class='leftmenu']//a[contains(.,'About Us')]"
}

const contactButton = {
  selector: "//a[contains(.,'contact')]"
}

const serviceButton = {
  selector: "//ul[@class='leftmenu']//a[contains(.,'Services')]"
}

const adminButton = {
  selector: "//ul[@class='leftmenu']//a[contains(.,'Admin')]"
}

const productsButton = {
  selector: "//ul[@class='leftmenu']//a[contains(.,'Products')]"
}

const homeVerify = {
  selector: "//li[contains(.,'ATM Services')]",
}


export const homeElements = {
  loginField,
  aboutUsButton,
  passwordField,
  homeButton,
  contactButton,
  adminButton,
  serviceButton,
  productsButton,
  loginButton,
  homeVerify
}


