import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/homepage.js';
import loginPage from '../pageobjects/loginPage.js';

import SignUpPage from '../pageobjects/signUpPage.js';



When(/^I am on the Login screen$/, async () => {
    await loginPage.openLoginForm();
});

When(/^I enter correct (.+) and (.+) fields$/, async (username, password) => {
    await loginPage.enterLogin(username, password);
});

When(/^I click on login button$/, async () => {
    await loginPage.submitLogin();
});

