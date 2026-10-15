

import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/homepage.js';

import LoginPage from '../pageobjects/loginPage.js';
import formComponents from '../pageobjects/formComponents.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}


Given(/^I am on the form components page$/, async () => {
    await HomePage.goToForms();
    //await expect(formComponents.lblFormComponents).toBeDisplayed();
});

When(/^Input field should have a placeholder$/, async () => {
    // await formComponents.inputField.getAttribute('text').then(async (placeholder) => {
    //     await expect(placeholder).toEqual('Type something');
    // });
});

When(/^I enter (.+) in the input field$/, async (inputText) => {
    await formComponents.inputField.setValue(inputText);
});

Then(/^the result field should display (.+)$/, async (inputText) => {
    (await formComponents.inputField).getText().then(async (actualText) => {
        await expect(actualText).toEqual(inputText);
    });
})


When (/^I click on the switch button$/, async () => {
    await formComponents.switchButton.click();
});

Then(/^Switch display should be (.+)$/, async (switchState) => {
    (await formComponents.switchButtonValueResult).getText().then(async (actualSwitchState) => {
        await expect(actualSwitchState).toEqual(switchState);
    });
});


When(/^I click on the dropdown button$/, async () => {
    await formComponents.dropDownButton.click();
});

Then(/^I should see the dropdown list view displayed$/, async () => {
    await expect(formComponents.dropDownListView).toBeDisplayed();
});

When(/^I select "([^"]*)" from the dropdown\$/, async (dropdownValue) => {
    
    await formComponents.dropDownButtonValue1(dropdownValue).click();
    // switch(dropdownValue) {
    //     case 'webdriver.io is awesome': 
            
    //         break;
    //     case 'Appium is awesome':
    //         await formComponents.dropDownButtonValue2.click();
    //         break;
    //     case 'This app is awesome':
    //         await formComponents.dropDownButtonValue3.click();
    //         break;  
    //     default:
    //         throw new Error(`Invalid dropdown value: ${dropdownValue}`);
    // }
}); 

Then('The Dropdown should have {string} as a value', async (dropdownValue) => {

    const selectedValue = await formComponents.dropDownValue.getText();
    await expect(selectedValue).toEqual(dropdownValue);

});



Then(/^I select (.+) from the dropdown$/, async (dropdownValue) => {
    
    await formComponents.dropDownButtonValue1(dropdownValue).click();
    // switch(dropdownValue) {
    //     case 'wedriver.io is awesome':
    //         await formComponents.dropDownButtonValue1.click();
    //         break;
    //     case 'Appium is awesome':
    //         await formComponents.dropDownButtonValue2.click();
    //         break;
    //     case 'This app is awesome':
    //         await formComponents.dropDownButtonValue3.click();
    //         break;
    //     default:
    //         throw new Error(`Invalid dropdown value: ${dropdownValue}`);
    // }
}); 