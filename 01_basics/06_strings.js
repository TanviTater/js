const name = "Tanvi"
const repoCount = 3

//console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Tanvi-ABC-XYZ')

console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('v'))

const newString = gameName.substring(0,5)  // last number i.e 5 index wala character include nhi hoga  , it cant take -ve values
console.log(newString);

const anotherString = gameName.slice(-9,5)  // can take -ve as well as +ve values
console.log(anotherString)

const newString1 = "    tanvi    "
console.log(newString1)
console.log(newString1.trim())

const url = "https://tanvi.com/tanvi%20tater"
console.log(url.replace('%20','-'))

console.log(url.includes('tanvi'))
console.log(url.includes('pari'))

console.log(gameName.split('-'))