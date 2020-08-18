import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Before, Then, When } from 'cucumber';
import { browser } from 'protractor';

import { RepairsPageObject } from './VerifyMyOrderMyQuotesTabs.po';

chai.use(chaiAsPromised);
const expect = chai.expect;

let repairsPage: RepairsPageObject;

Before(() => {
    repairsPage = new RepairsPageObject();
});

When('the user taps on Orders tab', async () => {
    await repairsPage.clickOrdersTab();
});

Then('the user should see the Orders page', async () => {
    const url = await browser.getCurrentUrl();
    expect(url).to.have.string('my/repairs/orders');
});

When('the user taps on Quotes tab', async () => {
    await repairsPage.clickQuotesTab();
});

Then('the user should see the Quotes page', async () => {
    const url = await browser.getCurrentUrl();
    expect(url).to.have.string('my/repairs/quotes');
});
