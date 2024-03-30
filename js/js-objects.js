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