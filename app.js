let expressions = {
    number1: '',
    number2: '',
    operator: ''
}

const add = (number1, number2)=> number1 + number2
const substract = (number1, number2)=> number1 - number2
const multiply = (number1, number2)=> number1 * number2
const divide = (number1, number2)=> number2 === 0? "Cannot divide by zero" : number1 / number2

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