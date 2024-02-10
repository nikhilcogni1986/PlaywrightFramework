import {test, expect} from '@playwright/test';

test('@Reg Demo on usage of GetBy locators', async ({page}) => {
    
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Male");
    await page.locator('form input[name="name"]').fill("Rahul");
    await page.getByPlaceholder("Password").fill("password");
    await page.getByRole('button',{name:"Submit"}).click();
    await page.getByLabel("Success! The Form has been submitted successfully!.").isVisible();
   
    await page.getByRole('link',{name:"Shop"}).click();
    await page.locator("app-card").filter({hasText:"iphone X"}).getByRole('button',{name:"Add"}).click();
});