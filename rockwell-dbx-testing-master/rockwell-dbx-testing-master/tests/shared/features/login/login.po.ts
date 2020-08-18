import { browser, by, element, ElementFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import {Utils} from '../../../util/util';

const conditions = browser.ExpectedConditions;
export class LoginPageObject {

    private timeout: number = 60000;

    // Elements
    private loginAreaLocator: ElementFinder = element(by.id('loginArea'));
    private usernameInputLocator: ElementFinder = element(by.id('userNameInput'));
    private passwordInputLocator: ElementFinder = element(by.id('passwordInput'));
    private submissionAreaLocator: ElementFinder = element(by.id('submissionArea'));
    private formsAuthenticationAreaLocator: ElementFinder = element(by.id('formsAuthenticationArea'));

    constructor() {
        const applicationSuffix = browser.params.application === 'my' ? 'my' : 'am';
        if (browser.params.env === 'uat') {
            browser.params.endpoint = `https://ra-ma-uat.rockwellautomation.com/${applicationSuffix}/`;
        } else if (browser.params.env === 'uatqa') {
          browser.params.endpoint = `https://ra-ma-uatqa.rockwellautomation.com/${applicationSuffix}/`;
        } else if (browser.params.env === 'dev') {
          browser.params.endpoint = `https://test.rockwellautomation.com/${applicationSuffix}/`;
        } else if (browser.params.env === 'devqa') {
            browser.params.endpoint = `https://testqa.rockwellautomation.com/${applicationSuffix}/`;
        } else if (browser.params.env === 'raqa') {
            browser.params.endpoint = `https://raqa.rockwellautomation.com/${applicationSuffix}/`;
        } else if (browser.params.env === 'prod') {
            browser.params.endpoint = `https://www.rockwellautomation.com/${applicationSuffix}/`;
        } else {
            browser.params.endpoint = 'https://localhost:5555';
        }
    }

    public async navigateToSignInPage() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.loginAreaLocator, this.timeout);
            return 'On Sign In Page';
        });
    }

    public async signInWith(username: string, password: string) {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.formsAuthenticationAreaLocator, this.timeout);
            await Utils.sendKeysTo(this.usernameInputLocator, username);
            await Utils.sendKeysTo(this.passwordInputLocator, password);
            return 'Credentials Entered';
        });
    }

    public async clickSignInButton(layout: string) {
        console.log('LAYOUT: ' + layout);
        return Utils.tryCatcher(async () => {
            if (layout === 'android') {
                await browser.actions().sendKeys(protractor.Key.ENTER).perform();
            } else {
                console.log('click signin button');
                await Utils.waitForVisibilityOf(this.submissionAreaLocator, this.timeout);
                console.log('found signin button');
                await this.submissionAreaLocator.click();
                console.log('clicking button');
            }
            return 'Sign in button clicked';
        });
    }

    public async deleteAuthToken() {
        if (browser.params.env === 'dev' || browser.params.env === 'local') {
            await browser.driver.executeScript('return window.localStorage.clear();');
        } else {
            await browser.driver.executeScript('return document.cookie.indexOf(\'ra_my_access_token\');')
                .then((index: number) => {
                if (index !== -1) {
                    document.cookie = 'ra_my_access_token=\'\'; expires=Thu, 01 Jan 1970 12:00:00 UTC; path=/my';
                }
            });
        }
    }

    public navigateToHome() {
        return browser.driver.get(browser.params.endpoint);
    }

    public async navigateToSignIn() {
        let signInUrl = '';
        if (browser.params.env === 'dev' || browser.params.env === 'local') {
            // tslint:disable-next-line:max-line-length
            signInUrl = 'https://idpq.rockwellautomation.com/adfs/oauth2/authorize?response_type=code&client_id=8fdbbe2e-df5e-478c-8fd9-1b5b27cfd5aa&resource=MyRockwellDev&redirect_uri=';
        } else if (browser.params.env === 'qa') {
            // tslint:disable-next-line:max-line-length
            signInUrl = 'https://idpq.rockwellautomation.com/adfs/oauth2/authorize?response_type=code&client_id=840dc471-a978-4cc4-90ce-bbeb3eea7bfd&resource=MyRockwellQA&redirect_uri=';
        } else if (browser.params.env === 'prod') {
            // tslint:disable-next-line:max-line-length
            signInUrl = 'https://idp.rockwellautomation.com/adfs/oauth2/authorize?response_type=code&client_id=c5b69619-7aa8-4f63-8a6e-8b27a8e98620&resource=MyRockwellProd&redirect_uri=';
        } else {
            // tslint:disable-next-line:max-line-length
            signInUrl = 'https://idp.rockwellautomation.com/adfs/oauth2/authorize?response_type=code&client_id=840dc471-a978-4cc4-90ce-bbeb3eea7bfd&resource=MyRockwellBeta&redirect_uri=';
        }
        return browser.driver.get(signInUrl + browser.params.endpoint);
    }
}
