import { browser, by, element, ElementFinder } from 'protractor';
import {Utils} from '../../../util/util';

const conditions = browser.ExpectedConditions;

export class HomepagePageObject {

    private timeout: number = 50000;

    get homeSMBSectionElement() {
        return element(by.id('homeSMBSection'));
    }
    get homeOnboardingButtonElement() {
        return element(by.buttonText('EXPLORE. CREATE. PERSONALIZE.'));
    }
    get acceptCookiesButtonElement() {
        return element(by.className('optanon-allow-all accept-cookies-button'));
    }
    get brandHeader() {
        return element(by.className('sites'));
    }
    get searchTab() {
        return element.all(by.id('home-search-link')).last();
    }
    get manageTab() {
        return element.all(by.id('home-manage-link')).last();
    }
    get browseTab() {
        return element.all(by.id('home-browse-link')).last();
    }
    get searchInput() {
        return element.all(by.id('searchInput')).last();
    }
    get searchInputMobile() {
        return element.all(by.id('searchInputMobile')).last();
    }
    get browseSlideElement() {
        return element(by.className('browse-slide item carousel-item active'));
    }
    get browseLinks() {
        return this.browseSlideElement.all(by.tagName('a'));
    }
    get searchIconElement() {
        return element.all(by.className('icon-ic_search')).last();
    }
    get acceptCookiesProd() {
        return element(by.id('onetrust-accept-btn-handler'));
    }

    public async verifyOnHomePage() {
        return Utils.tryCatcher(async () => {
            await this.clickAcceptCookies();
            await this.clickHomeOnboardingButton();
            console.log('is SMB present');
            await Utils.waitForVisibilityOf(this.homeSMBSectionElement, this.timeout);
            return 'On Homepage';
        });
    }
    public async sendKeystoSearchInput(input: string) {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.searchInput, this.timeout);
            await this.searchInput.clear();
            return Utils.sendKeysTo(this.searchInput, input);
        });
    }
    public async sendKeystoSearchInputMobile(input: string) {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.searchInputMobile, this.timeout);
            await this.searchInputMobile.clear();
            return Utils.sendKeysTo(this.searchInputMobile, input);
        });
    }

    public getManageCards() {
        const manageCardContainer = element.all(by.id('manageCardsContainer')).last();
        const manageCards = manageCardContainer.all(by.className('manage-card'));

        return manageCards;
    }

    public async clickOnBrowseTab() {
        await browser.wait(conditions.visibilityOf(this.browseTab), this.timeout).then(async () => {
            await this.browseTab.click();
            console.log('Browse Tab Clicked');
        });
    }

    public async verifySearchInput(layout: string) {
        if (layout === 'mobile') {
            console.log('Layout: Mobile');
            await browser.wait(conditions.visibilityOf(this.searchInputMobile), this.timeout);
        } else {
            console.log('Layout: Desktop');
            await browser.wait(conditions.visibilityOf(this.searchInput), this.timeout);
        }
    }

    public async verifyBrandHeader(link: string) {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(element(by.className(link)), this.timeout);
            return element(by.className(link)).getAttribute('href');
        });
    }

    public async verifyBrowseSiteURL(siteName: string, siteURL: string) {
        const link: ElementFinder = element(by.linkText(siteName));
        return link.getAttribute('href').then((linkURL: string) => {
            if (linkURL === siteURL) {
                console.log(linkURL + ' = ' + siteURL);
                return true;
            } else {
                return false;
            }
        });
    }

    public async clickSearchIcon() {
        return browser.wait(conditions.visibilityOf(this.searchIconElement), this.timeout).then(async () => {
            return this.searchIconElement.click();
        });
    }

    private async clickAcceptCookies() {
        console.log('Accepting Cookies');
        return Utils.tryCatcher(async () => {
            const isGDPRPresent = await this.acceptCookiesButtonElement.isPresent();
            if (isGDPRPresent) {
                console.log('GDPR is present');
                await this.acceptCookiesButtonElement.click();
            }
            return 'Accept Cookies button clicked';
        });
    }

    public async clickHomeOnboardingButton() {
        console.log('in onboard click');
        return Utils.tryCatcher(async () => {
            const appFirstTimeCookie = await browser.manage().getCookie('ra_my_appFirstTime');
            console.log(`Cookie Value: ${appFirstTimeCookie}`);
            if (appFirstTimeCookie === null) {
                await Utils.waitForVisibilityOf(this.homeOnboardingButtonElement, 50000);
                const isHomeOnBoardPresent = await this.homeOnboardingButtonElement.isDisplayed();
                await browser.getCurrentUrl().then(async (url: string) => {
                    if(url.includes('www') || url.includes('raqa')) {
                        await this.acceptCookiesProd.isPresent().then(async () => {
                            await this.acceptCookiesProd.click().then(async () => {
                                console.log('Cookies Accepted');
                            });
                        });
                    }
                });
                if (isHomeOnBoardPresent) {
                    console.log('On-board is open');
                    await this.homeOnboardingButtonElement.click();
                    console.log('On-board is closed');
                }
            }
            return 'On-boarding button clicked';
        });
    }
}
