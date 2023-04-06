// import { outComponent } from '../components/outComponent.js';
export const state = { out: '0' };
export const setOutput = (out) => {
  state.out = out;

  // UNDONE Избавиться от строк ниже с помощью паттерна наблюдатель
  const output = document.querySelector('.calc-screen span');
  output.textContent = state.out;
};
// Функция, которая создает наблюдаемый объект
// const createObservable = () => {
// наблюдатели
//   const observers = [];

//   return {
// Добавить наблюдателя
//     addObserver(observer) {
// Добавить наблюдателя в массив наблюдателей
//       observers.push(observer);
//     },
//     notify(data) {
//       observers.forEach((observer) => observer(data));
//     },
//   };
// };

// Функция, которая создает наблюдателя
// const createObserver = (observable, observerFn) => {
//   observable.addObserver(observerFn);
// };

// Создаем наблюдаемый объект
// const observable = createObservable();

// Создаем наблюдателей и подписываем их на наблюдаемый объект
// const observer1 = createObserver(observable, (data) => {
//   console.log(`Observer1: получены данные - ${data}`);
// });

// Оповещаем наблюдателей об изменении состояния
// observable.notify(setOutput(8));
// observable.notify(setOutput(12));

/*
Обзервер(собскрайбер Подписчик) и есть твой компонет а стор это обзервебл(Издатель)
по факту тебе надо 2 функции в сторе
subscribe() - (Подписаться)
notify() - (Уведомить)
дальше ты их экспортируешь
подписываешься твоим subscribe(outComponent)
только внутри него. Там должен быть метод на обновление out.textContent
*/
