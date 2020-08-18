import { browser, Capabilities } from 'protractor';
import { UpdateContactsPageObjects } from '../../features/my-contacts/myContactUpdate.po';
import { Before, Then, When } from 'cucumber';

let myContactUpdate: UpdateContactsPageObjects;
let layout: string;

Before(() => {
    myContactUpdate = new UpdateContactsPageObjects();
    browser.driver.getCapabilities().then((capabilities: Capabilities) => {
        if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
            layout = 'mobile';
        }
    });
});

// ---Update My Contacts from Menu drawer---
When('the User clicks on the menu drawer',async () => {
    await myContactUpdate.clickOnMenubar();
});

Then('the user clicks on My Contacts link', async () => {
    await myContactUpdate.clickOnContactslink();
});

Then('check whether user already have a contact or not', async () => {
    await myContactUpdate.checkForUpdateContactLink();
});

Then('enter the location of the contact', async () => {
    await myContactUpdate.enterLocation();
});

Then('select the search distance range', async () => {
    await myContactUpdate.clickDistanceDropdown();
});

Then('select the distance unit', async () => {
    await myContactUpdate.clickRangeUnitDropdown();
});

Then('click Find My Contacts button', async () => {
    await myContactUpdate.clickFindMyContactbtn();
});

Then('select the distributor office contact', async () => {
    await myContactUpdate.selectDistributorContact();
});

Then('select the sales office contact', async () => {
    await myContactUpdate.selectSalesOfficeContact();
});

Then('click Save My Contacts button', async () => {
    await myContactUpdate.clickSaveMyContactsbtn();
    await myContactUpdate.clickOnContactslink(); // closing the accordion after saving
    await myContactUpdate.clickOnMenubar();
});
