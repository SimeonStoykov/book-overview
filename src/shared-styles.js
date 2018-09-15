import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 24px;
        padding: 20px;
        color: #fff;
        border-radius: 5px;
        height: 200px;
        background-color: rgba(136, 77, 240, 0.7);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        min-width: 472px;
        cursor: pointer;
        width: 33%;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
