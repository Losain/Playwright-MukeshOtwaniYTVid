import {test, expect} from '@playwright/test'

test("Working with Load State", async ({page})=>{

    //go to the page

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByText("New user? Signup").click();

    //wait for API calls to be done. 
    //wait for network to be idle? 
    await page.waitForLoadState("networkidle");

    //check the number of checkboxes. 
    const count= await page.locator("//input[@type='checkbox']").count();

    //make sure there are 3
    expect(count).toBe(3);

    //this errors, playwright is not waiting to find the checkboxes
    //need to understand how the application is behaving. Essentially lazy load and not waiting? 


})