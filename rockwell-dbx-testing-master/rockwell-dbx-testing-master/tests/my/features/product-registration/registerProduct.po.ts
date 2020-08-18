import { browser, by, element } from 'protractor';
import { Utils } from '../../../util/util';

export class RegisterProductPageObjects {
    private timeout: number = 90000;

    get menuDrawer() {
        return element(by.id('navBarMenuButton'));
    }
    get myProdRegLink() {
        return element(by.id('productRegistrationLink'));
    }
    get registerAProductButton() {
        return element.all(by.className('btn ra-button1 primary-button medium-button  ')).first();
    }
    get registerAProductButtonTablet() {
        return element.all(by.className('btn ra-button1 primary-button medium-button')).first();
    }
    get registerAProductButtonMobile() {
        return element.all(by.className('btn ra-button1 primary-button medium-button full-width')).first();
    }
    get productInfoTab() {
        return element(by.id('cdk-step-label-0-0'));
    }
    get registrationInfoTab() {
        return element(by.id('cdk-step-label-0-1'));
    }
    get reviewAndSubmitTab() {
        return element(by.id('cdk-step-label-0-2'));
    }
    get serialNumberInput() {
        return element(by.id('serialNumberInput'));
    }
    get catalogNumberInput() {
        return element(by.id('catalogNumberInput'));
    }
    get addProductButton() {
        return element(by.className('btn ra-button1 secondary-button medium-button  '));
    }
    get addProductButtonMobile() {
        return element(by.className('btn ra-button1 secondary-button medium-button'));
    }
    get savedProductDescription() {
        return element(by.className('description ra-caption2'));
    }
    get nextButton() {
        return element(by.className('btn ra-button1 primary-button modal-button col-xs-6  '));
    }
    get nextButtonMobile() {
        return element(by.className('btn ra-button1 primary-button modal-button col-xs-6'));
    }
    get registerMyCompanyCard() {
        return element(by.id('companyCard'));
    }
    get registerMyCustomerCard() {
        return element(by.id('customerCard'));
    }
    get registerToCompanySection() {
        return element(by.id('registrationInfoCompany'));
    }
    get reviewButton() {
        return element(by.className('btn ra-button1 primary-button modal-button col-xs-6   '));
    }
    get reviewButtonMobile() {
        return element(by.className('btn ra-button1 primary-button modal-button col-xs-6'));
    }
    get finalRegisterToInfoDetails() {
        return element(by.id('registerTo'));
    }
    get finalSubmittedByInfoDetails() {
        return element(by.id('registrationSubmittedBy'));
    }
    get finalRegistrationDateInfoDetails() {
        return element(by.id('registrationDate'));
    }
    get cusomterNameDropDownList() {
        return element.all(by.className('mat-form-field-infix')).first();
    }
    get clickCustomerNameforRegister() {
        return element.all(by.className('mat-option-text')).last();
    }
    get selectedCustomerName() {
        return element.all(by.className('mat-select-value')).first();
    }

