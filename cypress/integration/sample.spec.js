/* eslint-disable no-undef */
describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("/");
    cy.get(".username").type("Mr_Mahmood").should("have.value", "Mr_Mahmood");

    cy.get(".email")
      .type.slow("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
