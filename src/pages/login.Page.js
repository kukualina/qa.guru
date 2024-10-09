import {BasePage} from './basePage';


class LoginPage  extends BasePage{
  constructor(page) {
    super(page);
    this.userEmailInput = page.getByPlaceholder('Email');
    this.userPasswordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  loginUser = async (email , password) => {
    await this.userEmailInput.fill(email);
    await this.userPasswordInput.fill(password);
    await this.loginButton.click();
  }
    
}

module.exports = { LoginPage };


