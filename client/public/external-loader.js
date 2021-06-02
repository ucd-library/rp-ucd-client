(function() {

  if( !window.AGGIE_EXPERTS_LOADER ) {
    window.AGGIE_EXPERTS_LOADER = {};
  }

  function loaderRootPath() {
    return window.AGGIE_EXPERTS_LOADER.loaderPath || '/loader';
  }

  function loaderVersion() {
    window.AGGIE_EXPERTS_LOADER.loaderVersion || Date.now();
  }

  function bundleRootPath() {
    return window.AGGIE_EXPERTS_LOADER.bundlePath || '/js';
  }

  function host() {
    return window.AGGIE_EXPERTS_LOADER.host || 'http://experts.ucdavis.edu';
  }

  function classSupport() {
    try {
      eval("class Foo {}");
    } catch (e) { return false; }
    return true;
  }

  function addScript(src) {
    var ele = document.createElement('script');
    ele.src = src;
    document.head.appendChild(ele);
  }
  
  function load() {
    console.log('Webcomponents ready: '+(WebComponents.noPolyRequired ? 'native' : 'polyfill'));
  
    var version = '';
    if( AGGIE_EXPERTS_LOADER.version ) {
      version = '?_='+AGGIE_EXPERTS_LOADER.version;
      console.log('Loading aggie experts client bundle version: '+AGGIE_EXPERTS_LOADER.version);
    } else {
      console.warn('No aggie experts client bundle version specified');
    }
  
    let scriptRoot = host()+bundleRootPath()+'/external';
    if( classSupport() ) addScript(scriptRoot+'.js'+version);
    else addScript(scriptRoot+'-ie.js'+version);
  }

  var version = '?_='+loaderVersion();
  
  if( !classSupport() ) {
    console.log('No ES Class support found, using aggie experts using IE compatibility build');
    if( AGGIE_EXPERTS_LOADER.ignorePolyfills === true ) {
      console.log(' - ignorePolyfills flag set, aggie experts not loading polyfills');
    } else {
      console.log(' - aggie experts client adding babel polyfills');
      document.open();
      document.write('<script src="'+loaderRootPath()+'/polyfills/polyfills.js'+version+'"><\/script>');
      document.close();
    }
  }

  if( document.head.attachShadow && ('customElements' in window) && ('content' in document.createElement('template')) ) {
    window.WebComponents = {
      ready : true,
      noPolyRequired : true
    }
  } else {
    document.open();
    document.write('<script src="'+loaderRootPath()+'/polyfills/webcomponents-loader.js'+version+'" ><\/script>');
    document.close();
  }

  if( AGGIE_EXPERTS_LOADER.includeIcons === true ) {
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', host()+'/fonts/brand-icons/icons.css');
    document.head.appendChild(link);
  }

  if( window.WebComponents && WebComponents.ready) load();
  else window.addEventListener('WebComponentsReady', load);
})();