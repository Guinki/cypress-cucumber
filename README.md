# Automação de Testes - Cypress

Autor:  
Guilherme Henrique de Andrade Araújo  

Email:   
guihenrique1616@hotmail.com

Requisitos:

* NodeJS 18.6 (https://nodejs.org/dist/v18.16.0/)
    - node -v
* cypress-cucumber-preprocessor v18.0.1 (https://github.com/badeball/cypress-cucumber-preprocessor)
* Cypress 12.14.0 (https://www.cypress.io)
    - npm install cypress@12.14.0 --save-dev
* VS Code IDE (https://code.visualstudio.com)
    - Adicionar ao settings.json da IDE o atributo:
        - "cucumberautocomplete.steps": [
        "cypress/support/step_definitions/*.cy.js"
    ]
* Allure (https://www.npmjs.com/package/allure-commandline)
    - Requer Java 8 ou superior
    - npm install -g allure-commandline --save-dev

Instalar projeto:  
* Instalar o NodeJS 18.6  
* Instalar o Cypress: __npm install cypress@12.14.0 --save-dev__
* Instalar o Allure: __npm install -g allure-commandline --save-dev__

Executar projeto:

* Teste com interface visual Cypress: __npx cypress open__
* Teste sem interface visual Cypress: __npm run cy:run__
* Teste sem interface visual com relatório ao final da execução: __npm run test:relatorio__
* Teste sem interface visual sem relatório ao final da execução: __npm run test__
* Gerar e abrir relatório: __npm run relatorio__
* Gerar relatório: __npm run allure:generate__
* Abrir relatório: __npm run allure:open__
* Apagar relatório gerado: __npm run allure:clear__
