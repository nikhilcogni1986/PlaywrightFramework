import {test, expect} from '@playwright/test';
const testData = JSON.parse(JSON.stringify(require('../TestData/loginCredentials.json')))

test.describe('Login using different credentials', ()=>
{
    for(const userCreds of testData)
    {
        test(`@Reg Login into application for a ${userCreds.UserType}`, async({page})=>
        {
            await page.goto("https://www.saucedemo.com/");
            
            await page.locator("#user-name").fill("");
            await page.locator("#user-name").fill(userCreds.username);
            
            await page.locator("#password").fill("");
            await page.locator("#password").fill(userCreds.password);

            await page.locator("#login-button").click();
            await page.waitForTimeout(1000);
            
            if(userCreds.UserType === 'standard_user')
                expect(await page.locator(".title").textContent()).toContain(userCreds.expected);
            else
            expect(await page.locator("h3[data-test='error']").textContent()).toContain(userCreds.expected);
        })
    }
}); 