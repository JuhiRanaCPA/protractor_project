import {by, element, ElementFinder} from 'protractor';
import {Utils} from '../../../util/util';
import { browser } from 'protractor';


export class RepairsPageObject {

    get quotesDropdownButton() {
        return element(by.css('.quote-list .app-dropdown'));
    }

    get quotesFilterMobileButton() {
        return element(by.css('.filter-mobile')).element(by.css('.ra-button1'));
    }

    get quotesStatusFilterMobileFacet() {
        const facetList = element.all(by.css('.facet-list'));
        return facetList.all(by.css('.facet')).get(0);
    }

    get quotesStatusFilterStatusDraftFacetValue() {
        const list = element(by.css('.facets')).element(by.css('.values'));
        
        const option = list.all(by.css('.facet-option')).get(1).element(by.tagName('label'));

        return option;
    }

    get quotesFilterMobileDone() {
        return element.all(by.css('.facets-header')).all(by.css('.ra-button2')).get(3);
    }

    get createNewButton() {
        return element(by.buttonText('Create New'));
    }

    get quoteCards() {
        return element.all(by.className('quote-item'));
    }

    get addProductsButtonsContainer() {
        return element(by.className('entry-points-container'));
    }

    get searchToAddProductButton() {
        return element(by.css('.wizard-entry-point .red-button'));
    }

    get searchSlide() {
        return element(by.id('searchSlide'));
    }

    get createRepairRequestContainer() {
        return element(by.css('app-mr-quote-stepper .step-container'));
    }

    get seriesDropdownButton() {
        return element(by.css('.series-container .dropdown-container .dropdown-toggle'));
    }

    get standardTierDiv() {
        return element(by.id('standardtier-div'));
    }

    get deleteQuoteButton() {
        return element(by.className('repairs-white-button'));
    }
    get manuallyAddProductButton() {
        return element(by.buttonText('MANUALLY ADD PRODUCT'));
    }
    get draftsDropdownChoice() {
        return element(by.xpath('//a[@class=\'dropdown-item ra-body2\'][contains(.,\'Drafts\')]'));
    }

    get loadSpinner() {
        return element(by.className('loading-spinner'));
    }

    public async verifyQuotesDropdownButton() {
        return Utils.waitForVisibilityOf(this.quotesDropdownButton).then(async () => {
            console.log('Quotes Dropdown Button found');
        }).catch(async () => {
            console.log('Quotes Dropdown Button Not Found');
        });
    }

    public async verifyQuotesFilterMobileButton() {
        return Utils.waitForVisibilityOf(this.quotesFilterMobileButton).then(async () => {
            console.log('Quotes Mobile Filter Button found');
        }).catch(async () => {
            console.log('Quotes Mobile Filter Button Not Found');
        });
    }

    public async clickQuotesDropdownButton() {
        return Utils.waitForVisibilityOf(this.quotesDropdownButton).then(async () => {
            console.log('Quotes Dropdown Button found');
            return this.quotesDropdownButton.click().then(() => {
                console.log('Quotes dropdown button clicked');
            }).catch(() => {
                return;
            });
        }).catch(async () => {
            return;
        });
    }

    public async clickDraftsChoice() {
        return Utils.waitForVisibilityOf(this.draftsDropdownChoice).then(async () => {
            return this.draftsDropdownChoice.click().then(async () => {
                console.log('Drafts Option Selected');
            }).catch(() => {
                console.log('Drafts Option Not Selected');
            });
        }).catch(async () => {
            console.log('Drafts Dropdown Didn\'t Show Up');
        });
    }

    public async getQuoteCardCount(): Promise<any> {
        return Utils.tryCatcher(async () => {
            const count = await this.quoteCards.count();
            return count;
        });
    }

