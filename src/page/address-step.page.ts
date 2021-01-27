import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private addressStep: ElementFinder;

  constructor () {
    this.addressStep = $('#center_column > form > p > button > span');
  }

  public async selectAddress(): Promise<void> {
    await this.addressStep.click();
  }
}
