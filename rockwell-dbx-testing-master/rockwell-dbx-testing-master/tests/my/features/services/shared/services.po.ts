import { by, element } from 'protractor';
import { Utils } from '../../../../util/util';

export class ServicesShared {

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

    get ticketsList() {
        console.log('tickets list');

        return element(by.css('app-ticket'));
    }

    get contractsTab() {
        console.log('contracts tab');
        return element.all(by.css('.mat-tab-link')).get(2);
    }

    get contractsList() {
        console.log('contracts list');

        return element(by.css('app-contract'));
    }

    get insightsTab() {
        console.log('insights tab');

        return element.all(by.css('.mat-tab-link')).get(3);
    }

    get insightsPage() {
        console.log('insights page');

        return element(by.css('app-insights'));
    }

    public async verifyOverviewPage() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.ticketsListOverview);
            await Utils.waitForVisibilityOf(this.contractListOverview);
            return 'Both Tickets and Contracts are visible!';
        });
    }

    public async verifyTicketsList() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.ticketsList);
            return 'Tickets are loaded!';
        });
    }

    public async verifyContractsList() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.contractsList);
            return 'Contracts are loaded!';
        });
    }

    public async verifyInsightsPage() {
        return Utils.tryCatcher(async () => {
            console.log('waiting for insights to load');
            await Utils.waitForVisibilityOf(this.insightsPage);
            return 'Insights are loaded!';
        });
    }
}
