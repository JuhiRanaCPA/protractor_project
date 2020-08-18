import { browser, by, element } from 'protractor';
import { Utils } from '../../../util/util';

export class ManuallyAddQuoteModalPageObject {

    get modalHeaderElementDesktop() {
        return element.all(by.className('modal-title text-left')).first();
    }

    get seriesDropdown() {
        return element(by.className('border-button text-left dropdown-toggle'));
    }

    get catalogNumberInputField() {
        return element.all(by.css('.input-line input')).first();
    }

    get firstSeriesDropdownOption() {
        return element.all(by.className('dropdown-option')).first();
    }

    get manufacturerNumberInputField() {
        return element(by.id('manufacturer'));
    }

    get productDescriptionInputField() {
        return element(by.id('description'));
    }

    get addProductButton() {
        return element(by.buttonText('Add Product'));
    }

    public async verifyModalIsVisibleDesktop() {
        await Utils.waitForVisibilityOf(this.modalHeaderElementDesktop);
        console.log('Modal is visible');
    }

    public async clickSeriesDropdown() {
        await Utils.waitForVisibilityOf(this.seriesDropdown);
        await this.seriesDropdown.click();
        console.log('Series Dropdown open');
    }

    public async clickFirstSeriesDropdownOption() {
        await Utils.waitForVisibilityOf(this.firstSeriesDropdownOption);
        await this.firstSeriesDropdownOption.click();
        console.log('Option clicked');
    }

    public async clickAddProductButton(layout: string) {
        // if (layout === 'mobile') {
        //     browser.driver.hideSoftKeyboard('tapOut');
        // }
        await Utils.waitForVisibilityOf(this.addProductButton);
        await this.addProductButton.click();
        console.log('Add Product button clicked');
    }
}
