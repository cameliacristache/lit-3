import { css } from 'lit';

export class SimpleController {
  host;
  stateString = '';
  loader;

  constructor(host) {
    this.host = host;
    host.addController(this);
  }

  hostConnected() {
    this.stateString = 'connected callback';
    const styles = document.createElement('style');
    styles.textContent = css`
      .loader {
        min-height: 50px;
        background: linear-gradient(
          to right,
          transparent,
          #ededed 40%,
          transparent 60%
        );
        animation: animate 1.6s ease-in-out infinite;
      }

      @keyframes animate {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(200%);
        }
      }
    `;

    this.host.shadowRoot.appendChild(styles);
    this.loader = document.createElement('div');
    this.loader.classList.add('loader');
    this.host.shadowRoot.appendChild(this.loader);
  }

  hostDisconnected() {
    this.stateString = 'disconnected callback';
    console.log(this.stateString);
  }

  hostUpdate() {
    this.stateString = 'host update';
    console.log(this.stateString);
  }

  hostUpdated() {
    this.stateString = 'host updated';
    console.log(this.stateString);
    if (!this.host.loader) {
      this.loader.setAttribute('hidden', '');
      this.host.shadowRoot.querySelector('.content').removeAttribute('hidden');
    } else {
      this.host.shadowRoot.querySelector('.content').setAttribute('hidden', '');
    }
  }
}
