import { expect } from 'chai';
import { browser, by, element, ElementArrayFinder, ElementFinder, promise } from 'protractor';

export class QuickLinkPageObject {
    public isMobile: boolean;
    private timeout: number = 10000;

    public async scrollDown() {
        await browser.executeScript('window.scrollTo(0,200);');
    }

    public async clickOnProductCardLink(quickLinkToClick: string, productTitle: string, isMobile: boolean) {
        const cards = this.getProductCardsInfoArray;
        const card = this.getProductCard(cards, productTitle);
        if (isMobile && await this.readMoreNotOpened(card)) {
            await this.clickReadMoreButton(card);
            await this.scrollDown();
        }
        await this.clickOnCard(card, quickLinkToClick, isMobile);
    }

    public async getTabsCount() {
        await browser.getAllWindowHandles().then((x: string[]) => expect(x.length).to.equal(2));
    }

    public async switchTab() {
        await browser.getAllWindowHandles().then((x: string[]) => browser.switchTo().window(x[1]));
    }

    public async validateUrl(url: string, quickLinkToClick: string, productTitle: string) {
        const cards = this.getProductCardsInfoArray;
        const card = this.getProductCard(cards, productTitle);

        await this.checkQuickLink(card, quickLinkToClick, url);
    }

    public async closeCurrentTab() {
        await browser.getAllWindowHandles().then((x: string[]) => {
            browser.driver.close();
            browser.switchTo().window(x[0]);
        });
        return;
    }

    private async readMoreNotOpened(card: ElementFinder) {
        return await card.all(by.css('.btn-read-more')).isPresent();
    }

    private async clickReadMoreButton(card: ElementFinder) {
        const button = await card.all(by.css('.btn-read-more')).first();
        await button.click();
    }

    private async checkQuickLink(card: ElementFinder, quickLinkToClick: string, url: string) {
        const link = await card.all(by.cssContainingText('.text-capitalize', quickLinkToClick)).first();
        await link.getAttribute('href').then((x: string) => expect(x).to.equal(url));
    }

    private async clickOnCard(card: ElementFinder, quickLinkToClick: string, isMobile: boolean) {
        const link = await card.all(by.cssContainingText('.text-capitalize', quickLinkToClick)).get(isMobile ? 1 : 0);
        await link.click();
    }

    private getProductCard(cards: ElementArrayFinder, productTitle: string): ElementFinder {
        return cards
            .filter((card: ElementFinder) => card.all(by.cssContainingText('.title span', productTitle))
                .isPresent()).first();
    }
    get getProductCardsInfoArray(): ElementArrayFinder {
        return element.all(by.css('.product'));
    }
}
