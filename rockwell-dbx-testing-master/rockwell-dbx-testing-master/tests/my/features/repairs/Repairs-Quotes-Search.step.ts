import { Before, Then, When } from 'cucumber';
import { browser, Capabilities } from 'protractor';
import { MenuDrawerPageObject } from '../menu/menuDrawer.po';
import { RepairsQuotesSearchPageObject } from './Repairs-Quotes-Search.po';

let repairsQuotesSearchPageObject: RepairsQuotesSearchPageObject;
let menuDrawerPage: MenuDrawerPageObject;
let layout: string;

Before(() => {
    menuDrawerPage = new MenuDrawerPageObject();
    repairsQuotesSearchPageObject = new RepairsQuotesSearchPageObject();
    browser.driver.getCapabilities().then((capabilities: Capabilities) => {
        if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
            layout = 'mobile';
        }
    });
});

When('the user performs a search with the quote number "62832"', async () => {
    const quoteNumber = '62832';
    await repairsQuotesSearchPageObject.clickRepairQuotesSearchButton(quoteNumber);
});
When('the user performs a search with the catalog number "1756-A10"', async () => {
    const catalogNumber = '1756-A10';
    await repairsQuotesSearchPageObject.clickRepairQuotesSearchButton(catalogNumber);
});

When('the user performs a search with the product family name "PowerFlex Accessories Drives & Motors"', async () => {
    const product = 'PowerFlex Accessories Drives & Motors';
    await repairsQuotesSearchPageObject.clickRepairQuotesSearchButton(product);
});

When('the user performs a search with the description name "PowerFlex 750 Inverter Assembly Kit"', async () => {
    const product = 'PowerFlex 750 Inverter Assembly Kit';
    await repairsQuotesSearchPageObject.clickRepairQuotesSearchButton(product);
});

Then('display one repair quote results that matches with the search term', async () => {
    await repairsQuotesSearchPageObject.verifyQuoteCard(layout);
});
