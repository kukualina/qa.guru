import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { MainPage, RegisterPage } from "../src/pages/index";
import * as allure from "allure-js-commons";

const url = "https://realworld.qa.guru/#/";

test("register new user", async ({ page }) => {
  await page.goto("https://realworld.qa.guru/#/register");
  const registerPage = new RegisterPage(page);
  const mainPage = new MainPage(page);
  const name = faker.name.findName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  await registerPage.registerUser(name, email, password);
  await allure.step(expect(page).toHaveURL(url));
  console.log(mainPage.userNameHeder);
  await allure.step(expect(mainPage.userNameHeder).toHaveText(name));
});
