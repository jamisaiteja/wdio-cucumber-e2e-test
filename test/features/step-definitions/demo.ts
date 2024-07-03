import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

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

Given(/^A webpage is opened$/, async function () {
  await browser.url("");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform webInteractions$/, async function () {
  /**
   * 1.Input Box
   * Actions:
   * 1.Type into Input Box
   * 2.Clear the field and Type or just addValue
   * 3.Click and Type
   * 4.Slow Typing
   */

  // let stNum = "12345";
  // let ele = await $(`[type=number]`);
  // await ele.click(); // click and enter the value
  //setValue - clear the field before entering
  //addValue - wil support async clear
  //await ele.addValue("12345"); // can use setValue here
  // await browser.pause(2000);
  //clear the value
  //await ele.setValue("");
  // for (let i = 0; i < stNum.length; i++) {
  //   let charStr = stNum.charAt(i);
  //   await browser.pause(1000);
  //   await browser.keys(charStr);
  // }

  /**
   * 2.DropDown
   *
   * Actions:
   * 1. Assert default option is selected
   * 2. Select By attribute, text, index
   * 3. Get a list of Options
   */

  //1.
  // let defaultOption = await $(`//select/option[@selected="selected"]`);
  // let val = await defaultOption.getText();
  // expect(val).to.be.equal("Please select n option");

  //2. Select particular option

  //let dropdown = $(`#dropdown`);
  // i
  //await dropdown.selectByAttribute("value",1);
  // ii
  //await dropdown.selectByIndex(2)
  // iii
  // let dropdownOptions = await $$(`select > option`);
  // //forEach will not support async
  // let res = [];
  // for(let i=0;i<dropdownOptions.length;i++){
  //   //let dropdownOption = dropdownOptions[i]
  //   let val = await dropdownOptions[i].getText()
  //   res.push(val);
  // }

  // console.log(`>>> Options Array ${res}`);

  /**
   * 3.CheckBox
   * Actions:
   * 1. Select an Option
   * 2. Unselect an option(if selected)
   * 3. Assert if option is selected
   * 4. select all options
   */

  //1
  // let checkBox = $(`//form[@id="checkboxes"]/input[1]`);
  // await checkBox.click()

  //2
  // let checkBox = $(`//form[@id="checkboxes"]/input[1]`);
  // if (!await checkBox.isSelected()) {
  //   await checkBox.click();
  // }

  //3
  // let checkBox1 = $(`//form[@id="checkboxes"]/input[2]`);
  // let isChecked= await checkBox1.isSelected();
  // expect(isChecked).to.be.true;

  //4
  // let checkBoxes = await $$(`//form[@id="checkboxes"]/input`);
  // for(let i=0;i<checkBoxes.length;i++){
  //   if(!await checkBoxes[i].isSelected()){
  //     checkBoxes[i].click();
  //   }
  // }

  /**
   * Window Handling
   * Steps:
   * 1. Launch the browser
   * 2. Open another window
   * 3. Switch to the window based on title
   * 4. Switch back to the main window
   *
   *
   * Methods used:
   * 1. getTitle()
   * 2. getWindowHandle()
   * 3. getWindowHandles()
   * 4. switchToWindow()
   */

  // await $(`=Click Here`).click();
  // await $(`=Elemental Selenium`).click();
  // let currWindowTitle = await browser.getTitle();
  // let parentWindowHandle = await browser.getWindowHandle();
  // console.log(`>>> Current Window Tittle ${currWindowTitle}`);

  // // Switch to specific window
  // let windowHandles = await browser.getWindowHandles();
  // for (let i = 0; i < windowHandles.length; i++) {
  //   console.log(`>>>> Win Handle: ${windowHandles[i]}`);
  //   await browser.switchToWindow(windowHandles[i]);
  //   currWindowTitle = await browser.getTitle();
  //   if (currWindowTitle === "Home | Elemental Selenium") {
  //     await browser.switchToWindow(windowHandles[i]);
  //     let headertext = await $(`//h1[contains(text(),'Elemental Selenium')]`).getText();
  //     console.log(`>>> Header Text: ${headertext}`);
  //     //Rest of Actions go Here....
  //     break;
  //   }
  // }

  // //again switch back to parent window
  // await browser.switchToWindow(parentWindowHandle);
  // let parentWindowHeaderText = (await $(`<h3>`)).getText();
  // console.log(`>>> Parent Header Text: ${parentWindowHeaderText}`);
  // // continue rest of execution

  /**
   * 5. Handling ALerts
   *
   * Methods Used:
   * 1. isAlertOpen()
   * 2. acceptAlert()
   * 3. dismissAlert()
   * 4. getAlertText()
   * 5. sendAlertText()
   */

  // NORMAL ALERT
  // await $(`//button[contains(text(),"Click for JS Alert")]`).click();
  // if(await browser.isAlertOpen()){
  //   await browser.acceptAlert();
  //   console.log(">>>>>>>>>>>>>>>>>>>> Alert")
  // }

  //browser.pause(1000)

  // COMFIRM ALERT
  // await $(`//button[contains(text(),"Click for JS Confirm")]`).click();
  // if(await browser.isAlertOpen()){
  //   await browser.dismissAlert();
  //   console.log(">>>>>>>>>>>> Confirm")
  //   //browser.pause(3000)
  // }

  // PROMPT
  // await $(`//button[contains(text(),"Click for JS Prompt")]`).click();
  // if(await browser.isAlertOpen()){
  //  let alertText =  await browser.getAlertText();
  //   console.log(`>>>>>>>>>>>> alerttext ${alertText}`);

  //   await browser.sendAlertText("Hello JS Prompt...")
  //   await browser.acceptAlert();
  //   // browser.pause(3000)
  // }

  /**
   * File Upload
   */
  // console.log(process.cwd()); // cwd - current working directory
  // await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload.txt`);
  // await $(`#file-submit`).click();

  /**
   * Frames
   */

  // await $(`//a[contains(text(),"iFrame")]`).click();
  // let ele = await $(`#mce_0_ifr`);
  // await browser.switchToFrame(ele);
  // // we can interact with the frame
  // await $(`#tinymce`).setValue("Hello Frames.........")

  // // coming out from frame
  // await browser.switchToParentFrame();

  /**
   * Basic Scrolling
   * Methods:(Element methods)
   * 1. scrollIntoView
   */

  await $(`span=Ways to save and get value on Amazon`).scrollIntoView()
  
  await browser.debug();
});
