import {BasePage} from './basePage';


class FavoritPage  extends BasePage{
  constructor(page) {
    super(page);
    this.favoriteButton = page.getByRole('button', { name: 'Favorited Articles' });
  }

  favariteArticle = async () => {
    await this.favoriteButton.click();
  }
    
}

module.exports = { FavoritPage };


