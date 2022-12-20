import Authentication from '../Page/products.pg'
import Product from '../Page/products.pg'


it('Verify that a user can add an item to their cart', () => 
{
  cy.visit("https://ui-automation-camp.vercel.app/")
  cy.get("#signInOrRegister").click();
  cy.origin(
    "https://dev-mlluudmotpwoldtv.us.auth0.com",
    { args: {} },
    ({}) => 
    {
     cy.get('[type="email"]').type("tashcamp@yopmail.com");
     cy.get('[type="password"]').type("P@ssword1!", { log: false });
     cy.get("[name=submit]").click();  
     cy.get(Product.getProductId(4))
   .find(Product.productImgs)
   .should('be.visible')
   .click()
   cy.wait(3000)
   cy.get(Product.backToProductsBtn).should('be.visible')
   cy.get(Product.addToCartBtns).click()
   cy.get(Cart.cartCheckoutBtn).should('be.visible')

   cy.get(Cart.itemInCartName).eq(4).should('have.text', products.products[4].name)

  })

})