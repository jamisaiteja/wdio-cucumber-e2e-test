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
  console.log("hi")
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
