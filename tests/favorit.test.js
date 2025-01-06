import { test, expect } from "@playwright/test";
import { MainPage, FavoritPage } from "../src/pages/index";
import * as allure from "allure-js-commons";

const url = "https://realworld.qa.guru/#/profile/%D1%86%D1%83%D1%86%D0%B0";
let newUser;
let expectedArticle;

test("the user can view their favorite article", async ({ page }) => {
  const favoritPage = new FavoritPage(page);

  await page.goto(url);
  //const favoritPage = new FavoritPage(page);
  const mainPage = new MainPage(page);
  //await expect(page).toHaveURL(url);
  console.log(mainPage.userNameHeder);
  expect(mainPage.userNameHeader).toHaveText(name);
});
