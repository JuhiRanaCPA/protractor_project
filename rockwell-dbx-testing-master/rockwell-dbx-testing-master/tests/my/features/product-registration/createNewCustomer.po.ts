import { browser, by, element, ElementFinder } from 'protractor';
import { Utils } from '../../../util/util';

export class CreateCustomerPageObjects {
    private timeout: number = 1200000;

    get clickCreateCustbutton() {
        return element.all(by.className('mat-option-text'));
    }
    get custDetailsModal() {
        return element(by.className('modal-main-title ra-title1'));
    }
    get custNameTextbox() {
        return element(by.id('mat-input-2'));
    }
    get selectCountryDropdown() {
        return element(by.id('mat-select-0'));
    }
    get clickCountry() {
        return element(by.cssContainingText('.mat-option-text', 'India'));
    }
    get address1Textbox() {
        return element(by.id('mat-input-3'));
    }
    get address2Textbox() {
        return element(by.id('mat-input-4'));
    }
    get cityTextbox() {
        return element(by.id('mat-input-5'));
    }
    get selectStateDropdown() {
        return element(by.id('mat-select-1'));
    }
    get clickState() {
        return element(by.cssContainingText('.mat-option-text', 'Karnataka'));
    }
    get zipcodeTextbox() {
        return element(by.id('mat-input-6'));
    }
    get createButton() {
        return element(by.className('btn ra-button1 secondary-button modal-button full-width     '));
    }
    get cancelButton() {
        return element(by.className('btn ra-button1 tertiary-button modal-button full-width                     '));
    }

    public async clickCreateCust() {
        console.log('To select Create Customer button');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.clickCreateCustbutton.first(), this.timeout);
            await this.clickCreateCustbutton.first().click().then(async () => {
                console.log('Create Customer button clicked');
            });
            return 'cst name slctd';
        });
    }
    public async enterCustDetails() {
        console.log('Enter Customer details');
        return Utils.tryCatcher(async () => {
            await this.custDetailsModal.isPresent().then(async () => {
                console.log('Customer details modal present');
                await Utils.sendKeysTo(this.custNameTextbox, 'Test Cust001');
                await Utils.clickWhenPossible(this.selectCountryDropdown);
                console.log('Country dropdown selected');
                await Utils.clickWhenPossible(this.clickCountry);
                console.log('Country selected');
            });
            return 'cst name slctd';
        });
    }
    public async enterCustDetails1() {
        return Utils.tryCatcher(async () => {
            await this.custDetailsModal.isPresent().then(async () => {
                await Utils.sendKeysTo(this.address1Textbox, 'Address 1');
                await Utils.sendKeysTo(this.address2Textbox, 'Address 2');
                await Utils.sendKeysTo(this.cityTextbox, 'Bangalore');
                await Utils.clickWhenPossible(this.selectStateDropdown);
                console.log('State dropdown selected');
                await Utils.clickWhenPossible(this.clickState);
                await Utils.sendKeysTo(this.zipcodeTextbox, '58410');
                await this.createButton.isPresent().then(async () => {
                    console.log('Create Customer button found');
                });
            });
            return 'cust addrs'
        });
    }
    public async verifyFinalCustDetails() {
        console.log('Verify Customer details');
        return Utils.tryCatcher(async () => {
            await this.custDetailsModal.isPresent().then(async () => {
                console.log('Modal presnt');
                await this.cancelButton.isPresent().then(async () => {
                    console.log('Cancel button found');
                    await this.cancelButton.click().then(async () => {
                        console.log('Cancel button clicked');
                    });
                });
            });
            console.log('Customer details verified');
            return 'cst name slctd';
        });
    }
}