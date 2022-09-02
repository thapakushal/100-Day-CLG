// Syntax
// function name ( parameter1, parameter2, parameter3){
//     //code to be excuted
// }

const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js

function cookMaggi(maggi, pani, tapeli){
    console.log(
    "Your maggie will be ready in " 
    + maggi  + " minutes" + " and Ingredients used are:- "
    + maggi + " Maggi "
    + pani + " cups of wate r" + "using" + 
    tapeli + " pan "
    )
}
cookMaggi( 4 , 8 , 1 );

// Function having return value
let bread1 = prompt("Which bread would you like to have :-");
let veggies1 = prompt("What are your favorite veggies :-");
let sauce1 = prmpt("Which sauce would you like to have:-")

function makeSandwich(bread, veggies, sauce) {
    let sandwich = bread + " bread " + veggies + "" + sauce + "sandwich";
    return sandwich;
}

let vegSandwich = makeSandwich(bread1, veggies1, sauce1);
console.log(vegSandwich);