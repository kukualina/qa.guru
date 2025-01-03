import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { MainPage, RegisterPage, CommentPage } from "../src/pages/index";
import * as allure from "allure-js-commons";

const url = "https://realworld.qa.guru/#/article/--";

test.describe("New comment", () => {
  let name;
  let nameE;
  let nameP;

  test.beforeEach(async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const context = await registerPage.startBrowser();
    await page.goto("https://realworld.qa.guru/#/register");
    name = faker.name.findName();
    nameE = faker.internet.email();
    nameP = faker.internet.password();

    await registerPage.registerUser(name, nameE, nameP);
    await page.waitForTimeout(20000);
  });

  test("send comment", async ({ page }) => {
    await page.goto(url);
    const commentPage = new CommentPage(page);
    const mainPage = new MainPage(page);
    const commentText = "met";
    await commentPage.sendComment(commentText);
    await allure.step(
      expect(commentPage.answerComment).toHaveText(commentText)
    );
  });
});
