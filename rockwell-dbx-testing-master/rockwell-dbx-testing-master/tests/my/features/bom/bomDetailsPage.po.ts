import {expect} from 'chai';
import {browser, by, element} from 'protractor';
import {v4 as uuidv4} from 'uuid';
import {Utils} from '../../../util/util';

const conditions = browser.ExpectedConditions;

export class BomDetailsPageObject {

    public secondBomName: string;
    private timeout: number = 20000;

    get bomTitleContainer() {
        return element(by.className('title bom-title-container'));
    }
    get editSaveButton1() {
        return element.all(by.buttonText('Save')).first();
    }
    get editSaveButtonMobile() {
        return element.all(by.className('btn secondary-button medium-button')).first();
    }
    get editSaveButton2() {
        return element.all(by.buttonText('Save')).last();
    }
    get deleteBomConfirmationButton() {
        return element(by.buttonText('Delete'));
    }
    get bomTitleInput() {
        return element(by.id('bomTitleInput'));
    }
    get addManualButton() {
        return element.all(by.css('.product-buttons #addManualButton button')).first();
    }
    get addManualButtonMobile() {
        return element.all(by.css('#addManualButton.bottom-bar-button button')).first();
    }

    get firstProduct() {
        return element.all(by.css('.product')).first();
    }
    get bomSettingsIcon() {
        return element(by.css('.share-action-web ra-button'));
    }
    get inlineHintDismissButton() {
        return element(by.id('inlineHintDismissButton'));
    }
    get firstProductDetails() {
        return element.all(by.css('.product .details')).first();
    }
    get firstProductDescription() {
        return element(by.css('.ellipsis-container .ellipsis-text'));
    }
    get orderQuoteButtonForDesktop() {
        return element.all(by.css('.order-quote-button')).first();
    }
    get orderQuoteButtonForMobile() {
        return element(by.css('.bom-detail-content .shared-action-ctn .order-quote-button .ra-button1'));
    }
    get quotesPanel() {
        return element(by.css('#quotes-expasion-panel .expansion-panel'));
    }
    get continueButtonForDesktop() {
        return element(by.buttonText('Continue'));
    }
    get continueButtonForMobile() {
        // tslint:disable-next-line:max-line-length
        return element(by.css('#distributorModal > div > section > section > section.modal-footer.bottom-fixed.text-center > ra-button:nth-child(2) > button'));
    }

