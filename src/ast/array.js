/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

var Statement = require('./statement');

/**
 * @constructor AST/JsArray
 */
var JsArray = Statement.extends(function(parent) {
  Statement.apply(this, [parent]);
});

/**
 * Outputs the statement
 */
JsArray.prototype.toString = function (indent) {
    var items = this._nodes.map(function(node) {
        return node.toString(indent);
    });
  return '[' + items + ']';
};

module.exports = JsArray;
