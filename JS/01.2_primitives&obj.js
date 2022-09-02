// nn bb ss u ----7 primitive data types
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("343") + BigInt("34")
let e = "RAM"
let f = Symbol("I am groot")
let g = undefined
console.log(a,b,c,d,e,f,g)

console.log(typeof f) // used to findout the type variable

//Objects in js --non primitive data types
const item = {
    "Hustler": true,
    "Boy": false,
    "Billie": 40,
    "Flash": undefined
}
console.log(item["Hustler"])
console.log(item["Boy"])