import { Before, Then, When } from 'cucumber';
import { browser, Capabilities } from 'protractor';
import { Utils } from '../../../util/util';
import { MenuDrawerPageObject } from '../menu/menuDrawer.po';
import { RepairsFilterQuotes } from './FilterQuotes.po';

let repairsFilterQuotes: RepairsFilterQuotes;
let menuDrawerPage: MenuDrawerPageObject;
let layout: string;

Before(() => {
    menuDrawerPage = new MenuDrawerPageObject();
    repairsFilterQuotes = new RepairsFilterQuotes();
    browser.driver.getCapabilities().then((capabilities: Capabilities) => {
        if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
            layout = 'mobile';
        } else if (capabilities.get('mobile') && capabilities.get('mobile').browser === 'tablet') {
            layout = 'tablet';
        }
    });
});

When('the user clicks on the status filter component', async () => {
    if (layout === 'mobile') {
        await repairsFilterQuotes.repairQuotesFilterMobileButton.click();
        await repairsFilterQuotes.quotesStatusFilterMobileFacet.click();
    } else {
        await Utils.waitForVisibilityOf(repairsFilterQuotes.repairQuotesStatusDropdownFilter);
        await repairsFilterQuotes.repairQuotesStatusDropdownFilter.click();
    }
});

When('the user selects one of the status', async () => {
    if (layout === 'mobile') {
        await repairsFilterQuotes.quotesStatusFilterMobileFacetValue.click();
        await repairsFilterQuotes.quotesFilterMobileDone.click();
    } else {
        await repairsFilterQuotes.quotesStatusDropdownOption.click();
    }
});

Then('the user should see the filtered quotes list', async () => {
    await repairsFilterQuotes.verifyQuotesList();
});
