import { by, element, browser } from 'protractor';
import { Utils } from '../../../util/util';

export class AppDetailsPageObject {

    private timeout: number = 12000;
    public appSection: string;

    get saveToMyAppsButton() {
        return element.all(by.buttonText('Save to My Apps')).first();
    }
    get saveToMyAppsButtonMobile() {
        return element.all(by.buttonText('Save to My Apps')).last();
    }
    get removeFromMyAppsButton() {
        return element.all(by.buttonText('Remove from My Apps')).first();
    }
    get removeFromMyAppsButtonMobile() {
        return element.all(by.buttonText('Remove from My Apps')).last();
    }
    get selectEachApps() {
        return element.all(by.className('image image-container'));
    }
    get appTitleText() {
        return element(by.className('app-title ra-header3'));
    }
    get appSubtitleText() {
        return element(by.className('app-subtitle text-capitalize ra-body3'));
    }
    get viewAllLink() {
        return element.all(by.cssContainingText('.ra-body1', 'View All'));
    }
    get selectPlatformBtn() {
        return element.all(by.className('selector-button btn btn-primary')).first();
    }
    get selectPlatformMobilBtn() {
        return element.all(by.className('selector-button btn btn-primary')).last();
    }
    get selectPlatformTabBtn() {
        return element.all(by.className('selector-button btn btn-primary')).get(2);
    }
    get appDescriptionHeaderText() {
        return element(by.className('app-description-title ra-header3'));
    }
    get appDescriptionBodyText() {
        return element(by.className('app-description-text ra-body3'));
    }
    get learnMoreAboutLink() {
        return element(by.className('learn-more-url red-text-button ra-body3'));
    }
    get appDetailsContainerText() {
        return element(by.className('row app-details-container'));
    }
    get readMoreLink() {
        return element(by.className('read-more-less-button black-text-button text-uppercase ra-button1'));
    }

