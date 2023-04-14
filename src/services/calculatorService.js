import {
  ERROR_TEXT, PERCENTAGE, REVERS, digits, actions,
} from '../utils/constants.js';
import {
  state, defaultState, setOutput, setState,
} from '../store/calculatorStore.js';
import { isEmpty, isZero, isEqualOperation } from '../utils/helpers.js';

export const clearAll = () => {
  setState(defaultState);
  setOutput(defaultState.out);
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
  if (Object.values(actions).includes(key)) {
    setState({ operation: key });
    setOutput(state.operation);
  }

  // нажато =
  if (isEqualOperation(key)) {
    if (isEmpty(state.secondNumber)) {
      setState({ secondNumber: state.firstNumber });
    }
    switch (state.operation) {
      case actions.PLUS:
        setState({ firstNumber: (Number(state.firstNumber) + Number(state.secondNumber)) });
        break;
      case actions.MINUS:
        setState({ firstNumber: (state.firstNumber - state.secondNumber) });
        break;
      case actions.MULTIPLE:
        setState({ firstNumber: (state.firstNumber * state.secondNumber) });
        break;
      case actions.DIVIDE:
        if (isZero(state.secondNumber)) {
          setOutput(ERROR_TEXT);
          setState(defaultState);
          return;
        }
        setState({ firstNumber: (state.firstNumber / state.secondNumber) });
        break;
      case actions.PLUS_MINUS:
        setState({ firstNumber: state.firstNumber - (state.firstNumber * REVERS) });
        break;
      case actions.PERCENT:
        setState({ firstNumber: state.firstNumber * PERCENTAGE });
        break;
      default:
        break;
    }
    setState({ isFinished: true });
    setOutput(state.firstNumber);
  }
};
