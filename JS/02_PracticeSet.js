// create a variable of the string and try to add a number to it
let a = "Kushal"
let b = "3"
console.log(a + b)

// using type of operator to find the datatype of the string 
console.log(typeof (a + b))

// Create a const object in javascript . can you change it to hold a number later?--no
const a1 = {
    name: "kushal",
    section: 1,
    isPrincipal: false
}
// try to add a new ray to the const object in problem 3 were you able to do it?
a1['friend'] = "Gita"
a1['name'] = "Sundar"
// a1=34
console.log(a1)

// js program to create a word meaning dictionar of 4 words
const dict = {
    galvanize: "verb (used with object). to startle into sudden activity",
    liberation: "noun. the act or fact of gaining equal rights or full social or economic opportunities for a particular group.",
    suffrage: "noun. the right to vote, especially in a political election.",
    borborygmus: "noun. a rumbling or gurgling sound caused by the movement of gas in the intestines.",
}
console.log(dict.galvanize)