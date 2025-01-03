// mainPage.js
import { BasePage } from "./basePage";

class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.userNameHeder = page.locator(
      ".nav-link.dropdown-toggle.cursor-pointer"
    );
    this.articleTitleHeder = page.getByText("New Article");
    this.answerComment = page.locator(".card-text");
  }
}

module.exports = { MainPage };
