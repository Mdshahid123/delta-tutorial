//module.export
//require -build in function used to include external module that exist in separate file
//module.export -special object 

// in this video we are going to see how we can transfer a data from   one file into the  onother file
const sum=(a,b)=> a+b;
const mul=(a,b)=> a*b;
const g=9.8;
const pi=3.14;
// module.exports=123;
let obj={
    sum:sum,
    mul:mul,
    g:g,
    pi:pi
}
module.exports=obj;
