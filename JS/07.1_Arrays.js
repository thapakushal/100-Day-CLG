const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js

// Array() constructor
const fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]);     // undefined

//Array constructor with multiple parameters
const fruit = new Array('Apple', 'Banana');
console.log(fruit.length); // 2
console.log(fruit[0]);     // "Apple"
