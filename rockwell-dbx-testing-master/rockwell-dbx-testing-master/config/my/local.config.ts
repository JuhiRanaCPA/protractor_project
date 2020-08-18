// tslint:disable:max-line-length
import { browser, Config } from 'protractor';
import { features } from './features';
import { stepFiles } from './step-files';

export const config: Config = {
  SELENIUM_PROMISE_MANAGER: false,
  multiCapabilities: [
    { browserName: 'chrome', browser_version: '83.0.4103.61', 'browserstack.local': true, 'os': 'Windows', os_version: '10', selenium_version: '3.5.2', acceptInsecureCerts: true },
    // { browserName: 'safari', browser_version: '13.0', 'browserstack.local': true, 'os': 'OS X', os_version: 'Catalina', resolution: '1920x1080', selenium_version: '3.5.2' },
    // { browserName: 'firefox', 'browserstack.local': 'true', 'os': 'OS X', 'os_version': 'Catalina', 'resolution': '1920x1080', 'selenium_version': '3.5.2', 'acceptInsecureCerts': true, 'maximize': true },
  ],
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      binary: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      args: [],
      extensions: [],
  },
    acceptInsecureCerts: true,
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: features.prod,

  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    // Reporter.createDirectory(jsonReports);
    browser.getProcessedConfig().then((processedConfig: any) => {
      let username = process.env.BS_USERNAME;
      if (!username) {
        username = 'rockwellchromewin10@mailinator.com';
      }
      browser.params.login = {
        username:'rockwellchromewin10@mailinator.com',
        password: process.env.BS_PASSWORD,
      };
    });
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
    },
  }],
  params: {
    env: 'local',
    login: {
      username: '',
      password: '',
    },
    application: 'my',
  },
  cucumberOpts: {
    'compiler': 'ts:ts-node/register',
    'format': 'json:./reports/json/cucumber_report.json',
    'require': stepFiles,
    'strict': true,
    'fail-fast': true,
  },
};
