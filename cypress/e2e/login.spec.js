/// <reference types="cypress"/>

context('Funcionalidade Fazer login', () => {
    
    it ('Deve fazer login com sucesso.', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ebacteste@gmail.com')
        cy.get('#password').type('!@alunoteste01!@')
        cy.get('.woocommerce-form > .button').click()

         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
      'contain','Olá aluno_ebac')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario ou senha inválidos', () => {
    cy.get('#username').type('alunoebacteste@eba.com');
    cy.get('#password').type('!@alunoteste01!@');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error > li').should(
      'contain',
      'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
    })
    it.only('Deve emitir uma mensagem de erro, Senha Invalida!', () => {
        cy.get('#username').type('alunoebacteste@ebac.com');
        cy.get('#password').type('!@alunoteste01');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error').should('contain','Erro: a senha fornecida para o e-mail alunoebacteste@ebac.com está incorreta. Perdeu a senha?')
    })
});