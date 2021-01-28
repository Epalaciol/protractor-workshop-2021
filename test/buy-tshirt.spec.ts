import { browser } from "protractor";
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModal,
  SummaryStepPage,
  SignInStep,
  AddressStepPage,
  ShippingStep,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage,
} from "../src/page";

describe("Abrir el navegador", () => {
  beforeAll(async () => {
    await browser.get("http://automationpractice.com/");
  });

  describe("Proceso de compra de la Camiseta", () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productListPage: ProductListPage = new ProductListPage();
    const productAddedModal: ProductAddedModal = new ProductAddedModal();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();
    beforeAll(async () => {
      await menuContentPage.goToTShirtMenu();
      //product-list
      await productListPage.selectProduct("Faded Short Sleeve T-shirts");

      await browser.sleep(3000);
      //add to car
      await productAddedModal.addProduct();

      //summary
      await summaryStepPage.nextStep();
    });

    describe("Logeo de la aplicacion", () => {
      const signInStep: SignInStep = new SignInStep();
      beforeAll(async () => {
        //sing in
        await signInStep.completeForm();
      });

      describe("Seleccionar la dirección por defecto", () => {
        const addressStepPage: AddressStepPage = new AddressStepPage();
        const shippingStep: ShippingStep = new ShippingStep();
        beforeAll(async () => {
          //address
          await addressStepPage.selectAddress();
          //shiping
          await shippingStep.agreeTerms();
          await shippingStep.nextStep();
        });

        describe("Pago en el Banco ", () => {
          const paymentStepPage: PaymentStepPage = new PaymentStepPage();
          const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
          const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
          it("then should be bought a t-shirt", async () => {
            //payment step
            await paymentStepPage.selectPay();
            //bank
            await bankPaymentPage.confirmOrder();

            await expect(orderSummaryPage.result()).toBe(
              "Your order on My Store is complete."
            );
          });
        });
      });
    });
  });
});
