
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
    console.log(e.key, item);
  })
  item.addEventListener('click', (e) => {
    console.log(e.target.value, item);
  })
})

const updateDisplay = () => {
  current.textContent = expression.a + expression.operator + expression.b;
};

