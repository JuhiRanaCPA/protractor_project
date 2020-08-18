import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';
import { Utils } from '../../../util/util';
import { expect } from 'chai';

const conditions = browser.ExpectedConditions;
export class SearchPageObject {

    private timeout: number = 20000;
    private tabLinks: string;

    get appsTabElement() {
        return element(by.id('Applications'));
    }
    get bomTabElement() {
        return element(by.id('BillOfMaterials'));
    }
    get noResultText() {
        return element(by.id('noResultsText'));
    }
    get searchNoResultsStill() {
        return element(by.id('search-no-results-still'));
    }
    get resultsFromRockwellSitesHeader() {
        return element(by.cssContainingText('.ra-header1', 'Allen Bradley, Rockwell Automation, and Rockwell Software Results'))
    }
    get searchTipsHeading() {
        return element(by.cssContainingText('.ra-header1', 'Search Tips'));
    }
    get searchTipsBulletpoints() {
        return element.all(by.css('ul li'));
    }
    get createNewItemCardHeader() {
        return element.all(by.className('manual-create-subtitle ra-header3'));
    }
    get stillCantFindBody() {
        return element.all(by.className('text-left ra-caption2 no-results-still-text'));
    }
    get lifecycleStatus() {
        return element.all(by.className('status active')).first();
    }
    get suggestions() {
        return element(by.className('suggestions'));
    }
    get appCard() {
        return element(by.tagName('app-card'));
    }
    get createNewItemLink() {
        return element(by.id('create-new-item-link'));
    }
    get appStoreLink() {
        return element(by.id('appstore-link'));
    }
    get bomLink() {
        return element(by.id('bom-link'));
    }
    get bomCards() {
        return element.all(by.tagName('app-bom-card'));
    }
    get appCards() {
        return element.all(by.tagName('app-card'));
    }
    get addToRepairLinks() {
        return element.all(by.css('.add-to-repair-link a'));
    }
    get addToRepairLink() {
        return element.all(by.css('.add-to-repair-link a')).first();
    }
    get lifeCycleText() {
        return element(by.id('text'));
    }
    get caretElement() {
        return element(by.id('caret'));
    }
    get replacementData() {
        return element(by.id('replacementData'));
    }
    get discontinuedDateText() {
        return element(by.id('discontinuedDate'));
    }
    get discontinuedDateTextForMobile() {
        return element(by.id('mobileDiscontinuedDate'));
    }
    get replacementCategoryText() {
        return element(by.id('replacementCategory'));
    }
    get replacementCategoryTextForMobile() {
        return element(by.id('mobileReplacementCategory'));
    }
    get replacementProductText() {
        return element(by.id('replacementText'));
    }
    get replacementProductTextForMobile() {
        return element(by.id('mobileReplacementText'));
    }

    public async clickTab(tab: string) {
        this.tabLinks = tab;
        console.log('--------------------------');
        await Utils.clickWhenPossible(element(by.id(this.tabLinks)));
        console.log('--- verify ' + this.tabLinks + ' Tab---');
        console.log('--------------------------');
    }

    public async clickAppsTab() {
        return browser.wait(conditions.visibilityOf(this.appsTabElement), this.timeout).then(() => {
            return this.appsTabElement.click();
        });
    }
    public async clickBomTab() {
        return browser.wait(conditions.visibilityOf(this.bomTabElement), this.timeout).then(() => {
            return this.bomTabElement.click();
        });
    }
    public async getNoResultText() {
        return browser.wait(conditions.visibilityOf(this.noResultText), this.timeout).then(() => {
            return this.noResultText.getText();
        });
    }
    public async getSearchNoResultsStill() {
        return browser.wait(conditions.visibilityOf(this.searchNoResultsStill), this.timeout).then(() => {
            return this.searchNoResultsStill.getText();
        });
    }

