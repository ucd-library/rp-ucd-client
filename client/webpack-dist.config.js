import wp from '@ucd-lib/cork-app-build'

let config = wp.dist({
  root : __dirname,
  entry : 'public/elements/research-profiles.js',
  dist : 'dist',
  clientModules : 'public/node_modules'
});

export default config;