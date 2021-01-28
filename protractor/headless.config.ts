import { browser, Config} from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  capibilities:{
    browserName: 'edge',
    chromeOptions: {
      args: ['--headless','--disable-gpu']
    }
  },
  framework: 'jasmine',
  specs: [ '../test/**/*.spec.js' ],
  getPageTimeout:30000,
  SELENIUM_PROMISE_MANAGER: false,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  onPrepare: () => {
    reporter();
    browser.manage().timeouts().implicitlyWait(0);
    browser.ignoreSynchronization = true;
  }
};
