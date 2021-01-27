import { $, ElementFinder } from "protractor";

export class PaymentStepPage {
  private paymentStep: ElementFinder;

  constructor() {
    this.paymentStep = $("#HOOK_PAYMENT > div:nth-child(1) > div > p > a");
  }

  public async selectPay(): Promise<void> {
    await this.paymentStep.click();
  }
}
