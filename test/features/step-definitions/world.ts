import { setWorldConstructor } from "@wdio/cucumber-framework";
import { expect } from "chai";

class CustomWorld{
    appid :string
    testid:string
    constructor() {
        this.appid = "",
        this.testid= ""
    }
}

setWorldConstructor(CustomWorld);