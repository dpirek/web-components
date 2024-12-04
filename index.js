import Router from './components/web-router.js';
import Button from './components/web-button.js';
import Alert from './components/web-alert.js';
import Modal from './components/web-modal.js';

const buttonElement = document.querySelector('web-button#button-1');
const bodyElm = document.querySelector('body');

buttonElement.addEventListener('click', () => {
  bodyElm.appendChild(new Modal());
  console.log('Button clicked');
});
