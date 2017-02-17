Package.describe({
  name: 'qualia:reval',
  version: '0.0.1',
  summary: 'Instant Meteor reloads',
  git: 'https://github.com/qualialabs/reval',
  documentation: 'README.md',
  debugOnly: true,
});

Package.onUse(function(api) {
  api.use([
    'ecmascript',
    'underscore',
    'tracker',
    'mongo',
    'minimongo',
    'spacebars-compiler',
    'random',
    'meteorhacks:picker@1.0.3',
  ], ['client', 'server']);

  api.mainModule('client/main.js', 'client');
  api.mainModule('server/main.js', 'server');
});
