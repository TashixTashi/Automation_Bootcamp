import Authenticate from '../Page/products.pg'
import Product from '../Page/products.pg'
import Cart from '../Data/cart.pg'

describe('Add-to-cart', () => {
  beforeEach(() => {
      cy.visit('/')
      cy.get(Authen.signInRegisterBtn).click();
      //Login on to site.
      cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: user },
        (user) => {
          cy.get('#1-email').type(user[2].email)
          cy.get('#1-password').type(user[2].password)
          cy.get('#1-submit').click()
        }
      );
  })
  it('Verify that a user can add multiple items to their cart', () => {
    cy.get(Product.getProductId(4))
    .find(Product.productImgs)
    .should('be.visible')
    .click()

    cy.get(Product.backToProductsBtn).should('be.visible')
    cy.get(Product.addToCartBtns).click()
    cy.get(Cart.cartCheckoutBtn).should('be.visible')

    cy.get(Cart.cartBackBtn).click()
    cy.get(Product.backToProductsBtn).click()

    cy.get(Product.getProductId(5))
    .find(Product.productImgs)
    .should('be.visible')
    .click()

    cy.get(Product.backToProductsBtn).should('be.visible')
    cy.get(Product.addToCartBtns).click()

    cy.get(Cart.itemInCartName).eq(0).should('have.text', products.products[1].name)
    cy.get(Cart.itemInCartName).eq(1).should('have.text', products.products[0].name)

})

it('Verify that a user can add a single item to the cart', () => {
  cy.get(Product.getProductId(0))
  .find(Product.productImgs)
  .should('be.visible')
  .click()

  cy.get(Product.backToProductsBtn).should('be.visible')
  cy.get(Product.addToCartBtns).click()
  cy.get(Cart.cartCheckoutBtn).should('be.visible')

  cy.get(Cart.itemInCartName).eq(9).should('have.text', products.products[0].name)


})

it('Verify that the total increase with each item added', () => {
  cy.get(Product.getProductId(0))
  .find(Product.productImgs)
  .should('be.visible')
  .click()

  cy.get(Product.backToProductsBtn).should('be.visible')
  cy.get(Product.addToCartBtns).click()
  cy.get(Cart.cartCheckoutBtn).should('be.visible')

  cy.get(Cart.cartBackBtn).click()
  cy.get(Product.addToCartBtns).click()

  cy.get(Cart.cartTotal)
  .should('be.visible')
  .contains(`${products.products[0].price+products.products[0].price}`)
})


})
