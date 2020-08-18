import { expect } from 'chai';
import { Before, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { AppDetailsPageObject } from './appDetails.po';
import { AppStorePageObject } from './appStore.po';
import { MyAppsPageObject } from './myApps.po';
import { ModalPageObject } from '../../shared/pages/modal.po';

let myAppsPage: MyAppsPageObject;
let appStorePage: AppStorePageObject;
let appDetailsPage: AppDetailsPageObject;
let modalPage: ModalPageObject;
let layout: string;

Before(async () => {
    myAppsPage = new MyAppsPageObject();
    appStorePage = new AppStorePageObject();
    appDetailsPage = new AppDetailsPageObject();
    modalPage = new ModalPageObject();
    const capabilities = await browser.driver.getCapabilities();
    if (capabilities.get('mobile') && capabilities.get('mobile').browser === 'tablet') {
        layout = 'tablet';
    } else if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
        layout = 'mobile';
    }
});

When('the User clicks edit button', async () => {
    await myAppsPage.checkAndlickEditButton();
});

When('the User deletes all existing Apps', async () => {
    let totalCount = await myAppsPage.getAppsCount();
    while (totalCount > 0) {
        console.log(`Remaining - ${totalCount}`);
        let message = await myAppsPage.clickFirstAppRemoval();
        console.log(message);
        message = await modalPage.clickRemoveButtonOnModal();
        console.log(message);
        totalCount--;
    }
    console.log('completing deleting the apps');
});

When('the user clicks the "Explore the App Store" button', async () => {
    await myAppsPage.clickExploreTheAppStoreButton();
});

When('the user clicks the first app', async () => {
    await appStorePage.clickFirstApp();
});

Then('the user should navigate to the app details page', async () => {
    const url = await browser.getCurrentUrl();
    expect(url).to.have.string('my/apps/details/');
});

When('the user clicks the "Save to my apps" button', async () => {
    if (layout === 'mobile') {
        await appDetailsPage.clickSaveToMyAppsButtonMobile();
    } else {
        await appDetailsPage.clickSaveToMyAppsButton();
    }
});

Then('the user should see the "Remove from my apps" button', async () => {
    if (layout === 'mobile') {
        await appDetailsPage.verifyRemoveFromMyAppsButtonVisibleMobile();
    } else {
        await appDetailsPage.verifyRemoveFromMyAppsButtonVisible();
    }
});

Then('the user should navigates to the non empty My Apps page', async () => {
    await myAppsPage.verifyNonEmptyMyAppsPage();
});

When('the user clicks the "edit" button', async () => {
    await myAppsPage.clickEditButton();
});

Then('the user clicks the "X" button on the first app', async () => {
    await myAppsPage.clickXButton();
});

When('the user clicks "Remove" button on the modal', async () => {
    await myAppsPage.clickRemoveButton();
});
