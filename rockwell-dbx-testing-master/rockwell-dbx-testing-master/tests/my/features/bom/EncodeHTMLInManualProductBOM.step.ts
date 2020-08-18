import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';
import { browser } from 'protractor';
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

Then('user clicks the Add Manual button', async () => {
    await bomDetailsPage.clickAddManualButton(layout);
});

Then('user enters "12345" in the Catalog Number field', async () => {
    // tslint:disable-next-line:max-line-length
    await bomManualAddAndEditProductModal.enterKeysTo(bomManualAddAndEditProductModal.catalogNumberField, '12345', layout);
});

Then('user enters "12345" in the Product Name field', async () => {
    // tslint:disable-next-line:max-line-length
    await bomManualAddAndEditProductModal.enterKeysTo(bomManualAddAndEditProductModal.productNameField, '12345', layout);
});

Then(`user enters {string} in the Description field`, async (description: string) => {
    console.log(`Asked to enter ${description}`);
    // tslint:disable-next-line:max-line-length
    const message = await bomManualAddAndEditProductModal.enterKeysTo(bomManualAddAndEditProductModal.descriptionField, description, layout);
    console.log(message);
});

When('user clicks the Add Product button', async () => {
    const message = await bomManualAddAndEditProductModal.clickAddProductButton(layout);
    console.log(message);
});

Then('ensure that the description shown on the front end is encoded as {string}', async (description: string) => {
    const renderedDescription = await bomDetailsPage.getFirstProductDescription(description, layout);
    console.log(`Description is ${renderedDescription}`);
    expect(renderedDescription).to.equal(description);
});

Then('user clicks the Edit icon on the Manual Product', async () => {
    const message = await bomDetailsPage.clickEditFirstProduct(layout);
    console.log(message);
});

Then('user clicks the Save button', async () => {
    const message = await bomManualAddAndEditProductModal.clickSaveButton(layout);
    console.log(message);
});
