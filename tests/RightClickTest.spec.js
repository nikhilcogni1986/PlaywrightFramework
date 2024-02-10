import {test, expect} from '@playwright/test';

test('@Reg Launch Browser using Page fixture', async ({page}) => {
   
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    await page.locator("span.context-menu-one.btn.btn-neutral").click({button:'right'});
    expect(page.locator("ul.context-menu-list.context-menu-root li span")).toHaveCount(6);
});
