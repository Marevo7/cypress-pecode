describe('Check Login with wrong credentials', () => {
	// 1. Open marketplace url. Verify it.
	it('Open marketplace url. Verify it', () => {
		cy.fixture('BaseUrl').then(data => {
			const BaseUrl = data.BaseUrl
			cy.visit(BaseUrl)
			cy.url().should('include', 'allo.ua')
		})
		// Compare elements on the Homepage
		cy.matchImageSnapshot()
	}),
		// 2. Open Login window - Go to login via "log and pass"
		it('Go to logination window', () => {
			cy.get('.mh-profile').click()
			cy.get('.auth__enter-password').click()
			// Check that auth window elements match the expected view
			cy.matchImageSnapshot()
			cy.fixture('credentials').then(data => {
				const wrongMail = data.WrongMail
				cy.get('input[name="phoneEmail"]').type(wrongMail)
			})
			cy.get('span').contains('Увійти').click()
		})
	// 3. Check that error messages are visible
	it('Error messages for Login and Password fields are visible', () => {
		cy.get('span.a-input__message.base-message.is-error')
			.should('contain', 'Введено некоректний email')
			.should('be.visible')
		cy.get('span.a-input__message.base-message.is-error')
			.should('contain', "Це поле є обов'язковим для заповнення")
			.should('be.visible')
	})
})
