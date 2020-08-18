import { Before, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { MenuDrawerPageObject } from '../menu/menuDrawer.po';
import { MyEquipment } from './MyEquipment.po';

let menuDrawerPage: MenuDrawerPageObject;
let myEquipmentPage: MyEquipment;
Before(() => {
  menuDrawerPage = new MenuDrawerPageObject();
  myEquipmentPage = new MyEquipment();
});

// Common ones

When('A user clicks my equipment link', async () => {
  await menuDrawerPage.clickOnMyEquipmentLink();
});

Then('the user sees the request more info button', async () => {
  const message = await myEquipmentPage.verifyRequestMoreInfoButton();
  console.log(message);
});

Then('the user sees the my equipment landing page with both IBE and RAAMP', async () => {
  const message = await myEquipmentPage.verifyMyEquipmentLandingPage();
  console.log(message);
});

When('the user clicks on the Learn more about Equipment', async () => {
  await myEquipmentPage.clickMyEquipmentHelpCenterEntryFooter();
});

When('A user clicks on window back button', async () => {
  await browser.navigate().back();
});

When('A user clicks on MyEquipment breadcrumb', async () => {
  await myEquipmentPage.clickMyEquipmentBreadcrumb();
});

When('A user clicks on the IBE link', () => {
  myEquipmentPage.ibeTile.click();
});

When('the user clicks on RAAMP link', () => {
  myEquipmentPage.rammpTile.click();
});

// Regular User

When('the user clicks on the request more info button', () => {
  myEquipmentPage.requestMoreInfoButton.click();
});

Then('A modal is shown with contact information filled out', async () => {
  const message = await myEquipmentPage.verifyRequestForm();
  console.log(message);
});

When('the user clicks on cancel button', async () => {
  myEquipmentPage.clickCancelButton();
});

Then('user is taken to the marketing page', async () => {
  const message = await myEquipmentPage.verifyMarketingPage();
  console.log(message);
});

Then('user is taken back to landing page', async () => {
  const message = await myEquipmentPage.verifyMyEquipmentLandingPage();
  console.log(message);
});

// IBE User

Then('the user will see the IBE Report', async () => {
  const message = await myEquipmentPage.verifyIBEReport();
  console.log(message);
});

// RAAMP User

Then('the user will see the RAAMP Report', async () => {
  const message = await myEquipmentPage.verifyRAAMPReport();
  console.log(message);
});
