/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

var Statement = require('./statement');

/**
 * @constructor AST/Cast
 */
var Cast = Statement.extends(function(parent, type) {
  Statement.apply(this, [parent]);
  this.type = type;
});

/**
 * Outputs the statement
 */
Cast.prototype.toString = function (indent) {
  var buffer = '';
  var _cast = function(type, string) {
    switch (type) {
      case 'int':
        return 'Number(' + string + ')';
      case 'string':
        return 'String(' + string + ')';
      default:
        throw new Error('Unsupported cast type: ' + type);
    }
  }
  if(this._nodes[0]._nodes.length > 1) {
    var replacement = this._nodes[0]._nodes[0].toString(indent);
    buffer += this._nodes[0].toString(indent);
    buffer = buffer.replace( replacement, _cast( this.type, replacement ) );
  } else {
    buffer += _cast( this.type, this._nodes[0].toString(indent) );
  }
  return buffer;
};

module.exports = Cast;