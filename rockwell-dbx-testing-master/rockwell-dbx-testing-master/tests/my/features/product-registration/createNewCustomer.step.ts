import { browser, Capabilities } from 'protractor';
import { CreateCustomerPageObjects } from '../product-registration/createNewCustomer.po';
import { Before, Then, When } from 'cucumber';

let createCust: CreateCustomerPageObjects;
let layout: string;

Before(() => {
    createCust = new CreateCustomerPageObjects();
    browser.driver.getCapabilities().then((capabilities: Capabilities) => {
        if (capabilities.get('mobile') && capabilities.get('mobile').browser === 'tablet') {
            layout = 'tablet';
        } else if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
            layout = 'mobile';
        }
    });
});

// --- Create New Customer ---
Then('click "Create New Customer" button', async () => {
    await createCust.clickCreateCust();
});
When('user enters the new Customer details', async () => {
    await createCust.enterCustDetails();
    await createCust.enterCustDetails1();
});
Then('the Customer details entered are verified and close the modal', async () => {
    await createCust.verifyFinalCustDetails();
});