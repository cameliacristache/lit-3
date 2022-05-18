import { LitElement } from 'lit';
import { unsafeStatic, html } from 'lit/static-html.js';

export class StaticExpression extends LitElement {
  constructor() {
    super();
    this.tagName = unsafeStatic('div');
  }

  static properties = {
    tagName: { state: true },
  };

  render() {
    return html`<${this.tagName}>Sunt un ${this.tagName}</${this.tagName}>
		<button @click=${() => {
      this.tagName = unsafeStatic('h1');
    }}>Click me</button>
		`;
  }
}

customElements.define('static-expression', StaticExpression);
