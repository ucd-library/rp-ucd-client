let configs = require('@ucd-lib/cork-app-build').dist({
  root : __dirname,
  entry : 'public/elements/researcher-profiles.js',
  dist : 'dist/js',
  clientModules : 'public/node_modules'
});

// add .xml and .csl loading support
configs.forEach(config => {
  config.module.rules.push({
    test: /\.(xml|csl)$/,
    use: [ 'raw-loader']
  });

  config.output.publicPath = '/js/'
  config.output.chunkFilename = '[name]-[hash].'+config.output.filename;
});

// add dynamic loader plugin for ie
configs[1].module.rules.forEach(plugin => {
  if( !plugin.use ) return;
  if( plugin.use.loader !== 'babel-loader' ) return;
  plugin.use.options.plugins = ["syntax-dynamic-import"];
});

module.exports = configs;
