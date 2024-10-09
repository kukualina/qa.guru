import { BasePage } from "./basePage";


class CommentPage  extends BasePage{
    constructor(page) {
      super(page);
      this.commentInput = page.getByPlaceholder('Write a comment...');
      this.postButton = page.getByText('Post Comment');
    }
  
    

    sendComment = async (comment) => {
      await this.commentInput.fill(comment);
      await this.postButton.click();
    }
      
  }
  
  module.exports = { CommentPage };
  