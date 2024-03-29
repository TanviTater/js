// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2">1)
// console.log("02">1)

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)
//The reason is that an equility check == and comparision ><>=<= work differently
//Comparision convert null to a number , treating it as 0,that is why nul >= 0 is true and null > 0 is false

// console.log(undefined > 0)
// console.log(undefined == 0)
// console.log(undefined >= 0)

// null and undefined or different datatypes comparision is usually avoided

/** Strict Check === **/ 
// strict check checks even the datatypes
console.log("2" === 2)