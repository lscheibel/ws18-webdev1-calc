/**
 * Reverse Polish Notation Calculator
 */

let arguments = process.argv.slice(2);
let [operand1, operand2, operator] = arguments;

console.log('Calculating:', operand1, operand2, operator);

let result;

switch (operator) {
  case '+':
    result = operand1 + operand2;
    break;
  case '-':
    result = operand1 - operand2;
    break;
  case '*':
    result = operand1 * operand2;
    break;
  case '/':
    result = operand1 / operand2;
    break;
  default:
    console.error('Not implemented:', operator);
}

console.log(result);
