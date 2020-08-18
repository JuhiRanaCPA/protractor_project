import { browser, by, element } from 'protractor';
import { MenuPageObject } from '../../features/menu/menu.po';
const conditions = browser.ExpectedConditions;
export class ProfilePageObject {

    private timeout: number = 3000;
    private serviceCallTimeout: number = 30000;
    private menuPage = new MenuPageObject();

    get profileNameHeader() {
        return element.all(by.tagName('h1')).first();
    }
    get emailTitleSection() {
        return element(by.className('row my-email'));
    }
    get emailTitle() {
        return element(by.id('fullName'));
    }
    get firstNameInputLabel() {
        return element(by.id('mat-form-field-label-1'));
    }
    get firstNameInput() {
        return element(by.id('firstName'));
    }
    get lastNameInputLabel() {
        return element(by.id('mat-form-field-label-3'));
    }
    get lastNameInput() {
        return element(by.id('lastName'));
    }
    get companyInputLabel() {
        return element(by.id('mat-form-field-label-5'));
    }
    get companyInput() {
        return element(by.id('companyName'));
    }
    get phoneNumberInputLabel() {
        return element(by.id('mat-form-field-label-5'));
    }
    get phoneNumberInput() {
        return element(by.id('companyName'));
    }
    get countryLabel() {
        return element(by.id('mat-form-field-label-15'));
    }
    get countryDropDownArea() {
        return element(by.id('country'));
    }
    get countryDropDownMenuFirstItem() {
        return element(by.id('mat-option-28'));
    }
    get addressInputLabel() {
        return element(by.id('mat-form-field-label-17'));
    }
    get addressInput() {
        return element(by.id('addressLine1'));
    }
    get cityInputLabel() {
        return element(by.id('mat-form-field-label-21'));
    }
    get cityInput() {
        return element(by.id('city'));
    }
    get stateLabel() {
        return element(by.id('mat-form-field-label-23'));
    }
    get stateDropDownArea() {
        return element(by.id('region'));
    }
    get stateIllinoisDropDownMenuItem() {
        return element(by.id('mat-option-331'));
    }
    get zipcodeInputLabel() {
        return element(by.id('mat-form-field-label-25'));
    }
    get zipcodeInput() {
        return element(by.id('zipCode'));
    }
    get inactiveSaveButton() {
        return element(by.className('save-button'));
    }
    get leanMoreLink() {
        return element(by.linkText('Learn more about your profile'));
    }
    get profileImage() {
        return element.all(by.tagName('app-circle-profile')).first();
    }
    get changeEmailButton() {
        return element(by.linkText('CHANGE EMAIL ADDRESS'));
    }
    get changePasswordButton() {
        return element(by.linkText('CHANGE PASSWORD'));
    }
    get deleteAccountButton() {
        return element.all(by.className('filled-button')).get(2);
    }
    get deleteModal() {
        return element(by.className('delete-dialog-container'));
    }
    get deleteModalCancelButton() {
        return element(by.partialButtonText(' Cancel '));
    }
    get saveButton() {
        return element.all(by.className('save-button')).first();
    }
    get successBanner() {
        return element.all(by.tagName('snack-bar-container')).first();
    }

    // Validate Profile UI

    public async validateNameHeaderTitle() {
        return browser.wait(conditions.visibilityOf(this.profileNameHeader), this.timeout).then(() => {
            return Promise.resolve('Profile - name header Found');
        });
    }

    public async validateEmailTitle() {
        return browser.wait(conditions.visibilityOf(this.emailTitleSection), this.timeout).then(() => {
            console.log('Email section found');
            return browser.wait(conditions.visibilityOf(this.emailTitle), this.timeout).then(() => {
                return Promise.resolve('Email Found');
            });
        });
    }

    public async validateFirstNameInputAndLabel() {
        return browser.wait(conditions.visibilityOf(this.firstNameInputLabel), this.timeout).then(() => {
            console.log('First name Label found');
            return browser.wait(conditions.visibilityOf(this.firstNameInput), this.timeout).then(() => {
                return Promise.resolve('First name input found');
            });
        });
    }

    public async validateLastNameInputAndLabel() {
        return browser.wait(conditions.visibilityOf(this.lastNameInputLabel), this.timeout).then(() => {
            console.log('Last name Label found');
            return browser.wait(conditions.visibilityOf(this.lastNameInput), this.timeout).then(() => {
                return Promise.resolve('Last name input found');
            });
        });
    }

    public async validateCompanyInputAndLabel() {
        return browser.wait(conditions.visibilityOf(this.companyInputLabel), this.timeout).then(() => {
            console.log('Company name Label found');
            return browser.wait(conditions.visibilityOf(this.companyInput), this.timeout).then(() => {
                return Promise.resolve('Company name input found');
            });
        });
    }

    public async validatePhoneNumberInputAndLabel() {
        return browser.wait(conditions.visibilityOf(this.phoneNumberInputLabel), this.timeout).then(() => {
            console.log('phone number label found');
            return browser.wait(conditions.visibilityOf(this.phoneNumberInput), this.timeout).then(() => {
                return Promise.resolve('phone number input found');
            });
        });
    }

