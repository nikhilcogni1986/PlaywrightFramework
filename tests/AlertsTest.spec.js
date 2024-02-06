import {test, expect} from '@playwright/test';

test('Handling of Alert', async ({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toBe("I am an alert box!");
        await dialog.accept();
    })
    await page.getByRole('button',{name:"Alert"}).click();
});

test('Handling of Confirmation Alert', async ({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toBe("Press a button!");
        await dialog.accept(); //clicks on Ok button
        expect(page.locator("p#demo")).toContainText("You pressed OK!");
        //await dialog.dismiss(); //clicks on Cancel
    })
    await page.getByRole('button',{name:"Confirm Box"}).click();
});

test('Handling of Prompt Alert', async ({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain("prompt");
        expect(dialog.defaultValue()).toBe("Harry Potter");
        await dialog.accept("Sri Ganesha"); //clicks on Ok button
        expect(page.locator("p#demo")).toContainText("Hello Sri Ganesha! How are you today?");
        //await dialog.dismiss(); //clicks on Cancel
    })
    await page.getByRole('button',{name:"Prompt"}).click();
});

