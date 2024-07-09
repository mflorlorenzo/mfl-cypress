import { onHomepage } from "../../support/page_objects/homepage.js";
import selectors from "../../fixtures/index.json";
import urls from "../../fixtures/urls.json";
import constants from "../../fixtures/constants.json";

context("Cat Web", () => {
  describe("Homepage: ", { tags: "smoke" }, () => {
    before(() => {
      cy.openHomePage();
    });

    it("Logo should exists and be visible", () => {
      cy.get(selectors.logoHomePageClass)
        .should("have.attr", "src")
        .should("include", urls.logoImg);
    });

    it("Popup should exists, be visible and have specific text", () => {
      cy.get(selectors.homePopupClass).should(
        "have.text",
        constants.popupMessage
      );
    });
  });
});
