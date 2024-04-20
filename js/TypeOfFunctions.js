//1.Named Functions
function addNumber(num1,num2){
    return num1 + num2
}
console.log(addNumber(10,20))

console.log("========================")

//2.Anonymous Functions
let multiplyNumbers = function(num1,num2){
   return num1 = num2
}
console.log(multiplyNumbers(10,20))

console.log("========================")

//3.Arrow Functions
let subNumbers = (num1,num2)=>{
    console.log('inside arrow functions')
    return num1 - num2
}
console.log(subNumbers(20,10))

//eka line ekak pmnk tiyenw nm use kri
let subNumbers1 = (num1,num2)=>num1 - num2
console.log(subNumbers1(20,10))


console.log("========================")

//4.Constructor Functions
function Student(name,age,email){
    this.name=name
    this.age=age
    this.email=email
}
let Student1 = new Student("Kamal",38,"Kamal@gmail.com")
console.log(Student1)

console.log("========================")

//5.CallBack Functions
function myFunction(CallBack){
    console.log(typeof CallBack)
    if(typeof CallBack === 'function'){}

    if()
   // CallBack()
   // console.log(number)
}

let person = {
    name: 'kamal',
    age: 40
}

let numbersArray = [1,2,3,4,5]
myFunction(numbersArray)

function secondFunction(){
    console.log('Second Function')
}

secondFunction()

//6.Recursive functions
// function factorial(n){
//     if(n===0){
//         return 1
//     }
//     return n = (factorial(n-1))
// }

// console.log(factorial(5))