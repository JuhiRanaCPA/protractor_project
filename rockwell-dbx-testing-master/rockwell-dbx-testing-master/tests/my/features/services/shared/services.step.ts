import {Before, Given, Then, When} from 'cucumber';
import {browser} from 'protractor';
import {Capabilities} from 'selenium-webdriver';
import {HomepagePageObject} from '../../homepage/homepage.po';
import {MenuDrawerPageObject} from '../../menu/menuDrawer.po';
import {ServicesShared} from './services.po';

let menuDrawerPage: MenuDrawerPageObject;
let homepage: HomepagePageObject;
let layout: string;
let servicesShared: ServicesShared;

Before(async () => {
    menuDrawerPage = new MenuDrawerPageObject();
    homepage = new HomepagePageObject();
    servicesShared = new ServicesShared();
    const capabilities = await browser.driver.getCapabilities();
    if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
        layout = 'mobileOrTablet';
    }
});

Given('A user is on the My Services landing pages', async () => {
    await menuDrawerPage.clickOnMyServicesLink();
});

Then('the user sees the overview page', async () => {
    await servicesShared.verifyOverviewPage();
});

When('the user clicks on the tickets tab', async () => {
    await servicesShared.ticketsTab.click();
});

Then('the tickets list appears', async () => {
    await servicesShared.verifyTicketsList();
});

When('the user clicks on the contracts tab', async () => {
    await servicesShared.contractsTab.click();
});

Then('the contracts list appears', async () => {
    await servicesShared.verifyContractsList();
});

When('the user clicks on the insights tab', async () => {

    await servicesShared.insightsTab.click();
});

Then('the insights coming soon page appears', async () => {
    await servicesShared.verifyInsightsPage();
});
