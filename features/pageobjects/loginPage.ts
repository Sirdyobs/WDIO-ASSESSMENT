import { $ } from '@wdio/globals'
import Page from './page.js';
import HomePage from '../pageobjects/homepage.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get lblLoginSignupForm(){
        return driver.isAndroid ? $('//android.widget.TextView[@text="Login / Sign up Form"]') : $('~Login/Sign Up Form');
    }

    public get cxtFormLogin(){
        return driver.isAndroid ? $('//android.view.ViewGroup[@content-desc="button-login-container"]/android.widget.TextView[@text="Login"]') : $('~Login');
    }
    
    public get cxtFormSignUp(){
        return driver.isAndroid ? $('//android.widget.TextView[@text="Sign up"]') : $('~Sign Up');
    }

    public get inputUsername () {
        return driver.isAndroid ? $('accessibility id:input-email') : $('~Email');
    }

    public get inputPassword () {
        return driver.isAndroid ? $('accessibility id:input-password') : $('~Password');
    }

    public get btnLoginSubmit () {
        return driver.isAndroid ? $('accessibility id:button-LOGIN') : $('~Login');
    }

    public get successfullLoginMessage () {
        return driver.isAndroid ? $('//android.widget.TextView[@text="You are logged in!"]') : $('~You are logged in!');
    }

    get CloseDialogButtonOK() {
        return driver.isAndroid ? $('id:android:id/button1') : $('~OK');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async openLoginForm() {
        await HomePage.goToLogin();
        await expect(this.lblLoginSignupForm).toBeDisplayed();
        await this.cxtFormLogin.click();
        await expect(this.inputUsername).toBeDisplayed();
    }

    async openSignUpForm() {
        await expect(this.lblLoginSignupForm).toBeDisplayed();
        await this.cxtFormSignUp.click();
    }

    async enterLogin (username: string, password: string) {
    
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        
    }

    async submitLogin() {
        await this.btnLoginSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
