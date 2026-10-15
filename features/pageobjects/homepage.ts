import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    public get welcomeText(){
        return driver.isAndroid ? $('//android.widget.TextView[@text="WEBDRIVER"]') : $('~Welcome to the app!');
    }


    public get LoginButton(){
        return driver.isAndroid ? $('//android.widget.Button[@content-desc="Login"]/android.widget.TextView[@text="Login"]') : $('~Login');
    }

    public get forms(){
        return driver.isAndroid ? $('//android.widget.TextView[@text="Forms"]') : $('~Forms');
    }


    public get swipe(){
        return driver.isAndroid ? $('//android.widget.TextView[@text="Swipe"]') : $('~Swipe');
    }

    public get drag(){
        return driver.isAndroid ? $('//android.widget.TextView[@text="Drag"]') : $('~Drag');
    }


    async goToLogin() {
        await this.LoginButton.click();
    }

    async goToForms() {
        await this.forms.click();
    }

    async goToSwipe() {
        await this.swipe.click();
    }

    async goToDrag() {
        await this.drag.click();
    }

}

export default new HomePage();
