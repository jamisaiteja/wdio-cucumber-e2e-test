import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";


Given(/^Google$/, function () {
  browser.url("https://www.google.com");
  browser.pause(7000);
  console.log("after opening browser....");
  console.log(`>>>>>> browser Obj ${JSON.stringify(browser)}`);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>>SearchItem : ${searchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");

  // console.log(`>>>> Ele Obj ${JSON.stringify(ele)}`);

});

Then(/^Click on the first search result$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
});

Then(/^URL should match (.*)$/, async function (exceptedURL) {
  console.log(`>>> exceptedURl ${exceptedURL}`);
  //Dynamic wait

  // await browser.waitUntil(async () => {
  //   return (
  //     await browser.getTitle() ===
  //     "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
  //   );
  // },{timeout:6000,interval:2000,timeoutMsg:"Title not Found"});

  //chai is an BDD/TDD assertion library
  let url = await browser.getUrl();
  expect(url).to.equal(exceptedURL);
});

/**
 * Web Interactions
 */

Given(/^A webpage is opened$/, async function () {
  await browser.url(
    "https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo"
  );
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform webInteractions$/, async function () {
  /*
   * Base Url: https://the-internet.herokuapp.com
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
  // console.log(`>>>>>>>>>> ele Obj ${JSON.stringify(ele)}`)
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

  //await $(`span=Ways to save and get value on Amazon`).scrollIntoView()

  /**
   * Web Tables
   * 1. Check no of rows and columns
   * 2. Get whole table data
   * 3. Get single row[based on condition]
   * 4. Get single column
   * 5. Get Single cell value[based on another cell]
   */

  /** 1. Check no of rows and columns */
  // let rowCount = await $$(`//table[@id="table1"]/tbody/tr`).length;
  // expect(rowCount).to.equal(4);
  // console.log(`>>>> number of rows ${rowCount}`);

  // let colCount = await $$(`//table[@id="table1"]/thead/tr/th`).length;
  // expect(colCount).to.equal(6);
  // console.log(`>>>> number of col ${colCount}`);

  /** 2. Get whole table data */
  // //table[@id="table1"]/tbody/tr/td
  // let tableArray = []
  // for(let i=0;i<rowCount;i++){
  //   //let rowArray = [];
  //   let personObj ={
  //     Lastname : "",
  //     firstname :"",
  //     email :"",
  //     Due:"",
  //     web:"",
  //     edit:""
  //   }
  //   for(let j=0;j<colCount;j++){
  //     let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText();
  //     //rowArray.push(cellVal);
  //     //console.log(`>>>>>>>>> Cell Value ,${cellVal}`);
  //     if(j===0) personObj.Lastname = cellVal
  //     if(j===1) personObj.firstname = cellVal
  //     if(j===2) personObj.email = cellVal
  //     if(j===3) personObj.Due = cellVal
  //     if(j===4) personObj.web = cellVal
  //     if(j===5) personObj.edit = cellVal
  //   }
  //   //tableArray.push(rowArray);
  //   tableArray.push(personObj);
  // }
  // console.log(JSON.stringify(tableArray))

  /** 3. Get single row[based on condition] */

  // let tableArray = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let personObj = {
  //     Lastname: "",
  //     firstname: "",
  //     email: "",
  //     Due: "",
  //     web: "",
  //     edit: "",
  //   };
  //   for (let j = 0; j < colCount; j++) {
  //     let cellVal = await $(
  //       `//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`
  //     ).getText();
  //     let first_Name = await $(
  //       `//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`
  //     ).getText();
  //     //console.log(`>>>>>>>>> Cell Value ,${cellVal}`);
  //     if (first_Name === "Jason") {
  //       if (j === 0) personObj.Lastname = cellVal;
  //       if (j === 1) personObj.firstname = cellVal;
  //       if (j === 2) personObj.email = cellVal;
  //       if (j === 3) personObj.Due = cellVal;
  //       if (j === 4) personObj.web = cellVal;
  //       if (j === 5) personObj.edit = cellVal;
  //     }
  //   }
  //   if(personObj.firstname){
  //     tableArray.push(personObj);
  //   }
  // }
  // console.log(JSON.stringify(tableArray));

  /** 4. Get single column */

  // let col =[];
  // for(let i=0;i<rowCount;i++){
  //   let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText();
  //   col.push(cellVal);
  // }

  // console.log(`>>>>>>> col : ${col}`)

  /** 5. Get Single cell value[based on another cell] */

  // let tableArray = [];
  // for (let i = 0; i < rowCount; i++) {
  //     // let cellVal = await $(
  //     //   `//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`
  //     // ).getText();
  //     let price = await $(
  //       `//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`
  //     ).getText();
  //     let first_Name = await $(
  //         `//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`
  //     ).getText();
  //     let numPrice = +(price.slice(1,price.length));
  //     if(numPrice> 50){
  //       tableArray.push(first_Name);
  //     }
  // }
  // console.log(tableArray);

  /**
   * SCROLLING
   * 
   * VISIBLE PORTION
   * window object:
   * reference - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
   * 1.ScrollBy - method scrolls the document in the window by the given amount
   *  Syntax:
   *      window.scrollBy(x.coor,y-coor)
   *      window.scrollBy(options)
   * x-coord is the horizontal pixel value that you want to scroll by.
      y-coord is the vertical pixel value that you want to scroll by.

   *  Y -> - window.innerHeight (scroll Up) , window.innerHeight(scroll down)
       
   */

  //scroll down
  // await browser.execute(()=>{
  //     window.scrollBy(0,window.innerHeight);
  // })

  // //scroll up
  // await browser.execute(()=>{
  //     window.scrollBy(0,-window.innerHeight);
  // })

  /**
   * INVISIBLE PORTION
   * window object:
   * 1.ScrollTo
   * Window.scrollTo() scrolls to a particular set of coordinates in the document.
      Syntax:
      scrollTo(x-coord, y-coord)
      scrollTo(options)

      x-coord is the pixel along the horizontal axis of the document that you want displayed in the upper left.
y-coord is the pixel along the vertical axis of the document that you want displayed in the upper left.
      Examples:
            window.scrollTo(0, 1000);
      Using options:

        window.scrollTo({
          top: 100,
          left: 100,
          behavior: "smooth",
        });
   *  Y -> document.body.scrollTop[scrollheight]
   */
  // await browser.pause(2000);
  // await browser.execute(()=>{
  //    window.scrollTo(0,document.body.scrollHeight);
  // })

  // await browser.pause(2000);
  // await browser.execute(()=>{
  //    window.scrollTo(0,document.body.scrollTop);
  // })

  //console.log(`>>>>>>>>> browser Obj ${JSON.stringify(browser)}`)

  await browser.debug();
});
