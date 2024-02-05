import {test, expect} from '@playwright/test';

test('Get the product name from list of products', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("nikhilrao@test.com");
    await page.locator("#userPassword").fill("Password1234");
    await page.locator("#login").click();
    await page.locator("div.card-body b").first().waitFor();
    console.log(await page.locator("div.card-body b").allTextContents());
});