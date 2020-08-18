import { Before, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { AppDetailsPageObject } from './appDetails.po';
import { AppStorePageObject } from './appStore.po';

let appDetailsPage: AppDetailsPageObject;
let layout: string;

Before(async () => {
    appDetailsPage = new AppDetailsPageObject();
    const capabilities = await browser.driver.getCapabilities();
    if (capabilities.get('mobile') && capabilities.get('mobile').browser === 'tablet') {
        layout = 'tablet';
    } else if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
        layout = 'mobile';
    }
});
// ---User verifies Apps details page for Mobile, Web & Desktop Apps---
When(/^user is able to view the different (.*) apps$/, async (category: string) => {
    await appDetailsPage.goToEachAppDetailsSection(category);
});
Then('user clicks on any of the apps', async () => {
    await appDetailsPage.clickAppsfromAppStore();
});
Then('user is on the App details page', async () => {
    await appDetailsPage.verifyAppDetailsPage();
});
Then('user is able to view the App title', async () => {
    await appDetailsPage.verifyAppTtileDisplayed();
});
Then('user is able to view the Save to My Apps button', async () => {
    if (layout === 'mobile') {
        await appDetailsPage.verifySaveToMyAppsMobileBtn();
    } else {
        await appDetailsPage.verifySaveToMyAppsBtn();
    }
});
Then('user is able to view the Select Platform button', async () => {
    if (layout === 'mobile') {
        await appDetailsPage.verifySelectPlatformBtnMobileDisplayed();
    } else if (layout === 'tablet') {
        await appDetailsPage.verifySelectPlatformBtnTabDisplayed();
    } else {
        await appDetailsPage.verifySelectPlatformBtnDisplayed();
    }
});
Then('user is able to view the App Description', async () => {
    await appDetailsPage.verifyAppDescriptionDisplayed();
});
Then(/^user is able to view other App details such as (.*),(.*),(.*) section$/, async (support: string, lang: string, req: string) => {
    await appDetailsPage.verifyOtherAppDetailsDisplayed(support, lang, req);
});
