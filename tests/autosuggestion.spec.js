import { test, expect } from '@playwright/test'

test("autosug", async ({ page }) => {
    await page.goto("https://www.google.com/");

    //type in google, see the suggestions in teh drop down, either click or arrow down. 
    //multiple scenarios and then discuss which is recommended. 
    await page.locator("textarea[name=q]").fill("Mukesh Otwani");

    await page.waitForSelector("#c7mM1c > div.wM6W7d");
    //talk about hidden elements another time. 

    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("ArrowDown");

    await page.waitForTimeout(2000);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);

    //using keyborad activities might get you different results. 


})

test.only("autosug2", async ({ page }) => {
    await page.goto("https://www.google.com/");

    //type in google, see the suggestions in teh drop down, either click or arrow down. 
    //multiple scenarios and then discuss which is recommended. 
    await page.locator("textarea[name=q]").fill("Mukesh Otwani");

    await page.waitForSelector("#c7mM1c > div.wM6W7d");
    //talk about hidden elements another time. 

    //     await page.keyboard.press("ArrowDown");

    //     await page.keyboard.press("ArrowDown");

    //     await page.waitForTimeout(2000);
    //     await page.keyboard.press("Enter");
    //     await page.waitForTimeout(2000);


    const element = await page.$$("#c7mM1c > div.wM6W7d");

    for (let i = 0; i < element.length; i++) {
        const text = await element[i].textContent();
        if (text.includes('youtube')) {
            await element[i].click();
            await page.waitForTimeout(2000)
            break
        }
    }
    await page.waitForTimeout(2000);


})
//using keyborad activities might get you different results. 