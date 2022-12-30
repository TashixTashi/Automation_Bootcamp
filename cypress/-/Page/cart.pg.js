class Cart {

    get cartTitle() { return ('.snipcart-cart__secondary-header') }
    get cartCheckoutBtn() { return ('button.snipcart-button-primary') }
    get cartBackBtn() { return ('.snipcart-cart-header__close-button ') }
    get cartItems() { return ('ul.snipcart-item-list') }

    get itemCartName() { return ('h2.snipcart-item-line__title') }
    get itemCartDescription() { return ('.snipcart-item-description') }
    get cartRemoveItem() { return ('.snipcart-button-icon.is-danger>.snipcart__icon') }
    get quantityInCart() { return ('.snipcart-item-quantity__quantity > .snipcart__font--secondary') }
    get cartTotal() { return ('.snipcart-summary-fees__amount') }

    get numberOfItemsIcon() { return ('.snipcart-cart-header__option') }
    get emptyCart() { return ('.snipcart-empty-cart__title') }

    get decreaseInCartBtn() { return ('button[aria-label="Decrement quantity"]') }
    get deleteItemBtn () { return ('button[title="Remove item"]')}
    get emptyCartMessage () { return ('#snipcart > div > div > div.snipcart-layout__content > section > h1')}

    deleteFirstItemInCart() { 
        cy.get(this.decreaseInCartBtn)
        .eq(0)
        .should('be.visible')
        .click()
    }
    
}
export default new Cart()