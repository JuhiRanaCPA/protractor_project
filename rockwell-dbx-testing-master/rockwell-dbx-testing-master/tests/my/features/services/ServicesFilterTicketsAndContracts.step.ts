import { Before, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { HomepagePageObject } from '../homepage/homepage.po';
import { MenuDrawerPageObject } from '../menu/menuDrawer.po';
import { FilterTicketsAndContracts } from './ServicesFilterTicketsAndContracts.po';
import { ServicesShared } from './shared/services.po';

let filterTicketsAndContracts: FilterTicketsAndContracts;
let menuDrawerPage: MenuDrawerPageObject;
let homepage: HomepagePageObject;
let layout: string;
let servicesShared: ServicesShared;

Before(async () => {
  filterTicketsAndContracts = new FilterTicketsAndContracts();
  menuDrawerPage = new MenuDrawerPageObject();
  homepage = new HomepagePageObject();
  servicesShared = new ServicesShared();
  const capabilities = await browser.driver.getCapabilities();
  if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
    layout = 'mobile';
  }
  else if (capabilities.get('mobile') && capabilities.get('mobile').browser === 'tablet') {
    layout = 'tablet';
  }
});

When('the user clicks on the ticket status dropdown', async () => {
  if (layout === 'mobile') {
    await filterTicketsAndContracts.ticketAndContractFilterMobile.click();
    await filterTicketsAndContracts.ticketStatusFilterMobileFacet.click();

  } else {
      await filterTicketsAndContracts.ticketAndContractStatusDropdown.click();
  }
});

When('the user select one of the ticket status', async () => {
  if (layout === 'mobile') {
    await filterTicketsAndContracts.ticketAndContractStatusFilterMobileFacetValue.click();
    await filterTicketsAndContracts.ticketAndContractFilterMobileDone.click();
  }
  else {
    await filterTicketsAndContracts.ticketStatusDropdownOption.click();
  }
});

Then('the tickets are filtered by the status selected', async () => {
    await servicesShared.verifyTicketsList();
});

When('the user clicks on the ticket priority dropdown', async () => {
  if (layout === 'mobile') {
    await filterTicketsAndContracts.ticketAndContractFilterMobile.click();
    await filterTicketsAndContracts.ticketPriorityFilterMobileFacet.click();
  }
  else {
    await filterTicketsAndContracts.ticketPriorityDropdown.click();
  }
});

When('the user select one of the ticket priority', async () => {
  if (layout === 'mobile') {
    await filterTicketsAndContracts.ticketPriorityFilterMobileFacetValue.click();
    await filterTicketsAndContracts.ticketAndContractFilterMobileDone.click();
  }
  else {
    await filterTicketsAndContracts.ticketPriorityDropdownOption.click();
  }
});

Then('the tickets are filtered by the priority selected', async () => {
  await servicesShared.verifyTicketsList();
});

When('the user clicks on the contract status dropdown', async () => {
  if (layout === 'mobile') {
    await filterTicketsAndContracts.ticketAndContractFilterMobile.click();
    await filterTicketsAndContracts.contractStatusFilterMobileFacet.click();
  }
  else {
    await filterTicketsAndContracts.ticketAndContractStatusDropdown.click();
  }
});

When('the user select one of the contract status', async () => {
  if (layout === 'mobile') {
    await filterTicketsAndContracts.ticketAndContractStatusFilterMobileFacetValue.click();
    await filterTicketsAndContracts.ticketAndContractFilterMobileDone.click();
  }
  else {
    await filterTicketsAndContracts.contractStatusDropdownOption.click();
  }
});

Then('the contracts are filtered by the status selected', async () => {
  await servicesShared.verifyContractsList();
});
