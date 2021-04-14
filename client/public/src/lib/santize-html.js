const santizeHtmlLib = require('sanitize-html');
const {unsafeHTML} = require('lit-html/directives/unsafe-html');

// wrapper in case we ever want to customize
function sanatizeHTML(html) {
  return santizeHtmlLib(html);
}

function renderHTML(html) {
  return unsafeHTML(santizeHtmlLib(html));
}

export {renderHTML, sanatizeHTML};