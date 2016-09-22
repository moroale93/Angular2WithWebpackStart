var testsContext;

require('angular');
require('angular-mocks');
require('babel-core/polyfill');

testsContext = require.context('./src', true, /_spec\.js$/);
testsContext.keys().forEach(testsContext);
