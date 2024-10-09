import { BasePage } from "./basePage";


  class ArticlePage  extends BasePage{
    constructor(page) {
      super(page);
      this.articleTitleInput = page.getByPlaceholder('Article Title');
      this.aboutArticleInput = page.getByPlaceholder('Whats this article about?');
      this.writeArticleInput = page.getByPlaceholder("Write your article (in markdown)");
      this.enterTagsInput = page.getByPlaceholder("Enter tags");
      this.publishButton = page.locator('.btn.btn-lg.pull-xs-right.btn-primary');
    }
  
    articleNew = async (articleTitle, aboutArticle , writeArticle, enterTags) => {
      await this.articleTitleInput.fill(articleTitle);
      await this.aboutArticleInput.fill(aboutArticle);
      await this.writeArticleInput.fill(writeArticle);
      await this.enterTagsInput.fill(enterTags);
      await this.publishButton.click();
      return articleTitle;
    }
      
  }
  
  module.exports = { ArticlePage };
  