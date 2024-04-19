function add(number1, number2) {
    return number1 + number2;
  }
  
  function subtract(number1, number2) {
    return number1 - number2;
  }
  
  function multiply(number1, number2) {
    return number1 * number2;
  }
  
  function divide(number1, number2) {
    return number1 / number2;
  }
  
  function calculate(number1, number2, operator) {
    switch (operator) {
      case "+":
        return add(number1, number2);
      case "-":
        return subtract(number1, number2);
      case "*":
        return multiply(number1, number2);
      case "/":
        return divide(number1, number2);
      default:
        return "Invalid Operator";
    }
  }
  
  console.log("Addition: ", calculate(10, 5, "+"));
  console.log("Subtraction: ", calculate(10, 5, "-"));
  console.log("Multiplication: ", calculate(10, 5, "*"));
  console.log("Division: ", calculate(10, 5, "/"));