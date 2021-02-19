import striptags from "striptags";

class PreviewUtils {

  /**
   * @method getSnippetTitle
   * @description given a title and a snippet see if the title contains
   * the snippet.  If it does, replace the snippet section of the title
   * with the marked up snippet.  Returns new title and a flag if the 
   * snippet should be shown or if it is now part of the title.
   * 
   * @param {String} title 
   * @param {String} snippet
   * 
   * @returns {Object}
   */
  getSnippetTitle(title, snippet) {
    let stripped = striptags(snippet);

    if( stripped === title ) {
      return {title: snippet, showSnippet: false};

    } else if ( title.includes(stripped) ) {
      title = title.replace(stripped, snippet);
      return {title, showSnippet: false};
    }

    return {title: title, showSnippet: true};
  }

}

export default new PreviewUtils();