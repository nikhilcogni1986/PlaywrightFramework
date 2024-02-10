import {test, expect} from '@playwright/test';

test('@Reg Select options from Multi Select Drop Down', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#colors").selectOption(['Red','Blue']);

    //Assertion to check number of options
    const options = await page.locator("#colors option").count();
    await expect(options).toBe(5);

    //Assertion using Javascript
    const drpdwnOptions = await page.$$("#colors option");
    await expect(drpdwnOptions.length).toBe(5);

    //Assertion to check presence of an option in drop down
    const optionContent = await page.locator("#colors").textContent();
    await expect(optionContent.includes("Blue")).toBeTruthy();
});