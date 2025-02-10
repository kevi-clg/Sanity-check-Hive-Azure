

describe('Test Log out', () => {
    beforeEach('login to app', () => {
        cy.loginToApplication()
    })

    it('verify use can log out successfuly', {retries: 2}, () => {
        cy.contains('Settings').click()
        cy.contains('Or click here to logout').click()
        cy.get('.navbar-nav').should('contain', 'Sign up')
    })
})