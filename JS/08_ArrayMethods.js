// Array methods

let num = [1,2,3,34,4]
let b = num.toString()// b is now a string -- first array method
console.log(b, typeof b)// type of-- string

// Second method--- join() 
let c = num.join("_")
console.log(c)

// thrid method --- pop()
let k = num.pop()
console.log(num,k)// in this r returns the value 

// let r = num.pop()// pop returns the popped element
// console.log(num)

// push method
let r = num.push(56)// pop returns the popped element
console.log(num,r)

// Shift method --- remove first element and returns it
let g = num.shift()
console.log(g, num)

// unshift method--- adds element to the ebginining returns ne warray length
let z = num.unshift(78)
console.log(z, num)
// delete --- array element can be deleted using the delete operator
delete num[1]
console.log(num)


