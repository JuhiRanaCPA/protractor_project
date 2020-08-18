import { Before, Given, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { Capabilities } from 'selenium-webdriver';
import { BomCreateModalPageObject } from './bomCreateModal.po';
import { BomDetailsPageObject } from './bomDetailsPage.po';
import { BomDropdownPageObject } from './bomDropdown.po';
import { BomLandingPageObject } from './bomLandingPage.po';
import { BomManualAddAndEditProductModal } from './bomManualAddAndEditProductModal.po';

let bomLandingPage: BomLandingPageObject;
let bomCreateModal: BomCreateModalPageObject;
let bomDetailsPage: BomDetailsPageObject;
let bomDropdown: BomDropdownPageObject;
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

Given('user clicks on the Orders tab', async () => {
    await bomLandingPage.clickOrdersTab();
});

Then('user clicks on the Submitted Order # link', async () => {
    await bomLandingPage.clickFirstOrder();
});

When('user clicks the Continue button on the Orders Continue to Distributor modal', async () => {
    await bomLandingPage.clickContinueButton();
});

Then('user is taken to a new tab with a Rexel URL loaded and Submitted Order # in the URL', async () => {
    await bomLandingPage.redirectToRexel();
});
