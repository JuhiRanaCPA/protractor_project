import { browser, by, element, ElementFinder } from 'protractor';
const conditions = browser.ExpectedConditions;

export class HelpCenterLandingPageObject {

    private timeout: number = 20000;

    get bomCard() {
        return element.all(by.tagName('ra-card')).first();
    }
    get appsCard() {
        return element.all(by.tagName('ra-card')).get(1);
    }

    get repairsCard() {
        return element.all(by.tagName('ra-card')).get(2);
    }

    get equipmentCard() {
        return element.all(by.tagName('ra-card')).last();
    }
    get headerElement() {
        return element.all(by.tagName('h1')).first();
    }
    get feedbackSectionTitle() {
        return element(by.id('title'));
    }

    public async getCardCount() {
        return element.all(by.tagName('ra-card')).then(async (cards: ElementFinder[]) => {
            return cards.length;
        });
    }

    public async clickBomCard() {
        return browser.wait(conditions.elementToBeClickable(this.bomCard), this.timeout).then(async () => {
            return this.bomCard.click().then(async () => {
                console.log('BOM Card clicked');
            });
        });
    }

    public async clickAppsCard() {
        return browser.wait(conditions.visibilityOf(this.appsCard), this.timeout).then(async () => {
            return this.appsCard.click().then(async () => {
                console.log('Apps Card clicked');
            });
        });
    }

    public async clickRepairsCard() {
        return browser.wait(conditions.elementToBeClickable(this.repairsCard), this.timeout).then(async () => {
            return this.repairsCard.click().then(async () => {
                console.log('Repairs Card clicked');
            });
        });
    }

    public async clickEquipmentCard() {
        return browser.wait(conditions.elementToBeClickable(this.equipmentCard), this.timeout).then(async () => {
            return this.equipmentCard.click().then(async () => {
                console.log('Equipment Card clicked');
            });
        });
    }

    /*The following two functions are not used on the Help Center Landing Page.
    They are called from all three card help pages.
    */
    public async getHeaderText() {
        return browser.wait(conditions.visibilityOf(this.feedbackSectionTitle), this.timeout).then(async () => {
            return browser.switchTo().frame(element(by.id('iframeId')).getWebElement()).then(async () => {
                return browser.wait(conditions.visibilityOf(this.headerElement)).then(async () => {
                    return this.headerElement.getText().then(async (text: string) => {
                        return browser.switchTo().defaultContent().then(async () => {
                            console.log(text);
                            return text;
                        });
                    });
                });
            });
        });
    }
}
