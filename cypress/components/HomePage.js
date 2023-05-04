export default class HomePage {
	static openPage() {
		cy.visit('https://allo.ua')
		cy.url().should('include', 'allo.ua')
	}
}
