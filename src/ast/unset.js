/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

var Statement = require('./statement');

/**
 * @constructor AST/Unset
 */
var Unset = Statement.extends(function(parent) {
  Statement.apply(this, [parent]);
});

/**
 * Outputs the statement
 */
Unset.prototype.toString = function (indent) {
  return indent + 'delete ' + this._nodes[0].toString(indent) + ';\n';
};

module.exports = Unset;