    public async clickOnProductRegistrationLink() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.myProdRegLink, this.timeout);
            await this.myProdRegLink.click();
            console.log('Product Registration link clicked');
            return 'Prd reg clicked';
        });
    }
    public async verifyProductRegLandingPage(deviceLayout: string) {
        console.log('waiting for Prod reg page');
        const tuury = this.waitingForProdRegPage(deviceLayout);
        await browser.wait(tuury, this.timeout);
        return await browser.getCurrentUrl().then(async (url: string) => {
            console.log('url is: ', url);
            return url.endsWith('my/product-registration');
        });
    }
    public async waitingForProdRegPage(deviceLayout: string) {
        return Utils.tryCatcher(async () => {
            if (deviceLayout === 'mobile') {
                await Utils.waitForVisibilityOf(this.registerAProductButtonMobile, this.timeout).then(async () => {
                    console.log('Prod reg page loaded');
                });
            }
            else if (deviceLayout === 'tablet') {
                await Utils.waitForVisibilityOf(this.registerAProductButtonTablet, this.timeout).then(async () => {
                    console.log('Prod reg page loaded');
                });
            } else {
                await Utils.waitForVisibilityOf(this.registerAProductButton, this.timeout).then(async () => {
                    console.log('Prod reg page loaded');
                });
            }
            return 'Prd reg clicked';
        });
    }
    public async clickRegisteraProductButton(deviceLayout: string) {
        return Utils.tryCatcher(async () => {
            if (deviceLayout === 'mobile') {
                await Utils.waitForVisibilityOf(this.registerAProductButtonMobile, this.timeout);
                await this.registerAProductButtonMobile.click();
                console.log('Register a Product button clicked');
            }
            else if (deviceLayout === 'tablet') {
                await Utils.waitForVisibilityOf(this.registerAProductButtonTablet, this.timeout);
                await this.registerAProductButtonTablet.click();
                console.log('Register a Product button clicked');
            } else {
                await Utils.waitForVisibilityOf(this.registerAProductButton, this.timeout);
                await this.registerAProductButton.click();
                console.log('Register a Product button clicked');
            }
            return 'Prd reg clicked';
        });
    }
    public async verifyProductRegPage(deviceLayout: string) {
        return await browser.getCurrentUrl().then(async (url: string) => {
            console.log('url is: ', url);
            try {
                if (deviceLayout === 'mobile' || deviceLayout === 'tablet') {
                    const t: string = await browser.driver.switchTo().alert().getText();
                    console.log('Alert msg for mobile & tablets :- ' + t);
                    (await (await browser.driver.switchTo().alert()).accept());
                }
            } catch (e) {
                console.log('Alert not found');
            }
            return url.endsWith('my/product-registration/register');
        });
    }
    public async verifyProductInfoTab(deviceLayout: string) {
        console.log('Inside prod reg process 1');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.productInfoTab, this.timeout);
            if (deviceLayout === 'undefined') {
                await this.productInfoTab.isSelected();
            }
            console.log('Prd reg info tab highlighted');
            return 'Prd info high';
        });
    }
    public async enterProductInfoDetails() {
        console.log('Enter Serial & Catalog number of Product');
        return Utils.tryCatcher(async () => {
            console.log('Enter serial num');
            await this.serialNumberInput.clear();
            await Utils.sendKeysTo(this.serialNumberInput, '3894dkdd');
            console.log('Enter catalog num');
            await this.catalogNumberInput.clear();
            await Utils.sendKeysTo(this.catalogNumberInput, '1783-MX04S');
            return 'details endtr';
        });
    }
    public async clickAddProductButton() {
        console.log('Click on Add Product button');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.addProductButton, this.timeout);
            await this.addProductButton.click();
            console.log('Add Product button clicked');
            return 'add pdt clicked';
        });
    }
    public async clickAddProductButtonMobile() {
        console.log('Click on Add Product button');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.addProductButtonMobile, this.timeout);
            await this.addProductButtonMobile.click();
            console.log('Add Product button clicked');
            return 'add pdt clicked';
        });
    }
    public async verifySavedProductsDescription() {
        console.log('Verify saved product');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.savedProductDescription, this.timeout);
            const savedPdtText: string = await this.savedProductDescription.getText();
            console.log('Saved product Description');
            console.log(savedPdtText);
            return 'saved pdt desc';
        });
    }
    public async clickNextButton() {
        console.log('Click Next buton to go to Step2');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.nextButton, this.timeout);
            await this.nextButton.click();
            console.log('Clicked Next button');
            return 'nxt btn clicked';
        });
    }
    public async clickNextButtonMobile() {
        console.log('Click Next buton to go to Step2');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.nextButtonMobile, this.timeout);
            await this.nextButtonMobile.click();
            console.log('Clicked Next button');
            return 'nxt btn clicked';
        });
    }
    public async verifyRegistrationInfoTab(deviceLayout: string) {
        console.log('Inside prod reg process 2');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.registrationInfoTab, this.timeout);
            if (deviceLayout === 'undefined') {
                await this.registrationInfoTab.isSelected();
            }
            console.log('Reg info tab highlighted');
            return 'reg info high';
        });
    }
    public async verifyRegisterType() {
        console.log('Verify "Register To" info');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.registerMyCompanyCard, this.timeout);
            console.log('Found Company Card');
            await Utils.waitForVisibilityOf(this.registerMyCustomerCard, this.timeout);
            console.log('Found Customer Card');
            return 'registr type displuyd';
        });
    }
    public async clickRegisterMyCompanyCard() {
        console.log('Register Product to My Company');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.registerMyCompanyCard, this.timeout);
            await this.registerMyCompanyCard.click();
            console.log('Company card clicked');
            return 'compny crad clicked';
        });
    }
    public async clickRegisterMyCustomerCard() {
        console.log('Register Product to My Customer');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.registerMyCustomerCard, this.timeout);
            await this.registerMyCustomerCard.click();
            console.log('Customer card clicked');
            return 'cstrmr crad clicked';
        });
    }
    public async verifyRegisterToSection() {
        console.log('Register to section is visible');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.registerToCompanySection, this.timeout);
            const regCompanyText: string = await this.registerToCompanySection.getText();
            console.log('Registration details displayed');
            console.log(regCompanyText)
            return 'register to sect displuyd';
        });
    }
    public async clickReviewButton() {
        console.log('Click Review buton to go to Step 3');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.reviewButton, this.timeout);
            await this.reviewButton.click();
            console.log('Review button clicked');
            return 'review tbnt clicked';
        });
    }
    public async clickReviewButtonMobile() {
        console.log('Click Review buton to go to Step 3');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.reviewButtonMobile, this.timeout);
            await this.reviewButtonMobile.click();
            console.log('Review button clicked');
            return 'review tbnt clicked';
        });
    }
    public async verifyReviewAndSubmitTab(deviceLayout: string) {
        console.log('Inside prod reg process 3');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.reviewAndSubmitTab, this.timeout);
            if (deviceLayout === 'undefined') {
                await this.reviewAndSubmitTab.isSelected();
            }
            console.log('Review and Submit Tab highlighted');
            return 'reviw usbtm high';
        });
    }
    public async verifyfinalRegInfo() {
        console.log('Verify Final Registration Info');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.finalRegisterToInfoDetails, this.timeout);
            const finalRegToDetails: string = await this.finalRegisterToInfoDetails.getText();
            console.log('Product Registered To :-');
            console.log(finalRegToDetails)
            await Utils.waitForVisibilityOf(this.finalSubmittedByInfoDetails, this.timeout);
            const finalSubmittedByDetails: string = await this.finalSubmittedByInfoDetails.getText();
            console.log('Product registration submitted by :-');
            console.log(finalSubmittedByDetails)
            await Utils.waitForVisibilityOf(this.finalRegistrationDateInfoDetails, this.timeout);
            const finalRegDateDetails: string = await this.finalRegistrationDateInfoDetails.getText();
            console.log('Product registration date :-');
            console.log(finalRegDateDetails)
            return 'reviw usbtm high';
        });
    }
    public async verifyRegisterToCustomerSection() {
        console.log('Verify Register To Customer Section');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.cusomterNameDropDownList, this.timeout);
            await this.cusomterNameDropDownList.click().then(async () => {
                console.log('Create Customer clicked');
            });
            await this.clickCustomerNameforRegister.isPresent();
            console.log('Customer Name dropdown list displayed for selecting');
            return 'register to sect displuyd';
        });
    }
    public async clickCustomerNamefromList() {
        console.log('To select a customer from the dropdown list');
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.clickCustomerNameforRegister, this.timeout);
            await this.clickCustomerNameforRegister.click();
            const customerNameSelected: string = await this.selectedCustomerName.getText();
            console.log('Customer Name selected :-');
            console.log(customerNameSelected)
            return 'cst name slctd';
        });
    }


}