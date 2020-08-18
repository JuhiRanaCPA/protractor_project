import {Before, Then, When} from 'cucumber';
import {browser} from 'protractor';
import {HomepagePageObject} from '../homepage/homepage.po';
import {MenuDrawerPageObject} from '../menu/menuDrawer.po';
import {SortTicketsAndContracts} from './ServicesSortTicketsAndContracts.po';
import {ServicesShared} from './shared/services.po';

let sortTicketsAndContracts: SortTicketsAndContracts;
let menuDrawerPage: MenuDrawerPageObject;
let homepage: HomepagePageObject;
let layout: string;
let servicesShared: ServicesShared;

Before(async () => {
    sortTicketsAndContracts = new SortTicketsAndContracts();
    menuDrawerPage = new MenuDrawerPageObject();
    homepage = new HomepagePageObject();
    servicesShared = new ServicesShared();
    const capabilities = await browser.driver.getCapabilities();
    if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
        layout = 'mobileOrTablet';
    }
});

When('the user clicks on the sort tickets by created date button', async () => {
    if (layout === 'mobileOrTablet') {
        console.log('sorted mobile');
        await sortTicketsAndContracts.ticketOrContractSelectDropdown.click();
        await sortTicketsAndContracts.ticketSortByCreateDateMobileTablet.click();
    } else {
        console.log('sorted desktop');
        await sortTicketsAndContracts.ticketSortByCreateDate.click();
    }
});

When('the user clicks on the sort tickets by status button', async () => {
    if (layout === 'mobileOrTablet') {
        console.log('sorted mobile');
        await sortTicketsAndContracts.ticketOrContractSelectDropdown.click();
        await sortTicketsAndContracts.ticketSortByStatusMobileTablet.click();
    } else {
        console.log('sorted desktop');
        await sortTicketsAndContracts.ticketSortByTicketStatus.click();
    }
});

When('the user clicks on the sort tickets by priority button', async () => {
    if (layout === 'mobileOrTablet') {
        console.log('sorted mobile');
        await sortTicketsAndContracts.ticketOrContractSelectDropdown.click();
        await sortTicketsAndContracts.ticketSortByPriorityMobileTablet.click();
    } else {
        console.log('sorted desktop');
        await sortTicketsAndContracts.ticketSortByPriority.click();
    }
});

When('the user clicks on the sort tickets by number button', async () => {
    if (layout === 'mobileOrTablet') {
        console.log('sorted mobile');
        await sortTicketsAndContracts.ticketOrContractSelectDropdown.click();
        await sortTicketsAndContracts.ticketSortByNumberMobileTablet.click();
    } else {
        console.log('sorted desktop');
        await sortTicketsAndContracts.ticketSortByTicketNumber.click();
    }
});

When('the user clicks on the sort tickets by description button', async () => {
    if (layout === 'mobileOrTablet') {
        console.log('sorted mobile');
        await sortTicketsAndContracts.ticketOrContractSelectDropdown.click();
        await sortTicketsAndContracts.ticketSortByDescriptionMobileTablet.click();
    } else {
        console.log('sorted desktop');
        await sortTicketsAndContracts.ticketSortByTicketDescription.click();
    }
});

Then('the tickets are sorted by the column specified', async () => {
    await servicesShared.verifyTicketsList();
});

When('the user clicks on the sort contracts by contract # button', async () => {
    if (layout === 'mobileOrTablet') {
        console.log('sorted mobile by contract number');
        await sortTicketsAndContracts.ticketOrContractSelectDropdown.click();
        await sortTicketsAndContracts.contractSortByNumberMobileTablet.click();
    } else {
        console.log('sorted desktop');
        await sortTicketsAndContracts.contractSortContractNumber.click();
    }
});

When('the user clicks on the sort contracts by description button', async () => {
    if (layout === 'mobileOrTablet') {
        console.log('sorted mobile by description');
        await sortTicketsAndContracts.ticketOrContractSelectDropdown.click();
        await sortTicketsAndContracts.contractSortByDescriptionMobileTablet.click();
    } else {
        console.log('sorted desktop');
        await sortTicketsAndContracts.contractSortDescription.click();
    }
});

When('the user clicks on the sort contracts by start date button', async () => {
    if (layout === 'mobileOrTablet') {
        console.log('sorted mobile by start date');
        await sortTicketsAndContracts.ticketOrContractSelectDropdown.click();
        await sortTicketsAndContracts.contractSortByStartDateMobileTablet.click();
    } else {
        console.log('sorted desktop');
        await sortTicketsAndContracts.contractSortStartDate.click();
    }
});

When('the user clicks on the sort contracts by end date option', async () => {
    if (layout === 'mobileOrTablet') {
        console.log('sorted mobile by end date');
        await sortTicketsAndContracts.ticketOrContractSelectDropdown.click();
        await sortTicketsAndContracts.contractSortByEndDateMobileTablet.click();
    } else {
        console.log('sorted desktop');
        await sortTicketsAndContracts.contractSortEndDate.click();
    }
});

When('the user clicks on the sort contracts by status option', async () => {
    if (layout === 'mobileOrTablet') {
        console.log('sorted mobile by end date');
        await sortTicketsAndContracts.ticketOrContractSelectDropdown.click();
        await sortTicketsAndContracts.contractSortByStatusMobileTablet.click();
    } else {
        console.log('sorted desktop');
        await sortTicketsAndContracts.contractSortStatus.click();
    }
});

Then('the contracts are sorted by the column specified', async () => {
    await servicesShared.verifyContractsList();
});
