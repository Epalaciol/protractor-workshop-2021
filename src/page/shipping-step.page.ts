import { $, ElementFinder } from "protractor";

export class ShippingStep {
  private terms: ElementFinder;
  private shipping: ElementFinder;

  constructor() {
    this.terms = $("#cgv");
    this.shipping = $("#form > p > button > span");
  }

  public async agreeTerms(): Promise<void> {
    await this.terms.click();
  }

  public async nextStep(): Promise<void> {
    await this.shipping.click();
  }
}
