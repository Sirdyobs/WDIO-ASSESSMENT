import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FormComponents extends Page {
    /**
     * define selectors using getter methods
     */


    public get lblFormComponents(){
        return driver.isAndroid ? $('//android.widget.TextView[@text="Form components"]') : $('~Form Components');
    }

    public get inputField(){
        return driver.isAndroid ? $('accessibility id:text-input') : $('~Text Input');
    }

    public get inputFieldPlaceholder(){
        return driver.isAndroid ? $('accessibility id:text-input').getAttribute('android:text') : $('~Text Input Placeholder');
    }

    public get inputFieldValueResult(){
        return driver.isAndroid ? $('accessibility id:input-text-result') : $('~Input Text Result');
    }

    public get switchButton(){
        return driver.isAndroid ? $('accessibility id:switch') : $('~Switch');
    }

    public get switchButtonValueResult(){
        return driver.isAndroid ? $('accessibility id:switch-text') : $('~Switch is Off');
    }

    public get dropDownButton(){
        return driver.isAndroid ? $('//android.widget.TextView[@resource-id="dropdown-chevron"]') : $('~Dropdown');
    }

    public get dropDownListView(){
        return driver.isAndroid ? $('//android.widget.ListView[@resource-id="com.wdiodemoapp:id/select_dialog_listview"]') : $('~Dropdown');
    }

    // public get dropDownButtonValue1(item: string){
    //     return driver.isAndroid ? $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${item}"]') : $('~wdio');
    // }

    dropDownButtonValue1(value: string): ChainablePromiseElement {
        // Targets an element matching the exact text on Android
        return $(`//*[@text="${value}"]`);
    }


    
    public get dropDownButtonValue2(){
        return driver.isAndroid ? $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]') : $('~Appium');
    }

    public get dropDownButtonValue3(){
        return driver.isAndroid ? $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="This app is awesome"]') : $('~Espresso');
    }


    
    public get dropDownValue(){
        return driver.isAndroid ? $('//android.widget.EditText[@resource-id="text_input"]') : $('~Dropdown Selected Value:');
    }


    public get btnActive(){
        return driver.isAndroid ? $('#button-Active') : $('~Active');
    }

    public get btnActiveDialog(){
        return driver.isAndroid ? $('//android.widget.TextView[@resource-id="android:id/message"]') : $('~This button is active');
    }

    public get btnInactiveDialog(){
        return driver.isAndroid ? $('//android.widget.TextView[@text="This button is inactive"]') : $('~This button is inactive');
    }

    public get btnInactive(){
        return driver.isAndroid ? $('//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup') : $('~Inactive');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    // public async selectDropDownValue(value: string) {
    //     await this.dropDownButton.click();
    //     await expect(this.dropDownListView).toBeDisplayed();
    //     switch(value) {
    //         case 'webdriver.io is awesome':
    //             await this.dropDownButtonValue1.click();
    //             break;
    //         case 'Appium is awesome':
    //             await this.dropDownButtonValue2.click();
    //             break;
    //         case 'This app is awesome':
    //             await this.dropDownButtonValue3.click();
    //             break;
    //             default:
    //             throw new Error(`Invalid value: ${value}`);
    //     }
    // }

    public async toggleSwitch() {
        await this.switchButton.click();
    }

    public async enterTextInInputField(text: string) {
        await this.inputField.setValue(text);
    }

    public async clickActiveButton() {
        await this.btnActive.click();

    }

    public async getActiveButtonDialogText() {
        await expect(this.btnActiveDialog).toBeDisplayed();
        return await this.btnActiveDialog.getText();
    }

    public async clickInactiveButton() {
        await this.btnInactive.click();
    }   

    public async getInactiveButtonState() {
         return await this.btnInactive.getAttribute('checked')
    }
    /**

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new FormComponents();
