import { by, element } from 'protractor';
import { Utils } from '../../../util/util';

export class RepairsOrdersSearchObject {

    get resetButton() {
        return element(by.buttonText('Reset'));
    }

    get repairOrdersInputField() {
        return element(by.name('searchText'));
    }

    get repairOrdersSearchButton() {
        return element(by.buttonText('Search'));
    }

    get orderCards() {
        return element(by.className('order-card'));
    }

    public async clickSearchButton() {
        await Utils.waitForVisibilityOf(this.repairOrdersSearchButton);
        await this.repairOrdersSearchButton.click();
        console.log('Search button clicked');
    }

    public async verifyOrderCards() {
        await Utils.waitForVisibilityOf(this.resetButton).then(async () => {
            await Utils.waitForVisibilityOf(this.orderCards);
            console.log('Orders results shown');
            await this.resetButton.click();
            console.log('Reset button clicked');
        });
    }
}
