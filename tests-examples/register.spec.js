import {BasePage} from './basePage';

export class RegisterPage extends BasePage {
    constructor(page) {
      super(page);
      this.emailField = page.getByPlaceholder("Email");
      this.passwordField = this.page.getByPlaceholder("Password");
      this.usernameField = this.page.getByPlaceholder("Your Name");
      this.signupButton = this.page.getByRole("button", { name: "Sign up" });
    }
  
    async register(userName = "ии", userEmail = "ии", userPassword = "ии", testInfo) {
        testInfo.setTimeout(120000);
        await this.usernameField.click();
        await page.waitForTimeout(20000);
      await this.usernameField.fill(userName);
      await page.waitForTimeout(20000);
      await this.emailField.click();
      await page.waitForTimeout(20000);
      await this.emailField.fill(userEmail);
      await page.waitForTimeout(20000);
      await this.passwordField.click();
      await this.passwordField.fill(userPassword);
      await page.waitForTimeout(20000);
      await this.signupButton.click();
    }
  
    async enterUsername(userName) {
      await this.usernameField.click();
      await this.usernameField.fill(userName);
    }
  
    async enterEmail(userEmail) {
      await this.emailField.click();
      await this.emailField.fill(userEmail);
    }
  
    async enterPassword(userPassword) {
      await this.passwordField.click();
      await this.passwordField.fill(userPassword);
    }
  
    async clickSignup() {
      await this.signupButton.click();
    }
  }