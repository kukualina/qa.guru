
import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { MainPage, RegisterPage, SettingsPage, ArticlePage} from "../src/pages/index";
import { RegisterPage as MyRegisterPage } from "../src/pages/register.Page";
import { link } from "fs";
import exp from "constants";

//const url = "https://realworld.qa.guru/#/settings";
let newUser;
let expectedArticle;

const name = 'Aliiina';
const nameE = 'a.ttrinu@f2.ru';
const nameP = '23232323';

test.describe('New settings',  () => { 
    test.beforeEach(async ({ page }, testInfo) => {
        const registerPage = new RegisterPage(page);
        await page.goto("https://realworld.qa.guru/#/register");
        await registerPage.registerUser(name, nameE, nameP);
        console.log(1);
        await page.waitForTimeout(20000); 
       });
       test('settings user', async ({ page }) => {
        await page.goto("https://realworld.qa.guru/#/settings");
        const settingsPage = new SettingsPage(page);
        const mainPage = new MainPage(page);
        const name = await settingsPage.settingsUser('Vova', 'a.Vovqa@fo2.ru', 'My test' ,'156')
        await expect(mainPage.userNameHeader).toHaveText('Vova');
        await expect(settingsPage.userEmailInput).toHaveValue('a.Vovqa@fo2.ru');
      });
    });



  




