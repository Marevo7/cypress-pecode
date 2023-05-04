describe('PriceFilterCheck', () => {
	// 1. Open marketplace url. Verify it.
	it('Open marketplace url', () => {
		cy.fixture('BaseUrl').then(data => {
			const BaseUrl = data.BaseUrl
			cy.visit(BaseUrl)
			cy.url().should('include', 'allo.ua')
		})
	}),
		// 2. Open category and subcategory if it is necessary.
		it('Open list of items with available filters', () => {
			cy.clickSearchField().type('samsung{enter}')
		}),
		// 3. Navigate to the filters section, for the following marketplaces
		// correctly by the "from" and "to" price filters you entered.
		it('Navigate to filter "Price" and set "from and "to"', () => {
			cy.get('form[data-range-filter="price"]>input[type="text"]')
				.eq(0)
				.clear()
				.type('200')
			cy.get('form[data-range-filter="price"]>input[type="text"]')
				.eq(1)
				.clear()
				.type('900')
		}),
		// 4. Verify that all the items on the page are sorted
		// correctly by the "from" and "to" price filters you entered.
		it('Verify correct work of filter', () => {
			cy.get('button.f-popup__btn').click()
			cy.wait(7000)
			cy.get('a[data-id="price"]').should('be.visible')
			cy.get('span.sum')
				.eq(0)
				.invoke('text')
				.then(text => {
					const number = parseFloat(text)
					expect(number).to.be.within(200, 900)
				})
			cy.get('span.sum')
				.eq(1)
				.invoke('text')
				.then(text => {
					const number = parseFloat(text)
					expect(number).to.be.within(200, 900)
				})
		})
})
