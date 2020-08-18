// tslint:disable: max-line-length
import { browser, by, element } from 'protractor';
import { Utils } from '../../../util/util';
import { ManualProductFields } from '../repairs/config/repairs.constants';

const conditions = browser.ExpectedConditions;

export class ManuallyAddProductToQuoteFromNoSearch {

  private timeout: number = 100000;

  get checkModalPostManualAddition() {
      return element.all(by.linkText('Create a new Repair Quote Request'));
  }

  get checkModalPostManual() {
      return element.all(by.linkText('Add Product to Repair Quote Request'));
  }

  get addManualQuoteLink() {
      return element.all(by.id('create-new-item-link')).first();
  }

  get selectRepairQuoteRequest() {
      return element.all(by.xpath('(.//*[normalize-space(text()) and normalize-space(.)=\'EXPLORE. CREATE. PERSONALIZE.\'])[1]/following::h3[1]')).first();
  }

  get addProductToQuote(): any {
      return element.all(by.css('span.dropdown-text.pull-left.helper'));
  }

  get addManualProduct() {
      return element.all(by.css('div.modal.fade.in > section.modal-dialog.small-modal.large-size > section.modal-content > section.modal-footer.bottom-fixed.text-center > ra-button.half-width > button.btn.secondary-button.modal-button.full-width'));
  }

  get productDescClickArea() {
      return element.all(by.css('div.modal.fade.in > section.modal-dialog.small-modal.large-size > section.modal-content > section.modal-body > form.row.ng-untouched.ng-pristine.ng-valid.ng-star-inserted > div.form-group.description-section.col-xs-12.col-sm-12 > #description'));
  }

  get productDescriptionTextArea() {
      return element.all(by.css('form.row.ng-untouched.ng-valid.ng-star-inserted.ng-dirty > div.form-group.description-section.col-xs-12.col-sm-12 > #description'));
      // return element.all(by.id('description'));
  }

  public checkModalAndFillDataBasedOnKey(key: number): any {
      switch (key) {
          case ManualProductFields.catalogNumber:
              element.all(by.css('div.input-line > #catalogNumber')).click();
              element.all(by.css('div.input-line > #catalogNumber')).clear();
              return element.all(by.css('div.input-line > #catalogNumber')).sendKeys('catalog number');
          case ManualProductFields.manufacturer:
              return element(by.id('manufacturer')).sendKeys('manufacturer');
          case ManualProductFields.productDescription:
              return this.productDescClickArea.click();
          default:
              break;
      }
  }

  public selectSeriesNumber(): any {
      return element(by.xpath('(.//*[normalize-space(text()) and normalize-space(.)=\'(Use Unknown for non-RA product)\'])[1]/following::button[1]')).click().then(async () => {
          return element(by.linkText('C')).click();
      });
  }

  public clicksToCreateManualProduct(): any {
      return element.all(by.css('div.modal.fade.hidden-originally.in > section.modal-dialog.small-modal.large-size > section.modal-content > section.modal-footer.bottom-fixed.text-center > ra-button.half-width > button.btn.secondary-button.modal-button.full-width > span')).click();
  }

  public entersProductDesc(): any {
      return element.all(by.css('form.row.ng-untouched.ng-valid.ng-star-inserted.ng-dirty > div.form-group.description-section.col-xs-12.col-sm-12 > #description')).sendKeys('Product description');
  }

  public async clickOnManualProductlink() {
      return Utils.waitForVisibilityOf(this.addManualQuoteLink).then(async () => {
          return this.addManualQuoteLink.click().then(() => {
              console.log('Add Manual Product Quote Link Clicked');
          });
      });
  }

  public async checkDropdownModalRFQ() {
      return this.addProductToQuote.click().then(() => {
          console.log('Check add button activated and click');
      });
  }

  public async checkVisibilityOfDropdownOptionCreateQuote() {
      return browser.wait(conditions.visibilityOf(this.checkModalPostManual.first()), this.timeout).then(() => {
          console.log('Create a new Repair Quote Request');
      });
  }

  public async clickToAddProductToDraftQuote() {
      return this.addProductToQuote.click().then(() => {
          console.log('Check add button activated and click');
      });
  }

  public async clickToSelectQuote() {
      return this.checkModalPostManualAddition.click().then(() => {
          console.log('Selected new quote');
      });
  }

  public async clicksToManual() {
      return this.addManualProduct.click().then(() => {
          console.log('Added manual product to quote');
      });
  }
}
