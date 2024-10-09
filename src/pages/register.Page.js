import {BasePage} from './basePage';


class RegisterPage  extends BasePage{
  constructor(page) {
    super(page);
    this.userNameInput = page.getByPlaceholder('Your Name');
    this.userEmailInput = page.getByPlaceholder('Email');
    this.userPasswordInput = page.getByPlaceholder('Password');
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
  }

  registerUser = async (userName, email , password) => {
    await this.userNameInput.fill(userName);
    await this.userEmailInput.fill(email);
    await this.userPasswordInput.fill(password);
    await this.signUpButton.click();
    return userName;
  }
    
}

module.exports = { RegisterPage };


