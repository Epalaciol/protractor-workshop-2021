import { $, ElementFinder, browser, ExpectedConditions } from "protractor";

export class SummaryStepPage {
  private summaryStep: ElementFinder;

  constructor() {
    this.summaryStep = $(".cart_navigation span");
  }

  public async nextStep(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.summaryStep), 8000)
    await this.summaryStep.click();
  }}
