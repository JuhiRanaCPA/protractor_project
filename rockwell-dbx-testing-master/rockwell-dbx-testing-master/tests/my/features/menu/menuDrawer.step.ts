import { browser, Capabilities } from 'protractor';
import { MenuDrawerPageObject } from '../../features/menu/menuDrawer.po';

import { ok } from 'assert';
import { expect } from 'chai';
import { Before, Then, When } from 'cucumber';

let menuDrawerPage: MenuDrawerPageObject;
let layout: string;

Before(() => {
    menuDrawerPage = new MenuDrawerPageObject();
    browser.driver.getCapabilities().then((capabilities: Capabilities) => {
        if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
            layout = 'mobile';
        }
    });
});

// ------ Menu Drawer BOM Navigation ------
When('the User clicks on My Bill of Materials', async () => {
    await menuDrawerPage.clickOnMyBillOfMaterialsLink();
});

Then('the user should navigate to Bill of Materials landing page', async () => {
    const url = await menuDrawerPage.verifyBomLandingPage();
    console.log(`Url is ${url}`);
    const urlString = url as string;
    return urlString.endsWith('my/bom');
});

// ------ Menu Drawer Apps Navigation ------

When('the User clicks on My Apps', async () => {
    await menuDrawerPage.clickOnMyAppsLink();
});

Then('the user should navigate to the empty My Apps page', async () => {
    const url = await menuDrawerPage.verifyAppsLandingPage();
    console.log(`Url is ${url}`);
    const urlString = url as string;
    return urlString.endsWith('my/apps/list/my-apps');
});

// ------ Menu Drawer Repairs Navigation ------

When('the User clicks on My Repairs', async () => {
    await menuDrawerPage.clickOnMyRepairsLink();
});

Then('the user should navigate to Repairs landing page', async () => {
    await menuDrawerPage.verifyRepairsLandingPage();
});

// ------ Menu Drawer Account Navigation ------

When('the User clicks on My Account', async () => {
    if (layout === 'mobile') {
        return ok;
    } else {
        await menuDrawerPage.clickOnMyAccountLink();
    }
});

Then('the user should navigate to My Account landing page', async () => {
    if (layout === 'mobile') {
        return ok;
    } else {
        return menuDrawerPage.verifyMyAccountPage();
    }
});

// ------ Menu Drawer App Store Navigation ------
When('the User clicks on App Store', async () => {
    await menuDrawerPage.clickOnAppStoreLink();
});

Then('the user should navigate to the App store landing page', async () => {
    await menuDrawerPage.verifyAppStoreLandingPage();
});

// ------ Menu Drawer Links Verification ------

Then(/^the User should verify (.*) can navigate to (.*)$/, async (linkName: string, siteUrl: string) => {
    const isMatchingLink = await menuDrawerPage.verifyMenuLinks(linkName, siteUrl);
    console.log('im here');
    console.log(isMatchingLink);
    expect(isMatchingLink).to.be.true;
});
