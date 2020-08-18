import { browser, Config } from 'protractor';
import Platform = NodeJS.Platform;
import capabilitiesConfig from '../capabilities';
const jsonReports = process.cwd() + '/reports/json';
const browserStack = require('browserstack-local');

export const config: Config = {

    multiCapabilities: [
        capabilitiesConfig['chrome-windows'],
        capabilitiesConfig['chrome-windows7'],
        capabilitiesConfig['firefox-high-sierra'],
        capabilitiesConfig['firefox-windows10'],
        capabilitiesConfig['firefox-windows7'],
        capabilitiesConfig['google-pixel3'],
        capabilitiesConfig['ie11-windows'],
        capabilitiesConfig['ie11-windows7'],
        capabilitiesConfig['ipad-6th'],
        capabilitiesConfig['iphone8-plus'],
        capabilitiesConfig.iphone11,
        capabilitiesConfig['safari-high-sierra'],
        capabilitiesConfig['samsung-galaxy-s7'],
        capabilitiesConfig['samsung-galaxy-s8'],
    ],
    allScriptsTimeout: 60000,
    // tslint:disable-next-line:max-line-length
    // to connect directly to the browser Drivers. Only available for Firefox and Chrome. Use if no browserstack credentials
    directConnect: false,
    // Browserstack credentials
    browserstackUser: 'purnaannapureddy2',
    browserstackKey: '8qpjfEkYyHvnK1RxRdE1',

    capabilities: {
        browserName: 'chrome',
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../../../tests/search/features/login.feature', // makes sure login runs first
    ],

    // runs before preparing the testing environment. This particular function connects to the Browserstack servers
    beforeLaunch() {
        // tslint:disable-next-line:no-console
        console.log('Connecting local');
        return new Promise((resolve, reject) => {
            exports.bs_local = new browserStack.Local();

            exports.bs_local.start({ key: exports.config.browserstackKey }, (error) => {
                if (error) { return reject(error); }
                // tslint:disable-next-line:no-console
                console.log('Connected. Now testing...');

                resolve();
            });
        });
    },

    // runs after all tests have finished running. This stops the Browserstack server
    afterLaunch() {
        return new Promise((resolve, reject) => {
            exports.bs_local.stop(resolve);
        });
    },

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        // Reporter.createDirectory(jsonReports);
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
    },

    cucumberOpts: {
        compiler: 'ts:ts-node/register',
        format: 'json:.tmp/results.json',
        require: ['../../tests/my/stepdefinitions/*.step.js'],
        strict: true,
    },
};
