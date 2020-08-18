import {browser, by, element} from 'protractor';
import { Utils } from '../../../util/util';

export class RepairsPageObject {

    get quotesTab() {
        return element(by.buttonText('Quotes'));
    }
    get ordersTab() {
        return element(by.buttonText('Orders'));
    }

    public async clickQuotesTab() {
        await Utils.waitForVisibilityOf(this.quotesTab);
        await this.scrollTop();
        await this.quotesTab.click();
        console.log('Quotes Tab clicked');
    }

    public async clickOrdersTab() {
        await Utils.waitForVisibilityOf(this.ordersTab);
        await this.scrollTop();
        await this.ordersTab.click();
        console.log('Orders Tab clicked');
    }

    public async scrollTop() {
        await browser.executeScript('window.scrollTo(0,0);');
    }
}
