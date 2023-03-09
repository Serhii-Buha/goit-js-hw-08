import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const stateKey = 'feedback-form-state';

// Создать функцию для сохранения данных формы в локальное хранилище
const saveFormData = () => {
  // Создать объект с полями email и message
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  // Преобразовать объект в строку JSON и сохранить ее в локальное хранилище под заданным ключом
  localStorage.setItem(stateKey, JSON.stringify(state));
};

// Добавить обработчик события input на форму с функцией throttle и задержкой в 500 миллисекунд
form.addEventListener('input', throttle(saveFormData, 500));

// Добавить обработчик события load на окно браузера
window.addEventListener('load', () => {
  // Получить строку из локального хранилища по заданному ключу и преобразовать ее в объект
  const state = JSON.parse(localStorage.getItem(stateKey));
  // Если объект не пустой, заполнить поля формы значениями из объекта
  if (state) {
    // Использовать деструктуризацию объекта для получения значений email и message
    const { email, message } = state;
    // Присвоить значения полям формы
    emailInput.value = email;
    messageInput.value = message;
  }
});

// Добавить обработчик события submit на форму
form.addEventListener('submit', event => {
  // Отменить действие по умолчанию (отправку данных на сервер)
  event.preventDefault();
  // Создать объект с полями email и message из значений полей формы
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  // Вывести объект в консоль
  console.log(state);
  // Очистить локальное хранилище по заданному ключу
  localStorage.removeItem(stateKey);
  // Очистить поля формы методом reset
  form.reset();
});

//v2

// form.addEventListener(
//   'input',
//   throttle(() => {
//     const state = {
//       email: emailInput.value,
//       message: messageInput.value,
//     };
//     localStorage.setItem(stateKey, JSON.stringify(state));
//   }, 500)
// );

// window.addEventListener('load', () => {
//   const state = JSON.parse(localStorage.getItem(stateKey));
//   if (state) {
//     emailInput.value = state.email;
//     messageInput.value = state.message;
//   }
// });

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const state = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   console.log(state);
//   localStorage.removeItem(stateKey);
//   emailInput.value = '';
//   messageInput.value = '';
//   //   form.reset();
// });
