import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import('./book-overview.js');

class BooksList extends PolymerElement {
  static get template() {
    return html`
        <book-overview isbn="pg1017"></book-overview>
        <book-overview isbn="9780198556886"></book-overview>
        <book-overview isbn="9780198557401"></book-overview>
    `;
  }
}

window.customElements.define('books-list', BooksList);
