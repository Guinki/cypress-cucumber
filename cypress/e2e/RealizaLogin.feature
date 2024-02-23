Feature: Realiza Login no site

    Scenario: Login com sucesso
        Given acesso a URL do site
        And clico em Sign In
        When informo email "testeguilhermeqa@gmail.com" e senha "teste@123"
        And clico no botao Sign In
        Then aparece no header "Welcome, Guilherme Andrade!"
        