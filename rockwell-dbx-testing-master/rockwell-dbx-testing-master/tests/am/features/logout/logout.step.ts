import { ok } from 'assert';
import { Before, Given, When } from 'cucumber';
import { MenuPageObject } from '../../features/menu/menu.po';

let menuPage: MenuPageObject;

Before(() => {
    menuPage = new MenuPageObject();
});

Given('A user is logged into their Access Management account', () => {
    // cant think of a time where we wouldnt already be logged in.
    return ok;
});

When('The user clicks on the AM Sign Out link', async () => {
    await menuPage.clickSignOutButton();   
});
