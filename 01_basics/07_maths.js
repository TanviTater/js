console.log(Math);
console.log(Math.abs(-4)) //only -ve values changes to +ve value vice-versa is no true
console.log(Math.round(4.3))  //return the round of value
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))  // round of to the next higher number
console.log(Math.floor(4.6)) // return the number without the decimal part
console.log(Math.min(4 , 3, 6, 8)) // return the min value of the array
console.log(Math.max(4 , 3, 6, 8)) // return the max value of the array

console.log(Math.random())  // value lies b/w 0 and 1
console.log((Math.random()*10) + 1) //+ 1 to avoid the case of getting 0 i.e gettin a min of 1
console.log(Math.floor(Math.random()*10) + 1)  // to get the minimum value it is wrapped with Math.floor

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min)