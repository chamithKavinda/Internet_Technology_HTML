var number= undefined
console.log(number)
var number = 100

// ======= variable hoisting with var keyword ======

// console.log(number)
// var number = 100
// With var, variable declarations are hoisted to the top of their containing function
// or global scope, which means you can access the variable before it's declared without
//  causing an error, although its value will be undefined until it's assigned.

// ======= variable hoisting with let keyword ======

// console.log(firstName)
// let firstName = 'Kamal'

// ======= variable hoisting with const keyword ======

// console.log(lastName)
// const lastName = 'Perera'

// On the other hand, let and const declarations are hoisted to the top of their
// containing block(e.g., a loop or an if statement), but they are not initialized.
// This means that trying to access them before the actual declaration in the code will
// result in a ReferenceError.
