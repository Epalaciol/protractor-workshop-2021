import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';

const firefoxConfig = {
  browserName: 'firefox',
  platform: 'windows',
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1
};

const chromeConfig = {
  browserName: 'chrome',
  name: 'chrome-tests',
  shardTestFiles: true,
  maxInstances: 1
};

const multiCapabilities = [chromeConfig, firefoxConfig];
/* const multiCapabilities = [firefoxConfig]; */

export let config: Config = {
  multiCapabilities,
  // ...
  framework: 'jasmine',
  specs: ['../test/**/buy-tshirt.spec.js'],
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
