const displayItem = document.querySelector('.output');

let firstOperator = ``;
let operation = ``;
let secondOperator = ``;

let total;
let isNegative = false


function addButnAction() {
  let butns = document.querySelectorAll('button');

  for(let i = 0; i < butns.length; i++) {
    let currentButn = butns[i];
    let butnValue = currentButn.textContent;
    currentButn.addEventListener('click', () => {
      handleButnSelection(butnValue);
    });
  }
}

function handleButnSelection(val) {
  switch (val) {

    case 'C':
      clearSelected();
      break;
    
    case '+/-':
      toggleSign();
      break;

    case '%':
      operation = '%'
      break;

    case '/':
      operation = '/'
      break;

    case 'X':
      operation = '*'
      break;
    
    case '-':
      operation = '-'
      break;

    case '+':
      operation = '+'
      break;

    case '=':
      equalSelected();
      break;

    default:
      numberSelected(val);
      break;
  }

}

function toggleSign() {
  if (isNegative) {
    isNegative = false;
    if (operation === '') {
      firstOperator = firstOperator.slice(1, firstOperator.length);
      displayItem.textContent = firstOperator;
    } else {
      secondOperator = secondOperator.slice(1, secondOperator.length);
      displayItem.textContent = secondOperator;
    } 
  } else {
    isNegative = true;
    if (operation === '') {
      firstOperator = '-' + firstOperator;
      displayItem.textContent = firstOperator;
    } else {
      secondOperator = '-' + secondOperator;
      displayItem.textContent = secondOperator;
    }
  }
}

function clearSelected() {
  displayItem.textContent = ``;
  firstOperator = ``;
  secondOperator = ``;
  operation = ``;
}


function numberSelected(val) {
  if (operation === ``) {
    if (val === '.') {
      if (!firstOperator.includes('.')) {
        firstOperator += val;
        displayItem.textContent = firstOperator;
      }
    } else {
      firstOperator += val;
      displayItem.textContent = firstOperator;
    }
  } else {
    if (val === '.') {
      if (!secondOperator.includes('.')) {
        secondOperator += val;
        displayItem.textContent = secondOperator;
      }
    } else {
      secondOperator += val;
      displayItem.textContent = secondOperator;
    }
  }
}

function equalSelected() {
  switch (operation) {

    case '+':
      total = Number(firstOperator) + Number(secondOperator);
      total = total.toFixed(5)
      displayItem.textContent = `${total}`;
      firstOperator = `${total}`;
      secondOperator = '';
      operation = '';
      break;

    case '-':
      total = Number(firstOperator) - Number(secondOperator);
      total = total.toFixed(5)
      displayItem.textContent = `${total}`;
      firstOperator = `${total}`;
      secondOperator = ``;
      operation = ``;
      break;

    case '/':
      total = Number(firstOperator) / Number(secondOperator);
      total = total.toFixed(5)
      displayItem.textContent = `${total}`;
      firstOperator = `${total}`;
      secondOperator = ``;
      operation = ``;
      break;

    case '*':
      total = Number(firstOperator) * Number(secondOperator);
      total = total.toFixed(5)
      displayItem.textContent = `${total}`;
      firstOperator = `${total}`;
      secondOperator = ``;
      operation = ``;
      break;
         
    case '%':
      total = Number(firstOperator) % Number(secondOperator);
      total = total.toFixed(5)
      displayItem.textContent = `${total}`;
      firstOperator = `${total}`;
      secondOperator = ``;
      operation = ``;
      break;
  
    default:
      break;
  }
}

addButnAction()


