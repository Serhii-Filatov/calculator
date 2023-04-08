const observers = [];
const notify = () => {
  observers.forEach((observer) => {
    observer.update();
  });
};

export const state = { out: '0' };
export const setOutput = (out) => {
  state.out = out;
  notify();
};

export const subcribe = (observer) => {
  observers.push(observer);
};
