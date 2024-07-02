import { Given, When, Then } from "@wdio/cucumber-framework";
import {expect} from "chai";

Given(/^Google$/, function () {
  browser.url("https://www.google.com");
  browser.pause(7000);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>>SearchItem : ${searchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
});

Then(/^URL should match (.*)$/, async function (exceptedURL) {
  console.log(`>>> exceptedURl ${exceptedURL}`);
  //chai is an BDD/TDD assertion library
  let url = await browser.getUrl();
  expect(url).to.equal(exceptedURL);
});

/**
 * Web Interactions
 */

Given(/^A webpage is opened$/,async function(){
  await browser.url("/inputs")
  await browser.setTimeout({implicit : 15000, pageLoad:10000});
  await browser.maximizeWindow();
})

When(/^Perform webInteractions$/,async function(){
  /**
   * 1.Input Box
   * Actions:
   * 1.Type into Input Box
   * 2.Clear the field and Type or just addValue
   * 3.Click and Type
   * 4.Slow Typing
   */

    let stNum = "12345";
    let ele = await $(`[type=number]`)
    await ele.click() // click and enter the value
    //setValue - clear the field before entering
    //addValue - wil not clear
    //await ele.addValue("12345"); // can use setValue here
   // await browser.pause(2000);
    //clear the value
    //await ele.setValue("");
    for(let i=0;i<stNum.length;i++){
      let charStr = stNum.charAt(i);
      await browser.pause(1000);
      await browser.keys(charStr);
    }


    /**
     * 2.DropDown
     * 
     * Actions:
     * 1.Assert default option is selected
     * 2. Select By attribute, text, index
     * 3. Get a list of Options
     */

    
    await browser.debug();


})