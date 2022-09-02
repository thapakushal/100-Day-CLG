const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js

// var n1= parseInt(prompt("Enter first number: "));
// var n2= parseInt(prompt("Enter second number: "));
// var sum = n1 + n2;
// console.log("The sum of "+n1+" and " + n2 + " is : " + sum);

//nested if else else if statement
let a = prompt("Hey what is youir age?");
a = Number.parseInt(a);// Converitng string to a number 
if (a < 0) {
    alert("This is a invalid age");
}
else if (a < 9) {
    alert("you are not eligible to drive vehichle");
}
else if (a < 18 && a >= 9) {
    alert("you are a kid and you can think of driving after 18");
}
else {
    alert(" Your an now drive as you are above 18");
}



//Ternary operator
console.log("You can", a < 18 ? "not drive" : "drive")
