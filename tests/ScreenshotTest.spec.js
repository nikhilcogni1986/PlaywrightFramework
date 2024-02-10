import {test, expect} from '@playwright/test';

test('@Reg Take a screenshot of the page', async ({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.screenshot({path:"tests/screenshot/"+Date.now()+"HomePage.png"});
});

test('Take full page screenshot of the page', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:"tests/screenshot/"+Date.now()+"HomepageFull.png",fullpage:true});
});

test('@Reg Take screenshot the element', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#textarea").screenshot({path:"tests/screenshot/"+"Address.png"});
})