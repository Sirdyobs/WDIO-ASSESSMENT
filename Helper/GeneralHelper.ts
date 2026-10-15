import { driver } from '@wdio/globals';
class GeneralHelper {

    
async swipeElement(
    element: WebdriverIO.Element,
    direction: 'up' | 'down' | 'left' | 'right'
): Promise<void> {
    if (!element || !(await element.isExisting())) {
        throw new Error(
            'Swipe aborted: Scrollable container not found.'
        );
    }

    let startX: number;
    let startY: number;
    let endX: number;
    let endY: number;

    switch (direction) {
        case 'up':
            // Finger moves up; page scrolls toward the bottom.
            [startX, startY, endX, endY] = [
                283, 1365, 354, 85
            ];
            break;

        case 'down':
            // Finger moves down; page scrolls toward the top.
            [startX, startY, endX, endY] = [
                354, 85, 283, 1365
            ];
            break;

        case 'left':
            // Finger moves left.
            [startX, startY, endX, endY] = [
                900, 700, 100, 700
            ];
            break;

        case 'right':
            // Finger moves right.
            [startX, startY, endX, endY] = [
                100, 700, 900, 700
            ];
            break;
    }

    try {
        await driver.action('pointer')
            .move({
                duration: 0,
                x: startX,
                y: startY
            })
            .down({ button: 0 })
            .move({
                duration: 150,
                x: endX,
                y: endY
            })
            .up({ button: 0 })
            .perform();
    } finally {
        await driver.releaseActions();
    }
}

} export default new GeneralHelper()