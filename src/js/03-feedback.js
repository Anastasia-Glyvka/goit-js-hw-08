import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
const formData = {};

form.addEventListener('input', throttle(onTextArea, 500));
form.addEventListener('submit', onSubmit);

populateTextarea();

function onSubmit(evt) {
  evt.preventDefault();
  console.log(
    `email: ${form.elements.email.value}, message: ${form.elements.message.value}`
  );

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextArea(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  if (savedData) {
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
  }
}
