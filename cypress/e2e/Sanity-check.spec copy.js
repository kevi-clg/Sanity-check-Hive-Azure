import { offre } from "../support/page_objects/Offre.js";

describe('Sanity Check', () => {
    beforeEach(() => {
        cy.loginToApplication();
        cy.wait(15000)
        //waits are there for loading delays
    });
    // describe.only('first part', () => {
    //     it('2 - opening floating menu', () => {
    //         cy.get('[touranchor="floating-button"]').click()
    //         cy.get('[touranchor="floating-button"].active')
    //     })

    //     it('3 - should open in dashboard after login', () => {
    //         // look if im in dashboard
    //         cy.get('app-dashboard')
    //     })

    //     it('4 - when user clicks on principal menu, it should open', () => {
    //         // click on principal menu
    //         cy.clickOnMenu()
    //         // look if menu is open
    //         cy.get('[class="btn show"][aria-expanded="true"]')
    //     })


    //     it('5 - when user clicks on notification menu, it should open', () => {
    //         // click on notification menu
    //         cy.get('[key="notifications"]').click()
    //         // look if menu is open
    //         cy.get('app-notification')
    //     })

    //     it('6 - when click on the profile picture, it should open the update profil page', () => {
    //         // click on profile picture
    //         cy.get('.user-picture-rounded').click()
    //         // look if update profil page is open
    //         cy.get('app-user-preview')
    //     })
    // })

    describe('second part', () => {
        // it('7 - Ajouter offre d\'expertise by the floating button', () => {

        //     const description = 'created by floating button'
        //     const nbPersonne = 3
        //     const checkNb = 1
        //     //visiter la page d'ajout d'offre d'expertises
        //     cy.get('[touranchor="floating-button"]').click()
        //     cy.get('.fab-button-text').eq(0).click()


        //     //ajouter une offre
        //     offre.Ajout(description, nbPersonne, checkNb)

        //     //check if it's posted
        //     cy.wait(2000)

        //     cy.get('.my-meetings').should('contain', description)



        // })

        // it('8 - Ajouter offre d\'expertise by the dashborad', () => {
        //     //cy.wait(2000)

        //     // click on see all my meetings
        //     cy.get('[key="arrow-right"]').eq(0).click()

        //     // click on create new meeting
        //     cy.get('[key="arrow-right"]').click()

        //     //ajouter une offre
        //     const description = 'created by arrow-right'
        //     offre.Ajout(description, 6, 3)

        //     //check if it's posted
        //     cy.wait(2000)

        //     cy.get('.my-meetings').should('contain', description)

        // })


        // it('9 - Ajouter demande d\'expertise by the floating button', () => {
        //     const description = 'created by floating button'
        //     //visiter la page d'ajout de demande d'expertises
        //     cy.get('[touranchor="floating-button"]').click()
        //     cy.get('.fab-button-text').eq(1).click()

        //     //ajouter une demande
        //     offre.Demande(description, 5)

        //     //check if it's posted
        //     cy.wait(2000)

        //     cy.get('.my-meetings').should('contain', description)

        // })

        // it('10 - Ajouter demandev d\'expertise by the dashboard', () => {
        //     const description = 'created by arrow-right'

        //     //cy.wait(3000)

        //     // click on see all my requests
        //     cy.get('[key="arrow-right"]').eq(2).click()

        //     // click on create new request
        //     cy.get('[key="arrow-right"]').click()

        //     //ajouter une demande
        //     offre.Demande(description, 5)

        //     //check if it's posted
        //     cy.wait(3000)

        //     cy.get('.my-meetings').should('contain', description)
        // })

        // it('11 - Tableau les rencontres', () => {
        //     // click on floating menu
        //     cy.clickOnMenu()
        //     // look if menu is open and click on "les rencontres"
        //     cy.get('[class="dropdown-menu dropdown-menu-end shadow show"]').find('li').eq(1).click()

        //     //check if we are in "Les rencontres" page
        //     cy.get('[data-unique-id="meeting-container"]')

        // })

        // it('12 - Tableau les requetes', () => {
        //     // click on floating menu
        //     cy.clickOnMenu()
        //     // look if menu is open and click on "les requetes"
        //     cy.get('[class="dropdown-menu dropdown-menu-end shadow show"]').find('li').eq(2).click()

        //     //check if we are in "Les requetes" page
        //     cy.get('[data-unique-id="request-container"]')

        // })

        // it('13 - rencontre ', () => {
        //     //cy.wait(3000)

        //     // click on see all my meetings
        //     cy.get('[key="arrow-right"]').eq(0).click()

        //     cy.get('[data-unique-id="meeting-container"]')
        // })

        it('14 - ', () => {
            //cy.wait(3000)

            // click on see all my meetings
            cy.get('[key="arrow-right"]').eq(2).click()

            cy.get('[data-unique-id="request-container"]')
        })

        it('15 - ', () => {
            //cy.wait(3000)
            // click on "rencontre auquelles je participerai"
            cy.get('[key="arrow-right"]').eq(1).click()

            cy.get('[data-unique-id="meeting-container"]')
        })
    })



})