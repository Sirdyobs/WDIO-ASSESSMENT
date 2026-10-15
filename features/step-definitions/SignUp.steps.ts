import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/homepage.js';
import SignUpPage from '../pageobjects/signUpPage.js';
import loginPage from '../pageobjects/loginPage.js';



When(/^I click on Login button$/, async () => {
    await HomePage.goToLogin();
});

Then(/^I open the Signup context form$/, async () => {
    await loginPage.cxtFormSignUp.click();
});

Then(/^email,password,confirm-password empty fileds should be displayed$/, async () => {
    await expect(SignUpPage.txtEmail).toBeDisplayed();
    await expect(SignUpPage.txtPassword).toBeDisplayed();
    await expect(SignUpPage.txtConfirmPassword).toBeDisplayed();
});


Given(/^I'm on the SignUp screen$/, async () => {
    await SignUpPage.validateSignUpScreen();
});

When(/^I input correct (.+),(.+) and (.+) fields$/, async (email, password, confirmPassword) => {
    await SignUpPage.enterSignUpCredentials(email, password, confirmPassword);
});

Then(/^I click on SignUp button$/, async () => {
    await SignUpPage.clickSignUpButton();
});



Then(/^I should see dialog confirming (.+)$/, async (message) => {
    await SignUpPage.getSuccesfullSignUpMessage().then(async (actualMessage) => {
        await expect(actualMessage).toEqual(message);
    });
});


Then(/^On (.+), the user should see (.+)$/, async (testType, messageType) => {

    switch(testType) {
        case 'positive':
            await SignUpPage.getSuccesfullSignUpMessage().then(async (actualMessage) => {
                await expect(actualMessage).toEqual(messageType);
            });
            await SignUpPage.dlgBtnOK.click();
            break;
        case 'negative-passwordLength':
            await SignUpPage.getPasswordLengthErrorMessage().then(async (actualMessage) => {
                await expect(actualMessage).toEqual(messageType);
            });
            break;
        case 'negative-passwordMismatch':
            await SignUpPage.getPasswordMismatchErrorMessage().then(async (actualMessage) => {
                await expect(actualMessage).toEqual(messageType);
            });
            break;
        case 'negative-invalidEmail':
            await SignUpPage.getValidEmailErrorMessage().then(async (actualMessage) => {
                await expect(actualMessage).toEqual(messageType);
            });
            break;
    }
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