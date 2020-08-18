import { browser, by, element, ElementFinder } from 'protractor';
const conditions = browser.ExpectedConditions;

export class ProductAvailabilityPageObject {
    public isMobile: boolean;
    private timeout: number = 30000;

    get checkAvailabilityButton() {
        if (this.isMobile) {
            return element.all(by.css('.availability-label')).get(1);
        }
        return element.all(by.css('.availability-label')).first();
    }

    get checkAvailabilityStatus() {
        if (this.isMobile) {
            return element.all(by.css('.availability')).get(1);
        }
        return element.all(by.css('.availability')).first();
    }
    get readMoreButton() {
        return element.all(by.id('readMoreButton')).first();
    }

    public async clickReadMore() {
        return browser.wait(conditions.visibilityOf(this.readMoreButton), this.timeout).then(async () => {
            return this.readMoreButton.click();
        });
    }

    public async checkProductAvailabilityButtonExists() {
        return browser.wait(conditions.visibilityOf(this.checkAvailabilityButton), this.timeout).then(async () => {
            return !!this.checkAvailabilityButton;
        });
    }

    public async clickProductAvailabilityButton() {
        return browser.wait(conditions.visibilityOf(this.checkAvailabilityButton), this.timeout).then(async () => {
            return this.checkAvailabilityButton.click();
        });
    }

    public async checkProductAvailabilityExists() {
        return browser.wait(conditions.visibilityOf(this.checkAvailabilityStatus), this.timeout).then(async () => {
            return !!this.checkAvailabilityStatus;
        });
    }

    public async scrollDown() {
        await browser.executeScript('window.scrollTo(0,200);');
    }
}