    public async clickFirstDraft() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.quoteCards.first());
            await this.quoteCards.first().click();
            return 'Clicked on first draft';
        });
    }

    public async verifyCreateNewButton() {
        return Utils.waitForVisibilityOf(this.createNewButton).then(async () => {
            console.log('Empty State Create New Button Found!');
        });
    }

    public async clickOnCreateNewButton() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.createNewButton);
            await this.createNewButton.click();
            return 'Empty State Create New Button Clicked!';
        });
    }

    public async verifyOnAddProductToQuotePage() {
        return Utils.waitForVisibilityOf(this.addProductsButtonsContainer).then(() => {
            console.log('User is on Add products to Quote Page!');
        });
    }

    public async clickOnSearchToAddProductButton() {
        return Utils.waitForVisibilityOf(this.searchToAddProductButton).then(async () => {
            console.log('Search to Add Product Button Found');
            return this.searchToAddProductButton.click().then(() => {
                console.log('Search to Add Product Button Clicked');
            });
        });
    }

    public async clickOnManuallyAddProductButton() {
        return Utils.waitForVisibilityOf(this.manuallyAddProductButton).then(async () => {
            console.log('Manually Add Product Button Found');
            return this.manuallyAddProductButton.click().then(() => {
                console.log('Manually Add Product Button Clicked');
            });
        });
    }

    public async verifySearchSlide() {
        return Utils.waitForVisibilityOf(this.searchSlide).then(() => {
            console.log('Search Slide shown!');
        });
    }

    public async verifyCreateRepairRequestPage() {
        return Utils.tryCatcher(async () => {
            let url = await browser.getCurrentUrl();
            console.log(`Repairs Url is: ${url}`);
            url = url.replace('edit', 'review');
            console.log(`New Repairs Url is: ${url}`);
            await Utils.waitForUrlToChangeTo(url);
            await Utils.waitForVisibilityOf(this.createRepairRequestContainer, 10000);
            return 'Create Repair Step Container Shown';
        });
    }

    public async verifyStepDivIsActiveAtIndex(index: number) {
        return Utils.tryCatcher(async () => {
            await Utils.waitForInvisibilityOf(this.loadSpinner);
            await Utils.waitForVisibilityOf(element.all(by.css('.step-container div')).get(index));
            const steps: ElementFinder[] = await element.all(by.css('.step-container div'));
            const classes: string = await steps[index].getAttribute('class');
            console.log(`Classes: ${classes}`);
            if (classes.split(' ').indexOf('active-step') !== -1) {
                console.log(`active-step index ${classes.split(' ').indexOf('active-step')}`);
                return 'active-step class found';
            } else {
                throw new Error('active-step class not found');
            }
        });
    }

    public async clickSeriesDropdownButton() {
        return Utils.tryCatcher(async () => {
            console.log('scrolling');
            await browser.executeScript('arguments[0].scrollIntoView(false);', this.seriesDropdownButton.getWebElement());
            await this.seriesDropdownButton.click();
            return 'Series Dropdown Button Clicked';
        });
    }

    public async clickSeriesChoiceAtIndex(index: number) {
        return Utils.tryCatcher(async () => {
            console.log('select series');
            const listItems: ElementFinder[] = await element.all(by.css('.series-container ul li'));
            await browser.executeScript('arguments[0].scrollIntoView(false);', listItems[index + 2].getWebElement());
            await Utils.waitTillClickable(listItems[index]);
            console.log('series is now ready to select');
            await listItems[index].click();
            return 'series is selected';
        });
    }

    public async selectStandardTierOption() {
        return Utils.tryCatcher(async () => {
            await browser.executeScript('arguments[0].scrollIntoView(false);', this.standardTierDiv.getWebElement());
            await Utils.waitForVisibilityOf(this.standardTierDiv);
            await element(by.css('#standardtier-div button')).click();
            console.log('Standard Tier Div option selected');
            return 'Standard Tier Div option selected';
        });
    }

    public async clickReviewRequestBrowserButton() {
        return Utils.tryCatcher(async () => {
            const reviewButton: ElementFinder = element.all(by.css('.footer .rockwell-red-button')).first();
            await Utils.clickWhenPossible(reviewButton);
            console.log('Review button clicked');
            return 'Review button clicked';
        });
    }

    public async clickReviewRequestMobileButton() {
        return Utils.tryCatcher(async () => {
            const reviewButton: ElementFinder = element.all(by.css('.footer .rockwell-red-button')).last();
            await Utils.clickWhenPossible(reviewButton);
            console.log('Review button clicked');
            return 'Review button clicked';
        });
    }

    public async clickDeleteQuoteButton() {
        return Utils.tryCatcher(async () => {
            await Utils.waitForVisibilityOf(this.deleteQuoteButton);
            await Utils.waitForInvisibilityOf(this.loadSpinner);
            await this.deleteQuoteButton.click();
            return 'Delete Quote Button Clicked';
        });
    }

}
