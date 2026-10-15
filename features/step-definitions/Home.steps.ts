import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/homepage.js';

import LoginPage from '../pageobjects/loginPage.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}


Given(/^I am on welcome screen$/, async () => {
    await expect(HomePage.LoginButton).toBeDisplayed();
});


When(/^I click on Forms button$/, async () => {
    await HomePage.goToForms();
});

When(/^I click on Swipe button$/, async () => {
    await HomePage.goToSwipe();
});

When(/^I click on Drag button$/, async () => {
    await HomePage.goToDrag();
}); 