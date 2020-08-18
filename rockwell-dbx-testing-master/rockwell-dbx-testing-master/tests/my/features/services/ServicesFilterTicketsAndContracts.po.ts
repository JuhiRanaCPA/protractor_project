import { by, element, browser } from 'protractor';

export class FilterTicketsAndContracts {

    get ticketAndContractStatusDropdown() {
        console.log('ticket and contract status dropdown');
        return element(by.css('.statusDropdown'));
    }

    get ticketAndContractFilterMobile() {
        console.log('mobile filter button');
        return element(by.css('.filter-mobile')).element(by.css('.ra-button1'));
    }

    get ticketStatusFilterMobileFacet() {
        console.log('mobile filter status facet');
        const facetlist = element(by.css('.facet-list'));
        return facetlist.all(by.css('.facet')).get(1);
    }

    get contractStatusFilterMobileFacet() {
        console.log('mobile filter status facet');
        const facetlist = element(by.css('.facet-list'));
        return facetlist.all(by.css('.facet')).get(0);
    }

    get ticketPriorityFilterMobileFacet() {
        console.log('mobile filter priority facet');
        const facetlist = element(by.css('.facet-list'));
        return facetlist.all(by.css('.facet')).get(0);
    }

    get ticketPriorityFilterMobileFacetValue() {
        console.log('mobile filter priority facet value');
        return element.all(by.css('.facet-option')).get(1);
    }

    get ticketAndContractStatusFilterMobileFacetValue() {
        console.log('mobile filter status facet value');
        return element.all(by.css('.facet-option')).get(2);
    }

    get ticketAndContractFilterMobileDone() {
        console.log('mobile filter done button');
        return element(by.css('.facets-header')).all(by.css('.ra-button2')).get(3);
    }

    get ticketPriorityDropdown() {
        console.log('ticket status dropdown');
        return element(by.css('.priorityDropdown'));
    }

    get ticketStatusDropdownOption() {
        console.log('ticket status dropdown option');
        const dropdown = this.ticketAndContractStatusDropdown;

        const option = dropdown.all(by.css('.dropdown')).get(0).all(by.css('.dropdown-menu')).get(0).all(by.css('.dropdown-option')).get(2);
        return option;
    }

    get ticketPriorityDropdownOption() {
        console.log('ticket status dropdown option');
        const dropdown = this.ticketPriorityDropdown;

        const option = dropdown.all(by.css('.dropdown')).get(0).all(by.css('.dropdown-menu')).get(0).all(by.css('.dropdown-option')).get(1);
        return option;
    }

    get contractStatusDropdownOption() {
        console.log('contract status dropdown option');
        const dropdown = this.ticketAndContractStatusDropdown;

        const option = dropdown.all(by.css('.dropdown')).get(0).all(by.css('.dropdown-menu')).get(0).all(by.css('.dropdown-option')).get(1);
        return option;
    }
}