    public async getProductCards() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(element.all(by.tagName('ra-product-card')).first(), this.timeout);
            return this.getProductCardElements().count();
        });
    }

    public getProductCardElements(): ElementArrayFinder {
        return element.all(by.tagName('ra-product-card'));
    }

    public async getFirstProductCardStatus() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.lifecycleStatus, this.timeout);
            const productCards: ElementArrayFinder = this.getProductCardElements();
            return await productCards.first().element(by.id('text')).getText();
        });
    }

    public async getApps() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.appCards.first(), this.timeout);
            return this.appCards.count();
        });
    }

    public async getBoms() {
        return Utils.tryCatcher(async () => {
            // tslint:disable-next-line:max-line-length
            await Utils.waitForVisibilityOf(element(by.className('max-width-container lr-padding bom-result')), this.timeout);
            await Utils.waitForVisibilityOf(this.bomCards.first(), this.timeout);
            return `Boms count: ${this.bomCards.count()}`;
        });
    }

    public async getSectionLinkText(sectionLink: string) {
        let linkElementLocator: ElementFinder;

        switch (sectionLink) {
            case 'Create a New Item':
                linkElementLocator = this.createNewItemLink;
                break;
            case 'Go to the App Store':
                linkElementLocator = this.appStoreLink;
                break;
            case 'Go to Bill of Materials':
                linkElementLocator = this.bomLink;
                break;
        }

        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(linkElementLocator);
            await this.verifyCardsforTabs();
            return linkElementLocator.getText();
        });
    }

    public async verifySearchSuggestionsDisplayed() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.suggestions);
            return 'searchpage suggestions visible';
        });
    }

    public async verifyNoResultsTextVisible() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.noResultText);
            return 'No Results Text visible';
        });
    }

    public async verifyAndClickAddToRepairQuoteOnProductCardAt(index: number) {
        return Utils.tryCatcher(async () => {
            await browser.executeScript('window.scrollTo(0,500)');
            await this.addToRepairLink.click();
            return 'Add to Repair Quote Link Clicked';
        });
    }

    public async clickAddToRepairQuoteOnProductCardAt(index: number) {
        return Utils.tryCatcher(async () => {
            const productCards: ElementArrayFinder = element.all(by.tagName('ra-product-card'));
            await productCards.get(index).element(by.css('.add-to-repair-link a')).click();
            return `Add To Repair Quote on Product card at index ${index} clicked`;
        });
    }

    public async clickReadMoreOnProductCardAt(index: number) {
        return Utils.tryCatcher(async () => {
            const productCards: ElementArrayFinder = element.all(by.tagName('ra-product-card'));
            await productCards[index].element(by.id('readMoreButton')).click();
            return `Read More Product card at index ${index} clicked`;
        });
    }

    public async verifyLifeCycleStatusTextVisible() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.lifeCycleText);
            const getText = await this.lifeCycleText.getText();
            return `${getText} text visible`;
        });
    }

    public async clickOnReplacementDataCard() {
        return Utils.tryCatcher(async () => {
            await browser.executeScript('window.scrollTo(0,200)');
            await Utils.waitForVisibilityOf(this.caretElement);
            await this.caretElement.click();
            return 'Replacement Card clicked';
        });
    }

    public async verifyReplacementDataVisible(layout: string, field: string) {
        let replacementField: ElementFinder;

        switch (field) {
            case 'Discontinued Date':
                replacementField = (layout === 'mobile') ? this.discontinuedDateTextForMobile : this.discontinuedDateText;
                break;
            case 'Replacement Category':
                replacementField = (layout === 'mobile') ? this.replacementCategoryTextForMobile : this.replacementCategoryText;
                break;
            case 'Replacement Product':
                replacementField = (layout === 'mobile') ? this.replacementProductTextForMobile : this.replacementProductText;
                break;
        }

        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(replacementField);
            const getText = await replacementField.getText();
            return `${getText} visible`;
        });
    }

    public async verifyReplacementDataCardHidden() {
        return Utils.tryCatcher(async () => {
            await browser.wait(conditions.invisibilityOf(this.replacementData));
            return 'Replacement Data card hidden';
        });
    }

    public async msg_RA_Results() {
        console.log('Verify message from Rockwell Software');
        if (this.tabLinks !== 'AllSites') {
            await this.resultsFromRockwellSitesHeader.getText().then(async (txt: string) => {
                console.log(txt);
                console.log('RA msg displayed');
            });
        } else {
            console.log('RA msg is not displayed for AllSites tab');
        }
    }

    public async verifySearchTips() {
        console.log('Verify Search Tips for user');
        await this.searchTipsHeading.getText().then(async (txt: string) => {
            console.log(txt);
        });
        await this.searchTipsBulletpoints.each(async (bulletItem: ElementFinder) => {
            bulletItem.getText().then(async (txt: string) => {
                if (txt !== '') {
                    console.log(txt);
                }
            });
        });
        console.log('Search Tips for user displayed');
    }

    public async verifyCardsforTabs() {
        console.log('Verify cards for each tab');
        await this.createNewItemCardHeader.each(async (cards: ElementFinder) => {
            cards.getText().then(async (txt: string) => {
                if (txt !== '') {
                    console.log('Header text for Card --- ' + txt);
                }
            });
        });
        console.log('Card verification of the tabs completed');
    }

    public async stillCantFindSection() {
        console.log('Verify Still can\'t find Section in search results');
        await this.searchNoResultsStill.getText().then(async (txt: string) => {
            console.log(txt);
        });
        await this.stillCantFindBody.each(async (sectionBody: ElementFinder) => {
            sectionBody.getText().then(async (txt: string) => {
                if (txt !== '') {
                    console.log(txt);
                }
            });
        });
        console.log('Still can\'t find section displayed');
    }

}
