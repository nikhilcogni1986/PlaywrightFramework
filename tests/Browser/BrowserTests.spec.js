import {test, expect} from '@playwright/test';

test('Launch browser using Browser context', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com");
});

test('Launch Browser using Page fixture', async ({page}) => {
    await page.goto("https://askomdch.com");
    console.log("TITLE=> "+ await page.title());
    await expect(await page.title()).toContain("AskOmDch – Become a Selenium automation expert!");
    await expect(page).toHaveTitle("AskOmDch – Become a Selenium automation expert!");
});

test.only('Extracting text from a web element', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("nikhilrao@test.com");
    await page.locator("#password").fill("password");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
})