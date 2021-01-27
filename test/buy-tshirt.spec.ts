import {browser } from "protractor";
import {
  AddressStepPage,
  BankPaymentPage,
  MenuContentPage,
  OrderSummaryPage,
  PaymentStepPage,
  ProductAddedModal,
  ProductListPage,
  ShippingStep,
  SignInStep,
  SummaryStepPage,
} from "../src/page";

describe('Buy a t-shirt', () => {
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModal: ProductAddedModal = new ProductAddedModal();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingStep: ShippingStep = new ShippingStep();
  const signInStep: SignInStep = new SignInStep();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get("http://automationpractice.com/");
    await menuContentPage.goToTShirtMenu();

    await browser.sleep(2000); //product-list
    await productListPage.goToItem();

    await browser.sleep(2000); //add to car
    await productAddedModal.addProduct();

    await browser.sleep(2000); //summary
    await summaryStepPage.nextStep();
    await browser.sleep(2000);
    //sing in
    await signInStep.completeForm();
    await browser.sleep(2000);
    //address
    await addressStepPage.selectAddress();
    await browser.sleep(2000);
    //shiping
    await shippingStep.agreeTerms();
    await browser.sleep(2000);
    await shippingStep.nextStep();
    await browser.sleep(2000);
    //payment step
    await paymentStepPage.selectPay();
    await browser.sleep(2000);
    //bank noseque
    await bankPaymentPage.confirmOrder();
    await browser.sleep(2000);

    await expect(orderSummaryPage.result()).toBe(
      "Your order on My Store is complete.");
  });
});
