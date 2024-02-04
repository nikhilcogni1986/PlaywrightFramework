import {test, expect} from '@playwright/test'
import exp from 'constants';

test('Get the attribute and validate the same', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const blinkingText = page.locator("a[href*='documents-request']");
    await expect(blinkingText).toHaveAttribute('class','blinkingText');
});

