const {test, expect} = require('@playwright/test');

test('Verify Application Title', async function ({page}) {
    await page.goto("https://www.google.com/");
    const url=await page.url();
    console.log("URL is "+url);
    const title= await page.title();
    console.log("the title is "+title);
    await expect(page).toHaveTitle("Yahoo");
    
})