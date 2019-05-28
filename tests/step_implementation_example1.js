/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, text, focus, inputField, toRightOf,click,exists,button,$} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';




step("Goto the-internet-herokuapp page", async () => {
    await goto('the-internet.herokuapp.com/');
});

step("click on add or remove elements", async () => {
    await click("Add/Remove Elements");
});

step("perform add and remove operations", async () => {
    for( var i=0;i<3; i++ ) {
        await click("Add Element");
   }       
   assert.ok(await button('Delete').exists());
   if (await button('Delete').exists()) {
       await click($("//button[3]"));
   }
   
});
