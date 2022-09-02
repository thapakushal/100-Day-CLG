num.forEach(element => { // multiply each element 
    console.log(element*element)
});

// Array.from-- used to create an array from any other object (it also returns html collection )
let name = "Kushal"
let arr =  Array.from(name)
console.log(arr)