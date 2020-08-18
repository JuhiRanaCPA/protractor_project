import {Before, Given, Then, When} from 'cucumber';
import {browser, Capabilities} from 'protractor';
import {Utils} from '../../../util/util';
import {ModalPageObject} from '../../shared/pages/modal.po';
import {MenuDrawerPageObject} from '../menu/menuDrawer.po';
import {ManuallyAddQuoteModalPageObject} from '../repairs/ManuallyAddQuoteModal.po';
import {SearchPageObject} from '../search/search.po';
import {RepairsPageObject} from './CreateQuoteEditProductDeleteQuote.po';

let manuallyAddQuoteModalPage: ManuallyAddQuoteModalPageObject;
let menuDrawerPage: MenuDrawerPageObject;
let repairsPage: RepairsPageObject;
let searchPage: SearchPageObject;
let modalPage: ModalPageObject;
let layout: string;

Before(() => {
    menuDrawerPage = new MenuDrawerPageObject();
    repairsPage = new RepairsPageObject();
    searchPage = new SearchPageObject();
    modalPage = new ModalPageObject();
    manuallyAddQuoteModalPage = new ManuallyAddQuoteModalPageObject();
    browser.driver.getCapabilities().then((capabilities: Capabilities) => {
        if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
            layout = 'mobile';
        }
    });
});

Given('A user is on the My Repairs landing page', async () => {
    await menuDrawerPage.clickOnMyRepairsLink();
    await menuDrawerPage.verifyRepairsLandingPage();
});

When('the user clicks on drafts', async () => {
  
  if(layout == 'mobile') 
  {
    // put some sleeps here because the mobile drawer action is too fast in automation
    await repairsPage.quotesFilterMobileButton.click();
    await browser.sleep(2000);
    await repairsPage.quotesStatusFilterMobileFacet.click();
    await browser.sleep(2000);
    await repairsPage.quotesStatusFilterStatusDraftFacetValue.click();
    await browser.sleep(2000);
    await repairsPage.quotesFilterMobileDone.click();
    await browser.sleep(1000);
  }
  else
  {
    await repairsPage.clickQuotesDropdownButton();
    await repairsPage.clickDraftsChoice();
  }
});

When('the user deletes all drafts', {timeout: 300 * 1000}, async () => {
  if(layout == 'mobile')
  {
    console.log('mobile filter button');
    await repairsPage.verifyQuotesFilterMobileButton();
  }
  else 
  {
    await repairsPage.verifyQuotesDropdownButton();
  }
  let numberOfDrafts = await repairsPage.getQuoteCardCount();
  while (numberOfDrafts > 0) {
    console.log(`Remaining drafts - ${numberOfDrafts}`);
    let message = await repairsPage.clickFirstDraft();
    console.log(message);
    message = await repairsPage.clickDeleteQuoteButton();
    console.log(message);
    await modalPage.clickSecondaryButtonOnModal();
    numberOfDrafts--;
  }
});

When('The user clicks on the create new button', async () => {
    await repairsPage.clickOnCreateNewButton();
});

Then('the user should see the Add Product to quote page', async () => {
    await repairsPage.verifyOnAddProductToQuotePage();
});

When('the user clicks Search to Add Product button', async () => {
    await repairsPage.clickOnSearchToAddProductButton();
});

Then('the search bar appears', async () => {
    await repairsPage.verifySearchSlide();
});

When('the user clicks on Add to Repair Quote button on first product result', async () => {
    if (layout === 'mobile') {
        await searchPage.clickReadMoreOnProductCardAt(0);
        await searchPage.verifyAndClickAddToRepairQuoteOnProductCardAt(0);
    } else {
        await searchPage.clickAddToRepairQuoteOnProductCardAt(0);
    }
});

Then('the user should see the Create Repair Step 1 page, with the first step highlighted', async () => {
    await repairsPage.verifyCreateRepairRequestPage();
    await repairsPage.verifyStepDivIsActiveAtIndex(0);
});

When('the user clicks the Series dropdown button', async () => {
    await repairsPage.clickSeriesDropdownButton();
});

When('user clicks a repairs series choice', async () => {
    await repairsPage.clickSeriesChoiceAtIndex(0);
});

When('user chooses the standard Service tier option', async () => {
    await repairsPage.selectStandardTierOption();
});

When('clicks Review Your Request Button', async () => {
    if (layout === 'mobile') {
        await repairsPage.clickReviewRequestMobileButton();
    } else {
        await repairsPage.clickReviewRequestBrowserButton();
    }
});

Then('the user should see the Create Repair Step 2 page, with the second step highlighted', async () => {
    await repairsPage.verifyCreateRepairRequestPage();
    await repairsPage.verifyStepDivIsActiveAtIndex(1);
});

When('the user clicks the delete quote button', async () => {
    await repairsPage.clickDeleteQuoteButton();
});

Then('the user should see the Delete quote modal', async () => {
    await modalPage.verifyModalBodyTextis(
        'Are you sure you want to delete this Request for Quote? All progress will be lost.');
});

When('the user clicks "Yes" delete button', async () => {
    await modalPage.clickSecondaryButtonOnModal();
});

Then('the user should see the My repairs landing page', async () => {
    await menuDrawerPage.verifyRepairsLandingPage();
});

Then('no quotes are displayed', async () => {
    await repairsPage.verifyCreateNewButton();
});

// ------ Manually Add Product ------

When('the user clicks Manually Add Product button', async () => {
    await repairsPage.clickOnManuallyAddProductButton();
});

Then('the Create New Product Modal appears', async () => {
    await manuallyAddQuoteModalPage.verifyModalIsVisibleDesktop();
});

When('the user clicks the create product Series dropdown button', async () => {
    await manuallyAddQuoteModalPage.clickSeriesDropdown();
});

Then('clicks a repairs series choice', async () => {
    await manuallyAddQuoteModalPage.clickFirstSeriesDropdownOption();
});

Then('the user enters a product number', async () => {
    await Utils.sendKeysTo(manuallyAddQuoteModalPage.catalogNumberInputField, '12345678');
});

Then('the user enters a manufacturer name', async () => {
    await Utils.sendKeysTo(manuallyAddQuoteModalPage.manufacturerNumberInputField, 'Manufacturer');
});

Then('the user enters a Product Description', async () => {
    await Utils.sendKeysTo(manuallyAddQuoteModalPage.productDescriptionInputField, 'Description');
});

Then('the user clicks Add Product Button', async () => {
    await manuallyAddQuoteModalPage.clickAddProductButton(layout);
});
