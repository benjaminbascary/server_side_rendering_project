/* global cy */
describe('Home Page and About Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('tests that the cite opens in home page and the title is visible', () => {
    cy.contains('Welcome');
  })

  it('tests that the <a> with the about link is rendered', () => {
    cy.contains('page!');
    cy.contains('page!').click();
  })

  it('Can navigate to the about page and content is rendered with the fortune itself', () => {
    cy.get('a:first').contains('page!');
    cy.get('a:first').click();
    cy.contains('About Meadowlark Travel');
  })

  it('fortune can be found after clicking de about link', () => {
    cy.get('a:first').click();
    cy.contains('Your fortune of the day:');
  })

  it('The logo renders in both home and about page', () => {
    cy.get('[alt="travel"]').should("be.visible");
    cy.get('a:first').click();
    cy.get('[alt="travel"]').should("be.visible");
  })

})

describe('Renders 404 and 500 pages', () => {
  it('Renders 404 page', () => {
    cy.visit('http://localhost:3000/404');
    cy.contains('404 - Not found!');
    cy.get('[alt="travel"]').should("be.visible");
  })

  it('Renders 500 page', () => {
    cy.visit('http://localhost:3000/500');
    cy.contains('500 - Server error!');
    cy.get('[alt="travel"]').should("be.visible");
  })
})