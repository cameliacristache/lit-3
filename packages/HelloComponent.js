import { LitElement, html } from 'lit';

export class HelloComponent extends LitElement {
  render() {
    return html`<p>Hello</p>`;
  }
}

customElements.define('hello-component', HelloComponent);
