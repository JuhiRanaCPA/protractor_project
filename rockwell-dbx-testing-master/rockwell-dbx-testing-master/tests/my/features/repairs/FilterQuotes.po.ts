import {by, element} from 'protractor';
import {Utils} from '../../../util/util';

export class RepairsFilterQuotes {
    get repairQuotesStatusDropdownFilter() {
        console.log('quotes status dropdown');
        return element.all(by.css('.app-dropdown .dropdown-toggle')).first();
    }

    get quotesStatusDropdownOption() {
        console.log('quotes status dropdown option');
        const dropdown = element.all(by.css('.app-dropdown'));

        return dropdown.all(by.css('.dropdown-menu')).get(0).all(by.css('.dropdown-option')).get(2);
    }

    get repairQuotesFilterMobileButton() {
        console.log('mobile filter button');
        return element.all(by.css('.filter-mobile')).all(by.css('.ra-button1'));
    }

    get quotesStatusFilterMobileFacet() {
        console.log('mobile filter status facet');
        const facetList = element.all(by.css('.facet-list'));
        return facetList.all(by.css('.facet')).get(0);
    }

    get quotesStatusFilterMobileFacetValue() {
        console.log('mobile filter status facet value');
        return element.all(by.css('.facet-option')).get(2);
    }

    get quotesFilterMobileDone() {
        console.log('mobile filter done button');
        return element.all(by.css('.facets-header')).all(by.css('.ra-button2')).get(3);
    }

    get quotesList() {
        console.log('quotes list');

        return element.all(by.css('app-quote-card')).first();
    }

    public async verifyQuotesList() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.quotesList);
            return 'Quotes are loaded!';
        });
    }
}
