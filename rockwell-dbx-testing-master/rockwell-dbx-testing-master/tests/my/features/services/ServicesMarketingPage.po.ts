import {by, element} from 'protractor';
import {Utils} from '../../../util/util';

export class ServicesMarketingPage {
  get goBackHomeButton() {
    return element(by.xpath('/html/body/app-mr/div[2]/div[2]/app-services/div/app-no-access/div/div/ra-button/button'));
  }

  public async verifyGoBackHomeButton() {
    return Utils.waitForVisibilityOf(this.goBackHomeButton).then(() => {
      console.log('Go back home button is visible');
    });
  }
}
