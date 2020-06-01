import wp from '@ucd-lib/cork-app-build'

const config = wp.watch({
  root : __dirname,
  entry : 'public/elements/research-profiles.js',
  preview : 'public/js',
  clientModules : 'public/node_modules'
});

// optionaly you can run:
// require('@ucd-lib/cork-app-build').watch(config, true)
// Adding the second flag will generate a ie build as well as a modern
// build when in development.  Note this slows down the build process.

export default config;