const {fakerPT_BR: faker} = require('@faker-js/faker');

class GeradorFaker{
    gerarTextoUpperCase(){
        var codigo = this.removerCaracteresEspeciais(faker.commerce.department())
        + "_" + this.removerCaracteresEspeciais(faker.commerce.product())
        + "_" + this.removerCaracteresEspeciais(faker.commerce.productMaterial());

        return codigo.toUpperCase();
    }

    gerarTextoUpperCaseInvalido(){
    }

    gerarCamelCase(){
        var codigo = this.removerCaracteresEspeciais(faker.commerce.department().toLocaleLowerCase())
        + this.removerCaracteresEspeciais(faker.commerce.product())
        + this.removerCaracteresEspeciais(faker.commerce.productMaterial());

        return codigo;
    }

    gerarNumerico(){
        return faker.number.int();
    }

    gerarDescricao(){
        var descricao = faker.location.street();
        return descricao;
    }

    gerarNome(){
        var nome = faker.company.name();
        return nome;
    }

    gerarNomePessoa(){
        var nome = faker.person.fullName();
        return nome;
    }

    gerarJustificativa(){
        var justificativa = faker.commerce.productDescription();

        return justificativa;
    }

    removerCaracteresEspeciais(texto){
        return texto.replace(/[^a-zA-Z0-9]/g, "");
    }
}

export default new GeradorFaker();
