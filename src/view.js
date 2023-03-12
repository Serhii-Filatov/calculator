function runView() {
  const calc = document.querySelector('.calc');

  const calcScreen = document.createElement('div');
  calcScreen.className = 'calc-screen';
  calc.prepend(calcScreen);

  const output = document.createElement('p');
  output.textContent = '0';
  calcScreen.appendChild(output);

  const buttonsBlock = document.createElement('div');
  buttonsBlock.className = 'buttons';
  calc.append(buttonsBlock);

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

  // eslint-disable-next-line no-restricted-syntax
  for (const button of buttons) {
    const btn = document.createElement('div');
    btn.textContent = button.name;
    btn.className = `btn  ${button.class}`;
    numericBtn.append(btn);
  }

  buttonsBlock.append(numericBtn);
}

export { runView };
