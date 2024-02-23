// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('digitaTextoNoCampo', (elemento, texto) => {
    cy.get(elemento)
        .type(texto)
})

Cypress.Commands.add('verificaTextoNoElemento', (elemento, texto) => {
    cy.get(elemento)
        .should('have.text', texto)
})

Cypress.Commands.add('verificaTextoNoElementoNaoExiste', (elemento, texto) => {
    cy.get(elemento)
        .should('not.have.text', texto)
})

Cypress.Commands.add('contemTextoNaPagina', (texto) => {
    cy.contains(texto)
})

Cypress.Commands.add('verificaUrl', (url) => {
    cy.url()
        .should('be.equal', url)
})

Cypress.Commands.add('clicarElemento', (elemento) => {
    cy.get(elemento)
        .click({ force: true })
})

Cypress.Commands.add('verificaElementoVisivel', (elemento) => {
    cy.get(elemento)
        .should('be.visible')
})

Cypress.Commands.add('verificaElementoNaoExiste', (elemento) => {
    cy.get(elemento)
        .should('not.exist')
})

Cypress.Commands.add('clicarNoTexto', (texto) => {
    cy.contains(texto)
        .click()
})

Cypress.Commands.add('verificaElementoContemClass', (elemento, nome) => {
    cy.get(elemento)
        .should('have.class', nome)
})

Cypress.Commands.add('verificaElementoContemAtributo', (elemento, nome) => {
    cy.get(elemento)
        .should('have.attr', nome)
})

Cypress.Commands.add('realizarUploadArquivo', (arquivo) => {
    cy.get('input[type=file]')
        .selectFile(arquivo, { force: true })
})

Cypress.Commands.add('apertarTecla', (tecla) => {
    cy.get('body')
        .type(tecla)
})

Cypress.Commands.add('verificaBtnDesabilitado', (elemento) => {
    cy.get(elemento)
        .should('not.be.enabled')
})

Cypress.Commands.add('clicarItemGridSiblings', (texto, tag, tipo) => {
    cy.contains(texto)
        .siblings(tag)
        .find(tipo)
        .click({ force: true })
})

Cypress.Commands.add('clicarItemGridSiblingsInParent', (texto, tagParent, tagSiblings, tipo) => {
    cy.contains(texto)
        .parent(tagParent)
        .siblings(tagSiblings)
        .find(tipo)
        .click({ force: true })
})

Cypress.Commands.add('clicarItemGridParent', (texto, tag, tipo) => {
    cy.contains(texto)
        .parent(tag)
        .parent(tag)
        .find(tipo)
        .click({ force: true })
})

Cypress.Commands.add('verificaLeituraArquivoJson', (nomeArquivo, atributoArquivoJson, textoEsperado) => {
    cy.readFile("cypress\\downloads\\" + nomeArquivo).its(atributoArquivoJson).should('eq', textoEsperado)
})

Cypress.Commands.add('verificaContemTextoNoElemento', (elemento, texto) => {
    cy.get(elemento)
        .should('contain.text', texto)
})

Cypress.Commands.add('verificaTextoNaoExisteNaPagina', (texto) => {
    cy.contains(texto)
        .should('not.exist')
})

Cypress.Commands.add('limpaTextoNoCampo', (elemento) => {
    cy.get(elemento)
        .clear()
})

Cypress.Commands.add('clicarElementoForce', (elemento) => {
    cy.get(elemento)
        .click({ force: true })
})