    public async validateCountryLabelAndDropDown() {
        return browser.wait(conditions.visibilityOf(this.countryLabel), this.timeout).then(() => {
            console.log('country label found');
            return browser.wait(conditions.visibilityOf(this.countryDropDownArea), this.timeout).then(() => {
                console.log('country drop down area found');
                return this.countryDropDownArea.click().then(() =>{
                    return browser.wait(conditions.visibilityOf(this.countryDropDownMenuFirstItem), this.timeout).then(() => {
                        console.log('country dropdown menu and first item found');
                        this.countryDropDownMenuFirstItem.click();
                    });
                });
            });
        });
    }

    public async validateAddressInputAndLabel() {
        return browser.wait(conditions.visibilityOf(this.addressInputLabel), this.timeout).then(() => {
            console.log('address 1 label found');
            return browser.wait(conditions.visibilityOf(this.addressInput), this.timeout).then(() => {
                return Promise.resolve('address line 1 input found');
            });
        });
    }

    public async validateCityInputAndLabel() {
        return browser.wait(conditions.visibilityOf(this.cityInputLabel), this.timeout).then(() => {
            console.log('city label found');
            return browser.wait(conditions.visibilityOf(this.cityInput), this.timeout).then(() => {
                return Promise.resolve('city input found');
            });
        });
    }


    public async validateStateLabelAndDropDown() {
        return browser.wait(conditions.visibilityOf(this.stateLabel), this.timeout).then(() => {
            console.log('state label found');
            return browser.wait(conditions.visibilityOf(this.stateDropDownArea), this.timeout).then(() => {
                console.log('state drop down area found');
                return this.stateDropDownArea.click().then(() =>{
                    return browser.wait(conditions.visibilityOf(this.stateIllinoisDropDownMenuItem), this.timeout).then(() => {
                        console.log('state dropdown menu and item found');
                        this.stateIllinoisDropDownMenuItem.click();
                    });
                });
            });
        });
    }

    public async validateZipcodeInputAndLabel() {
        return browser.wait(conditions.visibilityOf(this.zipcodeInputLabel), this.timeout).then(() => {
            console.log('zipcode label found');
            return browser.wait(conditions.visibilityOf(this.zipcodeInput), this.timeout).then(() => {
                return Promise.resolve('zipcode input found');
            });
        });
    }

    public async validateInactiveSaveButton() {
        return browser.wait(conditions.visibilityOf(this.inactiveSaveButton), this.timeout).then(() => {
            return Promise.resolve('save button label found');
        });
    }

    public async validateLearnMoreLink() {
        return browser.wait(conditions.visibilityOf(this.leanMoreLink), this.timeout).then(() => {
            return Promise.resolve('learn more link found');
        });
    }

    public async validateProfileImage() {
        return browser.wait(conditions.visibilityOf(this.profileImage), this.timeout).then(() => {
            return Promise.resolve('profile image found');
        });
    }

    // View Profile & Change Navigation

    public async clickMenuButton() {
        return this.menuPage.menuDrawer.isDisplayed().then((isVisible) => {
            if (isVisible) {
                console.log('its visible');
                return browser.wait(conditions.visibilityOf(this.menuPage.menuLogo), this.timeout).then(() => {
                    console.log('menu logo found');
                    return this.menuPage.menuLogo.click().then(() => {
                        return Promise.resolve('menu button clicked');
                    });
                })
            }
        });
    }

    public async navigateToChangeEmail(layout: string) {
        if (layout === 'mobile') {
            await this.clickMenuButton();
        }

        return browser.wait(conditions.visibilityOf(this.changeEmailButton), this.timeout).then(() => {
            console.log('Email button found');
            this.changeEmailButton.click();
        });
    }

    public async navigateToChangePassword() {
        return browser.wait(conditions.visibilityOf(this.changePasswordButton), this.timeout).then(() => {
            console.log('password button found');
            this.changePasswordButton.click();
        });
    }

    public async navigateToDeleteAccountModal() {
        return browser.wait(conditions.visibilityOf(this.deleteAccountButton), this.timeout).then(() => {
            console.log('delete account button found');
            this.deleteAccountButton.click();
        });
    }

    public async validateDeleteModal() {
        return browser.wait(conditions.visibilityOf(this.deleteModal), this.timeout).then(() => {
            return Promise.resolve('delete modal found');
        });
    }

    public async clickDeleteModalCancelButton() {
        return browser.wait(conditions.visibilityOf(this.deleteModalCancelButton), this.timeout).then(() => {
            console.log('delete modal cancel button found and clicked');
            this.deleteModalCancelButton.click();
        });
    }

    // Update Profile Information

    public async enterCityInput(city, layout) {
        if (layout === 'mobile') {
            await this.clickMenuButton();
        }

        return browser.wait(conditions.visibilityOf(this.cityInput), this.timeout).then(() => {
            console.log('city input found');
            this.cityInput.clear().then(() => {
                this.cityInput.sendKeys(city);
            });
        });
    }

    public async clickSaveButton(layout) {
        return browser.wait(conditions.visibilityOf(this.saveButton), this.timeout).then(() => {
            console.log('save found');
            // if (layout === 'mobile') {
            //     browser.driver.hideSoftKeyboard('tapOut');
            // }
            this.saveButton.click()
        });
    }

    public async validateSuccessBanner() {
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)')
        return browser.wait(conditions.visibilityOf(this.successBanner), this.serviceCallTimeout).then(() => {
            return Promise.resolve('success banner found found');
        });
    }
}
