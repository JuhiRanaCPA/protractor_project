import { browser, by, element } from 'protractor';
import { Utils } from '../../../util/util';
const conditions = browser.ExpectedConditions;

export class MenuPageObject {

    get menuLogo() {
        return element(by.className('ic-menu'));
    }

    get menuDrawer() {
        return element(by.className('mat-drawer-inner-container'));
    }

    get profileTabButton() {
        return element(by.linkText('Profile'));
    }

    get signOutButton() {
        return element(by.linkText('SIGN OUT'));
    }

    // ------ Profile ------
    public async clickProfileTab() {
        return this.menuDrawer.isDisplayed().then((isVisible) => {
            if (isVisible) {
                return this.checkIfProfileIsSelectedAndClick();
            } else {
                return this.menuLogo.click().then(() => {
                    return this.checkIfProfileIsSelectedAndClick();
                });
            }
        });
    }

    public checkIfProfileIsSelectedAndClick() {
        return this.profileTabButton.getAttribute('class').then((classes) => {
            if (classes === "selected") {
                return Promise.resolve();
            } else {
                return this.profileTabButton.click();
            }
        });
    }

    // ------ Sign Out ------
    public async clickSignOutButton() {
        await browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
        return this.menuDrawer.isDisplayed().then(function (isVisible) {
            if (isVisible) {
                return this.signOutButton.click();
            } else {
                return this.menuLogo.click().then(() => {
                    return this.signOutButton.click();
                });
            }
        }.bind(this));
    }
}
