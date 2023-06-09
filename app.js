
const screen = document.querySelector('.screen');
const buttonNodeList = document.querySelectorAll('button');

let expression = {
  a: '',
  operator: '', 
  b: '',
  evaluated: false,
}

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (a / b == 'Infinity' || a / b == '-Infinity') {
    return 'Error';
  }
  return a / b;
}

const operate = (expression) => {
  let a = parseFloat(expression.a)
  let b = parseFloat(expression.b)
  let result;
  if (expression.operator == '+') { 
    result = sum(a, b);
  } 
  else if (expression.operator == '-') {
    result = subtract(a, b);
  }
  else if (expression.operator == '*') {
    result = multiply(a, b);
  }
  else if (expression.operator == '/') {
    result = divide(a, b);
  }
  result = result || 0;
  if (result != 'Error') {
    if (result % 1 != 0) {
      return parseFloat(result.toFixed(4));
    }
  }
  return result;
};

buttonNodeList.forEach(item => {
  window.addEventListener('keydown', (e) => {
    handleKeyboard(e.key, item);
  })
  item.addEventListener('click', (e) => {
    handleClick(e.target.value, item);
  })
})


const updateDisplay = () => {
  screen.textContent = expression.a + expression.operator + expression.b;
};

const clearAll = () => {
  expression = {
    a: '',
    operator: '', 
    b: '',
    evaluated: false,
  }
};

const checkError = () => {
  expression.a == 'Error' ? clearAll() : null;
};

const removeLastDigit = (n) => {
  return n.slice(0, n.length - 1);
};

const handleBackspace = () => {
  if (!expression.operator){
    expression.a = removeLastDigit(expression.a);
  } else if (!expression.b) {
    expression.operator = removeLastDigit(expression.operator);
  } else {
    expression.b = removeLastDigit(expression.b);
  };
};

const handleNumbers = (value, expressionTerm) => {
  if (expression.a == '0') {
   return expression.a = ''}
  if (expression.b == '0') {
    return expression.b = '0'}
  else {
      return expressionTerm += value;
   }
}

const handleOperators = (value) => {
  if (!expression.a) {
    return ;
  }
  else {
    if (!expression.operator) {
      expression.evaluated = false;
    }
    else {
      if (!expression.b) {
        expression.operator = value;
      }
      else {
        expression.a = operate(expression).toString();
        expression.b = '';
      }
    }
    if (expression.a == 'Error') {
      expression.operator = '';
    }
    else {
      expression.operator = value;
    }
  }
}

const handleDecimalPoint = (expressionTerm) => {
  if (expressionTerm[expressionTerm.length - 1] == '.') {
    return expressionTerm = removeLastDigit(expressionTerm);
  }
  else if (!expressionTerm) {
    return expressionTerm = '0.';
  }
  else {
    if (!expressionTerm.includes('.')) {
      return expressionTerm += '.';
    }
    else {
      return expressionTerm;
    };
  };
};

const handleEquals = () => {
  if (!expression.b) {
    return ;
  }
  else {
    expression.a = operate(expression).toString();
    expression.operator = '';
    expression.b = '';
    expression.evaluated = true;
  }
}

const handleKeyboard = (key, item) =>{
  if (key == 'c') {
    if (item.value == 'c') {
      item.click();
    }
  }
  else if (key == "Backspace"){
    if (item.value == "<="){
      item.click();
    }
  }
  else if (key == 'Enter') {
    if (item.value == '=') {
      item.click();
    }
  }
  else {
    if (key == item.value) {
      item.click();
    }
  }
};

const handleClick = (value) => {
    checkError();
    if (value == 'c') {
      clearAll();
    }
    else if (['+', '-', '*', '/'].includes(value)) {
      handleOperators(value);
    }
    else if( value == '='){
      handleEquals();
    }
    else if( value == '<='){
      handleBackspace();
    }
    else if (value == '.') {
      if (!expression.operator) {
        if (expression.evaluated == true) {
          if (!expression.a.includes('.')) {
            expression.evaluated = false;
          }
        }
        expression.a = handleDecimalPoint(expression.a);
      }
      else {
        expression.b = handleDecimalPoint(expression.b);
      }
    }
    else {
      if (expression.evaluated == true) {
        clearAll();
      }
      if (!expression.operator) {
        expression.a = handleNumbers(value, expression.a);
      }
      else {
        expression.b = handleNumbers(value, expression.b);
      }
    }
    updateDisplay();
  }


const lightMode = document.getElementById('sun-icon')
const background = document.querySelector('main')
const calculatorBody = document.querySelector('.container')
const calculatorScreen = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
const operand = document.querySelectorAll('.operand')
const operator = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const topButtons = document.querySelector('.top-buttons')

lightMode.addEventListener('click',() => {
  operand.forEach(item => {
    item.classList.toggle('operand-light');
  })
  background.classList.toggle('background-light');
  calculatorBody.classList.toggle('container-light');
  calculatorScreen.classList.toggle('display-light');
  buttons.forEach(item => {
    item.classList.toggle('button-light');
  })
  operator.forEach(item => {
    item.classList.toggle('operator-light');
  })
  clear.classList.toggle('clear-light');
  lightMode.classList.toggle('fa-moon');
  topButtons.classList.toggle('top-buttons-light');
})

