import { Directive, directive } from 'lit/directive.js';

class HelloDirective extends Directive {
  el = '';

  update(part, attr) {
    this.el = part.element;
    this.render(attr);
  }

  render(attr) {
    return this.el.setAttribute(attr, '');
  }
}

export const hello = directive(HelloDirective);
