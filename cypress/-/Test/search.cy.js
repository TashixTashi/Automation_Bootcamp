import productsData from "../Data/products.data";
import AuthenticatePg from "../Page/Authenticate.pg";
import productsPg from "../Page/products.pg";

describe('Filter and Sort', () => {

    beforeEach(() => {
        Auth.login(users)
    })

    it(`Verify that a user is able to search for an item using it's full name`, () => { 
        Product.doSearch(products.products[0].name.trim())

        cy.get(Product.productName).should('contain', products.products[0].name.trim())
    })

    it(`Verify a user is able to search for an item using it's partial name`, () => { 
        Product.doSearch(products.products[0].name.trim().slice(2))

        cy.get(Product.productName).should('contain', products.products[0].name.trim())
    })

    it(`Verify a user is able to reset the search filter`, () => { 
        Product.doSearch(products.products[0].name.trim().slice(2))

        cy.get(Product.productResetFilter).click()
        cy.get(Product.productName).each(($elem, index) => {
            expect($elem.text()).equal(products.products[index].name.trim())
        })
    })

})