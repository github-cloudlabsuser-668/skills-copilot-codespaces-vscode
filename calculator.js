function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    console.log("Error! Division by zero is not allowed.");
    return null;
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the first number: ', (num1) => {
  readline.question('Enter the operator: ', (operator) => {
    readline.question('Enter the second number: ', (num2) => {
      let result;
      switch (operator) {
        case '+':
          result = add(parseFloat(num1), parseFloat(num2));
          break;
        case '-':
          result = subtract(parseFloat(num1), parseFloat(num2));
          break;
        case '*':
          result = multiply(parseFloat(num1), parseFloat(num2));
          break;
        case '/':
          result = divide(parseFloat(num1), parseFloat(num2));
          break;
        default:
          console.log("Invalid operator");
          result = null;
      }
      if (result !== null) {
        console.log(`The result is: ${result}`);
      }
      readline.close();
    });
  });
});