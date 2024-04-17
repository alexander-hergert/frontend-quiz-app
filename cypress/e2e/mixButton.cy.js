describe("MixButton", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("Rendering", () => {
    it("should test if the component exixts", () => {
      cy.get('[data-testid="mix-mode"]').click();
      cy.get('[data-testid="mix-button"]').should("exist");
    });
  });

  describe("Functionality", () => {
    it("should push to /mix when selectedTopics is not empty", () => {
      //open topics settings
      cy.get('[data-testid="mix-mode"]').click();
      //turn on html topic
      cy.get('[data-testid="HTML"]').click();
      //start quiz with mixbutton
      cy.get('[data-testid="mix-button"]').click();
      //check if url has changed to right path
      cy.url().should("include", "/mix");
    });

    it("should not push to /mix when selectedTopics is empty", () => {
      cy.get('[data-testid="mix-mode"]').click();
      cy.get('[data-testid="mix-button"]').click();
      cy.url().should("not.include", "/mix");
    });
  });
});
