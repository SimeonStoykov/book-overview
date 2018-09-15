import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';

class BookOverview extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: inline-block;
          padding: 10px;
        }

        .book-image-wrapper, 
        .book-info-wrapper {
          display: inline-block;
        }

        .book-info-wrapper {
          height: auto;
          vertical-align: top;
          margin-left: 15px;
          padding: 0;
          font-weight: 400;
          line-height: 1.2;
        }

        .book-title {
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          margin: 0;
        }

        .book-authors {
          font-size: 16px;
          margin-bottom: 20px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .book-details {
          font-size: 14px;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 35px;
        }

        .book-image {
          position: relative;
          top: -35px;
          cursor: pointer;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        paper-button {
          font-size: 14px;
          border: 2px solid white;
          border-radius: 20px;
          padding: 10px 20px;
          margin: 0;
          margin-top: 20px;
          line-height: 1;
          text-transform: none;
          font-weight: 500;
          outline: none;
        }
      </style>

      <iron-ajax
        auto
        url="data/[[isbn]]-data.json"
        handle-as="json"
        last-response="{{bookData}}">
      </iron-ajax>

      <div class="card" on-click="handleClick">
        <div class="book-image-wrapper">
          <iron-image class="book-image" src="https://d1re4mvb3lawey.cloudfront.net/[[isbn]]/cover.jpg" alt="Book Image"></iron-image>
        </div>

        <div class="book-info-wrapper">
          <h1 class="book-title">[[bookData.title]]</h1>

          <div class="book-authors">
            <dom-repeat items="{{bookData.contributors}}">
              <template>
                <span>{{item}} | </span>
              </template>
            </dom-repeat>
          </div>

          <div class="book-details">
            <span>ISBN | [[isbn]]</span>
            <br />
            <span>Publisher | [[bookData.publisher]]</span>
            <br />
            <span>Year | [[bookData.date]]</span>
          </div>

          <paper-button role="button">Buy Now</paper-button>
        </div>
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

  handleClick(e) {
    console.log(e);
  }
}

window.customElements.define('book-overview', BookOverview);
