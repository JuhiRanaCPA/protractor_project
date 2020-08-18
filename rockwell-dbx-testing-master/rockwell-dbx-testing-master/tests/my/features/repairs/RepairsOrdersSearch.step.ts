import { Before, Then, When } from 'cucumber';
import { Utils } from '../../../util/util';
import { MenuDrawerPageObject } from '../menu/menuDrawer.po';
import { RepairsOrdersSearchObject } from './RepairsOrdersSearch.po';
import { RepairsPageObject } from './VerifyMyOrderMyQuotesTabs.po';

let menuDrawerPage: MenuDrawerPageObject;
let repairsPage: RepairsPageObject;
let repairsOrdersSearch: RepairsOrdersSearchObject;

Before(() => {
    menuDrawerPage = new MenuDrawerPageObject();
    repairsPage = new RepairsPageObject();
    repairsOrdersSearch = new RepairsOrdersSearchObject();

});

When('the user performs a search with the order number "65679765"', async () => {
    await Utils.sendKeysTo(repairsOrdersSearch.repairOrdersInputField, '65679765');
    await repairsOrdersSearch.clickSearchButton();
});

When('the user performs a search with the catalog number "2098DSDHV220SE"', async () => {
    await Utils.sendKeysTo(repairsOrdersSearch.repairOrdersInputField, '2098DSDHV220SE');
    await repairsOrdersSearch.clickSearchButton();
});

When('the user performs a search with the product family name "Ultra 3000 Multi-axis Motion Control"', async () => {
    await Utils.sendKeysTo(repairsOrdersSearch.repairOrdersInputField, 'Ultra 3000 Multi-axis Motion Control');
    await repairsOrdersSearch.clickSearchButton();
});

When('the user performs a search with the description name "Ultra 3000 22kW with SERCOS Servo Drive"', async () => {
    await Utils.sendKeysTo(repairsOrdersSearch.repairOrdersInputField, 'Ultra 3000 22kW with SERCOS Servo Drive');
    await repairsOrdersSearch.clickSearchButton();
});

Then('display all the results that match with the search term', async () => {
    await repairsOrdersSearch.verifyOrderCards();
});
