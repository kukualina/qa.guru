import { BasePage } from "./basePage";

class ArticlePage extends BasePage {
  constructor(page) {
    super(page);
    this.articleTitleInput = page.getByPlaceholder("Article Title");
    this.aboutArticleInput = page.getByPlaceholder(
      "What's this article about?"
    );
    this.writeArticleInput = page.getByPlaceholder(
      "Write your article (in markdown)"
    );
    this.enterTagsInput = page.getByPlaceholder("Enter tags");
    this.publishButton = page.locator(".btn.btn-lg.pull-xs-right.btn-primary");
  }

  async articleNew(title, about, content, tags) {
    await this.articleTitleInput.fill(title);
    await this.aboutArticleInput.fill(about);
    await this.writeArticleInput.fill(content);
    await this.enterTagsInput.fill(tags);
    await this.publishButton.click();
    return title;
  }
}

module.exports = { ArticlePage };
