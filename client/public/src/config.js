let config = window.AGGIE_EXPERTS_LOADER || window.APP_CONFIG;
if( !config ) {
  console.error('Aggie Experts config not found');
  config = {};
}
export default config;