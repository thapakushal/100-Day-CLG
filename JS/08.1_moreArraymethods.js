const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js

// concat()--- used to join arrays to the given arrays
// hum=num
let hum = [1,2,3,4,5,6,7,8,9]
let hum_more = [11,12,13,14,15,16,17,18,19,]
let num_even_more = [211,212,213,214,215,216,217,218,219,]
let newArray = hum.concat(hum_more)
console.log(newArray)
console.log(hum, hum_more)
console.log(hum)

// // sort array method
// let num = [551,22,3,4,5,6,7,8,229]
// num.sort()
// console.log(num)


// sorted in accending order
let compare = (a, b)=>{  // this is function
    return a - b
}
let num = [551,2,3,4,5,6,7,8,229]
num.sort(compare)// we given compare function
// num.reverse() // reverses the order 
console.log(num)

// Reverse order -- reverses the element in the source array
