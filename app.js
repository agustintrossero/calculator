
const current = document.querySelector('.screen');
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
    //console.log(e.key, item);
  })
  item.addEventListener('click', (e) => {
    handleClick(e.target.value, item);
  })
})

const updateDisplay = () => {
  current.textContent = expression.a + expression.operator + expression.b;
};

const clearAll = () => {
  expression = {
    a: '',
    operator: '', 
    b: '',
    evaluated: false,
  }
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
  return expressionTerm += value;
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

const handleClick = (value) => {
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

