/// <reference types="cypress"/>

context('Funcionalidade Add Produto no carrinho', () => {
    beforeEach(() => {
      cy.visit('produtos')
    });
    var quantidade = 5;
  
    it('Deve Add Produto no Carrinho', () => {
      cy.get('#primary-menu > .menu-item-629 > a').click()
      cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover'
      ).click()
      cy.get('.button-variable-item-M').click()
      cy.get('.button-variable-item-Green').click()
      cy.get('.input-text').clear().type(quantidade)
      cy.get('.single_add_to_cart_button').click()
  
      cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
      cy.get('.woocommerce-message').should(
        'contain',
        quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.');
      cy.get('.woocommerce-message > .button').click()
  
      cy.get('.checkout-button').click()
      cy.get('.showlogin').click()
  
      cy.get('#username').type('alunoebacteste@ebac.com')
      cy.get('#password').type('!@alunoteste01!@')
      cy.get('.woocommerce-button').click()
      cy.get('.woocommerce-info').should( 'contain','Você tem um cupom de desconto? Clique aqui e informe o código do seu cupom de desconto' );
   
    });
  });