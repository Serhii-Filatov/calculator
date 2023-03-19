import { createComponent } from './components/createComponent.js';
import { calculate, clearAll } from './services/calculatorService.js';

const renderApp = () => {
  const calc = document.querySelector('.calc');

  const calcScreen = createComponent({
    tagName: 'div',
    className: 'calc-screen',
    parentNode: calc,
  });

  createComponent({
    tagName: 'span',
    value: '0',
    parentNode: calcScreen,
  });

  const buttonsBlock = createComponent({
    tagName: 'div',
    className: 'buttons',
    parentNode: calc,
    onClick: calculate,
  });

  const buttons = [
    { name: 'ac', class: 'ac bg-grey' },
    { name: '+/-', class: 'plus-minus bg-grey' },
    { name: '%', class: 'percent bg-grey' },
    { name: '/', class: 'percent bg-grey' },
    { name: '7', class: 'seven' },
    { name: '8', class: 'eigth' },
    { name: '9', class: 'nine' },
    { name: '*', class: 'myltiply bg-orange' },
    { name: '4', class: 'four' },
    { name: '5', class: 'five' },
    { name: '6', class: 'six' },
    { name: '-', class: 'minus bg-orange' },
    { name: '1', class: 'one' },
    { name: '2', class: 'two' },
    { name: '3', class: 'three' },
    { name: '+', class: 'plus bg-orange' },
    { name: '0', class: 'zero' },
    { name: '.', class: 'dot' },
    { name: '=', class: 'equal bg-orange' },
  ];

  const numericBtn = document.createDocumentFragment();

  buttons.forEach((button) => {
    createComponent({
      tagName: 'div',
      value: button.name,
      className: `btn  ${button.class}`,
      parentNode: numericBtn,
      ...(button.name === 'ac' ? { onClick: clearAll } : {}),
    });
  });

  buttonsBlock.append(numericBtn);
};

export { renderApp };
