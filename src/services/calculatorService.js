import { state, setOutput, setState } from '../store/calculatorStore.js';
import { isEmpty, isZero, isEqualOperation } from '../utils/helpers.js';

const PERCENT = 0.01;
const REVERS = 2;
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const actions = ['-', '+', '*', '/', '+/-', '%'];
const clearArg = {
  firstNumber: '',
  secondNumber: '',
  operation: '',
  isFinished: false,
};

export const clearAll = () => {
  setState(clearArg);
  setOutput('0');
};

export const calculate = (event) => {
  // нажата не кнопка
  if (!event.target.classList.contains('btn')) return;
  //  нажата кнопка clearAll ac
  if (event.target.classList.contains('ac')) return;

  // Получаю нажатую кнопку
  const key = event.target.textContent;
  // если нажата кнопка 0-9 или .
  if (digits.includes(key)) {
    if (isEmpty(state.secondNumber) && isEmpty(state.operation)) {
      setState({ firstNumber: state.firstNumber + key });
      setOutput(state.firstNumber);
    } else if (!isEmpty(state.firstNumber) && !isEmpty(state.secondNumber) && state.isFinished) {
      setState({ secondNumber: key, isFinished: false });
      setOutput(state.secondNumber);
    } else {
      setState({ secondNumber: state.secondNumber + key });
      setOutput(state.secondNumber);
    }
    return;
  }

  // если нажата кнопка + - / *
  if (actions.includes(key)) {
    setState({ operation: key });
    setOutput(state.operation);
  }

  // нажато =
  if (isEqualOperation(key)) {
    if (isEmpty(state.secondNumber)) {
      state.secondNumber = state.firstNumber;
    }
    switch (state.operation) {
      case '+':
        state.firstNumber = +state.firstNumber + +state.secondNumber;
        break;
      case '-':
        state.firstNumber -= state.secondNumber;
        break;
      case '*':
        state.firstNumber *= state.secondNumber;
        break;
      case '/':
        if (isZero(state.secondNumber)) {
          setOutput('Ошибка!');
          setState(clearArg);
          return;
        }
        state.firstNumber /= state.secondNumber;
        break;
      case '+/-':
        state.firstNumber -= (state.firstNumber * REVERS);
        break;
      case '%':
        state.firstNumber *= PERCENT;
        break;
      default:
        break;
    }
    setState({ isFinished: true });
    setOutput(state.firstNumber);
  }
};
