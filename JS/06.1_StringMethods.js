const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js

//string methods--- toUpperCase, toLoweCase, slice, replace etc.

let name = "Kushal______"
console.log(name.length)

console.log(name.toUpperCase())// to uppercase is a function
console.log(name.toLowerCase())
console.log(name.slice(2,4))
console.log(name.slice(2))
console.log(name.replace("Ku", "Ab"))


let friend = "Kushal"
console.log(name.concat)(" is a friend of ", friend)