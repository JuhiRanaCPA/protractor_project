import { browser, by, element, ElementFinder } from 'protractor';
import { Utils } from '../../../util/util';
import { expect } from 'chai';

export class RegisterProductListPageObjects {
    private timeout: number = 20000;

    get companyCard() {
        return element(by.css('#company-section #product-card'));
    }
    get footerSec() {
        return element(by.id('footer'));
    }

    public async clickCompanyCard() {
        return Utils.tryCatcher(async () => {
            await this.companyCard.isPresent().then(async () => {
                await this.companyCard.click().then(async () => {
                    console.log('Company card clicked');
                });
            });
            return 'Prd reg clicked';
        });
    }
    public async verifyRegisteredPdtListPage() {
        return Utils.tryCatcher(async () => {
            await browser.getCurrentUrl().then(async (url: string) => {
                console.log('url is: ', url);
                if (expect(url).to.have.string('/registered-products/my-company')) {
                    console.log('Registered product list displayed');
                } else {
                    console.log('Registered Pdt list page not loaded...');
                }
            });
            return 'Prd reg clicked';
        });
    }
    public async verifyRegisteredProducts() {
        let serialNo: string[];
        let catalogNo: string[];
        let count: number;
        return Utils.tryCatcher(async () => {
            await element.all(by.className('mat-row')).isPresent().then(async () => {
                console.log('Registered Product table displayed');
                await element(by.className('mat-row')).element(by.css('td[role="gridcell"]')).isPresent().then(async () => {
                    await element.all(by.css('td[role="gridcell"]:nth-child(2)')).count().then(async (cn: number) => {
                        console.log('No: of rows : ' + cn);
                        count = cn;
                        serialNo = new Array(cn);
                        catalogNo = new Array(cn);
                    });
                    await element.all(by.css('td[role="gridcell"]:nth-child(1)')).each(async (ele: ElementFinder, i1: number) => {
                        ele.getText().then(async (t: string) => {
                            serialNo.push(t);
                        });
                    });
                    await element.all(by.css('td[role="gridcell"]:nth-child(2)')).each(async (ele: ElementFinder, i1: number) => {
                        ele.getText().then(async (t: string) => {
                            catalogNo.push(t);
                        });
                    });
                });
            });
            console.log('srl no');
            console.log(serialNo);
            console.log('ctlg no');
            console.log(catalogNo);
            serialNo.forEach(async (sllno: string, i: number) => {
                if(sllno.length < 8) {
                    console.log('Please find the list of invalid Registerd Pdt List')
                    console.log(catalogNo[i].toString());
                }
            });
            return 'Prd reg clicked';
        });
    }
}