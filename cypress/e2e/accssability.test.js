describe("Accessibility tests", () => {
    beforeEach(() => {
      cy.visit("/").get("main").injectAxe()
    })
    it("Has no detectable accessibility violations on load", () => {
      cy.checkA11y()
    })
    it("Check if Skip to content link is in page", () => {
        cy.findAllByText("Skip to content").should('exist')
    })
  })