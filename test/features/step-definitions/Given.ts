import { Given } from "@wdio/cucumber-framework";
//import { expect } from "chai";
import logger from "../../helper/logger.ts";

Given(/^As (a|an) (.*) user I Login to inventory web App$/, async function (prefixText,userType,dataTable) {
  //logger
  logger.info(`${this.testid} : Started to login sause demo app...`)
  
  //console.log(`>>>>>>>> username  ${process.env.TEST_USERNAME}`)

  //Getting Values from data table
  let dt = dataTable.hashes();
  // console.log(`>>>>> type : ${dt[0].username}`)
  // console.log(`>>>>> Types of dataTable ${typeof dt}`)
  // console.log(`>>>>> dt ${dt.constructor}`)
  // console.log(`>>>>> tha value of dt ${JSON.stringify(dt)}`)
 

  // console.log(`>>>> UserType: ${userType}`);
  /**1. Launch the URL */
  //@ts-ignore
  await browser.url(browser.options.sauseDemoURL);
  //@ts-ignore
  //console.log(`>>>>>>> Browser Config: ${browser.options.sauseDemoURL}`)
  //await browser.setTimeout({ implicit: 15000, pageLoad: 10000 }); //added in testrunner (wdio.conf.ts)
  //await browser.maximizeWindow();

  /**2. Login to Inventory App*/
  try {
    await $(`#user-name`).setValue(dt[0].username);
    //await $(`#user-name`).setValue(process.env.TEST_STD_USERNAME);
    await $(`#password`).setValue(process.env.TEST_STD_PASSWORD);
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

  // Reload a page - scenario like i want to login with a different user
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
  
  //console.log(JSON.stringify(browser.options));
  // await browser.debug();

  //this represents the World Constructor in world.ts
  this.appid = "adbsfo";
});
