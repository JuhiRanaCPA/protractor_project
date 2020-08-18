import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { Capabilities } from 'selenium-webdriver';
import { MenuDrawerPageObject } from '../menu/menuDrawer.po';
import { BomCreateModalPageObject } from './bomCreateModal.po';
import { BomDetailsPageObject } from './bomDetailsPage.po';
import { BomDropdownPageObject } from './bomDropdown.po';
import { BomLandingPageObject } from './bomLandingPage.po';

let bomLandingPage: BomLandingPageObject;
let bomCreateModal: BomCreateModalPageObject;
let bomDetailsPage: BomDetailsPageObject;
let bomDropdown: BomDropdownPageObject;
let menuDrawerPage: MenuDrawerPageObject;
let layout: string;
let isMobile: boolean;

Before(async () => {
    bomLandingPage = new BomLandingPageObject();
    bomCreateModal = new BomCreateModalPageObject();
    bomDetailsPage = new BomDetailsPageObject();
    bomDropdown = new BomDropdownPageObject();
    menuDrawerPage = new MenuDrawerPageObject();
    isMobile = false;
    const capabilities = await browser.driver.getCapabilities();
    if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
        layout = 'mobile';
        isMobile = true;
    }
});

Given('user is on the BOM landing page', async () => {
    await bomLandingPage.navigateToFromMenuDrawer();
});

When('user clicks on Create New', async () => {
    await bomLandingPage.clickCreateNewBomButton();
});

Then('user enters a BOM name', async () => {
    const message = await bomCreateModal.enterBomName(layout);
    console.log(message);
});

When('user clicks create button', async () => {
    await bomCreateModal.clickCreateButton();
});

Then('user sees the bill of materials details page with newly created BOM', async () => {
    const bomName = await bomDetailsPage.getBomName();
    console.log(`Bom name retrieved is ${bomName}`);
    expect(bomName).to.equal(bomCreateModal.bomName);
});

When('user clicks on bom settings icon', async () => {
    await bomDropdown.clickGearIconButton(isMobile);
});

Then('user sees bill of materials settings options in dropdown', async () => {
    await bomDropdown.verifyDropdownOpen();
});

When('user clicks on Edit link', async () => {
    await bomDropdown.clickEditBomTitleButton();
});

Then('user enters a new BOM name', async () => {
    await bomDetailsPage.enterSecondBomName();
});

When('user clicks save', async () => {
    if (layout === 'mobile') {
        await bomDetailsPage.clickEditSaveButtonMobile();
    } else {
        await bomDetailsPage.editSaveButton1.isDisplayed().then((isVisible: boolean) => {
            if (isVisible) {
                console.log('hello1');
                bomDetailsPage.clickEditSaveButton1();
            } else {
                console.log('hello2');
                bomDetailsPage.clickEditSaveButton2();
            }
        });
    }
});

Then('user sees the updated BOM name', async () => {
    const newBomName = await bomDetailsPage.getBomName();
    expect(newBomName).to.equal(bomDetailsPage.secondBomName);
});

When('user clicks on Delete link', async () => {
    await bomDropdown.clickDeleteBomButton();
});

Then('user clicks on the confirmation Delete button', async () => {
    await bomDetailsPage.clickDeleteConfirmationButton();
    await bomLandingPage.verifyLandingPage();
});

Then('user does not see the bill of materials', async () => {
    await bomLandingPage.verifyEmptySelf();
});

Then('user clicks on the dismiss toast', async () => {
    await bomLandingPage.dismissToast();
});
