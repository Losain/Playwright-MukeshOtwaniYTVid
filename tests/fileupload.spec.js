import {test, expect} from '@playwright/test'

test("Verify File Upload", async function({page}) {

    await page.goto("thiswebsitewasbrokensonowIjustampracticing");

    //use # for type
    await page.locator("#file-upload").setInputFiles("./Upload/image1.png", "./Upload/image2.png"); //put complete path of the file you want to use. So it should NEVER move. you can store your files here for testing! so smart. 

    //also need to click on file upload
    await page.locator("#file-Submit").click();
    //also need to check that file was successfully uploaded. (end point testing?)
    expect(await page.locator("//h3")).toHaveText("file uploaded!")
    //you can gather the above locators and text from the page it'self. this siis just an example. 
    //anything that requires potential file names or anything like that should be saved as variables in a differnet folder. 

    //to remove a file: this passes an empty array clearing out the file seleciton. 
    await page.locator("the locator of the file upload button").setInputFiles([]);

    //note that it could be beneficial to do this method and to look for any other "clear upload" type button in the UI to test that feature. 
    
})