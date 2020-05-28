/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

var Statement = require('./statement');

/**
 * @constructor AST/OffsetLookup
 */
var OffsetLookup = Statement.extends(function(parent) {
  Statement.apply(this, [parent]);
});

/**
 * Outputs the statement
 */
OffsetLookup.prototype.toString = function (indent) {

  return this._nodes.reduce(function (previous, node, index) {
    if ( index > 0 ) {
      previous += '[' + node.toString(indent) + ']';
    } else {
      previous += node.toString(indent); 
    }
    return previous
  }, '' );
};

module.exports = OffsetLookup;
