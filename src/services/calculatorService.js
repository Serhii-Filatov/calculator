import { setOutput } from '../store/calculatorStore.js';

let firstNumber = '';
let secondNumber = '';
let operation = '';
let isFinished = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const actions = ['-', '+', '*', '/', '+/-', '%'];

// screen

// Логика
const clearAll = () => {
  firstNumber = '';
  secondNumber = '';
  operation = '';
  isFinished = false;
  setOutput(0);
};

const calculate = (event) => {
  // нажата не кнопка
  if (!event.target.classList.contains('btn')) return;
  //  нажата кнопка clearAll ac
  if (event.target.classList.contains('ac')) return;

  // Вьюшка
  setOutput('');

  // Получаю нажатую кнопку
  const key = event.target.textContent;
  // если нажата кнопка 0-9 или .
  if (digits.includes(key)) {
    if (secondNumber === '' && operation === '') {
      firstNumber += key;
      setOutput(firstNumber);
    } else if (firstNumber !== '' && secondNumber !== '' && isFinished) {
      secondNumber = key;
      isFinished = false;
      setOutput(secondNumber);
    } else {
      secondNumber += key;
      setOutput(secondNumber);
    }
    return;
  }

  // если нажата кнопка + - / *
  if (actions.includes(key)) {
    operation = key;
    setOutput(operation);
  }

  // нажато =
  if (key === '=') {
    if (secondNumber === '') secondNumber = firstNumber;
    switch (operation) {
      case '+':
        firstNumber = +firstNumber + +secondNumber;
        break;
      case '-':
        firstNumber -= secondNumber;
        break;
      case '*':
        firstNumber *= secondNumber;
        break;
      case '/':
        if (secondNumber === '0') {
          setOutput('Ошибка!');
          firstNumber = '';
          secondNumber = '';
          operation = '';
          return;
        }
        firstNumber /= secondNumber;
        break;
      case '+/-':
        firstNumber -= (firstNumber * 2);
        break;
      case '%':
        firstNumber /= 100;
        break;
      default:
        break;
    }
    isFinished = true;
    setOutput(firstNumber);
  }
};

export { clearAll, calculate };
