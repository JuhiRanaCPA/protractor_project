import { browser, Capabilities } from 'protractor';
import { RegisterProductPageObjects } from '../product-registration/registerProduct.po';
import { Before, Then, When } from 'cucumber';

let registerPdt: RegisterProductPageObjects;
let layout: string;

Before(() => {
    registerPdt = new RegisterProductPageObjects();
    browser.driver.getCapabilities().then((capabilities: Capabilities) => {
        if (capabilities.get('mobile') && capabilities.get('mobile').browser === 'tablet') {
            layout = 'tablet';
        } else if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
            layout = 'mobile';
        }
    });
});

// ---Product Registration for a Company---
Then('the user clicks on the Product Registration link', async () => {
    await registerPdt.clickOnProductRegistrationLink();
});

Then('the user should navigate to Product Registration landing page', async () => {
    await registerPdt.verifyProductRegLandingPage(layout);
});

Then('user clicks on "Register a Product" button', async () => {
    await registerPdt.clickRegisteraProductButton(layout);
});

Then('product registration page is displayed', async () => {
    await registerPdt.verifyProductRegPage(layout);
});

Then('step 1 "Product Information" is highlighted on the process status bar', async () => {
    await registerPdt.verifyProductInfoTab(layout);
});

Then('user enters the "Serial number" and "Catalog number"', async () => {
    await registerPdt.enterProductInfoDetails();
});

Then('click on "Add Product" button', async () => {
    if (layout === 'mobile') {
        await registerPdt.clickAddProductButtonMobile();
    } else {
        await registerPdt.clickAddProductButton();
    }
});

Then('product gets added to the saved products list', async () => {
    await registerPdt.verifySavedProductsDescription();
});

Then('user click on "Next" button', async () => {
    if (layout === 'mobile') {
        await registerPdt.clickNextButtonMobile();
    } else {
        await registerPdt.clickNextButton();
    }
});

Then('"Registration Information" step 2 is highlighted', async () => {
    await registerPdt.verifyRegistrationInfoTab(layout);
});

Then('registration type is displayed', async () => {
    await registerPdt.verifyRegisterType();
});

When('user clicks on "Register to my Company"', async () => {
    await registerPdt.clickRegisterMyCompanyCard();
});

Then('company information is displayed under "Register To" section', async () => {
    await registerPdt.verifyRegisterToSection();
});

Then('user click on the "Review" button', async () => {
    if (layout === 'mobile') {
        await registerPdt.clickReviewButtonMobile();
    } else {
        await registerPdt.clickReviewButton();
    }
});

Then('Product Registration step 3 is highlighted and Registration information is displayed', async () => {
    await registerPdt.verifyReviewAndSubmitTab(layout);
    await registerPdt.verifyfinalRegInfo();
});

Then('user clicks on "Register to my Customer"', async () => {
    await registerPdt.clickRegisterMyCustomerCard();
});

Then('customer name drop down list is displayed under "Register To" section', async () => {
    await registerPdt.verifyRegisterToCustomerSection();
});

Then('user selects a customer from the drop down', async () => {
    await registerPdt.clickCustomerNamefromList();
});