import { browser, by, element } from 'protractor';
import { Utils } from '../../../util/util';
import * as testDataa from '../../features/my-contacts/myContacts.json';

export class UpdateContactsPageObjects {

    private timeout: number = 12000;

    get menuDrawer() {
        return element(by.id('navBarMenuButton'));
    }
    get myContactsLink() {
        return element(by.id('contactsDrawerAccordion'));
    }
    get updateContactLink() {
        return element(by.className('update-contacts-button text-uppercase black-text-button'));
    }
    get locationTextBox() {
        return element(by.id('locationInput'));
    }
    get distanceRangeDropdown() {
        return element.all(by.className('btn-group')).first();
    }
    get distanceUnitRangeDropdown() {
        return element.all(by.className('btn-group miles-btn-group')).first();
    }
    get selectDistanceRange() {
        return element(by.css('#contactsAccordion')).element(by.cssContainingText('.dropdown-item', (testDataa as any).distance_range));
    }
    get selectDistanceUnit() {
        return element(by.cssContainingText('.dropdown-item', (testDataa as any).unit_distance));
    }
    get findMyContactbtn() {
        return element(by.className('btn ra-button1 primary-button medium-button find-contacts-button             '));
    }
    get distributorResultsHeading() {
        return element(by.id('distributorResultsAccordion'));
    }
    get selectDistributorResultCount() {
        return element.all(by.name('distributor-radio-group'));
    }
    get selectDistributorResult() {
        return element(by.css('div.distributor-results ul:nth-child(2)'));
    }
    get SaveMyContactsbtn() {
        return element(by.className('btn ra-button1 secondary-button medium-button save-contacts-button'));
    }
    get salesResultsHeading() {
        return element(by.id('salesResultsAccordion'));
    }
    get selectSalesResultCount() {
        return element.all(by.name('sales-radio-group'));
    }
    get selectSalesResult() {
        return element(by.css('div.sales-results ul:nth-child(2)'));
    }
    get signOutButton() {
        return element.all(by.id('signOutButton')).first();
    }

    public async clickOnMenubar() {
        console.log('Click Menubar');
        return await Utils.clickWhenPossible(this.menuDrawer);
    }

    public async clickOnContactslink() {
        console.log('Click My Contacts link');
        return await Utils.clickWhenPossible(this.myContactsLink);
    }

    public async enterLocation() {
        console.log('Enter Location of Contact');
        await this.locationTextBox.clear();
        await Utils.sendKeysTo(this.locationTextBox, (testDataa as any).location);
    }

    public async clickDistanceDropdown() {
        console.log('Select Distance range');
        await browser.executeScript('arguments[0].scrollIntoView(false);', this.signOutButton.getWebElement());
        await Utils.clickWhenPossible(this.distanceRangeDropdown);
        await Utils.clickWhenPossible(this.selectDistanceRange);
        console.log('Distance selected');
    }

    public async clickRangeUnitDropdown() {
        console.log('Click unit distance');
        await Utils.clickWhenPossible(this.distanceUnitRangeDropdown);
        await Utils.clickWhenPossible(this.selectDistanceUnit);
        console.log('Unit selected');
    }

    public async clickFindMyContactbtn() {
        console.log('Click Find Contact button');
        await Utils.clickWhenPossible(this.findMyContactbtn);
    }

    public async selectDistributorContact() {
        console.log('Select Distributor Contact');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.distributorResultsHeading, this.timeout);
            const dCount: number = await this.selectDistributorResultCount.count();
            if (dCount > 1) {
                await this.selectDistributorResult.isPresent().then(async () => {
                    await browser.executeScript('arguments[0].scrollIntoView(false);', this.salesResultsHeading.getWebElement());
                    await Utils.clickWhenPossible(this.selectDistributorResult.all(by.className('radio-col')).first()).then(async () => {
                        console.log('Distributor Contact selected');
                    });
                });
            } else if (dCount === 1) {
                console.log('Only 1 Distributor Contact available');
            } else {
                console.log('No Contacts available based on the given location');
            }
            return 'results shown';
        });
    }

    public async selectSalesOfficeContact() {
        console.log('Select Sales Office Contact');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.salesResultsHeading, this.timeout);
            const sCount: number = await this.selectSalesResultCount.count();
            if (sCount > 1) {
                await this.selectSalesResult.isPresent().then(async () => {
                    await browser.executeScript('arguments[0].scrollIntoView(false);', this.selectSalesResult.getWebElement());
                    await Utils.clickWhenPossible(this.selectSalesResult.all(by.className('radio-col')).first()).then(async () => {
                        console.log('Sales Contact selected');
                    });
                });
            } else if (sCount === 1) {
                console.log('Only 1 Sales Office Contact available')
            } else {
                console.log('No Contacts available based on the given location');
            }
            return 'results shown';
        });
    }

    public async clickSaveMyContactsbtn() {
        console.log('Save selected Contacts');
        return Utils.tryCatcher(async () => {
            await browser.executeScript('arguments[0].scrollIntoView();', this.SaveMyContactsbtn.getWebElement());
            await Utils.clickWhenPossible(this.SaveMyContactsbtn);
            return 'Save button clicked';
        });
    }

    public async checkForUpdateContactLink() {
        console.log('Check for "Update Contact link" displayed for the User');
        await this.updateContactLink.isPresent().then(async (result: boolean) => {
            if (result) {
                console.log('User has already a contact saved, so updating it');
                await Utils.clickWhenPossible(this.updateContactLink).then(async () => {
                    console.log('Clicked "Update Contact Link" for updating the contacts for the User');
                });
            } else {
                console.log('User doesn\'t have a contact, needs to save a new Contact');
                console.log('Save Contacts process started');
            }
        });

    }
}
