import { browser, by, element } from 'protractor';

const conditions = browser.ExpectedConditions;

export class NavBarPageObject {
    private timeout: number = 80000;

    get fixedMenuButton() {
        // Will return the element of menu button
        return element.all(by.id('navBarMenuButton')).last();
    }
    get scrollMenuButton() {
        return element.all(by.id('navBarMenuButton')).first();
    }
    get menuLogo() {
        return element(by.className('menu-button'));
    }
    get notificationCenterLogo() {
        return element(by.className('icon-ic_notification_center'));
    }
    get fixedNotificationCenterButton() {
        return element.all(by.className('notifications-button')).last();
    }
    get scrollNotificationCenterButton() {
        return element.all(by.className('notifications-button')).first();
    }
    get CAPMNotifications() {
        return element.all(by.css('#NotificationItemsWrapper .card'));
    }
    get CAPMPanel() {
        return element(by.id('CommunicationsPlugin'));
    }

    public async clickMenuButton(): Promise<void> {
        return browser.wait(conditions.visibilityOf(this.menuLogo), this.timeout).then(async () => {
            console.log('Menu button found');
            return this.menuLogo.click().then(() => {
                console.log('menu clicked');
            });
        }).catch(async () => {
            return this.clickFixedMenuButton().catch(() => this.clickScrollMenuButton());
        });
    }

    public async clickNotificationCenterButton(): Promise<void> {
        return browser.wait(conditions.visibilityOf(this.notificationCenterLogo), this.timeout).then(async () => {
            console.log('Notification Center button found');
            return this.notificationCenterLogo.click().then(() => {
                console.log('Notification Center clicked');
            });
        }).catch(async () => {
            console.log('Notification Center click exception catched',
            element.all(by.className('notifications-button')).length);
            return this.clickFixedNotificationCenterButton().catch(() => this.clickScrollNotificationCenterButton());
        });
    }

    public async clickFirstCAPMNotification() {
        return browser.wait(conditions.visibilityOf(this.CAPMNotifications.first()), this.timeout).then(async () => {
            return this.CAPMNotifications.first().click();
        });
    }

    public async verifyCAPMPanel() {
        return browser.wait(conditions.visibilityOf(this.CAPMPanel), this.timeout);
    }

    private async clickFixedMenuButton(): Promise<void> {
        return browser.wait(conditions.visibilityOf(this.fixedMenuButton), this.timeout).then(() => {
            console.log('fixed menu clicked');
            return this.fixedMenuButton.click();
        });
    }

    private async clickScrollMenuButton(): Promise<void> {
        return browser.wait(conditions.visibilityOf(this.scrollMenuButton), this.timeout).then(() => {
            console.log('scroll menu clicked');
            return this.scrollMenuButton.click();
        });
    }

    private async clickFixedNotificationCenterButton(): Promise<void> {
        return browser.wait(conditions.visibilityOf(this.fixedNotificationCenterButton), this.timeout).then(() => {
            console.log('fixed menu clicked');
            return this.fixedNotificationCenterButton.click();
        });
    }

    private async clickScrollNotificationCenterButton(): Promise<void> {
        return browser.wait(conditions.visibilityOf(this.scrollNotificationCenterButton), this.timeout).then(() => {
            console.log('scroll menu clicked');
            return this.scrollNotificationCenterButton.click();
        });
    }
}
