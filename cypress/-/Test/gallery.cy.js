import Authenticate from '../Page/Authenticate.pg'
import AuthenticatePg from "../Page/Authenticate.pg";
import Product from '../Page/products.pg'

describe('Verify that each product', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(Auth.signInOrRegisterBtn).click();
        cy.origin(
          "https://dev-mlluudmotpwoldtv.us.auth0.com",
          { args: users },
          (users) => {
            cy.get('#1-email').type(users[0].email)
            cy.get('#1-password').type(users[0].password)
            cy.get('#1-submit').click()
          }
        );
    })

    it('Verify that each product has a title', () => {
        cy.get(Product.productContainer).each(($el) => {
            cy.wrap($el).children('.chakra-stack.css-n21gh5')
            .children('.chakra-stack.css-46p1lt').children('.chakra-stack.css-1oeb4ru')
            .children('p.chakra-text.css-1n64n71').should('exist')
        
        })
    })

    it('Verify that each product has a category', () => {
        cy.get(Product.productContainer).each(($el) => {
            cy.wrap($el).children('.chakra-stack.css-n21gh5')
            .children('.chakra-stack.css-46p1lt').children('.chakra-stack.css-1ieohnc')
            .children('.css-1ccau2i').should('exist')
        })
    })

    it('Verify that each product has a price', () => {
        cy.get(Product.productContainer).each(($el) => {
            cy.wrap($el).children('.chakra-stack.css-n21gh5')
            .children('.chakra-stack.css-46p1lt').children('.chakra-stack.css-1ieohnc')
            .children('p.chakra-text.css-0').should('exist')
        })
    })

})