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

    await productListPage.goToItem();

    await productAddedModal.addProduct();

    await summaryStepPage.nextStep();
    //sing in
    await signInStep.completeForm();
    //address
    await addressStepPage.selectAddress();
    //shiping
    await shippingStep.agreeTerms();
    await shippingStep.nextStep();
    //payment step
    await paymentStepPage.selectPay();
    //bank noseque
    await bankPaymentPage.confirmOrder();
    await expect(orderSummaryPage.result()).toBe(
      "Your order on My Store is complete.");
  });
});
