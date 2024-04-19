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