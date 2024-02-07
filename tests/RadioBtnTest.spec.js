import {test, expect} from '@playwright/test';

test('Get the product name from list of products', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");

    //select the radio button
    await page.locator("span.radiotextsty").last().click();
    await page.locator("#okayBtn").click();

    //Assert whether radio button is selected
    await expect(page.locator("span.radiotextsty").last()).toBeChecked();
});

test('Select a Radio button', async({page})=>{

    await page.goto("https://practice-automation.com/form-fields/");
    await page.locator("#color1").click();
    await expect(page.locator("#color1")).toBeChecked();
})