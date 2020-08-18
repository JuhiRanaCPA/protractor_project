import { Before, Then } from 'cucumber';
import { browser } from 'protractor';
import { Capabilities } from 'selenium-webdriver';
import { BomCreateModalPageObject } from './bomCreateModal.po';
import { BomDetailsPageObject } from './bomDetailsPage.po';
import { BomDropdownPageObject } from './bomDropdown.po';
import { BomLandingPageObject } from './bomLandingPage.po';
import { BomManualAddAndEditProductModal } from './bomManualAddAndEditProductModal.po';

let bomLandingPage: BomLandingPageObject;
let bomCreateModal: BomCreateModalPageObject;
let bomDropdown: BomDropdownPageObject;
let bomDetailsPage: BomDetailsPageObject;

let bomManualAddAndEditProductModal: BomManualAddAndEditProductModal;
let layout: string;

Before(async () => {
    bomLandingPage = new BomLandingPageObject();
    bomCreateModal = new BomCreateModalPageObject();
    bomDetailsPage = new BomDetailsPageObject();
    bomDropdown = new BomDropdownPageObject();
    bomManualAddAndEditProductModal = new BomManualAddAndEditProductModal();
    const capabilities = await browser.driver.getCapabilities();
    if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
        layout = (capabilities.get('mobile') && capabilities.get('mobile').browser === 'tablet') ?
            'tablet' :
            'mobile';
    }
});

Then('user clicks on an existing BOM named "Navigate from Submitted Quote"', async () => {
    await bomLandingPage.clickOnBomByTitle('Navigate from Submitted Quote');
});

Then('user clicks on the Submitted Quote # link', async () => {
    await bomDetailsPage.clickOnSubmittedQuoteLink();
});

Then('user is taken to a new tab with a Rexel URL loaded', async () => {
    await bomDetailsPage.redirectToRexel();
});

Then('user sees a Submitted Quote # in the URL', async () => {
    await bomDetailsPage.checkForSubmittedQuote();
});

Then('user clicks on an existing BOM named "Submit Me for a Quote"', async () => {
    await bomLandingPage.clickOnBomByTitle('Submit Me for a Quote');
});

Then('user clicks Quote-Order button on the BOM details page', async () => {
    await bomDetailsPage.clickOnQuoteOrderButton(layout);
});

Then('user clicks the Continue button on the Continue to Distributor modal', async () => {
    await bomDetailsPage.clickContinueButton(layout);
});

Then('user sees a Transaction ID in the URL', async () => {
    await bomDetailsPage.checkForTransactionId();
});
