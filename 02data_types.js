// JavaScript data types

// Primitive data types
const stringValue = "Hello, JavaScript"; // String
const numberValue = 42; // Number
const bigintValue = 9007199254740991n; // BigInt
const booleanValue = true; // Boolean
const undefinedValue = undefined; // Undefined
const nullValue = null; // Null
const symbolValue = Symbol("id"); // Symbol

console.log(stringValue);
console.log(numberValue);
console.log(bigintValue);
console.log(booleanValue);
console.log(undefinedValue);
console.log(nullValue);
console.log(symbolValue);

// Non-primitive (reference) data types
const objectValue = { name: "Pawan", age: 25 }; // Object
const arrayValue = ["JavaScript", "Python", "Java"]; // Array
const functionValue = function greet(name) { // Function
	return `Hello, ${name}!`;
};
const dateValue = new Date(); // Date object
const regexValue = /javascript/i; // Regular expression object

console.log(objectValue);
console.log(arrayValue);
console.log(functionValue("World"));
console.log(dateValue);
console.log(regexValue.test("JavaScript"));

// Check the type of a value
console.log(typeof stringValue); // "string"
console.log(typeof numberValue); // "number"
console.log(typeof bigintValue); // "bigint"
console.log(typeof booleanValue); // "boolean"
console.log(typeof undefinedValue); // "undefined"
console.log(typeof nullValue); // "object" (historic JavaScript behavior)
console.log(typeof symbolValue); // "symbol"
console.log(typeof objectValue); // "object"
console.log(typeof functionValue); // "function"
