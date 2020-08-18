import {browser, by, Capabilities, element} from 'protractor';
import { Utils } from '../../../util/util';
const conditions = browser.ExpectedConditions;

export class MenuDrawerPageObject {

    get signOutButton() {
        return element.all(by.id('signOutButton')).first();
    }
    get myBillOfMaterialsLink() {
        return element.all(by.id('bomDrawerLink')).first();
    }
    get myBillOfMaterialsLandingPage() {
        return element.all(by.className('bom-landing')).first();
    }
    get myAppsLink() {
        return element.all(by.id('appsDrawerLink')).first();
    }
    get myRepairsLink() {
        return element.all(by.id('repairsDrawerLink')).first();
    }
    get myEquipmentLink() {
      return element.all(by.id('equipmentDrawerLink')).first();
    }
    get myServicesLink() {
      return element.all(by.id('servicesLink')).first();
    }
    get myAccountLink() {
        return element.all(by.id('myProfileLink')).first();
    }
    get appStoreLink() {
        return element.all(by.id('storeDrawerLink')).first();
    }
    get helpCenterLink() {
        return element.all(by.id('helpCenterLink')).first();
    }
    get repairsQuotesOrdersHeader() {
        return element(by.className('selector-container'));
    }
    get appStoreHeader() {
        return element(by.id('appStoreHeader'));
    }

    get slidingDrawer() {
        return element(by.id('slidingDrawer'));
    }

    // ------ Menu Drawer BOM Navigation ------

    public async clickOnMyBillOfMaterialsLink() {
        console.log('in bom materials link');
        return Utils.waitForVisibilityOf(this.slidingDrawer).then(async () => {
            return Utils.waitForVisibilityOf(this.myBillOfMaterialsLink).then(async () => {
                console.log('found the link for bom');
                return this.myBillOfMaterialsLink.click().then(() => {
                    console.log('My bom link clicked');
                    return Utils.waitForVisibilityOf(this.myBillOfMaterialsLandingPage).then(async () => {
                        console.log('My BOM Landing Page is Loaded');
                    });
                });
            });
        });
    }

    public async verifyBomLandingPage() {
        return Utils.tryCatcher(async () => {
            return browser.getCurrentUrl();
        });
    }

    // ------ Menu Drawer Apps Navigation ------

    public async clickOnMyAppsLink() {
        console.log('in apps link');
        return Utils.waitForVisibilityOf(this.slidingDrawer).then(async () => {
            return Utils.waitForVisibilityOf(this.myAppsLink).then(async () => {
                console.log('found the link for apps');
                return this.myAppsLink.click().then(() => {
                    console.log('My Apps link clicked');
                });
            });
        });
    }

    public async verifyAppsLandingPage() {
        return Utils.tryCatcher(async () => {
            return browser.getCurrentUrl();
        });
    }

    // ------ Menu Drawer Repairs Navigation ------
    public async clickOnMyRepairsLink() {
        return Utils.tryCatcher(async () => {
            console.log('in repairs link');
            await Utils.waitForVisibilityOf(this.slidingDrawer);
            await Utils.waitForVisibilityOf(this.myRepairsLink);
            console.log('found the link for repairs');
            await this.myRepairsLink.click();
            return 'My Repairs link clicked';
        });
    }

