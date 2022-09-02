const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js
/*let a = 1;
let b = 2;
let c = 3;

console.log(" One plus Average of a and b is ", 1 + (a+b)/2)
console.log("done")
console.log(" One plus Average of a and b is ", 1 + (a+b)/2)
console.log("done")
console.log(" One plus Average of a and b is ", 1 + (a+b)/2)
console.log("done")*/


//simplified in function
function onePlusAvg(x,y){  // x and y are parameters
    console.log("Done")//to print done 
    return 1 + (x+y)/2
}
let a = 1;
let b = 2;
let c = 3;

console.log(" One plus Average of a and b is ", onePlusAvg(a,b))
console.log(" One plus Average of a and b is ", onePlusAvg(a,b))
console.log(" One plus Average of a and b is ", onePlusAvg(a,b))





