const elem = require('./elements').ELEMENTS;

class login {

    acessarURL() {
        cy.visit(Cypress.env('URL_BASE'))
    }

    informarEmailSenha(email,senha) {
        cy.digitaTextoNoCampo(elem.campoLogin, email)
        cy.digitaTextoNoCampo(elem.campoSenha, senha)
    }

    clicoBtnSigin() {
        cy.clicarElemento(elem.btnSignin)
    }

}
export default new login();