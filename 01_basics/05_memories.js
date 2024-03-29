// Stack Memory And Heap Memory
// Stack Memory is used in Primitive Datatype => whenever stack memory is used i.e. the variable we had declared , we get a copy of that.
// Heap Memory is used in Non-Primitive / Reference Datatype => Whenever a memory is defined in heap memory we get a reference(original value) of it.

let myName = "Tanvi"
let anotherName = myName
anotherName= "Pari"
console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "tanvi@google.com"

console.log(userOne.email)
console.log(userTwo.email)