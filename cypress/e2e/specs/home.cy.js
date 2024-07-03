import { onHomepage } from "../../support/page_objects/homepage.js";
import selectors from "../../fixtures/index.json";
import urls from "../../fixtures/urls.json";

context("Cat Web", () => {
  describe("Homepage: ", { tags: "smoke" }, () => {
    beforeEach(() => {
      cy.openHomePage();
    });

    it("Logo should exists and be visible", () => {
      cy.get(selectors.logoHomePageClass)
        .should("have.attr", "src")
        .should("include", urls.logoImg);
    });
  });
});
