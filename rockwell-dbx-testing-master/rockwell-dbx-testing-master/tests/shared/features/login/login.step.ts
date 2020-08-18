import { expect } from 'chai';
import { Before, Given, setDefaultTimeout, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { Capabilities } from 'selenium-webdriver';
import { AMMyAccountPageObject } from '../../../am/features/myAccount/amMyAccountPage.po';
import { HomepagePageObject } from '../../../my/features/homepage/homepage.po';
import { Utils } from '../../../util/util';
import { LoginPageObject } from './login.po';

setDefaultTimeout(50 * 10000);
let loginPage: LoginPageObject;
let homepagePage: HomepagePageObject;
let amMyAccountPage: AMMyAccountPageObject;
let layout: string;
let username: string;
let password: string;

Before(async () => {
    const capabilities = await browser.driver.getCapabilities();
    // this is to check if tests are running on a mobile phone.
    // we dont want to run maximize() if its running on a mobile.
    // This would run if realMobile: false we dont want that although its still mobile.
    // for now always use realMobile: true in remote.config.ts for mobile browsers
    if (capabilities.get('realMobile') || (capabilities.get('real_mobile'))) {
        if (capabilities.get('platformName') === 'Android') {
            layout = 'android';
        }
    } else {
        // this will run for
        // 1. normal windows/mac browsers as realMobile will be undefined
        // 2. realMobile: false
        if (capabilities.get('browserName') === 'chrome') {
            await browser.manage().window().maximize();
        } else {
            await browser.manage().window().maximize();
        }
    }
    console.log(JSON.stringify(browser.params.login));
    username = browser.params.login.username;
    password = browser.params.login.password;

    loginPage = new LoginPageObject();
    homepagePage = new HomepagePageObject();
    amMyAccountPage = new AMMyAccountPageObject();
});

Before({tags: '@MyEquipmentIBEOnlyUser'}, () => {
  console.log(`Before IBE Only`);
  username = process.env.ibe_only_username;
  password = process.env.ibe_only_password;
});

Before({tags: '@MyEquipmentRAAMPOnlyUser'}, () => {
  console.log(`Before RAAMP Only`);
  username = process.env.raamp_only_username;
  password = process.env.raamp_only_password;
});

Before({tags: '@MyEquipmentIBEAndRAAMPUser'}, () => {
  console.log(`Before IBE and RAAMP`);
  username = process.env.ibe_raamp_username;
  password = process.env.ibe_raamp_password;
});

/** myRockwell Specific Steps */

Given('User navigates to the myRockwell site', async () => {
    return Utils.tryCatcher(async () => {
        const isPresent = await homepagePage.homeSMBSectionElement.isPresent();
        if (isPresent) {
            await homepagePage.manageTab.click(); // for mobile, search tab is not visible at first
            await homepagePage.searchTab.click();
        } else {
            await loginPage.navigateToHome();
        }
        return 'User is on Home page';
    });
});

Then('User should be directed to myRockwell home page', async () => {
    const message = await homepagePage.verifyOnHomePage();
    console.log(message);
});

/** Common Steps */

When('User is not logged in', async () => {
    await loginPage.deleteAuthToken();
});

Then('User should navigate to the sign in page', async () => {
    console.log('navigating to Sign in Page');
    const message = await loginPage.navigateToSignInPage();
    console.log(message);
});

When('User enters username and password', async () => {
    console.log(`username: ${username}, password: ${password}`);
    await loginPage.signInWith(username, password);
});

When('User clicks sign in', async () => {
    const message = await loginPage.clickSignInButton(layout);
    console.log(message);
});

/** AM Specific Steps */

Given('User navigates to the Access Management site', async () => {
    await loginPage.navigateToHome();
});

Then('User should be directed to Access Management My Account page', async () => {
     await amMyAccountPage.checkAndAcceptCookies();
     const profileHeader = await amMyAccountPage.getProfileHeaderElementText();
     const myAccessHeader = await amMyAccountPage.getMyAccessHeaderElementText();
     const myPreferencesHeader = await amMyAccountPage.getMyPreferencesHeaderElementText();
     expect(profileHeader).to.equal('My Profile');
     expect(myAccessHeader).to.equal('My Access');
     expect(myPreferencesHeader).to.equal('My Preferences');
});
