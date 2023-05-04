describe('Check search item', () => {
	// 1. Open marketplace url. Verify it.
	it('Open marketplace url. Verify it', () => {
		cy.fixture('BaseUrl').then(data => {
			const BaseUrl = data.BaseUrl
			cy.visit(BaseUrl)
			cy.url().should('include', 'allo.ua')
		})
	}),
		// 2. Search random item by name.
		it('Seach random item by name', () => {
			cy.get('input#search-form__input').type('samsung{enter}')
			cy.wait(3000)
		})
	// 3. Verify that all items are correctly displayed according to your searching request (only on the first page).
	it('Check that items match search request', () => {
		cy.get('div.product-card__content > a').each($a => {
			expect($a).to.contain('Samsung')
		})
	})
})
