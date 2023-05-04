import throttle from 'lodash.throttle';

//
const form = document.querySelector('form');
const KEY = 'feedback-form-state';
let data = JSON.parse(localStorage.getItem(KEY)) ?? {};

form.addEventListener('submit', onSubmit);
form.addEventListener('input', onInput);

function onSubmit(evt) {
  evt.preventDefault();
  console.log(data);
  data = {};
  localStorage.removeItem(KEY);
  evt.currentTarget.reset();
}

(function () {
  const { email, message } = form.elements;
  email.value = data.email || '';
  message.value = data.message || '';
})();

function onInput(evt) {
  const { name, value } = evt.target;
  data[name] = value;

  localStorage.setItem(KEY, JSON.stringify(data));
}
