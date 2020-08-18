import { browser, Config } from 'protractor';
const jsonReports = process.cwd() + '/reports/json';

export const config: Config = {
  SELENIUM_PROMISE_MANAGER: false,

  capabilities: {
    browserName: 'firefox',
    acceptInsecureCerts: true
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    '../../../tests/search/features/login.feature', //makes sure login runs first
  ],

  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true
    }
  }],
  params: {
    env: 'local',
    login: {
      username: 'shasnain@solstice.com',
      password: 'autoTe$t1'
    }
  },

  cucumberOpts: {
    compiler: 'ts:ts-node/register',
    format: 'json:./reports/json/cucumber_report.json',
    require: ['../../tests/my/stepdefinitions/*.step.js', '../../reports/*.js'],
    strict: true
  }
};
