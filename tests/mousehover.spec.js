import {test, expect} from '@playwright/test';

test("Valid Login", async function({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    //#email1
    await page.getByPlaceholder("Enter Email").fill("admin@email.com");
    await page.getByPlaceholder("Enter Password").fill("admin@123");

    await page.getByRole("button", {name:"Sign in"}).click();

    await page.locator("#root > div > nav > div > div.navbar-menu-links > div.nav-menu-item-manage > span").hover();

    await page.locator('//*[@id="root"]/div/nav/div/div[2]/div[1]/div/a[1]').click();
})