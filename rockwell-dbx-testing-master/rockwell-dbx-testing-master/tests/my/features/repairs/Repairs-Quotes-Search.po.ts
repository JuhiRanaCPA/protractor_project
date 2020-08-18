import { browser, by, element } from 'protractor';
import { Utils } from '../../../util/util';

export class RepairsQuotesSearchPageObject {

    get repairQuotesSearchInput() {
        return element(by.name('searchText'));
    }

    get repairQuotesSearchButton() {
        return element(by.buttonText('Search'));
    }

    get quoteCards() {
        return element.all(by.id('quote-card'));
    }

    get resetButtonDesktop() {
        return element.all(by.buttonText('Reset')).first();
    }

    get resetButtonMobile() {
        return element(by.buttonText('Reset'));
    }

    public async clickRepairQuotesSearchButton(product: string) {
        await Utils.waitForVisibilityOf(this.repairQuotesSearchInput);
        await this.repairQuotesSearchInput.sendKeys(product);
        await this.repairQuotesSearchButton.click();
    }

    public async verifyQuoteCard(layout: string) {
        let resetButton = this.resetButtonDesktop;
        if (layout === 'mobile') {
            resetButton = this.resetButtonMobile;
        }
        await Utils.waitForVisibilityOf(resetButton).then(async () => {
            await Utils.waitForVisibilityOf(this.quoteCards.first());
            console.log('Quotes results shown');
            await resetButton.click();
            console.log('Reset button clicked');
        });
    }
}
