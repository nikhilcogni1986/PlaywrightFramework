import {test, expect} from '@playwright/test';

test('@Reg GetElements', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();

    //Accessing first element from a list of n elements
    console.log(await page.locator("div.card-body a").first().textContent());

    //Accessing last element from a list of elements
    console.log(await page.locator("div.card-body a").last().textContent());

    //Accessing nth element from a list of n elements
    console.log(await page.locator("div.card-body a").nth(2).textContent());

});

test('@Reg Get the product name from list of products', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("nikhilrao@test.com");
    await page.locator("#userPassword").fill("Password1234");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    console.log(await page.locator("div.card-body b").allTextContents());
});