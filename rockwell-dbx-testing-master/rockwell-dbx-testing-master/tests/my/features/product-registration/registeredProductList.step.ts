import { browser, Capabilities } from 'protractor';
import { RegisterProductListPageObjects } from '../product-registration/registeredProductList.po';
import { Before, Then, When } from 'cucumber';

let registerPdtList: RegisterProductListPageObjects;
let layout: string;

Before(() => {
    registerPdtList = new RegisterProductListPageObjects();
    browser.driver.getCapabilities().then((capabilities: Capabilities) => {
        if (capabilities.get('mobile') && capabilities.get('mobile').browser === 'tablet') {
            layout = 'tablet';
        } else if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
            layout = 'mobile';
        }
    });
});

Then('the user clicks on the My Company card', async () => {
    await registerPdtList.clickCompanyCard();
});

Then('user should navigate to Registered Product list page', async () => {
    await registerPdtList.verifyRegisteredPdtListPage();
});

Then('user can validate the registered products', async () => {
    await registerPdtList.verifyRegisteredProducts();
});