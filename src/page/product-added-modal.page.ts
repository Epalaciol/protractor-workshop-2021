import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class ProductAddedModal {
  private productAdded: ElementFinder;

  constructor () {
    this.productAdded = $('[style*="display: block;"] .button-container > a');
  }

  public async addProduct(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.productAdded), 8000)

    await this.productAdded.click();
  }
}
