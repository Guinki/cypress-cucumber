const elem = require('./elements').ELEMENTS;

class header{

    clicarSignin(){
        cy.clicarElemento(elem.signinButton)
    }

    verificaTextoBemVindoHeader(texto){
        cy.verificaTextoNoElemento(elem.textoBemVindo, texto)
    }

}
export default new header();