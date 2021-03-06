/**
* Pull in required modules
**/
const async         = require('async');
const url           = require('url');
const dns           = require('dns');
const _             = require('lodash');
const S             = require('string');

/**
* Expose our creation class that will be called
* with properties.
**/
module.exports = exports = function(params) {

  /**
  * The Report object to return that we can use
  **/
  var Test = _.extend({}, require('./common')(params));

  /**
  * Returns the current url of the Test
  **/
  Test.getDomain = function() { return params.domain; };

  // return the Test object to use
  return Test;

};
