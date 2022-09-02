const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js

//String methods
//concatination in js
let name = "Hari"
let friend = "Kushal"
console.log(name.concat(" is a friend of ", friend, " Ok"))
// trim in js
let friend2 = "         Meena       " 
console.log(friend2.trim())

//strings are immutable
let fr = "Hari" + " Kushal" + " ram"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4]='o'// This is not possible to replace or change
console.log(fr)


