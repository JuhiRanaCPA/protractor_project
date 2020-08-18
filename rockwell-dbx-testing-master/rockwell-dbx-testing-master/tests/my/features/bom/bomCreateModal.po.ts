import {browser, by, element} from 'protractor';
import {v4 as uuidv4} from 'uuid';
import {Utils} from '../../../util/util';

const conditions = browser.ExpectedConditions;

export class BomCreateModalPageObject {

    public bomName: string;
    private timeout: number = 8000;

    get bomNameInput() {
        return element.all(by.id('createBomInput')).first();
    }
    get createButton() {
        return element.all(by.className('btn secondary-button modal-button')).first();
    }

    public async enterBomName(layout: string) {
        return Utils.tryCatcher(async () => {
            const id: string = uuidv4();
            this.bomName = id.slice(0, 8);
            await Utils.waitForVisibilityOf(this.bomNameInput, this.timeout);
            console.log('BOM Name identifier: ', this.bomName);
            await Utils.sendKeysTo(this.bomNameInput, this.bomName);
            return `Bom Name ${this.bomName} entered`;
        });
    }

    public async clickCreateButton() {
        return browser.wait(conditions.visibilityOf(this.createButton), this.timeout).then(async () => {
            return this.createButton.click().then(() => {
                console.log('Create Button on BOM modal clicked');
            });
        });
    }
}
