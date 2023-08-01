/// <reference types="cypress"/>

context('Funcionalidade Pre Cadastro', () => {
    beforeEach(() => {

      cy.visit('minha-conta')

    });
  
    it('Deve Realizar o Pre Cadastro com sucesso', () => {
      cy.get('#reg_email').type('ebacteste@gmail.com')
      cy.get('#reg_password').type('!@alunoteste01!@')
      cy.get(':nth-child(4) > .button').click()
  
      cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
      cy.get('#account_first_name').type('Ebac Name')
      cy.get('#account_last_name').type('Teste Ebac')
      cy.get('.woocommerce-Button').click()
  
      cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')

    });
  });