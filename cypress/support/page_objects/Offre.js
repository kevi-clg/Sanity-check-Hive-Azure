import { checkbox } from "./checkboxFill";

export class Offre {
    // checkNb need to be 0-5
    Ajout(description, nbUsager, checkNb) {

        //remplir les différents inputs
        cy.get('[formcontrolname="description"]').type(description)

        cy.get('[formcontrolname="location"]').type('1234 testing avenue')


        // D'ont need that when the meeting is "présentiel"
        // cy.get('[formcontrolname="meetingLink"]').type('1234 testing avenue')


        // language
        cy.get('input').eq(1).click()
        cy.get('[role="option"]').eq(0).click()

        //the date
        cy.get('input').eq(2).click()
        cy.get('.btn-primary').eq(0).click()

        // présentiel
        cy.get('input').eq(4).click()

        // number of persons in the meeting
        if (nbUsager < 0) {
            nbUsager = 0
        } else if (nbUsager > 5) {
            nbUsager = 5
        }
        cy.get('input').eq(3).type(nbUsager)

        //wait because cypress d'ont let the time to the page to load
        cy.wait(2000)

        if (checkNb < 0) {
            checkNb = 0
        } else if (checkNb > 5) {
            checkNb = 5
        }
        checkbox.Fill(checkNb)

        //submiting
        cy.get('[type="submit"]').click()

        //publish
        cy.get('.btn-primary').click()

        cy.wait(2000)

        //go back to the posts
        cy.get('[class="btn btn-primary"]').click()

    }

    Demande(description, checkNb) {

        //remplir les différents inputs
        cy.get('[formcontrolname="description"]').type(description)

        // language
        cy.get('input').eq(1).click()
        cy.get('[role="option"]').eq(0).click()

        //wait because cypress d'ont let the time to the page to load
        cy.wait(2000)

        checkbox.Fill(checkNb)

        //submiting
        cy.get('[type="submit"]').click()

        //publish
        cy.get('.btn-primary').click()

        cy.wait(2000)

        //go back to the posts
        cy.get('[class="btn btn-primary"]').click()

    }

}

export const offre = new Offre()