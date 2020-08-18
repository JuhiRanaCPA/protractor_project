import { browser, Capabilities } from 'protractor';
import { NewUserValidate } from '../../features/new-user-validation/NewUserValidation.po';

import { expect } from 'chai';
import { Before, Then, When } from 'cucumber';
import { Utils } from '../../../util/util';


let newUserValidation: NewUserValidate;
let layout: string;
const timeout: number = 12000;

// tslint:disable: max-line-length
const BomMsg: string = 'All of your bill materials will be collected here. Start by creating a new BOM and get your product organized.';
const AppsMsg: string = 'Get faster access to your most commonly used apps. Get started with any app or simply save them to personalize your apps.';
const RepairsMsg: string = 'All of your requests for quote for remanufacturing and repair services will be collected here. Start by creating a new request for quote.';
const EquipMsg: string = 'Gain thoughtful insights into the products in your plant through interactive visuals to aid in developing and supporting your strategic maintenance plan.';
const ServicesMsg: string = 'Soon you ll be able to view service tickets and contract details for quick and easy reference.';

Before(() => {
    newUserValidation = new NewUserValidate();
    browser.driver.getCapabilities().then((capabilities: Capabilities) => {
        if (capabilities.get('real_mobile') || capabilities.get('realMobile')) {
            layout = 'mobile';
        }
    });
});

// ------ New User Validation BOM Navigation ------
When('the User clicks on My Bill of Materials link', async () => {
    await newUserValidation.clickOnMyBillOfMaterialsLink();
});

Then('the user should navigate to Bill of Materials page', async () => {
    await newUserValidation.verifyBomLandingPage();
});

Then('" Welcome to Bill of Materials. All of your bill materials will be collected here. Start by creating a new BOM and get your product organized." should be displayed', async () => {
    await Utils.waitForVisibilityOf(newUserValidation.BOMpageMsg2, timeout);
    const BOMtextbody: string = await newUserValidation.BOMpageMsg2.getText();
    const ResultBOMtext: string = BOMtextbody;
    expect(ResultBOMtext).contains(BomMsg);
    console.log('bom text verify completed');

});

// ------ New User Validation Apps Navigation ------

When('the User clicks on My Apps link', async () => {
    await newUserValidation.clickOnMyAppsLink();
});

Then('the user should navigate to My Apps page', async () => {
    await newUserValidation.verifyAppsLandingPage();
});

Then('"Welcome to My Apps. Get faster access to your most commonly used apps. Get started with any app or simply save them to personalize your apps." message should be displayed', async () => {
    await Utils.waitForVisibilityOf(newUserValidation.AppspageMsg2, timeout);
    const Appstextbody: string = await newUserValidation.AppspageMsg2.getText();
    const ResultAppstext: string = Appstextbody;
    expect(ResultAppstext).contains(AppsMsg);
    console.log('my apps text verify completed');
});

// ------ New User Validation Repairs Navigation ------

When('the User clicks on My Repairs link', async () => {
    await newUserValidation.clickOnMyRepairsLink();
});

Then('the user should navigate to Repairs page', async () => {
    await newUserValidation.verifyRepairsLandingPage();
});

Then('"Welcome to Repair Quotes. All of your requests for quote for remanufacturing and repair services will be collected here. Start by creating a new request for quote." message should be displayed', async () => {
    await Utils.waitForVisibilityOf(newUserValidation.RepairspageMsg2, timeout);
    const Repairstextbody: string = await newUserValidation.RepairspageMsg2.getText();
    const ResultRepairstext: string = Repairstextbody;
    expect(ResultRepairstext).contains(RepairsMsg);
    console.log('repairs text verify completed');
});

// ------ New User Validation Account Navigation ------

When('the User clicks on My Account link', async () => {
    await newUserValidation.clickOnMyAccountLink();
});

Then('the user should navigate to MyAccount landing page', async () => {
    return newUserValidation.verifyMyAccountPage();
});

// ------ New User Validation My Equipment ------
When('the User clicks on My Equipment', async () => {
    await newUserValidation.clickOnMyEquipmentLink();
});

Then('the user should navigate to the My Equipment landing page', async () => {
    await newUserValidation.verifyMyEquipmentMarketingPage();
});

Then('"This is My Equipment. Gain thoughtful insights into the products in your plant through interactive visuals to aid in developing and supporting your strategic maintenance plan." message should be displayed', async () => {
    const Equiptextbody: string = await newUserValidation.getEquipmentText();
    expect(Equiptextbody).contains(EquipMsg);
    console.log('equipment text verify completed');
});

// ------ New User Validation My Services ------
When('the user clicks on the My Services', async () => {
    await newUserValidation.clickOnMyServicesLink();
});

Then('the user should navigate to the My Services landing page', async () => {
    await newUserValidation.verifyMyServicesPage();
});

Then('"Coming Soon: My Services. Soon you\'ll be able to view service tickets and contract details for quick and easy reference." message should be displayed', async () => {
    const Servtextbody: string = await newUserValidation.getServicesText();
    const t1: string = Servtextbody.slice(0,8);
    const t2: string = Servtextbody.slice(9);
    const ResultServtext: string = t1+' '+t2;
    expect(ResultServtext).contains(ServicesMsg);
    console.log('services text verify completed');
});
