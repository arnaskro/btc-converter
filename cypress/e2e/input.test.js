describe("Input tests", () => {
    beforeEach(() => {
      cy.visit("/")
    })
    it("Has an input", () => {
        cy.get("input").should('exist')
    })
    it("Can type input", () => {
        cy.get("input").type('1000.00012')
    })
  })