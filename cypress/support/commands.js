import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

Cypress.Commands.add('clickSearchField', () => {
	cy.get('input#search-form__input').should('be.visible').click()
})
Cypress.Commands.add('openBasket', () => {
	cy.get('.mh-cart').should('be.visible').click()
})
Cypress.Commands.add('openLoginWindow', () => {
	cy.get('.mh-profile').should('be.visible').click()
})

addMatchImageSnapshotCommand({
	failureTreshold: 0.0,
	failureThresholdType: 'percent',
	customDiffConfig: { threshold: 0.0 },
	capture: 'viewport',
})

Cypress.Commands.add('setResolution', size => {
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport(size)
	}
})
