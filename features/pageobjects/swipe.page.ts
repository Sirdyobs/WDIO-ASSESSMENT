import { $ } from '@wdio/globals'
import Page from './page.js';
import GeneralHelper from '../../Helper/GeneralHelper.js'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Swipe extends Page {
    /**
     * define selectors using getter methods
     */

    public get lblSwipeText(){
        return driver.isAndroid ? $('//android.widget.TextView[@text="Swipe horizontal"]') : $('Swipe horizontal');
    }


    public get horizontalSwipeContainer(){
        return driver.isAndroid ? $('//android.view.ViewGroup[@content-desc="Swipe horizontal"]/android.view.ViewGroup') : $('~Swipe horizontal');
    }


    public get fullyOpenSourceCard(){
        return driver.isAndroid ? $('//android.view.ViewGroup[@resource-id="__CAROUSEL_ITEM_0__"]/android.view.ViewGroup[@content-desc="card"]'):$('~Card');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    public async swipeHorizontallyToLeft() {
        await GeneralHelper.swipeElement(await this.lblSwipeText, "left");
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new Swipe();
