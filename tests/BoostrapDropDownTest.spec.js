import {test, expect} from '@playwright/test';

test('@Reg Select options from Boostrap Drop Down', async({page})=>{

    await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2");
    await page.locator(".multiselect").click();

    //Assert for the number of options
    await expect(page.locator("ul li label input")).toHaveCount(11);

    //Select the specific option and print the options
    const options = await page.$$("ul li label");
    await expect(options.length).toBe(14);

    //Loop through array and print the options
    for(let option of options)
    {
        const value = await option.textContent();
        await console.log(value);

        if(value.includes('Angular') || value.includes('Java'))
        {
            await option.click();
        }
    }
    await page.waitForTimeout(2000)
});