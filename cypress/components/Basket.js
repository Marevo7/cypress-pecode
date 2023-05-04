export default class Basket {
	static openBasket() {
		cy.openBasket
	}

	static closeBasket() {
		cy.get('div.v-modal__close-btn').click({ force: true })
	}
}
