//what is the difference between import and require? 
const {test, expect} = require('@playwright/test')

//why use async function and not just async?
test('My First Test', async function({page}) {
    //blank test for now
    expect(12).toBe(12);
})

test.skip('My Second Test', async function ({page}) {
    //blank test.
    expect(100).toBe(101);
})

test('My third Test', async function({page}){
    expect(2.0).toBe(2.0);
})

test('My Fourth Test', async function ({page}) {
    expect('taco cat').toContain('ta');
    expect(true).toBeTruthy();
})

test('My Fifth Test', async function({page}) {
    expect(false).toBeFalsy();
})

test('My Sixth Test', async function({page}) {
    expect("taco shark".includes("shark")).toBeTruthy();
})