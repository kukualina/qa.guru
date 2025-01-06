// mainPage.js
import { name } from "../../playwright.config";
import { BasePage } from "./basePage";

class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.userNameHeader = page.locator(
      ".nav-link.dropdown-toggle.cursor-pointer"
    );

    this.articleTitleHeader = page.locator(".container").nth(0);
    //page.getByText("New Article");
    this.answerComment = page.locator(".card-text");
    return name;
  }
}

module.exports = { MainPage };
