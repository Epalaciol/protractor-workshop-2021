import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  capibilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu']
    }
  },
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  onPrepare: () => {
    reporter();
    const { AwesomeReport } = require('jasmine-awesome-report');

    const config = {
      fullPath: 'awesome-report',
      fileName: 'report',
      merge: true
    };

    jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
    browser.manage().timeouts().implicitlyWait(0);
    browser.ignoreSynchronization = true;
  }
};
