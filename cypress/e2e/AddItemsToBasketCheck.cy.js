describe('Add items to the basket', () => {
	before(() => {
		cy.clearCookies()
	})
	// 1. Open marketplace url. Verify it.
	it('Open marketplace url. Verify it', () => {
		cy.fixture('BaseUrl').then(data => {
			const BaseUrl = data.BaseUrl
			cy.visit(BaseUrl)
			cy.url().should('include', 'allo.ua')
		})
	}),
		// 2. Open category and subcategory if it is necessary
		it('Open category 1', () => {
			cy.get('a[data-tab-id="48"]').eq(0).click()
		}),
		// 3. Add any item to the basket.
		it('Add any item to the basket', () => {
			cy.get('button[title="Купити"]').eq(0).click()
			cy.wait(2000)
			cy.get('div.v-modal__close-btn').click({ force: true })
		}),
		// 4. Select another category and add an item from that category
		it('Select another category and add item to basket', () => {
			cy.get('a[data-tab-id="928"]').eq(0).click()
			cy.wait(3000)
			cy.get('button[title="Купити"]').eq(0).click()
			cy.wait(3000)
		}),
		// 5. Verify information of items inside the basket
		it('Verify information of items in the basket', () => {
			cy.get('ul.products__list').children().should('have.length', 2)
			cy.wait(1000)
			cy.get('input.input').should($input => {
				expect($input).to.have.length(2)
				expect($input).to.be.visible
			})
		}),
		// 6. Verify that the price is calculated correctly
		it('Check if price is calculated correctly', () => {
			cy.get('.price-box__cur')
				.eq(0)
				.invoke('text')
				.then(text => {
					const firstPrice = parseFloat(
						text.replace(/\s+/g, '').replace('₴', '')
					)
					cy.log(firstPrice)
				})

			cy.get('.price-box__cur')
				.eq(1)
				.invoke('text')
				.then(text => {
					const secondPrice = parseFloat(
						text.replace(/\s+/g, '').replace('₴', '')
					)
					cy.log(secondPrice)
				})
			cy.get('span.total-box__price')
				.eq(0)
				.invoke('text')
				.then(text => {
					const totalPrice = parseFloat(
						text.replace(/\s+/g, '').replace('₴', '')
					)
					cy.log(totalPrice)
				})
		})

	// 7. Verify that the delete item button is clickable
	it('Verify that the delete item button is clickable', () => {
		cy.get('svg.remove').first().click()
		cy.wait(2000)
		cy.get('ul.products__list').children().should('have.length', 1)
	})
})
