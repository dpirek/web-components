import BaseComponent from './base-component.js';

const TAG_NAME = 'web-alert';

class Alert extends BaseComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    this.append(this.createElement('div', {
      class: 'alert alert-warning',
      role: 'alert',
      innerText: this.innerHTML
    }));
  }
}

const register = () => customElements.define(TAG_NAME, Alert);
window.WebComponents ? window.WebComponents.waitFor(register) : register();

export default Alert;