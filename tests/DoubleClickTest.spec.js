import {test, expect} from '@playwright/test';

test('@Reg Demo on double click function', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const btnCopy = page.locator("//button[normalize-space()='Copy Text']")
    await btnCopy.dblclick();
    const f2 = page.locator("#field2");
    expect(f2).toHaveValue("Hello World!");
});
