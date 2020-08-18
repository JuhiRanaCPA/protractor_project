import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';
import { browser, Capabilities, ElementFinder } from 'protractor';
import { HomepagePageObject } from './homepage.po';

let homepagePage: HomepagePageObject;
let layout: string;

Before(() => {
    homepagePage = new HomepagePageObject();

    browser.driver.getCapabilities().then((capabilities: Capabilities) => {
        if (capabilities.get('real_mobile') || (capabilities.get('realMobile'))) {
            layout = 'mobile';
        }
    });
});

Given('User is on the homepage', async () => {
    await homepagePage.verifyOnHomePage();
});

When('User clicks on Browse', async () => {
    await homepagePage.clickOnBrowseTab();
});

Then('a Browse menu should appear with Digital Libraries, Product Services, and Digital Tools links', async () => {
    return homepagePage.browseLinks.then((links: string[]) => {
        console.log(links.length);
        expect(links.length).to.equal(12);
    });
});

When('User clicks on Search', async () => {
    await homepagePage.searchTab.click().then(() => {
        console.log('Search clicked');
    });
});

Then('a Search bar should appear', async () => {
    await homepagePage.verifySearchInput(layout).then(() => {
        console.log('Search Input Visible');
    });
});

When('User clicks on Manage', async () => {
    return homepagePage.manageTab.click().then(() => {
        console.log('Manage tab clicked');
    });
});

Then('a Manage bar should appear that has links to BOM, Apps, Repair, Account', async () => {
    console.log('Verify Manage Cards showing');
    return homepagePage.getManageCards().then((manageCards: ElementFinder[]) => {
        console.log('Cards count:' + manageCards.length);
        expect(manageCards.length).to.equal(6);
    });
});

Then(/^User should be able to navigate to (.*) on click on (.*)$/, async (siteURL: string, siteName: string) => {
    const isMatchingLink: boolean = await homepagePage.verifyBrowseSiteURL(siteName, siteURL);
    console.log(isMatchingLink);
    const expectResult = expect(isMatchingLink).to.be.true;
});
