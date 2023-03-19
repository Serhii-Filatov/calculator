import { state } from '../store/calculatorStore.js';
import { createComponent } from './createComponent.js';

export const outComponent = (parentNode) => {
  const calcScreen = createComponent({
    tagName: 'div',
    className: 'calc-screen',
    parentNode,
  });

  createComponent({
    tagName: 'span',
    value: state.out,
    parentNode: calcScreen,
  });
};
