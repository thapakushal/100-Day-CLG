const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js

// Looping throgh arrays

//forEach Loop
let num = [2, 54, 1, 2, 4]
// for(let i=o; i<num.length;i++)
// console.log(num[i])

num.forEach(element => { // multiply each element 
    console.log(element*element)
});

// Array.from-- used to create an array from any other object (it also returns html collection )
let name = "Kushal"
let arr =  Array.from(name)
console.log(arr)

// For.. of loop // output--- 2, 54, 1, 2, 4
for(let i of num){
    console.log(i)
}                               //!important

//for.....in 
for (let i in num){
    console.log(i) // if you want to print the given use--console.log(num[i])
}

