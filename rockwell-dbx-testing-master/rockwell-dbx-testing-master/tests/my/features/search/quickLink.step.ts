import { Before, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { QuickLinkPageObject } from './quickLink.po';

let quickLink: QuickLinkPageObject;
let layout: string;

Before(async () => {
    quickLink = new QuickLinkPageObject();
    const capabilities = await browser.driver.getCapabilities();
    if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
        layout = 'mobile';
        quickLink.isMobile = true;
    } else {
        quickLink.isMobile = false;
    }
});

// ----- quickLink.feature -----

When(/^user clicks on the (.*) link on the product card for (.*)$/,
    async (quickLinkToClick: string, productTitle: string) => {
    debugger;
        if (productTitle.charAt(0) === '"') {
            productTitle = productTitle.substring(1, productTitle.length - 1);
        }
        if (quickLinkToClick.charAt(0) === '"') {
            quickLinkToClick = quickLinkToClick.substring(1, quickLinkToClick.length - 1);
        }
        await quickLink.scrollDown();
        await quickLink.clickOnProductCardLink(quickLinkToClick, productTitle, quickLink.isMobile);
    });

Then('validate that a new tab opens in the user\'s browser', async () => {
    await quickLink.getTabsCount();
});

Then(/^validate that the link URL is (.*) for (.*) on product card (.*)$/,
    async (url: string, quickLinkToClick: string, productTitle: string) => {
        if (url.charAt(0) === '"') {
            url = url.substring(1, url.length - 1);
        }
        if (quickLinkToClick.charAt(0) === '"') {
            quickLinkToClick = quickLinkToClick.substring(1, quickLinkToClick.length - 1);
        }
        if (productTitle.charAt(0) === '"') {
            productTitle = productTitle.substring(1, productTitle.length - 1);
        }
        await quickLink.validateUrl(url, quickLinkToClick, productTitle);
    });

Then('close the tab in the user\'s browser', async () => {
    await quickLink.switchTab();
    await quickLink.closeCurrentTab();
});
