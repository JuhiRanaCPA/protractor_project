import {browser, by, element, ElementFinder} from 'protractor';
import {Utils} from '../../../util/util';

const conditions = browser.ExpectedConditions;

export class BomManualAddAndEditProductModal {
    private timeout: number = 8000;

    get catalogNumberField() {
        return element(by.id('catalogNumberInput'));
    }

    get productNameField() {
        return element(by.id('productName'));
    }

    get descriptionField() {
        return element(by.id('description'));
    }

    get primaryActionButton() {
        return element(by.css('#createItemModal button.secondary-button.modal-button'));
    }

    get toastMessageSection() {
        return element(by.css('.toast-msg.toast-showed'));
    }

    get toastMessageCancelButton() {
        return element(by.css('.toast-cancel'));
    }

    public async enterKeysTo(el: ElementFinder, input: string, layout: string) {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(el, this.timeout);
            await el.clear();
            return await Utils.sendKeysTo(el, input);
        });
    }

    public async clickAddProductButton(layout: string) {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.primaryActionButton, this.timeout);
            await this.primaryActionButton.click();
            await Utils.waitForVisibilityOf(this.toastMessageSection, this.timeout);
            this.toastMessageCancelButton.click();
            await Utils.waitForInvisibilityOf(this.toastMessageSection, this.timeout);
            return 'Add Product Button Clicked';
        });
    }

    public async clickSaveButton(layout: string) {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.primaryActionButton, this.timeout);
            await this.primaryActionButton.click();
            return 'Save Button Clicked';
        });
    }

}
