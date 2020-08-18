import {Before, Given, Then, When} from 'cucumber';
import {HomepagePageObject} from '../homepage/homepage.po';
import {MenuDrawerPageObject} from '../menu/menuDrawer.po';
import {ServicesMarketingPage} from './ServicesMarketingPage.po';

let servicesMarketingPage: ServicesMarketingPage;
let menuDrawerPage: MenuDrawerPageObject;
let homepage: HomepagePageObject;
Before(() => {
  servicesMarketingPage = new ServicesMarketingPage();
  menuDrawerPage = new MenuDrawerPageObject();
  homepage = new HomepagePageObject();
});

Given('A user is on the My Services landing page', async () => {
  await menuDrawerPage.clickOnMyServicesLink();
});

Then('the user sees the go back home page', async () => {
  await servicesMarketingPage.verifyGoBackHomeButton();
});

When('the user clicks on the go back home button', async () => {
  await servicesMarketingPage.goBackHomeButton.click();
});

Then('the user is taken back to the home page', async () => {
  await homepage.verifyOnHomePage();
});
