//basic function declaration witoout parameters

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

//Basic function declaration with parameters

function sayHello(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
    return firstName + " " + lastName;
}

sayHello("Kamal");
sayHello();
sayHello("Perera", "Kamal");
sayHello(1,2)

let returnValue = sayHello("Perera", "Kamal");
console.log("Return value: ", returnValue);