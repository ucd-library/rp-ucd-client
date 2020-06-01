const config = require('@ucd-lib/cork-app-build').watch({
  root : __dirname,
  entry : 'public/elements/researcher-profiles.js',
  preview : 'public/js',
  clientModules : 'public/node_modules'
});

// optionaly you can run:
// require('@ucd-lib/cork-app-build').watch(config, true)
// Adding the second flag will generate a ie build as well as a modern
// build when in development.  Note this slows down the build process.

module.exports = config;