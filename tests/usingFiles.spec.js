import { test, expect } from '@playwright/test'
//const testData=JSON.parse(JSON.stringify(require("../testData.json")))
const testLogin = JSON.parse(JSON.stringify(require("../testLogin.json")))


test.describe("Data Driven Login Test", function () {

    for (const data of testLogin) {
        test.describe(`Login with Users ${data.id}`, function () {
            test('Login to Application', async ({ page }) => {
                await page.goto("https://freelance-learn-automation.vercel.app/login");
                await page.locator('//*[@id="email1"]').fill(data.username);
                await page.locator('//*[@id="password1"]').fill(data.password);
                await page.waitForTimeout(2000); //don't ever leave these in your tests. 

            })
        })
    }
})

// test('Login to Application', async ({ page }) => {

//     await page.goto("https://freelance-learn-automation.vercel.app/login");

//     await page.locator('//*[@id="email1"]').fill(testData.interest[0]);
//     //neat! can use nested JSON objects which is just cool
//     //you can use arrays in json or you can use the nested jsons. so neat


//     //enter password

//     await page.locator('//*[@id="password1"]').fill(testData.password);
//     //does this work with the enter sequentially command? 
//     await page.waitForTimeout(2000); //don't ever leave these in your tests. 


//     //what if I want to execute this lots of times with different test cases, such as testing addresses or whatever? 


// })