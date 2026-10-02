// console.log(first)

// let first ="hello"

greet()

function greet(){
    console.log("hello")
}
// JS moves variable and function *declarations* to the top of their scope during compilation. 
// `var` declarations are hoisted and initialized as `undefined`; 
// function declarations are hoisted with their body; 
// `let`/`const` are hoisted but not initialized (TDZ).temporal dead zone