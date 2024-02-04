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

test('Extracting text from a web element', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("nikhilrao@test.com");
    await page.locator("#password").fill("password");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");
})

test('Extracting text from a link web element', async ({page})=>{
    await page.goto("https://askomdch.com");
    await page.locator("li[id='menu-item-1227'] a").click();
    console.log(await page.locator(".woocommerce-products-header__title.page-title").textContent());
    await expect(page.locator(".woocommerce-products-header__title.page-title")).toContainText("Store");
})
