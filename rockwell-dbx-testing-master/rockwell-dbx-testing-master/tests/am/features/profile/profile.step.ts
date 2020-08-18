import { expect } from 'chai';
import { browser, by, element } from 'protractor';
import { Before, Then, When } from 'cucumber';
import { MenuPageObject } from '../../features/menu/menu.po';
import { ProfilePageObject } from '../../features/profile/profile.po';

let menuPage: MenuPageObject;
let profilePage: ProfilePageObject;
let layout: string;

Before(async () => {
    menuPage = new MenuPageObject();
    profilePage = new ProfilePageObject();
    const capabilities = await browser.driver.getCapabilities();
    if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
        layout = 'mobile';
    }
});

// Validate Profile UI

When('the user clicks on the Profile tab', async () => {
    await menuPage.clickProfileTab();
});

Then('the user is on the Profile page', async () => {
    const url = await browser.getCurrentUrl();
    expect(url).to.have.string('account/profile');
});

Then('the user should see their name title', async () => {
    await profilePage.validateNameHeaderTitle();
});

Then('the user should see the email label and their email', async () => {
    await profilePage.validateEmailTitle();
});

Then('the user should see First Name label and input field', async () => {
    await profilePage.validateFirstNameInputAndLabel();
});

Then('the user should see Last Name label and input field', async () => {
    await profilePage.validateLastNameInputAndLabel();
});

Then('the user should see Company Name label and input field', async () => {
    await profilePage.validateCompanyInputAndLabel();
});

Then('the user should see Phone Number label and input field', async () => {
    await profilePage.validatePhoneNumberInputAndLabel();
});

Then('the user should see Country label and dropdown menu', async () => {
    await profilePage.validateCountryLabelAndDropDown();
});

Then('the user should see Address Line 1 label and input field', async () => {
    await profilePage.validateAddressInputAndLabel();
});

Then('the user should see City label and input field', async () => {
    await profilePage.validateCityInputAndLabel();
});

Then('the user should see State label and dropdown menu', async () => {
    await profilePage.validateStateLabelAndDropDown();
});

Then('the user should see Zip Code label and input field', async () => {
    await profilePage.validateZipcodeInputAndLabel();
});

Then('the user should see the inactive Save button', async () => {
    await profilePage.validateInactiveSaveButton();
});

Then('the user should see the Learn more link', async () => {
    await profilePage.validateLearnMoreLink();
});

Then('the user should see the profile picture', async () => {
    await profilePage.validateProfileImage();
});

// View Profile & Change Navigation

When('the user clicks on "Change Email" button', async () => {
    await profilePage.navigateToChangeEmail(layout);
});
Then('the user will see the Change Email page', async () => {
    const url = await browser.getCurrentUrl();
    expect(url).to.have.string('/change-email');
});

When('the user clicks the back button', async () => {
    await browser.navigate().back();
});

When('the user clicks on "Change Password" button', async () => {
    await profilePage.navigateToChangePassword();
});

Then('the user will see the Change Password page', async () => {
    const url = await browser.getCurrentUrl();
    expect(url).to.have.string('/reset-password');
});

When('the user clicks on the "Delete Account" button', async () => {
    await profilePage.navigateToDeleteAccountModal();
});

Then('the user will see the Delete Account Modal', async () => {
    await profilePage.validateDeleteModal();
});

When('the user clicks the cancel button on the delete account modal', async () => {
    await profilePage.clickDeleteModalCancelButton();
});

// Update Profile Information

Then('the user clicks the save button', async () => {
    await profilePage.clickSaveButton(layout);
});

Then('the user should see the success message', async () => {
    await profilePage.validateSuccessBanner();
});

When('the user enters the "Chicago" into the city input', async () => {
    await profilePage.enterCityInput('Chicago', layout);
});
