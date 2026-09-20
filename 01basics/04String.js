let str="pawanbhatt"



// strings methods

console.log(str.charAt(2));
console.log(str.indexOf('a'));


const newString=str.substring(0,3);
console.log(newString)

const anotherString=str.slice(0,6)// i can pass negative as well if negative exist then it traverse the string from backward
console.log(anotherString)

console.log(str.length)
const newS=str.slice(-10,6);
console.log(newS)


// slice()
// Does not modify the original array.
// Returns a new array.
// Syntax: array.slice(start, end)



let arr = [10, 20, 30, 40, 50];

console.log(arr.slice(1, 4)); // [20, 30, 40]
console.log(arr);            // [10, 20, 30, 40, 50]


// //splice()
// Modifies the original array.
// Can add, remove, or replace elements.
// Syntax: array.splice(start, deleteCount, items...)


let a = [10, 20, 30, 40, 50];

a.splice(1, 2); 
console.log(a); // [10, 40, 50]


