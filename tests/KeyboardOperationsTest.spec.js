import {test, expect} from '@playwright/test';

test('Demo on keyboard operations', async ({page}) => {

    await page.goto("https://gotranscript.com/text-compare");
    await page.locator('[name="text1"]').fill("Welcome to Automation");

    //CTRL + A
    await page.keyboard.press('Control+a');

     //CTRL + C
     await page.keyboard.press('Control+c');

    //TAB
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //CTRL + V
    await page.locator('[name="text2"]').click();
    await page.keyboard.press("Control+V");

});
