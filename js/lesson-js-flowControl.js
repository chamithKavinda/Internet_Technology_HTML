let number1 = 0;

if (number1 > 0) {
    console.log("Number is positive");
}else if (number1 < 0) {
    console.log("Number is negative");
}else {
    console.log("Number is zero");
}

//If statement

let number = 0;

if (number > 0) {
  console.log("Number is positive");
} else if (number < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

//Switch statement

let dayOfWeek = 1;

switch (dayOfWeek) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
  case 3:
    console.log("Tuesday");
  case 4:
    console.log("Wednesday");
  case 5:
    console.log("Thursday");
  case 6:
    console.log("Friday");
  case 7:
    console.log("Saturday");
  default:
    console.log("Invalid date");
    break;
}


//===========Loops=========

//1)For Loop

for (let i = 0; i < 5; i++) {}

//2)While loop

let j = 5;
while (j < 5) {
j++;
}

//3) Do while

let k = 6;
do {
k++;
} while (k < 6);

//=========4 Break========

for (let n = 0; n < 5; n++) {
if (n == 4) {
break;
}
console.log(n);
}

console.log();

//=========5 Continute========

for (let n = 0; n < 5; n++) {
if (n == 4) {
continue;
}
console.log(n);
}
  
  //***********IMPORTANT***********
  // == Vs ===
  
  // ==  -> only check value
  // === -> not only value is also check the data type as well
  
  let num = 5;
  
  console.log("==");
  if (num == 5) {
    console.log("Hello");
  }
  
  console.log("===");
  
  if (num === 5) {
    console.log("Hello");
  }