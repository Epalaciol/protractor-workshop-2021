import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/google.spec.js' ],
  SELENIUM_PROMISE_MANAGER: false,
  capibilities:{
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless','--disable-gpu']
    }
  },
  onPrepare: () => {
    reporter();
    browser.ignoreSynchronization = true;
  }
};
