import { by, element } from 'protractor';
import { Utils } from '../../../util/util';

export class AppStorePageObject {

    get catalogApp() {
        return element.all(by.className('image image-container')).first();
    }

    public async clickFirstApp() {
        return Utils.waitForVisibilityOf(this.catalogApp).then(async () => {
            return this.catalogApp.click().then(() => {
                console.log('First App clicked');
            });
        });
    }
}
