Package.describe({
  name: 'timoruetten:flow-router-ssr-request',
  version: '0.1.0',
  summary: 'Simply extension for FlowRouter SSR to make it possible to access the last request object',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.use([
    'meteorhacks:picker@1.0.4',
    'kadira:flow-router-ssr@3.13.0'
  ]);
  api.addFiles('flow-router-ssr-request.js', ['server']);
});
