import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/homepage.js';
import SignUpPage from '../pageobjects/signUpPage.js';
import loginPage from '../pageobjects/loginPage.js';
import swipePage from '../pageobjects/swipe.page.js';
import GeneralHelper from '../../Helper/GeneralHelper.js';



Given(/^I am on the Swipe screen$/, async () => {
    await HomePage.goToSwipe();
    await expect(swipePage.lblSwipeText).toBeDisplayed();
});


When(/^I swipe up$/, async () => {
    await GeneralHelper.swipeElement(await swipePage.lblSwipeText,"up");
});

When(/^I swipe left$/,async()=>{
    await GeneralHelper.swipeElement(await swipePage.fullyOpenSourceCard,"left")
})
