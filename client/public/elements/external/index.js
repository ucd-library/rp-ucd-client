const BUNDLES = {
  directory : ['ae-directory-listing'],
  publications : ['ae-publication-list']
};

const loaded = {};
if( !window.AGGIE_EXPERTS_LOADER ) {
  window.AGGIE_EXPERTS_LOADER = {};
}

// hack, need to see if __webpack_require__.p has a better way to set
// this sets the remote host to load chunked bundle code from
if( AGGIE_EXPERTS_LOADER.host && window.__webpack_require__ ) {
  __webpack_require__.p = AGGIE_EXPERTS_LOADER.host + __webpack_require__.p;
}

// wait until document has loaded to init our detection scripts
// all elements need to be loaded into the dom before we start
if( document.readyState === 'loading' ) {
  document.addEventListener('DOMContentLoaded', () => initAE());
} else {
  initAE();
}

/**
 * @function initAE
 * @description attempts to load Aggie Experts custom elements by bundle.  Bundles can be
 * loaded by:
 * 
 *  - Providing the bundle name in the AGGIE_EXPERTS_LOADER.bundles array
 *  - Providing the element name in the AGGIE_EXPERTS_LOADER.elements array
 *  - Having the element defined in the main DOM on load 
 */
function initAE() {
  // load any user specified bundles
  (AGGIE_EXPERTS_LOADER.bundles || []).forEach(name => loadBundle(name));

  // load any user specified elements
  (AGGIE_EXPERTS_LOADER.elements || []).forEach(ele => {
    for( let name in BUNDLES ) {
      if( BUNDLES[name].includes(ele) ) {
        loadBundle(name);
        return;
      }
    }
    console.warn('Unknown aggie experts element name: '+ele);
  });

  // scan for elements
  for( let name in BUNDLES ) {
    let ele = document.querySelector(BUNDLES[name].join(', '));
    if( ele ) loadBundle(name);
  }
}

/**
 * @function loadBundle
 * @description load Aggie Experts webpack chunk (bundle) by name
 * 
 * @param {String} name 
 * @returns {Promise}
 */
function loadBundle(name) {
  if( loaded[name] ) return;
  loaded[name] = true;

  if( name === 'directory' ) {
    return import(/* webpackChunkName: "external-directory" */ "./directory/ae-directory-listing");
  } else if( name === 'publications' ) {
    return import(/* webpackChunkName: "external-publications" */ "./directory/ae-publications-list");
  }

  console.warn('Unknown aggie experts bundle name: '+name);
}