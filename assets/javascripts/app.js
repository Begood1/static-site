import '../stylesheets/style.scss';
import qs from 'qs';
import axios from 'axios';
import * as config from '../../config/config.json';

const form = document.querySelector('.form');
const email = document.querySelector('.email');
const comment = document.querySelector('.comment');
const name = document.querySelector('.name');
const priority = document.querySelector('input[name="priorty"]:checked').value;
const formData = {
  Name: name.value,
  Email: email.value,
  Comment: comment.value,
  priority: priority.value,
};
// ðŸ‘† Write homework code here

const handleSubmit = e => {
  e.preventDefault();
  axios
    .post(config.site.url, qs.stringify({ 'form-name': config.form.name, ...formData }))
    .then(_ => console.log('success'))
    .catch(_ => console.log('failed'));
};

form.addEventListener('submit', handleSubmit);

// const form = document.querySelector('.form');
// const alert = document.querySelector('.alert');
// const spinner = document.querySelector('.spinner');
// const overlay = document.querySelector('.overlay');
// const name = document.querySelector('.name');
// const email = document.querySelector('.email');
// const comment = document.querySelector('.comment');

// const clearForm = () => {
//   name.value = '';
//   email.value = '';
//   comment.value = '';
// };

// const toggleSpinner = () => spinner.classList.toggle('spinner--open');

// const toggleOverlay = () => overlay.classList.toggle('overlay--open');

// const toggleAlert = type => {
//   alert.querySelector('span').innerText = type === 'success' ? successMessage : failedMessage;
//   alert.classList.toggle(`alert--${type}`);
// };

// const postToAirtable = () => {
//   const body = {
//     fields: {
//       Name: name.value,
//       Email: email.value,
//       Comment: comment.value,
//     },
//   };
//   axios
//     .post(endpoint, body, config)
//     .then(_ => toggleAlert('success'))
//     .catch(_ => toggleAlert('failed'))
//     .then(_ => {
//       toggleSpinner();
//       clearForm();
//       setTimeout(toggleOverlay, 1500);
//     });
// };

// const handleSubmit = e => {
//   e.preventDefault();
//   toggleOverlay();
//   toggleSpinner();
//   postToAirtable();
// };
