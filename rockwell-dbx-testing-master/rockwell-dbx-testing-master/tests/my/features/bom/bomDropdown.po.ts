import { browser, by, element } from 'protractor';
import {Utils} from "../../../util/util";
const conditions = browser.ExpectedConditions;

export class BomDropdownPageObject {

    private timeout: number = 8000;

    get gearIconButton() {
        return element(by.id('gearButton')) ? element(by.id('gearButton')) : element(by.className('action-dropdown'));
    }
    get mobileGearIconButton() {
        return  element.all(by.buttonText('More Actions')).last() ? element.all(by.buttonText('More Actions')).last() : element(by.className('action-dropdown-toggle'));
    }
    get editBomTitleButton() {
        return element(by.linkText('Edit Title')) ? element(by.linkText('Edit Title')) : element(by.className('selected'));
    }
    get deleteBomButton() {
        return element(by.linkText('Delete')) ? element(by.linkText('Delete')) : element.all(by.className('dropdown-option')).last();
    }
    get deleteBomButtonSafari() {
        return element(by.xpath('//*[@id="gearButton"]/div/ul/li[4]'));
    }
    get moreActionDropdown() {
        return element(by.css('ra-action-dropdown.action-dropdown .ra-action-dropdown button.btn.ra-button1.inline-button'));
    }
    get dropdownOpen() {
        return element(by.className('dropdown-menu opened'));
    }
    get whatsNewDismissButton() {
        return element(by.id('inlineHintDismissButton'));
    }

    public async clickGearIconButton(isMobile) {
        let isIpad = await Utils.isCertainBrowser('iPad 6th');
        let actionsButton = isMobile ? this.mobileGearIconButton : this.gearIconButton;
        if (isIpad) {
            actionsButton = element.all(by.buttonText('More Actions')).first();
        }
        await browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
        return browser.wait(conditions.visibilityOf(actionsButton), this.timeout).then(async () => {
            console.log('More Actions Button Found');
            return actionsButton.click().then(() => {
                console.log('Gear Icon clicked');
            });
        });
    }

    public async clickEditBomTitleButton() {
        let isHighSierraSafari = await Utils.isCertainBrowser('safari', 'macOS');
        if (isHighSierraSafari) {
            return Utils.waitForVisibilityOf(element(by.className('selected'))).then(async () => {
                console.log('Edit button found');
                return element(by.className('selected')).click().then(() => {
                    console.log('Edit Bom Title Button clicked');
                });
            });
        } else {
            return Utils.waitForVisibilityOf(this.editBomTitleButton).then(async () => {
                console.log('Edit button found');
                return this.editBomTitleButton.click().then(() => {
                    console.log('Edit Bom Title Button clicked');
                });
            });
        }
    }

    private async clickDismissWhatsNew() {
        return Utils.waitForVisibilityOf(this.whatsNewDismissButton).then(async () => {
            return this.whatsNewDismissButton.click().then(() => {
                console.log('Dismiss button clicked');
            });
        });
    }

    private async clickDeleteLink() {
        const isHighSierraSafari = await Utils.isCertainBrowser('safari', 'macOS');
        if (isHighSierraSafari) {
            return Utils.waitForVisibilityOf(this.deleteBomButtonSafari).then(async () => {
                console.log('delete button found');
                return Utils.waitTillClickable(this.deleteBomButtonSafari).then(async () => {
                    return this.deleteBomButtonSafari.click().then(() => {
                        console.log('Delete Bom Button clicked');
                    });
                });
            });
        } else {
            return Utils.waitForVisibilityOf(this.deleteBomButton).then(async () => {
                console.log('delete button found');
                return Utils.waitTillClickable(this.deleteBomButton).then(async () => {
                    return this.deleteBomButton.click().then(() => {
                        console.log('Delete Bom Button clicked');
                    });
                });
            });
        }
    }

    public async clickDeleteBomButton() {
        await browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });

        return this.clickDismissWhatsNew().then(() => {
            return this.clickDeleteLink();
        }).catch(() => {
            return this.clickDeleteLink();
        });
    }

    public async verifyDropdownOpen() {
        return browser.wait(conditions.visibilityOf(this.dropdownOpen), this.timeout).then(() => {
            return console.log('Dropdown visible');
        });
    }

    public async deleteBom() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.moreActionDropdown);
            console.log('more action dropdown found');
            await this.moreActionDropdown.click();
            console.log('more action dropdown clicked');
            await Utils.waitForVisibilityOf(this.deleteBomButton);
            console.log('delete bom button found');
            await this.deleteBomButton.click();
            return 'Delete BOM Button Clicked';
        });
    }
}