    public async getBomName() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.bomTitleContainer, this.timeout);
            return this.bomTitleContainer.all(by.className('ra-title1')).first().getText();
        });
    }
    public async clickEditSaveButton1() {
        console.log('Save button 1');
        return this.editSaveButton1.click().then(() => {
            console.log('Save button 1 clicked');
        });
    }
    public async clickEditSaveButton2() {
        console.log('Save button 2');
        return this.editSaveButton2.click().then(() => {
            console.log('Save button 2 clicked');
        });
    }
    public async clickEditSaveButtonMobile() {
        console.log('Save button mobile');
        return browser.wait(conditions.visibilityOf(this.editSaveButtonMobile), this.timeout).then(() => {
            return this.editSaveButtonMobile.click().then(() => {
                console.log('mobile Save button clicked');
            });
        }).catch(() => {
            return this.clickEditSaveButton1();
        });
    }
    public async clickDeleteConfirmationButton() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.deleteBomConfirmationButton);
            await Utils.clickWhenPossible(this.deleteBomConfirmationButton);
            return 'Delete Bom Button clicked';
        });
    }
    public async enterSecondBomName() {
        console.log(this.secondBomName);
        return Utils.tryCatcher(async () => {
            const id: string = uuidv4();
            const slicedId = id.slice(0, 8);
            this.secondBomName = slicedId;
            await Utils.waitForVisibilityOf(this.bomTitleInput, this.timeout);
            return Utils.sendKeysTo(this.bomTitleInput, this.secondBomName);
        });
    }
    public async clickAddManualButton(layout: string) {
        if (layout === 'mobile') {
            // browser.driver.hideSoftKeyboard('tapOut');
            return browser.wait(conditions.visibilityOf(this.addManualButtonMobile), this.timeout).then(async () => {
                return this.addManualButtonMobile.click();
            });
        } else {
            return browser.wait(conditions.visibilityOf(this.addManualButton), this.timeout).then(async () => {
                return this.addManualButton.click();
            });
        }
    }
    public async getFirstProductDescription(description: string, layout: string) {
        // ^Needed for after you update the description of the product.
        //  (It remains visible but updates after some time).
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.firstProductDetails, this.timeout);
            console.log(`Layout = ${layout}`);
            if (layout === 'mobile') {
                const inlineHintDismissButton = this.inlineHintDismissButton;
                // Closing toast message if showing to be able to test the product.
                if (inlineHintDismissButton.length > 0) {
                    await inlineHintDismissButton.click();
                }
                await Utils.waitForVisibilityOf(this.firstProduct.all(by.className('btn-read-more')).first());
                // Open read more section to make description visible
                await this.firstProduct.all(by.className('btn-read-more')).first().click();
                // tslint:disable-next-line:max-line-length
                await browser.wait(conditions.textToBePresentInElement(this.firstProduct.all(by.css('.product-footer .description')).first(), description), this.timeout);
                await browser.executeScript('arguments[0].scrollIntoView();', this.firstProductDetails.getWebElement());
                return this.firstProduct.all(by.css('.product-footer .description')).first().getText();
            }
            // tslint:disable-next-line:max-line-length
            await browser.wait(conditions.textToBePresentInElement(this.firstProductDetails.all(by.css('.description-height')).first(), description), this.timeout);
            return this.firstProductDetails.all(by.css('.description-height')).first().getText();
        });
    }
    public async clickEditFirstProduct(layout: string) {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.firstProductDetails, this.timeout);
            const editClass = (layout === 'mobile') ? '.edit-button.hidden-sm' : '.edit-button.hidden-xs';
            await this.firstProductDetails.all(by.css(editClass)).first().click();
            return 'Edit First Product Clicked';
        });
    }

    public async clickOnSubmittedQuoteLink() {
        browser.wait(conditions.visibilityOf(this.quotesPanel), this.timeout).then(async () => {
            this.quotesPanel.click().then(async () => {
                const firstQuote = this.quotesPanel.all(by.css('.quotes-list-items')).first();
                await firstQuote.all(by.css('.item-name')).first().click();
            });
        });
    }

    public async clickOnQuoteOrderButton(layout: string) {
        await browser.sleep(5000);
        let orderQuoteButton = this.orderQuoteButtonForDesktop;
        if ( layout === 'mobile') {
            orderQuoteButton = this.orderQuoteButtonForMobile;
        }
        return browser.wait(conditions.visibilityOf(orderQuoteButton), this.timeout).then(async () => {
            console.log('Order\/Quote button clicked');
            return await orderQuoteButton.click();
        });
    }

    public async clickContinueButton(layout: string) {
        let continueButton = this.continueButtonForDesktop;
        if ( layout === 'mobile') {
            continueButton = this.continueButtonForMobile;
        }
        return browser.wait(conditions.visibilityOf(continueButton), this.timeout).then(async () => {
            console.log('Continue button is visible');
            continueButton.click().then(async () => {
                console.log('Continue button clicked');
            });
        });
    }

    public async redirectToRexel() {
        console.log('redirecting...');
        const windowHandles = browser.getAllWindowHandles();
        return windowHandles.then(async (handles: string[]) => {
            const rexelTab = handles[1];
            browser.switchTo().window(rexelTab);
            browser.getCurrentUrl().then((url: string) => {
                expect(url).to.have.contains('https://webshop');
                expect(url).to.have.contains('rexel.com');
            });
        });
    }

    public async checkForTransactionId() {
        console.log('Checking for transaction ID...');
        return browser.getCurrentUrl().then((url: string) => {
            const transactionId = url.substring(url.lastIndexOf('=') + 1);
            browser.getAllWindowHandles().then((handles: string[]) => {
                browser.close().then(() => {
                    browser.switchTo().window(handles[0]);
                });
                return expect(transactionId.length > 0).to.be.true;
            });
        });
    }

    public async checkForSubmittedQuote() {
        console.log('Checking for submitted quote...');
        return browser.getCurrentUrl().then(async (url: string) => {
            browser.getAllWindowHandles().then(async (handles: string[]) => {
                const originalWindowHandle = handles[0];
                const quoteNumber = url.substring(url.lastIndexOf('/') + 1);
                return browser.switchTo().window(originalWindowHandle).then(async () => {
                    const bomSubmittedQuoteNumber = await this.getBomSubmittedQuoteNumber();
                    expect(quoteNumber).to.equal(bomSubmittedQuoteNumber);
                });
            });
        });
    }

    public async getBomSubmittedQuoteNumber() {
        return browser.wait(conditions.visibilityOf(this.quotesPanel), this.timeout).then(async () => {
            const firstQuote = this.quotesPanel.all(by.css('.quotes-list-items li')).first();
            return firstQuote.all(by.css('.item-name span')).first().getText().then((itemName: string) => {
                return itemName;
            });
        });
    }
}