    public async clickSaveToMyAppsButton() {
        return Utils.waitForVisibilityOf(this.saveToMyAppsButton).then(async () => {
            return this.saveToMyAppsButton.click().then(() => {
                console.log('Save To My Apps button clicked');
            });
        });
    }
    public async clickSaveToMyAppsButtonMobile() {
        return Utils.waitForVisibilityOf(this.saveToMyAppsButtonMobile).then(async () => {
            return this.saveToMyAppsButtonMobile.click().then(() => {
                console.log('Mobile Save To My Apps button clicked');
            });
        });
    }
    public async verifyRemoveFromMyAppsButtonVisible() {
        return Utils.waitForVisibilityOf(this.removeFromMyAppsButton).then(() => {
            console.log('Remove from My Apps button visible');
        });
    }
    public async verifyRemoveFromMyAppsButtonVisibleMobile() {
        return Utils.waitForVisibilityOf(this.removeFromMyAppsButtonMobile).then(() => {
            console.log('Mobile Remove from My Apps button visible');
        });
    }
    public async verifySaveToMyAppsBtn() {
        return Utils.waitForVisibilityOf(this.saveToMyAppsButton, this.timeout).then(async () => {
            console.log('Save To My Apps button displayed');
        });
    }
    public async verifySaveToMyAppsMobileBtn() {
        return Utils.waitForVisibilityOf(this.saveToMyAppsButtonMobile, this.timeout).then(async () => {
            console.log('Save To My Apps button displayed');
        });
    }
    public async goToEachAppDetailsSection(appcategory: string) {
        this.appSection = appcategory;
        if (this.appSection === 'Mobile') {
            await Utils.waitForVisibilityOf(this.viewAllLink.get(1), this.timeout).then(async () => {
                await this.viewAllLink.get(1).click().then(async () => {
                    console.log('Mobile app Section displayed');
                    console.log('------------------------------------');
                });
            });
        } else if (this.appSection === 'Web') {
            await Utils.waitForVisibilityOf(this.viewAllLink.get(2), this.timeout).then(async () => {
                await this.viewAllLink.get(2).click().then(async () => {
                    console.log('Web app Section displayed');
                    console.log('------------------------------------');
                });
            });
        } else {
            await Utils.waitForVisibilityOf(this.viewAllLink.get(3), this.timeout).then(async () => {
                await this.viewAllLink.get(3).click().then(async () => {
                    console.log('Desktop app Section displayed');
                    console.log('------------------------------------');
                });
            });
        }
    }
    public async clickAppsfromAppStore() {
        if (this.appSection === 'Mobile') {
            await Utils.waitForVisibilityOf(this.selectEachApps.get(1), this.timeout).then(async () => {
                return this.selectEachApps.get(1).click().then(() => {
                    console.log('App clicked for verifying App Details page');
                    console.log('------------------------------------');
                });
            });
        } else {
            await Utils.waitForVisibilityOf(this.selectEachApps.get(0), this.timeout).then(async () => {
                return this.selectEachApps.get(0).click().then(() => {
                    console.log('App clicked for verifying App Details page');
                    console.log('------------------------------------');
                });
            });
        }
    }
    public async verifyAppDetailsPage() {
        return Utils.tryCatcher(async () => {
            const url: string = await browser.getCurrentUrl();
            if (url.includes('/my/apps/details/')) {
                console.log('App details page displayed');
            }
            return 'ok';
        });
    }
    public async verifyReadMoreLinkDisplayed() {
        if (await this.readMoreLink.isPresent()) {
            await Utils.waitForVisibilityOf(this.readMoreLink, this.timeout).then(async () => {
                await this.readMoreLink.click().then(async () => {
                    console.log('Read more link clicked');
                });
            });
        }
    }
    public async verifyAppTtileDisplayed() {
        await Utils.waitForVisibilityOf(this.appTitleText, this.timeout).then(async () => {
            await this.appTitleText.getText().then(async (txt: string) => {
                console.log('App Title displayed');
                console.log(txt);
            });
        });
        await Utils.waitForVisibilityOf(this.appSubtitleText, this.timeout).then(async () => {
            await this.appSubtitleText.getText().then(async (txt: string) => {
                console.log(txt);
                console.log('------------------------------------');
            });
        });
    }
    public async verifyAppDescriptionDisplayed() {
        await Utils.waitForVisibilityOf(this.appDescriptionHeaderText, this.timeout).then(async () => {
            await this.appDescriptionHeaderText.getText().then(async (txt: string) => {
                console.log('App Description displayed');
                console.log(txt);
            });
        });
        await this.verifyReadMoreLinkDisplayed();
        await Utils.waitForVisibilityOf(this.appDescriptionBodyText, this.timeout).then(async () => {
            await this.appDescriptionBodyText.getText().then(async (txt: string) => {
                console.log(txt);
            });
        });
        await Utils.waitForVisibilityOf(this.learnMoreAboutLink, this.timeout).then(async () => {
            await this.learnMoreAboutLink.getText().then(async (txt: string) => {
                console.log(txt);
                console.log('------------------------------------');
            });
        });
    }
    public async verifySelectPlatformBtnDisplayed() {
        await Utils.waitForVisibilityOf(this.selectPlatformBtn, this.timeout).then(async () => {
            console.log('Select Platform button visible');
            console.log('------------------------------------');
        });
    }
    public async verifySelectPlatformBtnMobileDisplayed() {
        await Utils.waitForVisibilityOf(this.selectPlatformMobilBtn, this.timeout).then(async () => {
            console.log('Select Platform button visible');
            console.log('------------------------------------');
        });
    }
    public async verifySelectPlatformBtnTabDisplayed() {
        await Utils.waitForVisibilityOf(this.selectPlatformTabBtn, this.timeout).then(async () => {
            console.log('Select Platform button visible');
            console.log('------------------------------------');
        });
    }
    public async verifyOtherAppDetailsDisplayed(support: string, language: string, requirement: string) {
        await Utils.waitForVisibilityOf(this.appDetailsContainerText, this.timeout).then(async () => {
            await this.appDetailsContainerText.getText().then(async (txt: string) => {
                if (txt.includes(support)) {
                    console.log('Support section visible');
                }
                if (txt.includes(language)) {
                    console.log('Languages section visible');
                }
                if (txt.includes(requirement)) {
                    console.log('Requirements section visible');
                }
                console.log('---------Other App Details---------');
                console.log(txt);
                console.log('------------------------------------');
            });
        });
    }
}
