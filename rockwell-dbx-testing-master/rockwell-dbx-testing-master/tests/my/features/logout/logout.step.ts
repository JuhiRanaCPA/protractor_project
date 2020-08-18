import { ok } from 'assert';
import { Before, Given, When } from 'cucumber';
import { MenuDrawerPageObject } from '../../features/menu/menuDrawer.po';
import { NavBarPageObject } from '../../shared/pages/navbar.po';

let menuDrawerPage: MenuDrawerPageObject;
let navbarPage: NavBarPageObject;

Before(() => {
    menuDrawerPage = new MenuDrawerPageObject();
    navbarPage = new NavBarPageObject();
});

Given('A user is logged into their myRockwell account', () => {
    // cant think of a time where we wouldnt already be logged in.
    return ok;
});

When('The user clicks on the Sign Out link', async () => {
    await menuDrawerPage.clickSignOutButton();
});
