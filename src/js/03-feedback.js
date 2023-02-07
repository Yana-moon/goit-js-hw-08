import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(event) {
event.preventDefault();


if (input.value === '' || textarea.value === '') {
    return alert('Please fill in the empty fields');
}
localStorage.removeItem(STORAGE_KEY);
event.currentTarget.reset();
}
function onTextareaInput(event) {
const massage = {
    email: input.value,
    message: textarea.value,
};
localStorage.setItem(STORAGE_KEY, JSON.stringify(massage));
}

function populateTextarea() {
const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedMessage) {
    console.log(savedMessage);
    textarea.value = savedMessage;
    input.value = savedMessage['email'];
    textarea.value = savedMessage['message'];
}
}
