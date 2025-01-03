import { test, expect } from "@playwright/test";
import { MainPage, FavoritPage } from "../src/pages/index";
import * as allure from "allure-js-commons";

const url = "https://realworld.qa.guru/#/profile/hgfgh";
let newUser;
let expectedArticle;

test("the user can view their favorite article", async ({ page }) => {
  await page.goto("https://realworld.qa.guru/#/profile/hgfgh");
  const favoritPage = new FavoritPage(page);
  const mainPage = new MainPage(page);
  await expect(page).toHaveURL(url);
  console.log(mainPage.userNameHeder);
  await allure.step(expect(mainPage.userNameHeder).toHaveText(name));
});
