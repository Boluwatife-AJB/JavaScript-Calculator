const calculator = document.getElementById('calculator');
const keys = document.querySelector('.calculator--keys');
const display = document.getElementById('screen');

keys.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;
    const calculate = (n1, operator, n2) => {
      let result = '';

      if (operator === 'add') {
        result = n1 + n2;
      } else if (operator === 'subtract') {
        result = n1 - n2;
      } else if (operator === 'multiply') {
        result = n1 * n2;
      } else if (operator === 'divide') {
        result = n1 / n2;
      }

      return result;
    };
    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove('is-depressed')
    );
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide' ||
      action === 'modulus'
    ) {
      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    } else if (action === 'clear') {
      console.log('clear key');
    } else if (action === 'decimal') {
      display.textContent = displayedNum + '.';
    } else if (action === 'delete') {
      console.log('delete key');
    } else if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
    } else if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
  }
});
