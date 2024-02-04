import {test, expect} from '@playwright/test';

test.only('Get the product name from list of products', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");

    //select the radio button
    await page.locator("span.radiotextsty").last().click();
    await page.locator("#okayBtn").click();

    //Assert whether radio button is selected
    await expect(page.locator("span.radiotextsty").last()).toBeChecked();
});