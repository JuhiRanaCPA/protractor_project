import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { LoginPageObject } from '../../../shared/features/login/login.po';
import { MenuDrawerPageObject } from '../menu/menuDrawer.po';
import { HelpCenterLandingPageObject } from './helpCenterLandingPage.po';

let menuDrawerPage: MenuDrawerPageObject;
let helpCenterLandingPage: HelpCenterLandingPageObject;
let loginPageObject: LoginPageObject;

Before(() => {
    menuDrawerPage = new MenuDrawerPageObject();
    helpCenterLandingPage = new HelpCenterLandingPageObject();
    loginPageObject = new LoginPageObject();
});

Given('the user navigates to the homepage', async () => {
    await loginPageObject.navigateToHome();
});

Then('the user clicks on the My Help Center', async () => {
    await menuDrawerPage.clickHelpCenterLink();
});

Then('the user should navigate to the Help Center landing page', async () => {
    const url = await browser.getCurrentUrl();
    expect(url).to.have.string('/help-center');
});

Then('the user sees article cards', async () => {
    const cardCount = await helpCenterLandingPage.getCardCount();
    console.log('Number of article cards: ' + cardCount);
    expect(cardCount).to.equal(4);
});

When('the user clicks the Bill Of Materials help tile', async () => {
    await helpCenterLandingPage.clickBomCard();
});

Then('the user should navigate to Bill Of Materials Help page', async () => {
    const headerText = await helpCenterLandingPage.getHeaderText();
    expect(headerText).to.equal('Bill of Materials Help Center');
});

When('the user clicks the Apps help tile', async () => {
    await helpCenterLandingPage.clickAppsCard();
});

Then('the user should navigate to App Help page', async () => {
    const headerText = await helpCenterLandingPage.getHeaderText();
    expect(headerText).to.equal('Apps Help Center');
});

When('the user clicks the Repairs help tile', async () => {
    await helpCenterLandingPage.clickRepairsCard();
});

Then('the user should navigate to Repairs Help page', async () => {
    const headerText = await helpCenterLandingPage.getHeaderText();
    expect(headerText).to.equal('Repairs Help Center');
});

When('the user clicks the Equipment help tile', async () => {
    await helpCenterLandingPage.clickEquipmentCard();
});

Then('the user should navigate to Equipment Help page', async () => {
    const headerText = await helpCenterLandingPage.getHeaderText();
    expect(headerText).to.equal('Equipment Help Center');
});
