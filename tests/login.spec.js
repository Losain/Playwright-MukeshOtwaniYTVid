const { test, expect } = require('@playwright/test');

test('Valid Login', async function ({ page }) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder("Username").pressSequentially("Admin", { delay: 100 });
    await page.getByPlaceholder("Password").pressSequentially("admin123", { delay: 100 });
    //await page.locator("//button[@type='submit']");
    await page.getByRole('button', { name: 'Login' }).click();

    //for debugging. This will wait for 5 seconds. 
    //await page.waitForTimeout(5000);
    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").click();
    await page.getByText("Logout").click();
    await expect(page).toHaveURL(/login/);
})

test("Verify Error Message", async function ({ page }) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("Admin123");

    await page.getByRole('button', { name: 'Login' }).click();

    //selector for the error message

    //this is the full xpath which is NOT the best way to select something. CSS and other ways of finding the object seem to be geenrally preferred. 
    //#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error

    const errorMessage = await page.locator("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error").textContent();
    console.log("error message is " + errorMessage);
    expect(errorMessage==="Invalid").toBeTruthy();
    //the ease of reading your tests can depend on what methods and features you use. 
})