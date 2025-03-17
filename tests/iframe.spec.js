import {test, expect} from '@playwright/test'

test("iframe test", async({page})=>{

    //iframes have names and titles etc. Selectors hub shows you that it's iframes dev tools calls them frames
    //frame vs iframe playwright handles them teh same way.
    await page.goto("https://docs.oracle.com/en/java/javase/23/docs/api/index.html");

    //if something tries to work on an object that is not in frame then it will not work.
    //trying to find an element on the main page, if a test is not working, then make sure you're on teh right frame
    await page.frameLocator("html > frameset > frameset > frame:nth-child(1)");//use name, title, src. etc. 

    await page.locator("body > div.indexContainer > ul > li:nth-child(1) > a");

    //payattention to what frames are where. 
    

})