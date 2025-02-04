import { test, expect } from "@playwright/test";
import { RegisterPage, ArticlePage, MainPage } from "../src/pages/index";
import { faker } from "@faker-js/faker";
import * as allure from "allure-js-commons";

let newUser;
let expectedArticle;

test.beforeEach(async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await page.goto("https://realworld.qa.guru/#/register");
  const name = faker.name.fullName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  await registerPage.registerUser(name, email, password);
  console.log(
    `Registered user: "${name}, Email: ${email}, Password: ${password}"`
  );
  await page.waitForTimeout(20000);
});
test("write article new", async ({ page }) => {
  const articlePage = new ArticlePage(page);
  await page.goto("https://realworld.qa.guru/#/editor");
  const mainPage = new MainPage(page);
  const title = faker.lorem.sentence(1);
  console.log("Сгенерированный заголовок:", title);
  const about = faker.lorem.paragraph(1);
  const content = faker.lorem.paragraphs(1);
  const tags = "Цель статьи — довести до сознания читателя определённые факты";
  await articlePage.articleNew(title, about, content, tags);
  console.log(`Ожидаемое имя: "${title}"`);
  allure.step("Проверка заголовка статьи", async () => {
    expect(mainPage.articleTitleHeader).toHaveText(articleTitleInput);
  });
});
