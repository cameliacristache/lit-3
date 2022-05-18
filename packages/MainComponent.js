import { LitElement, html } from 'lit';
import { hello } from './HelloDirective.js';

import './HelloComponent.js';
import './StaticExpressions.js';
import './MyElement.js';

export class MainComponent extends LitElement {
  static get properties() {
    return {
      loader: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.loader = true;
  }

  render() {
    return html`
      <h3>Static expressions</h3>
      <static-expression></static-expression>
      <h3>Element expressions</h3>
      <hello-component ${hello('disabled')}></hello-component>
      <h3>Reactive controller</h3>
      <my-element .loader=${this.loader}></my-element>
      <button
        @click=${() => {
          this.loader = false;
        }}
      >
        Stop Loader
      </button>
    `;
  }
}

customElements.define('main-component', MainComponent);
