import { $, ElementFinder } from "protractor";

export class SignInStep {
  private signIn: ElementFinder;
  private user: ElementFinder;
  private pass: ElementFinder;

  constructor() {
    this.user = $("#email");
    this.pass = $("#passwd");
    this.signIn = $("#SubmitLogin > span");
  }

  public async completeForm(): Promise<void> {
    await this.user.sendKeys("aperdomobo@gmail.com");
    await this.pass.sendKeys("WorkshopProtractor");
    await this.signIn.click();
  }
}
