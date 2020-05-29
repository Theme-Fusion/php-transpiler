/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

var Statement = require('./statement');

/**
 * @constructor AST/PropertyLookup
 */
var PropertyLookup = Statement.extends(function(parent) {
  Statement.apply(this, [parent]);
});

/**
 * Outputs the statement
 */
PropertyLookup.prototype.toString = function (indent) {
    return this._nodes[0].toString(indent) + '.' + this._nodes[1].toString(indent);
};

module.exports = PropertyLookup;
