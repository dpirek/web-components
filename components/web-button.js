
const TAG_NAME = 'web-button';

class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <button>
        <slot></slot>
      </button>
    `;
  }
}

const register = () => customElements.define(TAG_NAME, Button);
window.WebComponents ? window.WebComponents.waitFor(register) : register();

export default Button;