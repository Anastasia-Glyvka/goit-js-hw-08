import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

form.addEventListener('input', throttle(onTextArea, 500));
form.addEventListener('submit', onSubmit);

populateTextarea();

function onSubmit(evt) {
  evt.preventDefault(evt.currentTarget);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onTextArea(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// function populateTextarea(evt) {
//   const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (savedData) {

//   }
// }
