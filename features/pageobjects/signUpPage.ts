import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */


    public get txtEmail () {
        return driver.isAndroid ? $('//android.widget.EditText[@content-desc="input-email"]') : $('~Email');
    }

    public get txtPassword () {
        return driver.isAndroid ? $('//android.widget.EditText[@content-desc="input-password"]') : $('~Password');
    }

    public get txtConfirmPassword () {
        return driver.isAndroid ? $('//android.widget.EditText[@content-desc="input-repeat-password"]') : $('~Confirm Password');
    }

    public get btnSignUpSubmit () {
        return driver.isAndroid ? $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]') : $('~Login');
    }

    public get successfullLoginMessage () {
        return driver.isAndroid ? $('//android.widget.TextView[@text="You are logged in!"]') : $('~You are logged in!');
    }

    public get successfullSignUpMessage () {
        return driver.isAndroid ? $('//android.widget.TextView[@resource-id="android:id/message"]') : $('~You successfully signed up!');
    }

    public get dlgBtnOK () {
        return driver.isAndroid ? $('id:android:id/button1') : $('~OK');
    } 

    get validEmailErrorMessage() {
        return driver.isAndroid ? $('//android.widget.TextView[@text="Please enter a valid email address"]') : $('~Invalid email');
    }


    get validConfirmPasswordErrorMessage() {
        return driver.isAndroid ? $('//android.widget.TextView[@text="Please enter the same password"]') : $('~Passwords do not match');
    }

    get passwordLengthErrorMessage() {
        return driver.isAndroid ? $('//android.widget.TextView[@text="Please enter at least 8 characters"]') : $('~Password must be at least 8 characters');
    }

    get confirmPasswordLengthErrorMessage() {
        return driver.isAndroid ? $('//android.widget.TextView[@text="Confirm password must be at least 8 characters"]') : $('~Confirm password must be at least 8 characters');
    }
    get passwordUppercaseErrorMessage() {
        return driver.isAndroid ? $('//android.widget.TextView[@text="Password must contain at least one uppercase letter"]') : $('~Password must contain at least one uppercase letter');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async validateSignUpScreen() {
        await expect(this.txtConfirmPassword).toBeDisplayed();
    }

    async enterSignUpCredentials(email: string, password: string, confirmPassword: string) {

        await expect(this.txtEmail).toBeDisplayed();
        await this.txtEmail.setValue(email);
        await this.txtPassword.setValue(password);
        await this.txtConfirmPassword.setValue(confirmPassword);
    }

    async clickSignUpButton() {
        await this.btnSignUpSubmit.click();
    }

    async getSuccesfullSignUpMessage(): Promise<string> {
        return await this.successfullSignUpMessage.getText();
    }

    async getValidEmailErrorMessage(): Promise<string> {
        return await this.validEmailErrorMessage.getText();
    }

    async getValidConfirmPasswordErrorMessage(): Promise<string> {
        return await this.validConfirmPasswordErrorMessage.getText();
    }

    async getPasswordLengthErrorMessage(): Promise<string> {
        return await this.passwordLengthErrorMessage.getText();
    }

    async getConfirmPasswordLengthErrorMessage(): Promise<string> {
        return await this.confirmPasswordLengthErrorMessage.getText();
    }

    async getPasswordMismatchErrorMessage(): Promise<string> {
        return await this.validConfirmPasswordErrorMessage.getText();
    }  
    
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
} export default new SignUpPage();
