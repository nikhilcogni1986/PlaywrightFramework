import {test, expect} from '@playwright/test';

test('Launch Browser using Page fixture', async ({page}) => {
    await page.goto("https://demo.opencart.com/");
    const lnkDesktops = page.locator("//a[normalize-space()='Desktops']");
    const lnkMac = page.locator("//a[normalize-space()='Mac (1)']");
    await lnkDesktops.hover();
    await lnkMac.hover();
});
