describe('user can create a contact', () => {
	it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('Anastasiya')
		cy.get('#email').type('chypyhaanastasia@gmail.com')
		cy.get('#phone').type('0700 101010')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Full Stack developer student')
        cy.get('#twitter').type('@anastasiachypyha')
        cy.get('#submit').click()
    })
    it('displays a name of the new contact', () => {
		cy.get('#contact-list').should('contain', 'Anastasiya')
	})
	
	it('displays the phone number of the new contact', () => {
		cy.get('#contact-list').should('contain', '0700 101010')
	})
})