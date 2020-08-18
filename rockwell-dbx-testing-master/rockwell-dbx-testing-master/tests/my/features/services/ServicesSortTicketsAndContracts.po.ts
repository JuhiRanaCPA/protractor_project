import { by, element } from 'protractor';

export class SortTicketsAndContracts {

    get ticketsListOverview() {
        console.log('ticket list overview');
        return element(by.css('app-overview-service-tickets'));
    }

    get contractListOverview() {
        console.log('contract list overview');
        return element(by.css('app-overview-service-contracts'));
    }

    get ticketsTab() {
        console.log('tickets tab');
        return element.all(by.css('.mat-tab-link')).get(1);
    }

    get ticketSortByTicketNumber() {
        console.log('tickets sort by number');
        return element(by.css('.number'));
    }
    get ticketSortByTicketDescription() {
        console.log('tickets sort by description');
        return element(by.css('.description'));
    }
    get ticketSortByPriority() {
        console.log('tickets sort by priority');
        return element(by.css('.priority'));
    }
    get ticketSortByTicketStatus() {
        console.log('tickets sort by status');
        return element(by.css('.status'));
    }
    get ticketSortByCreateDate() {
        console.log('tickets sort by create date');
        return element(by.css('.create-date'));
    }

    get ticketSortByCreateDateMobileTablet() {
        console.log('tickets sort by create date mobile or tablet');
        const ul = element(by.css('.dropdown-menu'));
        return ul.all(by.css('.dropdown-option')).get(4)
            .element(by.css('.dropdown-item'));
    }
    get ticketSortByStatusMobileTablet() {
        console.log('tickets sort by status mobile or tablet');
        const ul = element(by.css('.dropdown-menu'));
        return ul.all(by.css('.dropdown-option')).get(2)
            .element(by.css('.dropdown-item'));
    }
    get ticketSortByPriorityMobileTablet() {
        console.log('tickets sort by priority mobile or tablet');
        const ul = element(by.css('.dropdown-menu'));
        return ul.all(by.css('.dropdown-option')).get(3)
            .element(by.css('.dropdown-item'));
    }
    get ticketSortByDescriptionMobileTablet() {
        console.log('tickets sort by description mobile or tablet');
        const ul = element(by.css('.dropdown-menu'));
        return ul.all(by.css('.dropdown-option')).get(1)
            .element(by.css('.dropdown-item'));
    }
    get ticketSortByNumberMobileTablet() {
        console.log('tickets sort by Ticket Number mobile or tablet');
        const ul = element(by.css('.dropdown-menu'));
        return ul.all(by.css('.dropdown-option')).get(0)
            .element(by.css('.dropdown-item'));
    }

    get ticketOrContractSelectDropdown() {
        console.log('contracts sort mobile or tablet dropdown selected');
        return element(by.css('.col-dd'))
            .element(by.css('ra-dropdown'))
            .element(by.css('button'));
    }

    get contractSortByNumberMobileTablet() {
        console.log('contracts dropdown selected ContractNumber');
        const ul = element(by.css('.dropdown-menu'));
        return ul.all(by.css('.dropdown-option')).get(0)
            .element(by.css('.dropdown-item'));
    }

    get contractSortByDescriptionMobileTablet() {
        console.log('contracts dropdown selected Description');
        const ul = element(by.css('.dropdown-menu'));
        return ul.all(by.css('.dropdown-option')).get(1)
                .element(by.css('.dropdown-item'));
    }

    get contractSortByStartDateMobileTablet() {
        console.log('contracts dropdown selected Start Date');
        const ul = element(by.css('.dropdown-menu'));
        return ul.all(by.css('.dropdown-option')).get(3)
            .element(by.css('.dropdown-item'));
    }

    get contractSortByEndDateMobileTablet() {
        console.log('contracts dropdown selected End Date');
        const ul = element(by.css('.dropdown-menu'));
        return ul.all(by.css('.dropdown-option')).get(4)
            .element(by.css('.dropdown-item'));
    }

    get contractSortByStatusMobileTablet() {
        console.log('contracts dropdown selected Status');
        const ul = element(by.css('.dropdown-menu'));
        return ul.all(by.css('.dropdown-option')).get(2)
            .element(by.css('.dropdown-item'));
    }

    get contractSortContractNumber() {
        console.log('contracts sort contract number');
        return element(by.css('.number'));
    }
    get contractSortDescription() {
        console.log('contracts sort description');
        return element(by.css('.description'));
    }
    get contractSortStartDate() {
        console.log('contracts sort start date');
        return element(by.css('.start-date'));
    }
    get contractSortEndDate() {
        console.log('contracts sort end date');
        return element(by.css('.end-date'));
    }
    get contractSortStatus() {
        console.log('contracts sort Status');
        return element(by.css('.status'));
    }
}
