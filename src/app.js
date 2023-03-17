const renderApp = () => {
  const calc = document.querySelector('.calc');

  const createComponent = (
    {
      tagName,
      className,
      value,
      onClick,
      parentNode,
    },
  ) => {
    if (!tagName) { throw new Error('Component should have tagName'); }
    const node = document.createElement(tagName);
    if (className) { node.className = className; }
    if (value) { node.textContent = value; }
    if (parentNode) { parentNode.append(node); }
    if (onClick) { node.onclick = onClick; }
    return node;
  };

  const calcScreen = createComponent({
    tagName: 'div',
    className: 'calc-screen',
    parentNode: calc,
  });

  const output = createComponent({
    tagName: 'span',
    value: '0',
    parentNode: calcScreen,
  });

  const buttonsBlock = createComponent({
    tagName: 'div',
    className: 'buttons',
    parentNode: calc,
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
    const btn = document.createElement('div');
    btn.textContent = button.name;
    btn.className = `btn  ${button.class}`;
    numericBtn.append(btn);
  });

  buttonsBlock.append(numericBtn);
};

export { renderApp };
