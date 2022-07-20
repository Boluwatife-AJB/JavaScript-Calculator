const calculator = document.getElementById('calculator');
const keys = document.querySelector('.calculator--keys');
const display = document.getElementById('screen');

// TEST POINT

const arrofNum = [1, 2, 3];

const arrofStr = arrofNum.map((num) => {
  return String(num);
});

console.log(arrofStr);

arrofStr.join('');

const clicked = function (x) {
  if (x.target.matches('button')) {
    const key = x.target;
    const keyContent = key.textContent;
    const action = key.dataset.action;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;
    // console.log(`${keyContent} was pressed!`);
    // console.log((display.textContent = keyContent));
    // console.log(calculator.dataset.previousKeyType);

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'modulus' ||
      action === 'divide'
    ) {
      console.log(`operator key`);
    } else if (action === 'decimal') {
      console.log(`decimal key`);
    } else if (action === 'calculate') {
      console.log(`calculate key`);
    } else if (action === 'clear') {
      console.log(`Clear key`);
    } else if (action === 'delete') {
      console.log(`delete key`);
    } else if (!action) {
      // console.log('number key');
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
        input = display.textContent;
        let inputArrStr = [...display.textContent.split('')];
        const inputArrNum = [].slice(0, 10);
        inputArrStr.forEach((str) => {
          inputArrNum.push(Number(str));
        });
        // console.log(inputArrNum);

        if (inputArrNum.length >= 10) {
          maxInput = inputArrNum.slice(0, 10);
          console.log(maxInput, 'maximum length reached!');
          inputArrStr = arrofNum.map((num) => {
            const arrJoined = inputArrStr.join('');
            display.textContent = arrJoined;
          });
        } else {
          console.log(`Input size remains ${10 - inputArrNum.length} numbers`);
        }
      }
    }
  }
};

keys.addEventListener('click', clicked);

// keys.addEventListener('click', (e) => {
//   if (e.target.matches('button')) {
//     const key = e.target;
//     const action = key.dataset.action;
//     const keyContent = key.textContent;
//     const displayedNum = display.textContent;
//     const previousKeyType = calculator.dataset.previousKeyType;
//     const calculate = (n1, operator, n2) => {
//       let result = '';

//       if (operator === 'add') {
//         result = parseFloat(n1) + parseFloat(n2);
//       } else if (operator === 'subtract') {
//         result = parseFloat(n1) - parseFloat(n2);
//       } else if (operator === 'multiply') {
//         result = parseFloat(n1) * parseFloat(n2);
//       } else if (operator === 'divide') {
//         result = parseFloat(n1) / parseFloat(n2);
//       } else if (operator === 'modulus') {
//         result = parseFloat(n1) % parseFloat(n2);
//       }
//       // console.log(result);
//       return result;
//     };

//     // console.log(calculate(2, 'add', 2));
//     Array.from(key.parentNode.children).forEach((k) =>
//       k.classList.remove('is-depressed')
//     );
//     if (
//       action === 'add' ||
//       action === 'subtract' ||
//       action === 'multiply' ||
//       action === 'divide' ||
//       action === 'modulus'
//     ) {
//       const firstValue = calculator.dataset.firstValue;
//       const operator = calculator.dataset.operator;
//       const secondValue = displayedNum;

//       // Note: It's sufficient to check for firstValue and operator because secondValue always exists
//       if (firstValue && operator) {
//         display.textContent = calculate(firstValue, operator, secondValue);
//       }

//       key.classList.add('is-depressed');
//       calculator.dataset.previousKeyType = 'operator';
//       calculator.dataset.firstValue = displayedNum;
//       calculator.dataset.operator = action;
//     } else if (action === 'clear') {
//       console.log('clear key');
//       calculator.dataset.previousKeyType = 'clear';
//     } else if (action === 'decimal') {
//       if (!displayedNum.includes('.')) {
//         display.textContent = displayedNum + '.';
//       } else if (previousKeyType === 'operator') {
//         display.textContent = '0.';
//       }
//       calculator.dataset.previousKey = 'decimal';
//     } else if (action === 'delete') {
//       console.log('delete key');
//     } else if (action === 'calculate') {
//       const firstValue = calculator.dataset.firstValue;
//       const operator = calculator.dataset.operator;
//       const secondValue = displayedNum;

//       display.textContent = calculate(firstValue, operator, secondValue);
//       calculator.dataset.previousKeyType = 'calculate';
//     } else if (!action) {
//       if (displayedNum === '0' || previousKeyType === 'operator') {
//         display.textContent = keyContent;
//       } else {
//         display.textContent = displayedNum + keyContent;
//       }
//       calculator.dataset.previousKey = 'number';
//     }
//   }
// });
