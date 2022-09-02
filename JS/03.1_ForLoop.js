
const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js

// Chapter 3 Loops and functions
// Program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parsenInt(n)//converted int integer
for (let i = 0; i < n; i++) {
    sum += (i + 1)
    // console.log((i+1),"+")
}

console.log("Sum of first " + n + "natural number is " + sum)


