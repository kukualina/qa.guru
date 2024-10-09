
import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { MainPage, RegisterPage, SettingsPage, ArticlePage, CommentPage  } from "../src/pages/index";
import { RegisterPage as MyRegisterPage } from "../src/pages/register.Page";
import { link } from "fs";
import exp from "constants";

const url = "https://realworld.qa.guru/#/article/--";
let newUser;
let expectedArticle;



const name = 'Aliiina';
const nameE = 'a.keqqwiqwpe@f2.ru';
const nameP = '23232323';

  test.describe('New comment', () => { 
    test.beforeEach(async ({ page }, testInfo) => {
        const registerPage = new RegisterPage(page);
        const context = await registerPage.startBrowser();
        await page.goto("https://realworld.qa.guru/#/register");
        await registerPage.registerUser(name, nameE, nameP);
        await page.waitForTimeout(20000);
      });
      test('send comment', async ({ page }) => {
        await page.goto("https://realworld.qa.guru/#/article/--");
        const commentPage = new CommentPage(page);
        const mainPage = new MainPage(page);
        const name = await commentPage.sendComment('met')
        await expect(commentPage.answerComment).toHaveText(name);
      });
    });



  




