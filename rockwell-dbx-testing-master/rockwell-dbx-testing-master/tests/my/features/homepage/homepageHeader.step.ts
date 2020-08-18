import { ok } from 'assert';
import { expect } from 'chai';
import { Before, Given, HookScenarioResult, Status, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { HomepagePageObject } from './homepage.po';

const conditions = browser.ExpectedConditions;
let homepagePage: HomepagePageObject;

Before(() => {
    homepagePage = new HomepagePageObject();
});

Before(async (scenario: HookScenarioResult) => {
    const tags: string[] = scenario.pickle.tags.map((tag: any) => tag.name);
    const capabilities = await browser.driver.getCapabilities();
    if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
        if (tags.some((tag: string) => tag === '@notMobile')) {
            return Status.SKIPPED;
        }
    }
});

Given('A user is on the myRockwell site', () => {
    return ok;
});

When('User observes the brand header', async () => {
    await browser.wait(conditions.visibilityOf(homepagePage.brandHeader)).then(() => {
        console.log('Brand Header Visible');
    });
});

Then(/^User can view header logos (.*) and verify (.*)$/, async (link: string, linkURL: string) => {
    console.log('fetching URL');
    const url = await homepagePage.verifyBrandHeader(link);
    expect(url).to.have.string(linkURL);
});
