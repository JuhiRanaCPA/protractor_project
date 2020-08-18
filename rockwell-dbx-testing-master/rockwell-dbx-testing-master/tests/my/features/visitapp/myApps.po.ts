import { by, element } from 'protractor';
import { Utils } from '../../../util/util';

export class MyAppsPageObject {

    get exploreTheAppStoreButton() {
        return element(by.className('btn primary-button large-button'));
    }
    get myAppsApp() {
        return element(by.className('app'));
    }
    get editButton() {
        return element(by.className('btn inline-button large-button edit-button pull-right text-uppercase'));
    }
    get xButton() {
        return element(by.className('remove'));
    }
    get removeButton() {
        return element.all(by.className('btn secondary-button modal-button full-width')).first();
    }
    get apps() {
        return element.all(by.className('app'));
    }
    get appRemovalButton() {
        return element.all(by.css('.delete-app-check .remove')).first();
    }

    public async clickExploreTheAppStoreButton() {
        return Utils.waitForVisibilityOf(this.exploreTheAppStoreButton).then(async () => {
            return this.exploreTheAppStoreButton.click().then(() => {
                console.log('Explore The App Store button clicked');
            });
        });
    }
    public async verifyNonEmptyMyAppsPage() {
        return Utils.waitForVisibilityOf(this.myAppsApp).then(() => {
            console.log('At lease one app visilbe');
        });
    }
    public async clickEditButton() {
        return Utils.waitForVisibilityOf(this.editButton).then(async () => {
            return this.editButton.click().then(() => {
                console.log('Edit button clicked');
            });
        });
    }
    public async clickXButton() {
        return Utils.waitForVisibilityOf(this.xButton).then(async () => {
            return this.xButton.click().then(() => {
                console.log('X button clicked');
            });
        });
    }
    public async clickRemoveButton() {
        return Utils.waitForVisibilityOf(this.removeButton).then(async () => {
            return this.removeButton.click().then(() => {
                console.log('Remove button clicked');
            });
        });
    }
    public async checkAndlickEditButton() {
        return Utils.waitForVisibilityOf(this.editButton).then(async () => {
            await this.editButton.click();
            await Utils.waitForVisibilityOf(this.appRemovalButton);
            console.log('Edit Button Clicked');
        }).catch(async () => {
            console.log('should be empty app page');
        });
    }
    public async getAppsCount(): Promise<any> {
        return Utils.tryCatcher(async () => {
            const count = await this.apps.count();
            return count;
        });
    }
    public async clickFirstAppRemoval() {
        return Utils.tryCatcher(async () => {
            await Utils.clickWhenPossible(this.appRemovalButton);
            return 'Clicked on first Item';
        });
    }
}
