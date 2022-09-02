//for loop, for/in , for/of , while , do/while--topics

const prompt = require("prompt-sync")({ sigint: true })// Runs prompt
// For loop
for (let i = 0; i < 10; i++)
    console.log("Namaste World")

// // Table of five
// for (let i=5; i < 51; i = i+5){
// console.log(i)
// }

// In reverse order in the difference of five form 50-4
// for (let i=50; i > 4; i = i-5){
//     console.log(i)
//     }

// find even number
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0)//Even number 
        console.log(i)
}

// find odd number
for (let i = 0; i < 10; i++) {
    if (i % 2 != 0)//Even number 
        console.log(i)
}

// //infintite loop
// for (let i=0; i < 10; ){
//     console.log("Namaste world")
// }


//While loop

let i = 0;
while (i < 10) {
    console.log("Welcome to Clg")
    i++
}

//do While loop--rarely used
let j = 0;
do {                     //where our code is written 
    console.log("Namaster Everyone I am kushal")
    j++
}
while (j < 10)                 // Where we write our mconditions

//For.....In loop
//Objects
let animal = {    
     name: "Zebra",
     leg: 4
};

for(let key in animal){
   console.log(key, animal[key]);
}

// Arrays
let names = ["Rahul", "Neha", "Aman", "Rishabh"];
for(let index in names ){
    console.log(index, names[index])// dot notaion doesn't work in array while checking values 
} 


// For of loop
for(let name of names){  // receiving names from 64 no.
    console.log(name)
}