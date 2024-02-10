import {test, expect, chromium} from '@playwright/test';

test('@Reg Handling multiple windows', async ({page}) => 
{
   const browser = await chromium.launch();
   const context = await browser.newContext();
   
   //create 2 new pages both are independent
   const page1 = await context.newPage();
   const page2 = await context.newPage();

   await page1.goto("https://testautomationpractice.blogspot.com/");
   expect(page1).toHaveTitle("Automation Testing Practice");

   await page2.goto("https://demo.opencart.com/");
   expect(page2).toHaveTitle("Your Store");
   
});

test('@Reg Handling multiple windows and switching between pages', async ({page}) => 
{
   const browser = await chromium.launch();
   const context = await browser.newContext();
   
   //create 1 new page
   const page1 = await context.newPage();

   await page1.goto("https://rahulshettyacademy.com/AutomationPractice/");
   expect(page1).toHaveTitle("Practice Page");

   const newPagePromise = context.waitForEvent('page')
   await page1.locator("#openwindow").click();
   const page2 = await newPagePromise;
   expect(page2).toHaveTitle("QAClick Academy - A Testing Academy to Learn, Earn and Shine");
   
});
