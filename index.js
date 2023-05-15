import {LitElement, css, html} from 'lit-element';

class MyElement extends LitElement {
  static styles = css`
    .spinner {
      width: 32px;
      height: 32px;
      margin: 10px auto;
      border: 4px #ddd solid;
      border-top: 4px blue solid;
      border-radius: 50%;
      animation: spinner-anime 1.0s infinite linear;
    }

    @keyframes spinner-anime {
      100% {
        transform: rotate(360deg);
      }
    }
  `;


  render() {
    return html`
      <div class="spinner"></div>
    `;
  }
}

customElements.define('spinner-slot', MyElement);