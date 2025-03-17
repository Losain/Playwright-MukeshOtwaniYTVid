import {test, expect} from '@playwright/test'
import exp from 'constants';

test("Select Values from Dropdown", async({page})=>{
    //go to the page
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    //whenever you use ID you will use the #. 
    //Visibile texe and value can be different. 
    //
    await page.locator("#state").selectOption({label:"Goa"});

    await page.waitForTimeout(2000);
    //can use value
    await page.locator("#state").selectOption({value: "Nagaland"});
    
    //need to see stuff
    await page.waitForTimeout(2000);

    //can also use indexes. 
    await page.locator("#state").selectOption({index: 4});

    //need to see stuff
    await page.waitForTimeout(2000);

    //always go with label. Values can change. the index can change. Using the label is less likely to change and less likely to become a problem. then value, then index. 

    //text contains
    const value = await page.locator("#state").textContent();
    console.log("All drop down values "+value);

    await expect(value.includes("Goa")).toBeTruthy();
    

    //run a loop in playwright
    let state = await page.$("#state");

    //$$ = all the elements? 
    let allElements = await state.$$("option");

    let ddstatus=false;

    for(let i=0;i<allElements.length;i++){
        let element =allElements[i]
        let value = await element.textContent();
        if(value.includes("Goa")){
            ddstatus=true;
            break;
        }
        console.log("Value from dropwdown using for loop "+value);
        
    }
    await expect(ddstatus).toBeTruthy();

    await page.locator("#hobbies").selectOption(['Playing', 'Swimming']);
    await page.waitForTimeout(2000);
})