import { browser, by, element } from 'protractor';
import { Utils } from '../../../util/util';

export class NewUserValidate {

    private timeout: number = 10000;

    get signOutButton() {
        return element.all(by.id('signOutButton')).first();
    }
    get myBillOfMaterialsLink() {
        return element.all(by.id('bomDrawerLink')).first();
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
    get BOMpageMsg1() {
        return element(by.css('.title .ra-display2'));
    }
    get BOMpageMsg2() {
        return element.all(by.className('text ra-body3')).first();
    }
    get AppspageMsg1() {
        return element(by.className('welcome-title ra-display2'));
    }
    get AppspageMsg2() {
        return element(by.className('welcome-text-container ra-body3'));
    }
    get RepairspageMsg1() {
        return element(by.className('no-content-title ra-display2'));
    }
    get RepairspageMsg2() {
        return element(by.className('no-content-text ra-body1'));
    }
    get EquipmentpageMsg1() {
        return element.all(by.className('ra-display1')).first();
    }
    get EquipmentpageMsg2() {
        return element.all(by.className('ra-body1')).first();
    }
    get ServicespageMsg1() {
        return element.all(by.className('ra-display2')).first();
    }
    get ServicespageMsg2() {
        return element.all(by.className('ra-body1')).first();
    }
    get slidingDrawer() {
        return element(by.id('navBarMenuButton'));
    }
    get Onboardbutton() {
        return element(by.id('homeOnboardButton'));
    }

    // ------ New User Validation BOM Navigation ------

    public async clickOnMyBillOfMaterialsLink() {
        // this.Onboardbutton.click();
        console.log('in bom materials link');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.slidingDrawer, this.timeout);
            await Utils.waitForVisibilityOf(this.myBillOfMaterialsLink, this.timeout);
            console.log('found link for bom');
            await this.myBillOfMaterialsLink.click();
            console.log('My bom link clicked');
            return 'Bom clicked';
        });
    }

    public async verifyBomLandingPage() {
        return await browser.getCurrentUrl().then(async (url: string) => {
            console.log('url is: ', url);
            return url.endsWith('my/bom');
        });
    }

    // ------ New User Validation Apps Navigation ------

    public async clickOnMyAppsLink() {
        console.log('in apps link');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.slidingDrawer, this.timeout);
            await Utils.waitForVisibilityOf(this.myAppsLink, this.timeout);
            console.log('found link for apps');
            await this.myAppsLink.click();
            console.log('My Apps link clicked');
            return 'Apps clicked';
        });
    }

    public async verifyAppsLandingPage() {
        return await browser.getCurrentUrl().then(async (url: string) => {
            return url.includes('my/apps/list/my-apps');
        });
    }

    // ------ New User Validation Repairs Navigation ------
    public async clickOnMyRepairsLink() {
        console.log('in repairs link');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.slidingDrawer, this.timeout);
            await Utils.waitForVisibilityOf(this.myRepairsLink, this.timeout);
            console.log('found link for repairs');
            await this.myRepairsLink.click();
            console.log('My Repairs link clicked');
            return 'Repairs clicked';
        });
    }

    public async verifyRepairsLandingPage() {
        browser.getCurrentUrl().then((url: string) => {
            return url.includes('my/repairs/quotes');
        });
    }

    // ------ New User Validation My Equipment Navigation ------
    public async clickOnMyEquipmentLink() {
        console.log('in equipment link');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.slidingDrawer, this.timeout);
            await Utils.waitForVisibilityOf(this.myEquipmentLink, this.timeout);
            console.log('found link for equipment');
            await this.myEquipmentLink.click();
            console.log('My Equipment link clicked');
            return 'Equipment clicked';
        });
    }

    public async verifyMyEquipmentMarketingPage() {
        await browser.getCurrentUrl().then((url: string) => {
            console.log(url);
            return url.includes('my/equipment/info');
        });
    }

    // ------ New User Validation MyServices Navigation ------
    public async clickOnMyServicesLink() {
        console.log('in services link');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.slidingDrawer, this.timeout);
            await this.slidingDrawer.click();
            await Utils.waitForVisibilityOf(this.myServicesLink, this.timeout);
            console.log('found link for services');
            await this.myServicesLink.click();
            console.log('My Services link clicked');
            return 'Services clicked';
        });
    }

    public async verifyMyServicesPage() {
        await browser.getCurrentUrl().then(async (url: string) => {
            console.log(url);
            return url.includes('my/services/overview');
        });
    }

    // ------ New User Validation Account Navigation ------

    public async clickOnMyAccountLink() {
        console.log('in account link');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.slidingDrawer, this.timeout);
            await Utils.waitForVisibilityOf(this.myAccountLink, this.timeout);
            console.log('found link for account');
            await this.myAccountLink.click();
            console.log('My Account link clicked');
            return 'Account clicked';
        });
    }

    public async verifyMyAccountPage() {
        let isSafari;
        await browser.getCapabilities().then(async (cap: any) => {
            console.log('browser name is: ', cap.map_.get('browserName'));
            isSafari = cap.map_.get('browserName') === 'safari';
        });
        return browser.getTitle().then(async (title: string) => {
            console.log('Main Tab: ' + title);
            const windowHandles = browser.getAllWindowHandles();
            return windowHandles.then(async (handles: string[]) => {
                const myRokTab = handles[0];
                const myAccountTab = handles[1];

                if (!isSafari) {
                    return browser.driver.switchTo().window(myAccountTab).then(async () => {
                        return browser.driver.close().then(async () => {
                            await browser.switchTo().window(myRokTab);
                        });
                    });
                } else {
                    return browser.driver.switchTo().window(myRokTab).then(async () => {
                        return browser.driver.close().then(async () => {
                            await browser.switchTo().window(myAccountTab);
                        });
                    });
                }
            });
        });
    }
    
    public async getServicesText() {
        console.log('services text');
        await Utils.waitForVisibilityOf(this.ServicespageMsg2, this.timeout);
        return await this.ServicespageMsg2.getText().then(async (txt: string) => {
            return txt;
        });
    }
    public async getEquipmentText() {
        console.log('equipment text');
        await Utils.waitForVisibilityOf(this.EquipmentpageMsg2, this.timeout);
        return await this.EquipmentpageMsg2.getText().then(async (txt: string) => {
            return txt;
        });
    }
}
