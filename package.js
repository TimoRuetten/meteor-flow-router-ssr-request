Package.describe({
  name: 'timoruetten:flow-router-ssr-request',
  version: '0.0.1',
  summary: 'Simply extension for FlowRouter SSR to make it possible to access the last request object',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.use([
    'meteorhacks:picker',
    'kadira:flow-router-ssr'
  ]);
  api.addFiles('flow-router-ssr-request.js', ['server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('timoruetten:flow-router-ssr-request');
  api.mainModule('flow-router-ssr-request-tests.js');
});
