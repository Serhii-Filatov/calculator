const observers = [];
export const defaultState = {
  out: '0',
  firstNumber: '',
  secondNumber: '',
  operation: '',
  isFinished: false,
};

export const state = { ...defaultState };

export const setState = ({
  firstNumber,
  secondNumber,
  operation,
  isFinished,
}) => {
  state.firstNumber = firstNumber ?? state.firstNumber;
  state.secondNumber = secondNumber ?? state.secondNumber;
  state.operation = operation ?? state.operation;
  state.isFinished = typeof isFinished === 'boolean' ? isFinished : state.isFinished;
};

const notify = () => {
  observers.forEach((observer) => {
    observer.update();
  });
};

export const setOutput = (out) => {
  state.out = out;
  notify();
};

export const subscribe = (observer) => {
  observers.push(observer);
};
