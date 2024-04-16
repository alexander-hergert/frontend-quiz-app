describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("Rendering", () => {
    it("should test if the component exixts", () => {
      cy.get('[data-testid="navbar"]').should("exist");
      cy.get('[data-testid="theme-button"]').should("exist");
    });
  });

  describe("Theme Toggling", () => {
    it("should toggle theme to light when button is clicked", () => {
      cy.get('[data-testid="theme-button"]').click();
      cy.get('[data-testid="theme-button"]').should("not.be.checked");
    });

    it("should toggle theme back to dark when button is clicked again", () => {
      cy.get('[data-testid="theme-button"]').click();
      cy.get('[data-testid="theme-button"]').should("not.be.checked");
      cy.get('[data-testid="theme-button"]').click();
      cy.get('[data-testid="theme-button"]').should("be.checked");
    });
  });
});
