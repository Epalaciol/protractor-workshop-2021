import { $, ElementFinder } from 'protractor';

export class ProductAddedModal {
  private productAdded: ElementFinder;

  constructor () {
    this.productAdded = $('[style*="display: block;"] .button-container > a');
  }

  public async addProduct(): Promise<void> {
    await this.productAdded.click();
  }
}
