import { $, ElementFinder } from "protractor";

export class BankPaymentPage {
  private bankPayment: ElementFinder;

  constructor() {
    this.bankPayment = $("#center_column > form > p > button > span");
  }

  public async confirmOrder(): Promise<void> {
    await this.bankPayment.click();
  }
}
