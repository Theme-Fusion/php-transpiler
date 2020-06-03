/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

var Statement = require('./statement');

/**
 * @constructor AST/Parenthesis
 */
var Parenthesis = Statement.extends(function(parent) {
  Statement.apply(this, [parent]);
});

/**
 * Outputs the statement
 */
Parenthesis.prototype.toString = function (indent) {
  return '( ' +
    this._nodes[0].toString(indent) +
    ' )';
};

module.exports = Parenthesis;
