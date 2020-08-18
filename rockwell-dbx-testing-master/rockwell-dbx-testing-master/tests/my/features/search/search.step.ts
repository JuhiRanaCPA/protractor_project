import { defineSupportCode, Given } from 'cucumber';
import { browser } from 'protractor';
import { HomepagePageObject } from '../homepage/homepage.po';
import { SearchPageObject } from './search.po';

import { fail, ok } from 'assert';

import { expect } from 'chai';
import { Before, Then, When } from 'cucumber';
import { ModalPageObject } from '../../shared/pages/modal.po';
import { BomDropdownPageObject } from '../bom/bomDropdown.po';
import { BomLandingPageObject } from '../bom/bomLandingPage.po';

const conditions = browser.ExpectedConditions;

// tslint:disable-next-line:typedef
defineSupportCode(({ setDefaultTimeout }) => {
    setDefaultTimeout(50 * 1000);
});

let homepage: HomepagePageObject;
let searchpage: SearchPageObject;
let bompage: BomLandingPageObject;
let bomdropdownpage: BomDropdownPageObject;
let modalPage: ModalPageObject;
let layout: string;

Before(async () => {
    homepage = new HomepagePageObject();
    searchpage = new SearchPageObject();
    bompage = new BomLandingPageObject();
    bomdropdownpage = new BomDropdownPageObject();
    modalPage = new ModalPageObject();
    const capabilities = await browser.driver.getCapabilities();
    if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
        layout = 'mobile';
    }
});

// ----- shared -----

// ----- searchproduct.feature -----

When(/^User searches for (.*)$/, async (App: string) => {
    if (App.charAt(0) === '"') {
        App = App.substring(1, App.length - 1);
    }
    if (layout === 'mobile') {
        await homepage.sendKeystoSearchInputMobile(App);
    } else {
        await homepage.sendKeystoSearchInput(App);
    }
});

When('User clicks the search icon', async () => {
    console.log('search icon click');
    await homepage.clickSearchIcon();
    console.log('search icon clicked');
});

Then('at least 1 product displays in the search results', async () => {
    const productCardsLength = await searchpage.getProductCards();
    expect(productCardsLength).to.be.at.least(1);
});

Then(/^the first search result appears with the (.*) status$/, async (status: string) => {
    const productStatus = await searchpage.getFirstProductCardStatus() as string;
    expect(`'${productStatus.toLowerCase()}'`).to.be.equal(status);
});

Then('Search Suggestions section should be displayed', async () => {
    await searchpage.verifySearchSuggestionsDisplayed();
});

// ----- searchapp.feature -----

When('User clicks on the Apps tab', async () => {
    await searchpage.clickAppsTab();
});

Then('Their should be at least 1 app', async () => {
    const appsCount = await searchpage.getApps() as number;
    console.log(appsCount);
    expect(appsCount).to.be.at.least(1);

});

// ----- searchbom.feature -----

When('User deletes all BOMs', async () => {
    let numberOfBoms = 0;
    await browser.sleep(5000);
    numberOfBoms = await bompage.getBOMCount();
    while (numberOfBoms > 0) {
        console.log(`Remaining bom - ${numberOfBoms}`);
        let message = await bompage.clickFirstBom();
        console.log(message);
        message = await bomdropdownpage.deleteBom();
        console.log(message);
        await modalPage.clickDeleteButtonOnModal();
        numberOfBoms--;
    }
});

When('User clicks on the Bill of Materials tab', async () => {
    await searchpage.clickBomTab();
});

Then('User should see no boms in the search results', async () => {
    await searchpage.verifyNoResultsTextVisible();
});

// ------ searchnoresult.feature ------

Then(/^(.*) should be displayed for (.*)$/, async (Message: string, Item: string) => {
    return searchpage.getNoResultText().then((text: string) => {
        if (expect(text).to.have.string(Message)) {
            return ok;
        } else {
            return fail('I was not expecting this message');
        }
    });
});

When(/^The User clicks the (.*)$/, async (tab: string) => {
    await searchpage.clickTab(tab);
});

Then('"RA results" link displayed for tabs except AllSites', async () => {
    await searchpage.msg_RA_Results();
});

Then('"Search Tips" displayed for the user', async () => {
    await searchpage.verifySearchTips();
});

Then(/^Additional (.*) sections should appear$/, async (sectionLink: string) => {
    const sectionLinkText = await searchpage.getSectionLinkText(sectionLink);
    console.log(sectionLinkText);
    expect(sectionLinkText).to.be.equal(sectionLink);
});

Then('"Still can\'t find" section should be displayed with contact e-mail', async () => {
    await searchpage.stillCantFindSection();
});

When(/^User is viewing a product with a lifecylce status that is (.*)$/, async (status: string) => {
    const verifyVisibility = await searchpage.verifyLifeCycleStatusTextVisible();
    console.log(verifyVisibility);
});

Then('User clicks on the caret next to the lifecycle status value', async () => {
    const verifyClick = await searchpage.clickOnReplacementDataCard();
    console.log(verifyClick);
});

Then(/^Card should show a value in the (.*) field$/, async (fieldText: string) => {
    const verifyVisibility = await searchpage.verifyReplacementDataVisible(layout, fieldText);
    console.log(verifyVisibility);
});

Then('Card should close to show the default closed version of the product card', async () => {
    const verifyInvisibility = await searchpage.verifyReplacementDataCardHidden();
    console.log(verifyInvisibility);
});
