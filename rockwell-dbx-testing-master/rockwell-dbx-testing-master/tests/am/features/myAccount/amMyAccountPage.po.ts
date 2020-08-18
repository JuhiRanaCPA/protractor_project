import { browser, by, element, ElementFinder } from 'protractor';
import { Utils } from '../../../util/util';

const conditions = browser.ExpectedConditions;

export class AMMyAccountPageObject {

    private timeout: number = 20000;

    get titleHeaderSections() {
        // The Title Headers don't have a class or ID name to easily grab, so we are just grabbing all of them
        return element.all(by.className('title-structure'));
    }

    get acceptCookiesButtonElement() {
        return element(by.className('optanon-allow-all accept-cookies-button'));
    }

    public async checkAndAcceptCookies() {
        return this.clickAcceptCookies().then(() => {
            return true;
        }).catch(() => {
            return true;
        });
    }

    public async getProfileHeaderElementText() {
        return browser.wait(conditions.visibilityOf(this.titleHeaderSections.first()), this.timeout).then(() => {
            console.log('Found First Title Section - My Profile row');
            // Retrieve the actual Title element of the Header Section
            const titleElement = this.titleHeaderSections.first().all(by.tagName('h1'));
            // Pull the Text from this element to verify correct element and text
            return titleElement.getText().then((text: string) => {
                console.log('First Title Section -- ' + text);
                return text[0];
            });
        });
    }

    public async getMyAccessHeaderElementText() {
        return browser.wait(conditions.visibilityOf(this.titleHeaderSections.first()), this.timeout).then(() => {
            console.log('Found Second Title Section - My Access row');
            // Retrieve the actual Title element of the Header Section
            const titleElement = this.titleHeaderSections.get(1).all(by.tagName('h1'));
            // Pull the Text from this element to verify correct element and text
            return titleElement.getText().then((text: string) => {
                console.log('Second Title Section -- ' + text);
                // For some reason, the string is within an array as 
                return text[0];
            });
        });
    }

    public async getMyPreferencesHeaderElementText() {
        return browser.wait(conditions.visibilityOf(this.titleHeaderSections.last()), this.timeout).then(() => {
            console.log('Found Last Title Section - My Preferences row');
            // Retrieve the actual Title element of the Header Section
            const titleElement = this.titleHeaderSections.last().all(by.tagName('h1'));
            // Pull the Text from this element to verify correct element and text
            return titleElement.getText().then((text: string) => {
                console.log('Last Title Section -- ' + text);
                return text[0];
            });
        });
    }

    public async clickAcceptCookies() {
        return browser.wait(conditions.visibilityOf(this.acceptCookiesButtonElement), 8000).then(async () => {
            return this.acceptCookiesButtonElement.click().then(() => {
                console.log('Accept Cookies button clicked');
            });
        });
    }
}
