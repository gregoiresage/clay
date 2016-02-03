'use strict';

var assert = require('chai').assert;

/**
 * @param {Object} object
 * @param {Array} properties
 */
module.exports.checkReadOnly = function(object, properties) {
  properties.forEach(function(property) {
    assert.strictEqual(
      Object.getOwnPropertyDescriptor(object, property).writable,
      false
    );
  });
};
