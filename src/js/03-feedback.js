import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onTextArea, 500));
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
}
