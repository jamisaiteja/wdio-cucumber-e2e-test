import { Given } from "@wdio/cucumber-framework";
//import { expect } from "chai";

Given(/^Login to inventory web App$/, async function () {
  /**1. Launch the URL */
  await browser.url("https://www.saucedemo.com");
  //await browser.setTimeout({ implicit: 15000, pageLoad: 10000 }); //added in testrunner (wdio.conf.ts)
  //await browser.maximizeWindow();

  /**2. Login to Inventory App*/
  try {
    await $(`#user-name`).setValue("standard_user");
    await $(`#password`).setValue("secret_sauce");
    await $(`#login-button`).click();
  } catch (err) {
    console.log("Error in first login. Retrying.....");
    //refreshing the page
    await browser.refresh();
    await browser.pause(1000);
    await $(`#user-name`).setValue("standard_user");
    await $(`#password`).setValue("secret_sauce");
    await $(`#login-button`).click();
  }

  //Reload a page - scenario like i want to login with a different user
  // await browser.pause(2000);
  // //reloading the session/page
  // await browser.reloadSession();

  // await browser.url("https://www.saucedemo.com");
  // await $(`#user-name`).setValue("problem_user");
  // await $(`#password`).setValue("secret_sauce");
  // await $(`#login-button`).click();


  // BAck and forward in site
  // await browser.back();
  // await browser.pause(3000);
  // await browser.forward();
  
  console.log(JSON.stringify(browser.options));
  // await browser.debug();
});
