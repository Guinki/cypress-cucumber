import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import login from '../pages/login'
import header from '../pages/header'


Given("acesso a URL do site", () => {
  login.acessarURL()
});

When("clico em Sign In", () => {
  header.clicarSignin()
});

When("informo email {string} e senha {string}", (email, senha) => {
  login.informarEmailSenha(email,senha)
});

When("clico no botao Sign In", () => {
  login.clicoBtnSigin()
});

When("aparece no header {string}", (texto) => {
  header.verificaTextoBemVindoHeader(texto)
});
