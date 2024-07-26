//when we have to export a data from one directories to other  then direc must have index.js file 
//because index.js is a entry point like main() in c cpp
const banana=require("./banana")
console.log(banana)
const apple=require("./apple")
const orange=require("./orange")
let fruits=[banana,apple,orange]

module.exports=fruits