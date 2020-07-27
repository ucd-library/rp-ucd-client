let config = require('@ucd-lib/cork-app-build').dist({
  root : __dirname,
  entry : 'public/elements/researcher-profiles.js',
  dist : 'dist',
  clientModules : 'public/node_modules'
});

module.exports = config;