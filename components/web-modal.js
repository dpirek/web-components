
import BaseComponent from './base-component.js';

const TAG_NAME = 'web-modal';

class Modal extends BaseComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    this.append(this.createElement('div', {
      class: 'modal',
      role: 'alert',
      children: [
        this.createElement('div', {
          class: 'modal-dialog',
          children: [
            this.createElement('div', {
              class: 'modal-content',
              children: [
                this.createElement('div', {
                  class: 'modal-header',
                  children: [
                    this.createElement('h5', {
                      class: 'modal-title',
                      innerText: this.getAttribute('title')
                    }),
                    this.createElement('button', {
                      type: 'button',
                      class: 'btn-close',
                      'data-bs-dismiss': 'modal',
                      'aria-label': 'Close'
                    })
                  ]
                }),
                this.createElement('div', {
                  class: 'modal-body',
                  innerText: this.innerHTML
                }),
                this.createElement('div', {
                  class: 'modal-footer',
                  children: [
                    this.createElement('button', {
                      type: 'button',
                      class: 'btn btn-secondary',
                      'data-bs-dismiss': 'modal',
                      innerText: 'Close'
                    }),
                    this.createElement('button', {
                      type: 'button',
                      class: 'btn btn-primary',
                      innerText: 'Save changes'
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    }));
  }
}

const register = () => customElements.define(TAG_NAME, Modal);
window.WebComponents ? window.WebComponents.waitFor(register) : register();

export default Modal;