import { test, expect } from '@playwright/test'

test("Keyboard Events", async ({ page }) => {
    await page.goto("https://www.google.com/");

    //await page.locator("textarea[name='q']").fill("Mukesh Otwani");


    // //await page.keyboard.press("Enter");
    // //now for two keys
    // await page.keyboard.press("Control+A");
    // await page.keyboard.press("Control+C");
    // //backspace
    // await page.keyboard.press("Backspace");

    // await page.keyboard.press("Control+V");
    //await page.waitForTimeout(2000);

    await page.locator("textarea[name='q']").focus();
    await page.keyboard.type("Mukesh Otwani!");
    await page.keyboard.press("ArrowLeft");

    await page.keyboard.down("Shift");

    for(let i=0;i<6;i++){
        await page.keyboard.press("ArrowLeft");
    }
    await page.keyboard.up("Shift");
    await page.keyboard.press("Backspace");
})