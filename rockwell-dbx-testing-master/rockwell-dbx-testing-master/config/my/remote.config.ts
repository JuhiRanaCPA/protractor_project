// tslint:disable:max-line-length
import * as browserStack from 'browserstack-local';
import { browser, Config } from 'protractor';
import capabilitiesConfig from '../capabilities';
import { features } from './features';
import { stepFiles } from './step-files';

export const config: Config = {

    // Some devices have been commented out because their remote testings are failing for reasons unrelated to the tests
    multiCapabilities: [
        capabilitiesConfig['chrome-windows10'], // working as of 8/14 release/9.0
        // capabilitiesConfig['chrome-macCatalina'], // working as of 8/14 release/9.0
        // capabilitiesConfig['firefox-windows10'], // working as of 8/14 release/9.0
        // capabilitiesConfig['firefox-windows7'], // working as of 8/14 release/9.0
        // capabilitiesConfig['google-pixel3'], // working as of 8/14 release/9.0
        // capabilitiesConfig['iphone8-plus'], // working as of 8/14 release/9.0
        // capabilitiesConfig.iphone11, // working as of 8/14 release/9.0 // commented out for repairs
        // capabilitiesConfig['samsung-galaxy-s7'], // working as of 8/14 release/9.0
        // capabilitiesConfig['samsung-galaxy-s8'], // working as of 8/14 release/9.0
        // capabilitiesConfig['ipad-6th'], // working as of 8/14 release/9.0
        // capabilitiesConfig['safari-catalina'], // working as of 8/14 release/9.0 // commented out for repairs
        // capabilitiesConfig['firefox-high-sierra'], // Does not work due to a potential Browserstack issue
        // capabilitiesConfig['ie11-windows'],
        // capabilitiesConfig['ie11-windows7'],
    ],
    commonCapabilities: {
        'name': 'remote test',
        'browserstack.sendKeys': true,
        'browserstack.debug': true,
        // 'browserstack.appium_version': '1.16.0',
    },
    name: 'remote automate test in chrome',
    defaultTimeoutInterval: 90000,
    allScriptsTimeout: 90000,
    // to connect directly to the browser Drivers. Only available for Firefox and Chrome. Use if no browserstack credentials
    directConnect: false,
    // Browserstack credentials
    browserstackUser: 'dbxadminuser1',
    browserstackKey: '6s257AhmKXh6f4q9AHpi',
    format: ['pretty', 'rerun:@rerun.txt'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: features.prod,

    // runs before preparing the testing environment. This particular function connects to the Browserstack servers
    beforeLaunch: async () => {
        console.log('Connecting local');
        return new Promise((resolve: any, reject: any) => {
            exports.bs_local = new browserStack.Local();
            exports.bs_local.start({ key: exports.config.browserstackKey }, (error: any) => {
                if (error) { return reject(error); }
                console.log('Connected. Now testing...');

                resolve();
            });
        });
    },
    // runs after all tests have finished running. This stops the Browserstack server
    afterLaunch: async () => {
        return new Promise((resolve: any, reject: any) => {
            exports.bs_local.stop(resolve);
        });
    },
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        // Reporter.createDirectory(jsonReports);
        browser.getProcessedConfig().then((processedConfig: any) => {
            let username = process.env.BS_USERNAME;
            if (!username) {
                username = processedConfig.capabilities.username;
            }
            browser.params.login = {
                username,
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
