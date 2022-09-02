const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js

let name = "Kushal"
console.log[name[0]]// shows first letter
console.log(name[1])// shows second letter
console.log(name[2])// shows third letter
console.log(name.length)
let friend = 'Ram'
console.log(friend) 

// Template literals
let boy1 = "pramod"
let boy2 = "Nikhil"
// Nikhil is the friend of pramod
let sentence = `${boy2} is a friend of ${boy1}` // Template literals use back tick instead of qouts to define string
// string interpolation-- inserting variables directly in template literal
console.log(sentence)

// Escape Sequence Characters
let fruit = 'banana\'na'
console.log(fruit)


