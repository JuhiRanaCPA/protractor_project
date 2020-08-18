import {by, element} from 'protractor';
import {Utils} from '../../../util/util';

export class MyEquipment {

  get powerBiApp() {
    // tslint:disable-next-line: max-line-length
    return element(by.xpath('//h3[@class=\'ra-title1 dashboard-spacing-top\'][contains(.,\'My Equipment Dashboard\')]'));
  }

  get cancelButton() {
    // tslint:disable-next-line: max-line-length
    return element(by.xpath('(//button[contains(.,\'Cancel\')])[1]'));
  }

  get headerText() {
    return element(by.css('h3.ra-display1'));
  }

  // Add id's to avoid xpaths in the future.
  get requestMoreInfoButton() {
    return element(by.xpath('/html/body/app-mr/div[2]/div[2]/ng-component/div/div[1]/div/ra-button/button'));
  }

  get moreInfoModal() {
    return element(by.css('app-mr-request-more-information'));
  }

  get ibeTile() {
    return element(by.xpath('//span[contains(.,\'Installed Base Evaluation (IBE)\')]'));
  }

  get rammpTile() {
    return element(by.xpath('//span[contains(.,\'Asset Management (RAAMP)\')]'));
  }

  get helpCenterEntryTile() {
    const component = element(by.css('.help-entry-point'));
    return component.element(by.css('.action a'));
  }

  get myEquipmentBreadcrumb() {
    return element(by.xpath('(//a[contains(@id,\'breadCrumbLink\')])[1]'));
  }

  get lifecycleHeaderFromIBEReport() {
    return element(by.xpath('//span[@class=\'ra-caption2\'][contains(.,\'Lifecycle\')]'));
  }

  get overviewHeaderFromRAAMPReport() {
    // tslint:disable-next-line: max-line-length
    return element(by.xpath('//ng-component[contains(.,\'My Equipment  Asset Management (RAAMP) Financial Summary\')]'));
  }

  public async verifyMarketingPage() {
    return Utils.tryCatcher(async () => {
      await Utils.waitForInvisibilityOf(this.moreInfoModal);
      await Utils.waitForVisibilityOf(this.headerText);
      return 'Marketing Page Visible';
    });
  }

  public async verifyRequestMoreInfoButton() {
    return Utils.tryCatcher(async () => {
      await Utils.waitForVisibilityOf(this.requestMoreInfoButton);
      return 'My Equipment Request More Info Button Visible';
    });
  }

  public async verifyRequestForm() {
    return Utils.tryCatcher(async () => {
      await Utils.waitForVisibilityOf(this.moreInfoModal);
      return 'My Equipment Request More Info Modal Visible';
    });
  }

  public clickCancelButton() {
    this.cancelButton.click();
  }

  public async verifyMyEquipmentLandingPage() {
    return Utils.tryCatcher(async () => {
      await Utils.waitForVisibilityOf(this.ibeTile);
      await Utils.waitForVisibilityOf(this.rammpTile);
      return 'Both IBE and RAAMP are visible!';
    });
  }

  public async clickMyEquipmentHelpCenterEntryFooter() {
    return Utils.tryCatcher(async () => {
      await Utils.waitForVisibilityOf(this.helpCenterEntryTile);
      await this.helpCenterEntryTile.click();
      return 'Help Center Entry footer is visible !';
    });
  }

  public async verifyIBEReport() {
    return Utils.tryCatcher(async () => {
      // Reports sometime take longer to load
      await Utils.waitForVisibilityOf(this.lifecycleHeaderFromIBEReport, 25000);
      return 'IBE Report Lifecycle Page Visible';
    });
  }

  public async verifyRAAMPReport() {
    return Utils.tryCatcher(async () => {
      // Reports sometime take longer to load
      await Utils.waitForVisibilityOf(this.overviewHeaderFromRAAMPReport, 25000);
      return 'IBE Report Lifecycle Page Visible';
    });
  }

  public async clickMyEquipmentBreadcrumb() {
    return Utils.tryCatcher(async () => {
      await Utils.waitForVisibilityOf(this.myEquipmentBreadcrumb);
      await this.myEquipmentBreadcrumb.click();
      return 'MyEquipment Breadcrumb clicked';
    });
  }
}
