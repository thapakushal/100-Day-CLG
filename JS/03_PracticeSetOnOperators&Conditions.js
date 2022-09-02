// Chapter 2 Practice Set

const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js

//Q.1  Use logical Operators to find wheater the age of a person lies between 10 and 20
// let age = prompt("What is your age")
// age = Number.parseInt(age)
// if (age > 10 && age < 20) {
//     console.log("Your age lies between 10 and 20")
// }

// else {
//     console.log("Your age doesn't lies between 10 and 20")
// }



// Q.2 Demonstrate the use of switch case statements in javaScript
let age = prompt("Wheat is your age")
switch (age) {
    case '12':
        console.log("Your age is 12")
        break
    case '13':
        console.log("Your age is 13")
        break
    case '14':
        console.log("Your age is 14")
        break
    case '15':
        console.log("Your age is 15")
        
        default:
            console.log("YOur age is not special")
}



//Q.3 Write a Java Script program to find whether a number is Divisible by 2 and 3
let num = prompt ("What is your age?")
num = Number.parseInt(num)
if(num % 2 == 0 && num % 3 == 0){
    console.log("Your number is divisible by 2 and 3")
}
else{
    console.log("Your number is no divisible by 2 and 3")
}


// Q.4 Write a JavaScript program to find whether a number is Divisible by either 2 or 3



// Q.5 Print "You can Drive " or "You cannot Drive based on age being greater than 18 using ternary operator"
// let age = 19
// let a = age>18? "You can drive": "YOu cannot drive"
// console.log(a)