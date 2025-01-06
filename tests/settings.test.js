import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { MainPage, RegisterPage, SettingsPage } from "../src/pages/index";
import * as allure from "allure-js-commons";

let newUser;
let expectedArticle;

test.describe("New settings", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    const registerPage = new RegisterPage(page);
    const name = faker.name.findName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    await page.goto("https://realworld.qa.guru/#/register");
    await registerPage.registerUser(name, email, password);
    console.log(
      `Registered user: "${name}, Email: ${email}, Password: ${password}"`
    );
    // await page.waitForTimeout(20000);
  });

  test("settings user", async ({ page }) => {
    await page.goto("https://realworld.qa.guru/#/settings");
    const settingsPage = new SettingsPage(page);
    const mainPage = new MainPage(page);
    const newName = faker.name.findName();
    const newEmail = faker.internet.email();
    const newBio = faker.lorem.sentence();
    const newPassword = faker.internet.password();
    await settingsPage.settingsUser(newName, newEmail, newBio, newPassword);
    expect(mainPage.userNameHeader).toHaveText(newName);
    expect(settingsPage.userEmailInput).toHaveValue(newEmail);
  });
});
