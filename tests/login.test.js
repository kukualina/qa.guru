import { test, expect } from "@playwright/test";
import { MainPage, RegisterPage, LoginPage } from "../src/pages/index";
import { faker } from "@faker-js/faker";
import * as allure from "allure-js-commons";

test.describe("login user", () => {
  let name;
  let nameE;
  let nameP;

  test.beforeEach(async ({ page }) => {
    name = faker.name.fullName();
    nameE = faker.internet.email();
    nameP = faker.internet.password();

    const registerPage = new RegisterPage(page);
    const context = await registerPage.startBrowser();
    await page.goto("https://realworld.qa.guru/#/register");
    await registerPage.registerUser(name, nameE, nameP);
    await context.clearCookies();
  });

  test("login user", async ({ page }) => {
    await page.goto("https://realworld.qa.guru/#/login");
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    await loginPage.loginUser(nameE, nameP);
    console.log(`Ожидаемое имя: "${name}"`);
    await allure.step("Проверка имени пользователя", async () => {
      await expect(mainPage.userNameHeader).toHaveText(name);
    });
  });
});
