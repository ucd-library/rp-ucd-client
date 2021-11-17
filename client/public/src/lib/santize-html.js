const santizeHtmlLib = require('sanitize-html');
const {unsafeHTML} = require('lit/directives/unsafe-html.js');

// wrapper in case we ever want to customize
function sanatizeHTML(html) {
  return santizeHtmlLib(html);
}

function renderHTML(html) {
  return unsafeHTML(santizeHtmlLib(html));
}

export {renderHTML, sanatizeHTML};