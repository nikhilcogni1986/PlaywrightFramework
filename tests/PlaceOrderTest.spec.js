import { test, expect } from '@playwright/test';

test('Place an order by adding a product', async ({ page }) => {

    const email = "nikhilrao@test.com";
    const password = "Password1234";
    const productName = 'ZARA COAT 3';
    await page.goto("https://rahulshettyacademy.com/client");

    const products = page.locator(".card-body");

    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill(password);
    await page.getByRole('button', { name: 'login' }).click();
    await page.waitForLoadState('networkidle');
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    //click on Cart
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();

    //Verify if product is added to the cart
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
    await expect(bool).toBeTruthy();

    //click on Checkout
    await page.getByRole('button', { name: 'Checkout' }).click();

    //Wait for the product grid to load
    await page.locator("div.item__details").waitFor();

    //Enter cvv number
    await page.locator("div.field.small input.input.txt").first().fill("989");

    //Validate email address is same as Login email address
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

    //Enter the country name
    await page.locator("[placeholder*='Country']").pressSequentially('Ind', { delay: 100 })
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }

    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
});