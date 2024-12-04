import BaseComponent from './base-component.js';

const TAG_NAME = 'web-button';

class Button extends BaseComponent {
  constructor() {
    super();
    console.log('content: ', this.content);
  }

  connectedCallback() {
    this.append(this.createElement('a', {
      class: 'btn btn-primary',
      innerText: this.innerHTML
    }));
  }
}

const register = () => customElements.define(TAG_NAME, Button);
window.WebComponents ? window.WebComponents.waitFor(register) : register();

export default Button;