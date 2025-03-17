import {test, expect} from '@playwright/test'

test('JS Alert', async({page})=>{

    //this uses that sus website again, so I'll just be trying to follow along with out actually running anything.

    await page.goto("enter a url here");
    //click on JS alert (right click specifically)
    //find the locator (copy past from inspector)


    //we want to capture the alert. 
    //before you can click on it we need to do the on method
    //this will work as a listener. 
    //listening to one of the events (JS dialog)

    page.on('dialog', async(d)=>{
        //capture the type of the event, in this case we're looking for a JS Alert. 
        expect(d.type()).toContain("alert");
        //expect the event message to make sure it is the alert you are looking for. 
        expect(d.message()).toContain("the alert message")
        await d.accept();//this accepts the alert


    })
    

    await page.locator("the copied locator/selector here").click();




})

//how to handle confirm boxes
test("Confirm box", async({page})=>{

    //create another page on method
    page.on('dialog', async(d)=>{
        //check the type
        expect(d.type()).toContain("confirm");
        //expect the content of the box
        expect(d.message()).toContain("I am a confirm box"); //or whatever the content of the button is. 

        //close the window
        await d.dismiss();//what is the difference between accept and dismisse? 
        //returns when the dialog box has been. //what does dismissed mean? Canceled outside of an affirmation?


    })

    //now click. Why do you have to click after the fact? I guess you set up  
    //yeah set up the listener so that it listens/
    await page.locator("your selector/locator of choice").click();
})

test("handle prompt", async({page})=>{
    
})