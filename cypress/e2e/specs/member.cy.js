import { onUserLoginPage } from "../../support/page_objects/userLoginPage.js";
import selectors from "../../fixtures/index.json";

describe("Account: ", { tags: "smoke" }, () => {
  beforeEach(() => {
    cy.openHomePage();
  });

  it("Login Account", () => {
    onUserLoginPage.login();
    expect(cy.get(selectors.userBtnClass).should("exist").and("be.visible"));
  });
});
