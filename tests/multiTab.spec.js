import {test, expect} from '@playwright/test'

test("multi tab test", async({browser})=>{
    //sometimes links open new tabs. We need to know how to handle that. 
    //till now we've only been using pages. We're using multiple pages now so we need to use BROWSER keyword
    const context = await browser.newContext(); //variable for mutlipage.
    //create a new page
    const page = (await context).newPage();
    //go to some new website
    (await page).goto("https://freelance-learn-automation.vercel.app/login");

    //need to use soemthing called promises.
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),

        //need the locator
        (await page).locator('div').filter({ hasText: /^Connect with us$/ }).getByRole('link').nth(3).click()

    ])

    //now do a thing on the newpage
    //yeah facebook is too smart and detects the auto aspect. Which means I'll need to watch out for that in testing.

    //await newPage.locator('#«rc»').fill("NOPE");
    //yeaht the above didn't work because of some sort of automatoin warning. FB didn't like me visitng their login page and trying to put in an email or phone number. 
    expect(newPage.url(/facebook/)).toBeTruthy();

    //make sure you close the new page
    await newPage.close();

    //I think focus will change automagically?
    //the main question is how is this going to work with the stuff at work? Need three pages open at any given time. . .
    

    
})