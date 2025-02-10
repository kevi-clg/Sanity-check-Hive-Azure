// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToApplication', () => {

    const userCredential = {
        "user": {
            "email": Cypress.env("username"),
            "password": Cypress.env("password")
        }
    }

    // const loginUrl = 'https://keycloak.ruche.app/realms/hive/protocol/openid-connect/token'
    
    // // Data you want to send in the request
    // const loginData = {
    //     grant_type: "password",
    //     client_id: "frontend",
    //     username: "test@test.com",
    //     password: "password"
    // };

    // // Convert the data to x-www-form-urlencoded format
    // const formBody = Object.keys(loginData)
    //   .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(loginData[key]))
    //   .join('&');
    
    // cy.request({
    //   method: 'POST',
    //   url: loginUrl,
    //   body: formBody,  // Form body in x-www-form-urlencoded format
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'  // Set the correct content type
    //   }
    // }).its('body').then(body => {
    //     const token = body.access_token

    //     const userData = {
    //         sub: "a183d6a2-9cef-4e2c-8298-2c760037b789",
    //         email: "test@test.com",
    //         email_verified: true,
    //         family_name: "Tester",
    //         given_name: "Test",
    //         name: "Test Tester",
    //         preferred_username: "test@test.com"
    //     };

    //     cy.wrap(token).as('token')
    //     cy.visit('https://dev.ruche.app/front/home', {
    //         onBeforeLoad(win){
    //             win.localStorage.setItem('jwtToken', token)
    //             win.localStorage.setItem('userData', JSON.stringify(userData))
    //         },
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //           }
    //     })
    // })
    cy.visit(Cypress.env('Url'))

    cy.wait(2000)

    cy.get('.btn').click()

    cy.get('[name="username"').clear().type(userCredential.user.email)
    cy.get('[name="password"').clear().type(userCredential.user.password)
    cy.get('[name="login"').click()

})

Cypress.Commands.add('clickOnMenu', () =>{
    cy.get('[class="btn"][aria-expanded="false"]').click()
})
