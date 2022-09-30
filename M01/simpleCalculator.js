//Simple Calculator
// console.log(parseInt("25") + 10);
// console.log("25" + 10);

//Declare 3 variables: (1) Operator, (2) Number 1 and (3) Number 2, that will prompt users to input.
let operator = prompt("Enter the operator (+, -, *, or /)");
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

// Create a script where it will check whether the operator is either only:  +, -, *, or /
// Lastly, display the complete equation in the console.
if (operator == "+") {
  let result = num1 + num2;
  console.log(`${num1} ${operator} ${num2} = ${result}`);
} else if (operator == "-") {
  let result = num1 - num2;
  console.log(`${num1} ${operator} ${num2} = ${result}`);
} else if (operator == "*") {
  let result = num1 * num2;
  console.log(`${num1} ${operator} ${num2} = ${result}`);
} else if (operator == "/") {
  let result = num1 / num2;
  console.log(`${num1} ${operator} ${num2} = ${result}`);
} else {
  // If not any of the four then display “Invalid Operator!”
  let result = "Invalid Operator!";
  console.log(`${num1} ${operator} ${num2} = ${result}`);
}