describe("Quiz", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //Simulate the quiz pick topic javascript button click
  describe("Rendering", () => {
    it("should test if the component exixts", () => {
      cy.get('[data-testid="javascript"]').click();
      cy.get('[data-testid="quiz"]').should("exist");
    });
  });
  describe("Functionality", () => {
    it("plays the quiz and finish the 10 questions", () => {
      //goto javascript quiz
      cy.get('[data-testid="javascript"]').click();
      //loop 10 times for 10 questions
      for (let i = 0; i < 10; i++) {
        //Siumlate selection of answer
        cy.get(`[data-testid="question-${i}-0"]`).click();
        //get button by text
        cy.get("button").contains("Submit Answer").click();
        cy.get("button").contains("Next Question").click();
      }
      //checking for Score component h1 text
      cy.get("h1").contains("Quiz completed, You scored...");
    });

    // //Simulate quiz in exam mode to check when timer runs out
    // it("should set timer and return to score after time runs out", () => {
    //   cy.get('[data-testid="exam"]').click();
    //   //goto javascript quiz
    //   cy.get('[data-testid="javascript"]').click();
    //   //check if timer exists
    //   cy.get('[data-testid="timer"]').should("exist");
    //   //speed time
    //   cy.clock();
    //   cy.tick(600000);
    //   cy.clock().invoke("restore");
    //   //checking for Score component h1 text
    //   cy.get("h1").contains("Quiz completed, You scored...");
    // });
  });
});
