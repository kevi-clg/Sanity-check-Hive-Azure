describe('Test with backend', () => {

beforeEach('login to application', () => {
  cy.intercept({method: 'GET', path: 'tags'}, {fixture: 'tags.json'})
  cy.loginToApplication()
  
})


  it('verify correct request and response', () => {

    cy.intercept('POST', 'https://conduit-api.bondaracademy.com/api/articles/').as('postArticles')

    cy.contains('New Article').click()
    cy.get('[formcontrolname="title"]').type('this is the title')
    cy.get('[formcontrolname="description"]').type('this is the description')
    cy.get('[formcontrolname="body"]').type('this is the body')
    cy.contains('Publish Article').click()


    cy.wait('@postArticles').then( xhr => {
      console.log(xhr)
      expect([200, 201]).to.include(xhr.response.statusCode);
      expect(xhr.request.body.article.body).to.equal('this is the body')
      expect(xhr.response.body.article.description).to.equal('this is the description')
    })

  })


  it('verify popular tag are displayed', () => {
    cy.get('.tag-list').should('contain', 'cypress').and('contain', 'automation').and('contain', 'testing')
  })

  it('verify global feed likes count', () => {
    cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/feed*', {"articles":[],"articlesCount":0})
    cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles*', {fixture: 'articles.json'})

    cy.contains('Global Feed').click()
    cy.get('app-article-list button').then(heartList => {
      expect(heartList[0]).to.contain('1')
      expect(heartList[1]).to.contain('5')
    })

    cy.fixture('articles.json').then(file => {
      const articleLink = file.articles[1].slug
      file.articles[1].favoritesCount = 6
      cy.intercept('POST', 'https://conduit-api.bondaracademy.com/api/articles/'+ articleLink + '/favorite', file)
    })

    cy.get('app-article-list button').eq(1).click().should('contain', '6')

  })

  it('intercepting and modifying te request and response', () => {

    cy.intercept('POST', '*/articles/', (req) => {
      req.body.article.description = "this is a description 2"
    }).as('postArticles')

    // cy.intercept('POST', '**/articles', (req) => {
    //   req.reply( res => {
    //     expect(res.body.article.description).to.equal('this is a description')
    //     res.body.article.description = "this is a decription 2"
    //   })
    // }).as('postArticles')

    cy.contains('New Article').click()
    cy.get('[formcontrolname="title"]').type('this is the title 2')
    cy.get('[formcontrolname="description"]').type('this is the description')
    cy.get('[formcontrolname="body"]').type('this is the body')
    cy.contains('Publish Article').click()


    cy.wait('@postArticles').then( xhr => {
      console.log(xhr)
      expect([200, 201]).to.include(xhr.response.statusCode);
      expect(xhr.request.body.article.body).to.equal('this is the body')
      expect(xhr.response.body.article.description).to.equal('this is a description 2')
    })

  })

  it('delete a new article in a global feed', () => {


    const bodyRequest = {
      "article": {
          "title": "Request from API", 
          "description": "API testing", 
          "body": "Angular is cool", 
          "tagList": []
          }
    }

  
    cy.get('@token').then(token => {
      

      cy.request({
        url: Cypress.env("apiUrl") + '/api/articles/',
        headers: {'Authorization': 'Token ' + token},
        method: 'POST',
        body: bodyRequest
      }).then(response => {
        expect(response.status).to.equal(201)
      })

      cy.contains('Global Feed').click()
      cy.wait(1000)
      cy.get('.article-preview').first().click()
      cy.get('.article-actions').contains('Delete Article').click()

      cy.request({
        url: Cypress.env("apiUrl") + '/api/articles?limit=10&offset=0',
        headers: {'Authorization': 'Token ' + token},
        method: 'GET',

      }).its('body').then(body => {
        expect(body.articles[0].title).not.to.equal('Request from API')
      })

    })

  })




})