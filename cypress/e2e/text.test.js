describe("Text tests", () => {
    beforeEach(() => {
      cy.visit("/")
    })
    it("Has headings", () => {
        cy.get("h1").should("contain.text", "Bitcoin Converter")
        cy.get("h2").should("contain.text", "Currencies")
    })

    it("Has a button to add currencies", () => {
        cy.findByText("Add Currency").should("exist")
    })
  })