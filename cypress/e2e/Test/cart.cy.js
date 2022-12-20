import Authentication_usersData from "../Data/Authentication_users.data";
import productsPg from "../Page/products.pg";
import cartPg from "../Page/cart.pg";

describe('Cart', () => {
    beforeEach(() => {
      Auth.login(users)
    })

    it('Verify a user is able to see the total of items in their cart', () => {
      Product.addItemToCart(0)
      cy.get(Cart.cartBackBtn).should('be.visible')

      cy.get(Cart.cartBackBtn).click()
      cy.get(Product.backToProductsBtn).click()

      Product.addItemToCart(5)

      cy.get(Cart.amountOfItemsIcon).should('have.text', ' 6 ')
    })

    it('Verify a user is able to decrease the amount of items in their cart', () => {
        Product.addItemToCart(0)
        
        Cart.decrementFirstItemInCart()
        cy.get(Cart.emptyCartTitle).contains(' Your cart is empty. ')
      })
  
    
  })