import router from './components/web-router.js';
import button from './components/web-button.js';

const buttonElement = document.querySelector('web-button#button-1');

buttonElement.addEventListener('click', () => {
  console.log('Button clicked');
});
