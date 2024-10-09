
import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { MainPage, RegisterPage, SettingsPage} from "../src/pages/index";
import { RegisterPage as MyRegisterPage } from "../src/pages/register.Page";
import { link } from "fs";
import exp from "constants";

const url = 'https://realworld.qa.guru/#/profile/hgfgh';
let newUser;
let expectedArticle

test('the user can view their favorite article', async ({ page }) => {
    await page.goto("https://realworld.qa.guru/#/profile/hgfgh");
    const favoritPage = new FavoritPage(page);
    const mainPage = new MainPage(page);
   // const name = await registerPage.registerUser('te', 'a.kffesesf@fo2.ru', '156')
    await expect(page).toHaveURL(url);
    console.log(mainPage.userNameHeder);
    await expect(mainPage.userNameHeder).toHaveText(name); 
  });


  




