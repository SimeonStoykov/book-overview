import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';

class BookOverview extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <iron-ajax
        auto
        url="data.json"
        handle-as="json"
        last-response="{{bookData}}">
      </iron-ajax>

      <div class="card">
        <h1>[[bookData.title]]</h1>

        <div>
          <dom-repeat items="{{bookData.contributors}}">
            <template>
              <span>{{item}} </span>
            </template>
          </dom-repeat>
        </div>

        <iron-image src="https://d1re4mvb3lawey.cloudfront.net/[[isbn]]/cover.jpg" alt="Book Image"></iron-image>
      </div>
    `;
  }

  static get properties() {
    return {
      isbn: {
        type: String
      }
    }
  }

  constructor() {
    super();
  }

  isLastItem(index) {
    console.log(index);
    console.log(contributorsCount);
  }
}

window.customElements.define('book-overview', BookOverview);
