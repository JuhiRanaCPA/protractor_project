// tslint:disable:max-line-length
/**
 * This file is used to pick up the capability config in Jenkins.
 * Please refer Jenkinsfile as to how this is being used if you would like to make changes
 */

// Add a Project name here. "Project" is used as a filter on the Browserstack dashboard.
const projectName: string = process.env.BS_PROJECT || 'default';

const capabilityOptions = {
    'chrome-windows10': {
        browserName: '',
        browser: 'Chrome',
        os: 'Windows',
        os_version: '10',
        project: projectName,
        'browserstack.sendKeys': true,
        metadata: {
            device: 'Virtual Machine',
            platform: {
                name: 'Windows',
                version: '10',
            },
        },
        username: 'rockwellchromewin10@mailinator.com',
    },
    'chrome-windows7': {
        browserName: 'chrome',
        os: 'Windows',
        os_version: '7',
        resolution: '1920x1080',
        selenium_version: '3.5.2',
        acceptInsecureCerts: 'true',
        project: projectName,
        'browserstack.sendKeys': true,
        metadata: {
            device: 'Virtual Machine',
            platform: {
                name: 'Windows',
                version: '7',
            },
        },
        username: 'rockchromewin7@mailinator.com',
    },
    'chrome-macCatalina': {
        browserName: '',
        browser: 'Chrome',
        os: 'OS X',
        os_version: 'Catalina',
        project: projectName,
        'browserstack.sendKeys': true,
        metadata: {
            device: 'Virtual Machine',
            platform: {
                name: 'OSX',
                version: 'Catalina',
            },
        },
        username: 'rockchromewin7@mailinator.com',
    },
    'safari-catalina': {
        browserName: '',
        browser: 'Safari',
        os: 'OS X',
        os_version: 'Catalina',
        project: projectName,
        'browserstack.sendKeys': true,
        metadata: {
            device: 'Virtual Machine',
            platform: {
                name: 'OSX',
                version: 'Catalina',
            },
        },
        username: 'rocksafmachigh@mailinator.com',
    },
    'firefox-high-sierra': {
        browserName: '',
        browser: 'Firefox',
        os: 'OS X',
        os_version: 'High Sierra',
        project: projectName,
        'browserstack.sendKeys': true,
        metadata: {
            device: 'Virtual Machine',
            platform: {
                name: 'OSX',
                version: 'High Sierra',
            },
        },
        username: 'rockffmachigh@mailinator.com',
    },
    'firefox-windows10': {
        browserName: '',
        browser: 'Firefox',
        os: 'Windows',
        os_version: '10',
        project: projectName,
        'browserstack.sendKeys': true,
        metadata: {
            device: 'Virtual Machine',
            platform: {
                name: 'Windows',
                version: '10',
            },
        },
        username: 'rockwellffwin10@mailinator.com',
    },
    'firefox-windows7': {
        browserName: '',
        browser: 'Firefox',
        os: 'Windows',
        os_version: '7',
        project: projectName,
        'browserstack.sendKeys': true,
        metadata: {
            device: 'Virtual Machine',
            platform: {
                name: 'Windows',
                version: '7',
            },
        },
        username: 'rockwellffwin7@mailinator.com',
    },
    'ie11-windows': {
        browserName: 'IE',
        browser: 'IE',
        browser_version: '11.0',
        os: 'Windows',
        os_version: '10',
        project: projectName,
        'browserstack.sendKeys': true,
        metadata: {
            browser: {
                name: 'internet explorer',
                version: '11.0',
            },
            device: 'Virtual Machine',
            platform: {
                name: 'Windows',
                version: '10',
            },
        },
        requireWindowFocus: true,
        username: 'rockie11win10@mailinator.com',
    },
    'ie11-windows7': {
        browserName: '',
        browser: 'IE',
        browser_version: '11',
        os: 'Windows',
        os_version: '7',
        project: projectName,
        'browserstack.sendKeys': true,
        metadata: {
            browser: {
                name: 'internet explorer',
                version: '11.0',
            },
            device: 'Virtual Machine',
            platform: {
                name: 'Windows',
                version: '7',
            },
        },
        requireWindowFocus: true,
        username: 'rockie11win10@mailinator.com',
    },
    'google-pixel3': {
        browserName: 'android',
        os_version: '9.0',
        device: 'Google Pixel 3',
        real_mobile: 'true',
        project: projectName,
        metadata: {
            device: 'Google Pixel 3',
            platform: {
                name: 'android',
                version: '9.0',
            },
        },
        username: 'rockgp3@mailinator.com',
    },
    'samsung-galaxy-s7': {
        browserName: '',
        os_version: '6.0',
        device: 'Samsung Galaxy S7',
        real_mobile: 'true',
        project: projectName,
        metadata: {
            device: 'Samsung Galaxy S7',
            platform: {
                name: 'android',
                version: '6.0',
            },
        },
        username: 'rockgs7@mailinator.com',
    },
    'samsung-galaxy-s8': {
        browserName: '',
        os_version: '7.0',
        device: 'Samsung Galaxy S8',
        real_mobile: 'true',
        project: projectName,
        metadata: {
            device: 'Samsung Galaxy S8',
            platform: {
                name: 'android',
                version: '7.0',
            },
        },
        username: 'rockgs8@mailinator.com',
    },
    'iphone8-plus': {
        browserName: '',
        os_version: '11.0',
        device: 'iPhone 8 Plus',
        real_mobile: 'true',
        project: projectName,
        metadata: {
            device: 'iPhone 8 Plus',
            platform: {
                name: 'ios',
                version: 'iphone8plus-11.0',
            },
        },
        username: 'rockiphone8p@mailinator.com',
    },
    'iphone11': {
        browserName: '',
        os_version: '13',
        device: 'iPhone 11',
        real_mobile: 'true',
        project: projectName,
        metadata: {
            device: 'iPhone 11',
            platform: {
                name: 'ios',
                version: 'iphone11-13.0',
            },
        },
        username: 'rockiphonex@mailinator.com',
    },
    'ipad-6th': {
        browserName: '',
        os_version: '11.3',
        device: 'iPad 6th',
        real_mobile: 'true',
        project: projectName,
        metadata: {
            device: 'iPad 6th',
            platform: {
                name: 'ios',
                version: 'ipad6th-11.3',
            },
        },
        username: 'rockipad@mailinator.com',
    },
};

export default capabilityOptions;
