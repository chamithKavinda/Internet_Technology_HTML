let student = {}
console.log("Student : " , student)
console.log("Type of Student : " , typeof student)

student={
    firstName : "Chamith",
    lastName : "Kavinda",
    email : "chamith13kavinda@gmail.com",
    phoneNumber : "0762106834",
    age : 24,
    isRegistered : false
}

console.log("student : " , student)
console.log("student email (using dot notation) : " , student.email)
console.log("student email (using square brackets notation) : " , student['email'])

//assigning values using dot notation
student.age = 20;
console.log("Student age : " , student.age)
console.log("Student : ", student )

let student1 = {}

console.log("Students :",student1);
console.log("Type of student", typeof student1);

student={
    firstName: "Kamal",
    lastName: "Perera",
    email: "hello@gmail.com",
    phoneNumber: "0779909923",
    age : 17,
    isRegisted:true
}

console.log("Student: " ,student);
console.log("Student Email using dot notation: ", student.email);
console.log("Student Email using  square bracket notation: ", student["email"]);

//Assigning values using dot notaion

student.age = 30;

console.log("Student age: ",student.age);
console.log("Student age: ", student);

console.log('=================================')
// let person = {
//     name:'kamal',
//     age:20,
//     greet:()=>{
//         console.log('hey')
//     }
// }

// console.log(person.greet())

let person = {
    name:'kamal',
    age:20,
    greet:()=>{
        console.log('hey')
    }
}

console.log(person.greet())
console.log('===================')

//Iterating over properties

for(let key in person){
    console.log(key + ':' + person[key])
}

console.log(person.age)






