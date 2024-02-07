import {test, expect} from '@playwright/test';

test('Grab the email address from Child window', async({browser})=>{
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const txtUsername = page.locator("#username");
    const blinkingText = page.locator("a[href*='documents-request']");

    const [newPage] = await Promise.all([ 
        browserContext.waitForEvent('page'),
        blinkingText.click()
    ]);
        
    const responseText = await newPage.locator("p.im-para.red").textContent();    
    const responseArray = responseText.split("@");
    const emailAddress = responseArray[1].split(" ")[0];
    await console.log(emailAddress);
    
    await txtUsername.fill(emailAddress);
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();
});

test('Grab the header text from child window', async({browser})=>{
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://practice-automation.com/window-operations/");
    
    const btnNewTab = page.locator("button.custom_btn.btn_hover b").first();

    const [newPage] = await Promise.all([ 
        browserContext.waitForEvent('page'),
        btnNewTab.click()
    ]);
        
    const cypressLink = newPage.locator("a[href*='cypress-tutorials']").first();
    await expect(cypressLink).toBeVisible();
});