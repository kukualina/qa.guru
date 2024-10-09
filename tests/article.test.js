
import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { MainPage, RegisterPage , ArticlePage, SettingsPage, } from "../src/pages/index";
import { RegisterPage as MyRegisterPage } from "../src/pages/register.Page";
import { link } from "fs";
import exp from "constants";
import { TIMEOUT } from "dns";

//const url = "https://realworld.qa.guru/#/article/Статья";
let newUser;
let expectedArticle;

const name = 'Aliiina';
const nameE = 'a.ttinu@f2.ru';
const nameP = '23232323';


  test.describe('New Article',  () => { 
    test.beforeEach(async ({ page }, testInfo) => {
        const registerPage = new RegisterPage(page);
        await page.goto("https://realworld.qa.guru/#/register");
        await registerPage.registerUser(name, nameE, nameP);
        console.log(1);
        await page.waitForTimeout(20000); 
       });
      test('write article new', async ({ page }) => {
        console.log(2);
        await page.goto("https://realworld.qa.guru/#/editor");
        console.log(3);
        const articlePage = new ArticlePage(page);
        const mainPage = new MainPage(page);
        const name = await articlePage.articleNew('Статья', 'это письменное произведение', 'Статьи бывают разных видов', 'Цель статьи — довести до сознания читателя определённые факты')
        await expect(articlePage.articleTitleHeder).toHaveText(name);
      });
    });





 


  
    // проверка успешной регистрации
  //await expect(page).toHaveURL('https://realworld.qa.guru/#/');
  //await expect(page.locator('h1')).toHaveText('Articles not available.');
  //await expect(page.locator('text=Your Feed')).toBeVisible();
  //await expect(page.locator('text=Global Feed')).toBeVisible();

   /* test("register new user", async ({ page }, testInfo) => {
     await page.goto("https://realworld.qa.guru/#/");
     await page.getByRole('link', {name: "Sign up"}).click();
     testInfo.setTimeout(120000);
     await page.getByPlaceholder('Your Name').click(); 
     testInfo.setTimeout(120000);
     await page.getByPlaceholder('Your Name').fill("alina"); 
    });   */

  




