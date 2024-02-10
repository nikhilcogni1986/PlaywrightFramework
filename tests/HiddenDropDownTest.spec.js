import {test, expect} from '@playwright/test';

test('@Reg Launch browser using Browser context', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button',{name:'Login'}).click();

    await page.locator("a[href*='viewPimModule'] span").click();
    await page.locator("div.oxd-form-row > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div.oxd-select-text--after").click();

    const options = await page.$$("div[role='listbox'] span");
    for(options of options)
    {
        const jobTitle = await option.textContent();
        if(jobTitle.includes("QA Engineer"))
        {
            await option.click();
            break;
        }
    }
});