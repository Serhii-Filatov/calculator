import { outComponent } from './components/outComponent.js';
import { buttonsComponent } from './components/buttonsComponet.js';

const renderApp = () => {
  const calc = document.querySelector('.calc');

  outComponent(calc);

  buttonsComponent(calc);
};

export { renderApp };
