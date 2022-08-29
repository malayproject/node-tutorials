//just require this module in app.js without assigning to any variable and see the magic
//it runs this module.

const num1 = 4;

const num2 = 10;

const addNums = function()  {
    return num1 + num2
}

console.log(`the sum is ${addNums()}`);