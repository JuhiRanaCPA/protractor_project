import { browser, by, element } from 'protractor';
import { NavBarPageObject } from '../../shared/pages/navbar.po';
import { MenuDrawerPageObject } from '../menu/menuDrawer.po';
import { expect } from 'chai';
import { Utils } from '../../../util/util';

const conditions = browser.ExpectedConditions;

const navBarPage = new NavBarPageObject();
const menuDrawer = new MenuDrawerPageObject();

export class BomLandingPageObject {

    private timeout: number = 90000;


    get noContentTitle() {
        return element(by.className('no-content'));
    }
    get createNewBomButton() {
        return element(by.css('app-mr-bom-landing .selector-container button.repairs-button-create'));
    }
    get toastCancelButton() {
        return element(by.className('toast-cancel'));
    }

    get ordersTab() {
        return element(by.buttonText('Orders'));
    }

    get firstOrder() {
        return element(by.css('.order-card .bom-order-card .bom-order-number'));
    }

    get continueButton() {
        return element(by.buttonText('CONTINUE'));
    }

    get bomCard() {
        return element.all(by.className('bom-item'));
    }

    get bomCreateModal() {
        return element.all(by.className('bom-create-modal')).first();
    }

    get bomLanding() {
        return element.all(by.className('bom-landing')).first();
    }

    public async verifyLandingPage() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.bomLanding);
            console.log('BOM Landing Page Loaded');
            return 'BOM Landing Page Loaded';
        })
    }

    public async navigateToFromMenuDrawer() {
        await navBarPage.clickMenuButton().then(async () => {
            console.log('Menu Drawer button clicked');
            return menuDrawer.clickOnMyBillOfMaterialsLink();
        });
    }

    public async verifyEmptySelf() {
        return browser.wait(conditions.visibilityOf(this.noContentTitle), this.timeout).then(() => {
            console.log('Bom empty landing page is visible');
        });
    }

    public async clickCreateNewBomButton() {
        console.log('in click create new bom button');
        return Utils.tryCatcher(async () => {
            await Utils.waitTillClickable(this.createNewBomButton);
            await Utils.waitForVisibilityOf(this.createNewBomButton, this.timeout);
            console.log('create new button is visible');
            await Utils.clickWhenPossible(this.createNewBomButton);
            console.log('Create New Bom button clicked');
            await Utils.waitForVisibilityOf(this.bomCreateModal);
            return 'Create New Bom button clicked'
        });
    }

    public async clickOnBomByTitle(bomTitle: string) {
        await browser.sleep(5000);
        return browser.wait(conditions.visibilityOf(element.all(by.css('#bomcard-div')).first()), this.timeout)
        .then(async () => {
            const elementList = element.all(by.css('#bomcard-div'))
            .filter((elem: any) => {
                const title = elem.all(by.css('.title')).first();
                const titletext = title.getText();
                return titletext.then((text: string) => {
                    const hasTitle = text.trim();
                    const result = (hasTitle === bomTitle);
                    return result;
                });
            });
            elementList.first().click();
        });
    }

    public async dismissToast() {
        return Utils.tryCatcher(async () => {
            console.log('in dismiss toast');
            await Utils.waitForInvisibilityOf(this.toastCancelButton);
            console.log('toast message dismissed');
            return 'toast message dismissed';
        });
    }

    public async clickOrdersTab() {
        return browser.wait(conditions.visibilityOf(this.ordersTab), this.timeout).then(async () => {
            console.log('Orders tab is visible');
            this.ordersTab.click().then(async () => {
                console.log('Orders tab clicked');
            });
        });
    }

    public async clickFirstOrder() {
        return browser.wait(conditions.visibilityOf(this.firstOrder), this.timeout).then(async () => {
            console.log('First order is visible');
            this.firstOrder.click().then(async () => {
                console.log('First order clicked');
            });
        });
    }

    public async clickContinueButton() {
        return browser.wait(conditions.visibilityOf(this.continueButton), this.timeout).then(async () => {
            console.log('Continue button is visible');
            this.continueButton.click().then(async () => {
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
            await browser.getCurrentUrl().then((url: string) => {
                expect(url).to.have.contains('https://webshop-uat.rexel.com')
                expect(url).to.have.contains('4564554');
            }).then(() => {
                browser.close();
            }).then(() => {
                browser.switchTo().window(handles[0]);
            });
        });
    }

    public async getBOMCount(): Promise<any> {
        return Utils.tryCatcher(async () => {
            const count = await this.bomCard.count();
            return count;
        });
    }

    public async clickFirstBom() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.bomCard.first());
            await this.bomCard.first().click();
            return 'Clicked on first BOM';
        });
    }
}
