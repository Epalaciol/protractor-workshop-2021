import {
  element,
  by,
  ElementFinder,
  ElementArrayFinder,
  ExpectedConditions,
  browser,
} from "protractor";
import { infoPersonal } from "../interface/infoPersonal";
export class PersonalInformation {
  private firstName: ElementFinder;
  private lastName: ElementFinder;
  private sex: ElementArrayFinder;
  private experience: ElementArrayFinder;
  private profession: ElementArrayFinder;
  private tools: ElementArrayFinder;
  private continent: ElementFinder;
  private button: ElementFinder;
  private title: ElementFinder;
  constructor() {
    this.firstName = element(by.name("firstname"));
    this.lastName = element(by.name("lastname"));
    this.sex = element.all(by.name("sex"));
    this.experience = element.all(by.name("exp"));
    this.profession = element.all(by.name("profession"));
    this.tools = element.all(by.name("tool"));
    this.continent = element(by.name("continents"));
    this.button = element(by.name("submit"));
    this.title = element(by.css("h1"));
  }
  private async selectRadio(
    elem: ElementArrayFinder,
    select: string
  ): Promise<void> {
    console.log(elem);
    await elem
      .filter(async (item) => {
        return await item
          .getAttribute("value")
          .then((txt: string) => txt === select);
      })
      .first()
      .click();
  }

  public async fillForm(data: infoPersonal): Promise<void> {
    await this.firstName.sendKeys(data.firstName);
    await this.lastName.sendKeys(data.lastName);
    await this.selectRadio(this.sex, data.sex);
    await this.selectRadio(this.experience, String(data.experience));
    await this.selectRadio(this.profession, data.profession[0]);
    await this.selectRadio(this.tools, data.tools[0]);
    await this.continent.sendKeys(data.continent);
    await this.button.click();
  }

  public async confirm(): Promise<string> {
    await browser.wait(ExpectedConditions.alertIsPresent(), 10000);
    const alert = await browser.switchTo().alert();
    await alert.accept();
    return await this.title.getText();
  }
}
