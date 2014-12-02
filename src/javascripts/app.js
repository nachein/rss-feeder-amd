var Backbone = require('backbone');
var _ = require('underscore');

var Router = require('./routers/app');
var router = new Router();

Backbone.history.start();