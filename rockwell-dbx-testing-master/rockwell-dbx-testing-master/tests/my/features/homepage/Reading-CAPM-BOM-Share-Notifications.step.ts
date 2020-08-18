import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';
import { browser, Capabilities, ExpectedConditions } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import {Utils} from '../../../util/util';
import { NavBarPageObject } from '../../shared/pages/navbar.po';
import { BomDetailsPageObject } from '../bom/bomDetailsPage.po';
import { HomepagePageObject } from './homepage.po';

const conditions = browser.ExpectedConditions;
let homepagePage: HomepagePageObject;
let bomDetailsPage: BomDetailsPageObject;
let navBarPage: NavBarPageObject;
let EC = ExpectedConditions;
let layout: string;

Before(() => {
    homepagePage = new HomepagePageObject();
    bomDetailsPage = new BomDetailsPageObject();
    bomDetailsPage = new BomDetailsPageObject();
    navBarPage = new NavBarPageObject();
    EC = protractor.ExpectedConditions;
    browser.driver.getCapabilities().then((capabilities: Capabilities) => {
        if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
            layout = 'mobile';
        }
    });
});

When('User opens the CAPM panel', async () => {
    return Utils.tryCatcher(async () => {
        await Utils.waitForVisibilityOf(navBarPage.scrollNotificationCenterButton);
        console.log('notification button is visible');
        await Utils.waitTillClickable(navBarPage.scrollNotificationCenterButton);
        await navBarPage.scrollNotificationCenterButton.click();
        await navBarPage.verifyCAPMPanel();
        return 'CAPM Panel is open';
    });
});

Then('User should see at least 1 BOM invite notification in the panel', async () => {
    return browser.wait(conditions.visibilityOf(navBarPage.CAPMNotifications.first()))
    .then(async (capmNotifications: any) => {
        return navBarPage.CAPMNotifications.then((items: any) => {
            try {
                return expect(items.length).to.be.greaterThan(0);
            } catch (e) {
                throw new Error('No notifications found. Ensure the test user ' +
                'has the required amount of notifications (> 1).');
            }
        });
    });
});

When('User clicks on the BOM invite notification', async () => {
    return await navBarPage.verifyCAPMPanel().then(async () => {
        try {
            return await navBarPage.clickFirstCAPMNotification();
        } catch (e) {
            return e;
        }
    });
});

Then('validate that the user is taken to the BOM details page of the BOM titled "CAPM Test Automation"', async () => {
    await homepagePage.clickHomeOnboardingButton();
    const bomName = await bomDetailsPage.getBomName();
    expect(bomName).to.equal('CAPM Test Automation');
});
