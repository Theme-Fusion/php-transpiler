/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

var Statement = require('./statement');

/**
 * @constructor AST/Foreach
 */
var Foreach = Statement.extends(function(parent) {
  Statement.apply(this, [parent]);
});

/**
 * Outputs the statement
 */
Foreach.prototype.toString = function (indent) {

  if ( this._nodes[3] ) {
    return  indent + 
    'for (' + 
    this._nodes[1].toString(indent) +
    ' in ' +
    this._nodes[0].toString(indent) +
    ') { \n'+
    indent + ' var ' + this._nodes[2].toString(indent) + ' = ' +
    this._nodes[0].toString(indent) + '[' + this._nodes[1].toString(indent) + ']; \n' +
    indent + this._nodes[3].toString(indent).replace('{', '');
  }
  return indent + 
  'for (' + 
  this._nodes[1].toString(indent) +
  ' in ' +
  this._nodes[0].toString(indent) +
  ') ' + this._nodes[2].toString(indent);
};

module.exports = Foreach;
