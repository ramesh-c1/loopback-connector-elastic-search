'use strict';

var chai = require('chai');
global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should(); // Why is the function being executed? Because the "should" interface extends Object.prototype to provide a single getter as the starting point for your language assertions.

global._ = require('lodash');

var settings = require('./resource/datasource-test.json');
global.getSettings = function() {
    return _.cloneDeep(settings);
};

var DataSource = require('loopback-datasource-juggler').DataSource;
global.getDataSource = global.getSchema = global.getConnector = function (customConfig) {
    var settings = getSettings();
    settings.connector =  require('../');
    return new DataSource(settings);
};
