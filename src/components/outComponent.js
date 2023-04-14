import { state, subscribe } from '../store/calculatorStore.js';
import { createComponent } from './createComponent.js';

export const outComponent = (parentNode) => {
  const calcScreen = createComponent({
    tagName: 'div',
    className: 'calc-screen',
    parentNode,
  });

  const out = createComponent({
    tagName: 'span',
    value: state.out,
    parentNode: calcScreen,
  });

  out.update = () => {
    out.textContent = state.out;
  };

  subscribe(out);
};
