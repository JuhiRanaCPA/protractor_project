import { Before, Given } from 'cucumber';
import { NavBarPageObject } from '../pages/navbar.po';

let navbarPage: NavBarPageObject;

Before(() => {
    navbarPage = new NavBarPageObject();
});

Given('the user clicks on the menu button', async () => {
    await navbarPage.clickMenuButton();
});
