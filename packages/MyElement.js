import { LitElement, html, css } from 'lit';
import { SimpleController } from './SimpleController.js';

export class MyElement extends LitElement {
  simpleController = new SimpleController(this);

  static get properties() {
    return {
      loader: { type: Boolean },
    };
  }

  render() {
    return html`
      <div class="content">${this.simpleController.stateString}</div>
    `;
  }
}

customElements.define('my-element', MyElement);
