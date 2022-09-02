const prompt = require("prompt-sync")({ sigint: true }) // write this code when using prompt in js

// map, filter & reduce ---- Higher order Array Methods
//Array map method-- creates a new array by performing some operation on each array element

let arr = [34, 23, 26]
let a = arr.map((element)=>{
    console.log(element)
    return element + 1  // WE created a new array using map
})
// console.log(arr) 


// for each loop -- calls a function , once for each array element 
let brr = [34, 23, 26]
let b = arr.forEach((element)=>{// we can also add more arguments--- arr.forEach(element,index,array )
    console.log(element)
    return element + 1  // WE created a new array using map
})


// Array filter method---output=[2,3,0]
let arr2 = [23, 23, 25, 2, 3,0]
let a2 = arr2.filter(
    (a)=>{
        return a<10 // only show the arguments which value is less than 10
    }
)
 console.log(a2)

// Array reduce method
let arr3 = [2, 3, 4, 5, 6, 7] // output --- 27
let newarr3 = arr3.reduce((h1, h2)=>{
    return h1+h2
  }
)
console.log(newarr3)

