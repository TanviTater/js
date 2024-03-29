// Primitive
// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

// JavaScript is dynamically typed
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // value if not entered is considerd undefined

const id = Symbol('123')
const anotherId = Symbol('123') // Symbol agar value bhi same pass karoge toh bhi uska joh result milega woh different hogi

const bigNumber = 1234567890123456789940n //BigInt
console.log(id == anotherId)

// Refernece or Non-Primitive
// Array , Objects , Functions

const heros = ["shaktima" , "naagreaj" , "doga"]  //Array
let myObj = {                                     //Object
    name: "TANVI",
    age: 20
}
const myFunction = function(){                              //Function
    console.log("Hello World")
}

console.log(typeof bigNumber)