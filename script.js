let firstOperator;
let operation;
let secondOperator;


function add(a, b) {
  return a + b;
}

function subtrack(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, c) {

  switch (b) {
    case '+':
      add(a, b);
      break;

    case '-':
      subtrack(a, b);
      break;

    case '*':
      multiply(a, b);
      break;

    case '/':
      divide(a, b);
      break;
  }

}

