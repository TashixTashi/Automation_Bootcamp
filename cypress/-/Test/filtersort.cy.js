import Authenticate from '../Page/Authenticate.pg'
import Product from '../Page/products.pg'
import Cart from '../Data/Cart.pg'
import Product from '../Data/products.data'

escribe('Filter and Sort', () => {

    beforeEach(() => {
        Auth.login(users)
    })

    it('Verify that a user is able to sort items from A to Z', () => { 
        
        Product.selectFilter(products.filter['A to Z'])
        //wait added to give the grid time to update
        cy.wait(800)
        products.products.sort((a, b)=>{
            if(a.name.trim()>b.name.trim()){
                return 1
            }else{
                return -1
            }
        })

        cy.get(Product.productName).each(($elem, index) => {
            expect($elem.text()).equal(products.products[index].name.trim())
        })
    })

    it('Verify that a user is able to sort items from Z to A', () => {
        Product.selectFilter(products.filter['Z to A'])
        //wait added to give the grid time to update
        cy.wait(800)
        //sorts the product list by name 
        products.products.sort((a, b)=>{
            if(a.name.trim()>b.name.trim()){
                return 1
            }else{
                return -1
            }
        }).reverse()

        cy.get(Product.productName).each(($elem, index) => {
            expect($elem.text()).equal(products.products[index].name.trim())
        })
    })

    it('Verify that a user is able to sort items on the product page from low to high', () => {
        Product.selectFilter(products.filter['Low to High'])
        
        cy.wait(800)
        products.products.sort((a, b) => a.price - b.price)

        cy.get(Product.productPriceTags).each(($elem, index) => {
            
            expect($elem.text()).equal(`$${products.products[index].price}`)
        })

})
})
