class Products {

    
    get productTile() { return ('.chakra-stack.css-uaqjf') }
    get productName() { return ('.chakra-text.css-1n64n71') }
    get productDetailsName() { return ('.css-84zodg>h2.css-1dklj6k') }
    get productDetailsInfo() { return ('p.css-0') }
    get backToProductsBtn() { return ('.chakra-heading.css-18j379d') }
    get increaseProductAmountBtn() { return ('#product-increase') }
    get decreaseProductAmountBtn() { return ('#product-decrease') }
    get productImgs() { return ('.chakra-aspect-ratio>img') }
    get addToCartBtns() { return ('#add-to-cart') }
    get productCategoryTags() { return ('.css-1ccau2i') }
    get productPriceTags() { return ('.chakra-text.css-0') }
    get sortOption () { return ('#sort') }
    get clearFilter () { return ('#reset') }
    get catOption () { return('#category')}
    get productContainer () { return ('.chakra-stack.css-uaqjf')}
    get inputSearch () { return ('#search')}
    get allProductTitles () { return ('div .css-12qzrsi > div > div.css-n21gh5 > div > div > p.css-1n64n71')}
    get contactPageBtn () { return ('#top-contact')}
    get favoriteBtn () { return ('#add-to-favorite')}
    get remfavoriteBtn () { return ('#remove-favorite-btn')}
    get favoriteAlert () { return ('#toast-1')}
    get noFavMessage () { return ('#__next > div.chakra-container.css-1326l4r > div > h2')}
    get goToWishListBtn () { return ('#top-favorite > p') }
    get favoriteHeading () { return ('#top-favorite > p') }

    get navbarCart() { return ('#top-cart') }

    getProductId(num) { 
        let productId = `#product-${num}`
        return productId
    }  


    addItemToCart(itemNum){
        cy.get(this.getProductId(itemNum))
        .find(this.productImgs)
        .should('be.visible')
        .click()

        cy.get(this.backToProductsBtn).should('be.visible')
        cy.get(this.addToCartBtns).scrollIntoView().trigger('click')
    }

}

export default new Products()