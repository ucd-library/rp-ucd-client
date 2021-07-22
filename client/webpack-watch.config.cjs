const appBuild = require('@ucd-lib/cork-app-build');

let configs = [appBuild.watch({
  root : __dirname,
  entry : 'public/elements/researcher-profiles.js',
  preview : 'public/js',
  clientModules : 'public/node_modules'
})];

configs = [...configs, appBuild.watch({
  root : __dirname,
  entry : 'public/elements/external',
  preview : 'public/js',
  modern : 'external.js',
  clientModules : 'public/node_modules'
})];


// add .xml and .csl loading support
configs.forEach((config, index) => {
  /*
  config.module.rules.push({
    test: /\.(xml|csl)$/,
    use: ['raw-loader']
  });
  */

  config.output.publicPath = '/js/';
  config.output.chunkFilename = '[name].'+config.output.filename;

  if( index % 2 === 1 ) {
    // add dynamic loader plugin for ie
    config.module.rules.forEach(plugin => {
      if( !plugin.use ) return;
      if( plugin.use.loader !== 'babel-loader' ) return;
      plugin.use.options.plugins = ["syntax-dynamic-import"];
    });
  }
});

// optionaly you can run:
// require('@ucd-lib/cork-app-build').watch(config, true)
// Adding the second flag will generate a ie build as well as a modern
// build when in development.  Note this slows down the build process.

module.exports = configs;
