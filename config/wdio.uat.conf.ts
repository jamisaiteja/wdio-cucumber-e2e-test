import { config as baseConfig } from "../wdio.conf.js";

export const config = Object.assign(baseConfig,{
    //All test env specific key val pairs
    environment:"UAT",
    sauseDemoUrl :"https://www.saucedemo.com/"
})