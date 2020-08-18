import { by, element } from 'protractor';
import { Utils } from '../../../util/util';

export class ModalPageObject {

    get modalBodyTextElement() {
        return element(by.css('.modal-body p'));
    }
    get modalSecondaryButton() {
        return element(by.xpath('/html/body/app-mr/div[2]/div[2]/ng-component/div/ra-modal/div/section/section/section[2]/ra-button[2]/button'));
    }
    get modalDeleteButton() {
        return element(by.cssContainingText('button.ra-button1.secondary-button', 'Delete'));
    }
    get modalRemoveButton() {
        return element.all(by.cssContainingText('button.ra-button1.secondary-button', 'Remove')).first();
    }

    public async verifyModalBodyTextis(text: string): Promise<{}> {
        return Utils.waitForVisibilityOf(this.modalBodyTextElement).then(async () => {
            console.log('Modal body text is visible');
            return this.modalBodyTextElement.getText().then((elementText: string) => {
                return new Promise((resolve: () => void, reject: (reason: string) => void) => {
                    if (elementText === text) {
                        resolve();
                    } else {
                        reject(`Text don't match ${text} ${elementText}`);
                    }
                });
            });
        });
    }

    public async clickSecondaryButtonOnModal(): Promise<void> {
        return Utils.waitForVisibilityOf(this.modalSecondaryButton).then(async () => {
            console.log('Modal secondary button is visible');
            return this.modalSecondaryButton.click().then(() => {
                console.log('Modal secondary button is clicked');
            });
        });
    }

    public async clickDeleteButtonOnModal(): Promise<void> {
        console.log('in modal method');
        return Utils.waitForVisibilityOf(this.modalDeleteButton).then(async () => {
            console.log('Modal delete button is visible');
            return this.modalDeleteButton.click().then(() => {
                console.log('Modal delete button is clicked');
            });
        });
    }

    public async clickRemoveButtonOnModal() {
        return Utils.tryCatcher(async () => {
            console.log('in modal method');
            await Utils.waitForVisibilityOf(this.modalRemoveButton);
            console.log('Modal delete button is visible');
            await Utils.waitTillClickable(this.modalRemoveButton);
            return 'Modal delete button is clicked';
        });
    }
}
