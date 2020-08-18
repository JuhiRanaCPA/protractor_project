import { browser } from 'protractor';
import { expect } from 'chai';
import { Before, Then, When } from 'cucumber';
import { ProductAvailabilityPageObject } from './productAvailability.po';

const conditions = browser.ExpectedConditions;

let productAvailability: ProductAvailabilityPageObject;
let layout: string;

Before(async () => {
    productAvailability = new ProductAvailabilityPageObject();
    const capabilities = await browser.driver.getCapabilities();
    if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
        layout = 'mobile';
        productAvailability.isMobile = true;
    } else {
        productAvailability.isMobile = false;
    }
});

// ----- productAvailability.feature -----

Then('the Check Availability button displays on the product cards', async () => {
    if (layout === 'mobile') {
        await productAvailability.scrollDown();
        await productAvailability.clickReadMore();
    }
    const buttonExist = await productAvailability.checkProductAvailabilityButtonExists();
    const expectResult = expect(buttonExist).to.be.true;
});

When('user clicks the Check Availability button on the first product', async () => {
    await productAvailability.clickProductAvailabilityButton();
});

Then('user can see the product availability message', async () => {
    const buttonExist = await productAvailability.checkProductAvailabilityExists();
    const expectResult = expect(buttonExist).to.be.true;
});
