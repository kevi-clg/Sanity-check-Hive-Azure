export class checkboxFill{

    Fill(index){
        
        cy.get('.accordion-item').eq(index).click()
        cy.get('[type="checkbox"]').eq(0).check()
        cy.get('.accordion-item').eq(index).click()
        
    }

}

export const checkbox = new checkboxFill()