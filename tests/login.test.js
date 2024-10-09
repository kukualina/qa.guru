
import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { MainPage, RegisterPage, LoginPage} from "../src/pages/index";
import { RegisterPage as MyRegisterPage } from "../src/pages/register.Page";
import { link } from "fs";
import exp from "constants";

const url = "https://realworld.qa.guru/#/login";
let newUser;
let expectedArticle;

const name = 'Aliiina';
const nameE = 'a.k@f2.ru';
const nameP = '23232323';


  test.describe('login  user', () => { 
    test.beforeEach(async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const context = await registerPage.startBrowser();
        await page.goto("https://realworld.qa.guru/#/register");
        await registerPage.registerUser(name, nameE, nameP);
        await context.clearCookies();
      });
    test('login  user', async ({ page }) => {
        await page.goto(url);
         const loginPage = new LoginPage(page);
         const mainPage = new MainPage(page);
         await loginPage.loginUser(nameE, nameP);
         await expect(page).toHaveURL('https://realworld.qa.guru/#/');
         await expect(mainPage.userNameHeder).toHaveText(name); 
       });
    });
  



 
  




