import { expect } from 'chai';
import { browser, by, element, ElementArrayFinder, ElementFinder, promise } from 'protractor';

const conditions = browser.ExpectedConditions;

const AwaitTimeout: number = 20000;
const ShortAwaitTimeout: number = 20000;

export class Utils {

    public static async hasClass(elFinder: ElementFinder, className: string): Promise<boolean> {
        return elFinder.getAttribute('class').then((classes: string) => {
            return classes.split(' ').indexOf(className) !== -1;
        });
    }

    public static async isClickable(elFinder: ElementFinder): Promise<boolean> {
        return browser.wait(conditions.elementToBeClickable(elFinder), ShortAwaitTimeout)
            .then(() => {
                return true;
            }, () => {
                return false;
            });
    }

    public static async waitTillClickable(elFinder: ElementFinder) {
        return browser.wait(conditions.elementToBeClickable(elFinder), AwaitTimeout);
    }

    public static async waitElementPresence(id: string) {
        return browser.wait(conditions.visibilityOf(element(by.id(id))), AwaitTimeout);
    }

    public static async waitElementPresenceByElement(elFinder: ElementFinder) {
        return browser.wait(conditions.visibilityOf(elFinder), AwaitTimeout);
    }

    public static async waitForVisibilityOf(elFinder: ElementFinder, timeout?: number) {
        return browser.wait(conditions.visibilityOf(elFinder), !!timeout ? timeout : AwaitTimeout);
    }

    public static async waitForInvisibilityOf(elFinder: ElementFinder, timeout?: number) {
        return browser.wait(conditions.invisibilityOf(elFinder), !!timeout ? timeout : AwaitTimeout);
    }

    public static async waitForPresenceOf(elFinder: ElementFinder) {
        return browser.wait(conditions.presenceOf(elFinder), AwaitTimeout);
    }

    public static async isElementVisible(id: string) {
        return browser.wait(conditions.visibilityOf(element(by.id(id))), AwaitTimeout);
    }

    public static async isElementVisibleById(id: string) {
        return browser.wait(conditions.visibilityOf(element(by.id(id))), AwaitTimeout);
    }

    public static async isElementVisibleByClassName(className: string) {
        return browser.wait(conditions.visibilityOf(element(by.css(className))), AwaitTimeout);
    }

    public static async isCertainBrowser(browserName: string, platformName?: string) {
        return await browser.getCapabilities().then((cap: any) => {
            console.log('device name is: ', cap.map_.get('deviceName'));
            if (!platformName) {
                return cap.map_.get('deviceName') === browserName;
            } else {
                return cap.map_.get('browserName') === browserName && cap.map_.get('platform') === platformName;
            }
        });
    }

    /*
    @description: It waits until an element is visible and then it clicks it.
    @param: elementId = the element id to check
    */
    public static async clickWhenPossible(el: ElementFinder) {
        return browser.wait(conditions.elementToBeClickable(el), AwaitTimeout).then(async () => {
            return el.click();
        });
    }

    /*
    @description: It waits until an element is visible and then it clicks it.
    @param: elementId = the element id to check
    */
    public static async waitForUrlToChangeTo(url: string) {
        return browser.wait(conditions.urlIs(url), AwaitTimeout);
    }

    /*
    @description: It checks an url of a new tab and then goes back to the previous tab.
    In this case if the user is redirected from the menu it needs to click home to close it.
    @param: textToCheck = the text to check in the new tab url
    */
    public static async checkNewTabUrlFromMenu(textToCheck: string) {
        return browser.wait(conditions.urlContains(textToCheck), AwaitTimeout).then(async () => {
            // todo implement checking the URL and using expect.
            return browser.getAllWindowHandles().then(async (handles: string[]) => {
                return browser.switchTo().window(handles[0]).then(async () => {
                    return element(by.id('homeDrawerLink')).click();
                });
            });
        });
    }

    public static getNewTabUrl() {
        browser.driver.getAllWindowHandles().then(async (handles: string[]) => {
            console.log(handles);
            const newTab = handles[0];
            console.log(newTab);
            return browser.driver.switchTo().window(newTab).then(async () => {
                return browser.getCurrentUrl().then((url: string) => {
                    console.log(url);
                    return url;
                });
            });
        });
    }

    public static async returnFromSecondTab() {
        return browser.getAllWindowHandles().then(async (handles: string[]) => {
            return browser.switchTo().window(handles[0]);
        });
    }

    /*
    @description: It checks an url of a new tab and then goes back to the previous tab.
    @param: id = id of the element that contains the href.
    @param: expectedHref = href to match with
    */
    public static async checkHref(id: string, expectedHref: string) {
        return element(by.id(id)).getAttribute('href').then((url: string) => {
            console.log('checking url in ' + id);
            return expect(url).to.equal(expectedHref);
        });
    }

    /*
    @description: It gets an array of the elements by css.
    @param: css = class of the elements to search.
    */
    public static getElementsByCss(css: string): ElementArrayFinder {
        return browser.element.all(by.css(css));
    }

    /*
    @description: It returns an element with the specified id.
    @param: id = id of the element to search.
    */
    public static getElementByid(id: string): ElementFinder {
        return browser.element(by.id(id));
    }

    public static async isElementVisibleByCss(className: string) {
        return browser.wait(conditions.visibilityOf(element(by.css(className))), AwaitTimeout);
    }

    public static async waitElementInvisible(id: string) {
        return browser.wait(conditions.invisibilityOf(element(by.id(id))), AwaitTimeout);
    }

    public static async sendKeysTo(el: ElementFinder, input: string) {
        return Utils.waitForVisibilityOf(el).then( async () => {
            await el.clear();
            await el.sendKeys(input);
            let fieldValue = await el.getAttribute('value');
            console.log(`${fieldValue} entered through sendKeys`);
            if (fieldValue !== input) { // if the entered value is not the value to be entered
                await el.clear();
                for (const char of input) {
                    await el.sendKeys(char);
                }
                fieldValue = await el.getAttribute('value');
            }
            return `${fieldValue} is entered`;
        });
    }

    public static executeJavascript(javascriptCodeToExecute: string) {
        return browser.executeScript(javascriptCodeToExecute);
    }

    public static async tryCatcher(method: () => Promise<string | number>): Promise<string | number> {
      try {
        return await method();
      } catch (err) {
        return await Promise.reject(err);
      }
    }
}
