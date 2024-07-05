import { Then } from "@wdio/cucumber-framework";
import {expect} from "chai";
import logger from "../../helper/logger.ts";

Then(/^Inventory page should list (.*) products$/,async function(numOfProdcuts){
    console.log(`>>>> appid, ${this.appid}`)
    /**check the parameter is truthy */
    if(!numOfProdcuts){
        throw Error (`Invalid number provided: ${numOfProdcuts}`)
    }

    let productList = await $$(`.inventory_item`);
    //console.log(`>>>>>>>>>>>> ${productList.length}`)
    /** 
     * we will get the params from feature file in form of string,So
     * we converted to number because equal() method will do strict equality.
     * we can Number() or parseInt() methods
     */
    expect(productList.length).to.equal(Number(numOfProdcuts));

})

Then(/^Validate all products have valid price$/,async function(){
    /**
     * 1. get the price list
     * 2. convert to number
     * 3. Assert the prices
     */
    logger.info(`${this.testid} : Checking the price...`)
    let priceList = await $$(`.inventory_item_price`);

    let productPriceList = [];

    for(let i=0;i<priceList.length;i++){
        let price =await priceList[i].getText();
        // console.log(`>>>>>>>>>> ${Number(price.slice(1,price.length))}`);
        /** 2. */
        let productPrice = +(price.slice(1,price.length))
        productPriceList.push(productPrice);
    }

    /** 3. */

    let filteredList = productPriceList.filter(ele => ele>0)

    expect(productPriceList.length).to.equal(filteredList.length);




    

})