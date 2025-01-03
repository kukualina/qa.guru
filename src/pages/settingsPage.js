import {BasePage} from './basePage';


class SettingsPage  extends BasePage{
  constructor(page) {
    super(page);
    this.userNameInput = page.getByPlaceholder('Your Name');
    this.userEmailInput = page.getByPlaceholder('Email');
    this.userBioInput = page.getByPlaceholder('Short bio about you');
    this.userPasswordInput = page.getByPlaceholder('Password');
    this.updateButton = page.locator('.btn.btn-lg.btn-primary.pull-xs-right');
  }

  settingsUser = async (userName, email , bio, password) => {
    await this.userNameInput.fill(userName);
    await this.userEmailInput.fill(email);
    await this.userEmailInput.fill(bio);
    await this.userPasswordInput.fill(password);
    await this.updateButton.click();
    return userName;
  }
    
}

module.exports = { SettingsPage };