    public async verifyRepairsLandingPage() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.repairsQuotesOrdersHeader);
            return 'On repairs landing page';
        });
    }

    // ------ Menu Drawer MyEquipment Navigation ------
    public async clickOnMyEquipmentLink() {
        console.log('in equipment link');
        return Utils.waitForVisibilityOf(this.slidingDrawer).then(async () => {
            return Utils.waitForVisibilityOf(this.myEquipmentLink).then(async () => {
                console.log('found the link for equipment');
                return this.myEquipmentLink.click().then(() => {
                    console.log('My Equipment link clicked');
                });
            });
        });
    }

    public async verifyMyEquipmentMarketingPage() {
        return Utils.waitForVisibilityOf(this.repairsQuotesOrdersHeader).then(() => {
            console.log('On My Equipment Marketing Page');
        });
    }

    // ------ Menu Drawer MyServices Navigation ------
    public async clickOnMyServicesLink() {
        return Utils.tryCatcher(async () => {
            console.log('in services link');
            await Utils.waitForVisibilityOf(this.slidingDrawer);
            await browser.executeScript('arguments[0].scrollIntoView(false);', this.myServicesLink.getWebElement());
            await Utils.waitForVisibilityOf(this.myServicesLink);
            console.log('found the link for services');
            await Utils.clickWhenPossible(this.myServicesLink);
            console.log('My Services link clicked');
            return 'My Services link clicked';
        });
    }

    // ------ Menu Drawer Account Navigation ------

    public async clickOnMyAccountLink() {
        console.log('in account link');
        return Utils.waitForVisibilityOf(this.slidingDrawer).then(async () => {
            return Utils.waitForVisibilityOf(this.myAccountLink).then(async () => {
                console.log('found the link for account');
                return this.myAccountLink.click().then(() => {
                    console.log('My Account link clicked');
                });
            });
        });
    }

    public async verifyMyAccountPage() {
        let isSafari;
        await browser.getCapabilities().then((cap: any) => {
            console.log('browser name is: ', cap.map_.get('browserName'));
            isSafari = cap.map_.get('browserName') === 'safari';
            console.log(`is the browser safari: ${isSafari}`);
        });

        return Utils.tryCatcher(async () => {
            const title = await browser.getTitle();
            console.log('Main Tab: ' + title);
            const windowHandles: string[] = await browser.getAllWindowHandles();
            const myRokTab = windowHandles[0];
            const myAccountTab = windowHandles[1];

            if (!isSafari) {
                await browser.driver.switchTo().window(myAccountTab);
                await browser.driver.close();
                await browser.driver.switchTo().window(myRokTab);
            } else {
                await browser.driver.switchTo().window(myRokTab);
                await browser.driver.close();
                await browser.driver.switchTo().window(myAccountTab);
            }
            return 'Account Tab confirmed and closed';
        });
    }

    // ------ Menu Drawer App Store Navigation ------
    public async clickOnAppStoreLink() {
        console.log('in recent app store');
        return Utils.waitForVisibilityOf(this.slidingDrawer).then(async () => {
            return Utils.waitForVisibilityOf(this.appStoreLink).then(async () => {
                console.log('found the link for app store');
                return this.appStoreLink.click().then(() => {
                    console.log('App Store link clicked');
                });
            });
        });
    }

    public async verifyAppStoreLandingPage() {
        return Utils.waitForVisibilityOf(this.appStoreHeader).then(() => {
            console.log('On App Store landing page');
        });
    }

    // ------ Menu Drawer Help Center Navigation ------

    public async clickHelpCenterLink() {
        return Utils.tryCatcher(async () => {
            console.log('in recent help center');
            await Utils.waitForVisibilityOf(this.slidingDrawer);
            await Utils.waitForVisibilityOf(this.helpCenterLink);
            console.log('found the link for help center');
            // browser.actions().mouseMove(this.helpCenterLink).click().perform();
            await Utils.clickWhenPossible(this.helpCenterLink);
            // await this.helpCenterLink.click();
            console.log('Clicked Help Center Link');
            return 'Clicked Help Center Link';
        });
    }

    // ------ Menu Drawer Links Verification ------
    public async verifyMenuLinks(linkName: string, siteUrl: string) {
        console.log(linkName);
        console.log('under link name');
        const menuLink = element(by.linkText(linkName));
        // if (linkName = 'Knowledgebase') {
        //     console.log(menuLink);
        // }
        return menuLink.getAttribute('href').then((linkURL: string) => {
            // conditionedLink is the link that is grabbed from the element and makes sure there are no spaces.
            // uses regex to identify spaces, and replaces with no space.
            const condintionedLink = linkURL.replace(/\s/g, '');

            console.log(linkURL + ' = ' + siteUrl);

            if (condintionedLink === siteUrl) {
                return true;
            } else {
                return false;
            }
        });
    }

    // ------ Sign Out ------
    public async clickSignOutButton() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.slidingDrawer);
            await browser.executeScript('arguments[0].scrollIntoView(false);', this.signOutButton.getWebElement());
            await Utils.clickWhenPossible(this.signOutButton);
            console.log('Sign out button clicked');
            return 'Sign out button clicked';
        });
    }
}
