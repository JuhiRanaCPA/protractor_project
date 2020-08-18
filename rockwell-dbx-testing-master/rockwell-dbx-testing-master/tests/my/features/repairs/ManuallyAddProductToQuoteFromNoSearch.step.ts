import { Before, setDefaultTimeout, Then, When } from 'cucumber';
import { ManualProductFields } from '../repairs/config/repairs.constants';
import { ManuallyAddProductToQuoteFromNoSearch } from './ManuallyAddProductToQuoteFromNoSearch.po';

let manualAddProductFromSearch: ManuallyAddProductToQuoteFromNoSearch;

setDefaultTimeout(10 * 1000);

Before(() => {
    manualAddProductFromSearch = new ManuallyAddProductToQuoteFromNoSearch();
});

When('a user clicks to create a new item', async () => {
    await manualAddProductFromSearch.clickOnManualProductlink();
});

Then('the user sees the modal and fill out the product catalog number', async () => {
    await manualAddProductFromSearch.checkModalAndFillDataBasedOnKey(ManualProductFields.catalogNumber);
});

Then('the user selects product series', async () => {
    await manualAddProductFromSearch.selectSeriesNumber();
});

Then('the user enters the manufacturer name', async () => {
    await manualAddProductFromSearch.checkModalAndFillDataBasedOnKey(ManualProductFields.manufacturer);
});

Then('the user clicks the product description', async () => {
    await manualAddProductFromSearch.checkModalAndFillDataBasedOnKey(ManualProductFields.productDescription);
});

Then('the user enters the product description', async () => {
    await manualAddProductFromSearch.checkModalAndFillDataBasedOnKey(ManualProductFields.productDescription);
});

Then('the user clicks to create product', async () => {
    await manualAddProductFromSearch.clicksToCreateManualProduct();
});

Then('selects dropdown option', async () => {
    await manualAddProductFromSearch.checkDropdownModalRFQ();
});

Then('click to create the quote with manual product', async () => {
    await manualAddProductFromSearch.clickToSelectQuote();
});

Then('user goes to the draft page', async () => {
    await manualAddProductFromSearch.clicksToManual();
});
