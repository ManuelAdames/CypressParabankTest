export class Login {

    pageLogIn() {

        cy.xpath("//input[@name='username']").type("admin")
        cy.xpath("//input[@name='password']").type("password")
        cy.xpath("//input[@value='Log In']").click()
    }
}