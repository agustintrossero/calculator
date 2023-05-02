
const add = (num1, num2)=> num1 + num2
const substract = (num1, num2)=> num1 - num2
const multiply = (num1, num2)=> num1 * num2
const divide = (num1, num2)=> num2 === 0? "Cannot divide by zero" : num1 / num2

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
      case 'add':
        return add(num1, num2);
        break;
      case 'subtract':
        return subtract(num1, num2);
        break;
      case 'multiply':
        return multiply(num1, num2);
        break;
      case 'divide':
        return divide(num1, num2);
    }
  }
console.log(operate('multiply',2,33))

