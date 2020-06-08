/* eslint-disable */
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

var Statement = require('./statement');

/**
 * @constructor AST/ArrayPush
 */
var ArrayPush = Statement[ 'extends' ]( function( parent ) {
  Statement.apply( this, [ parent ] );
} );

/**
 * Outputs the statement
 */
ArrayPush.prototype.toString = function ( indent ) {
    var buffer = '';

    buffer += this._nodes[ 0 ].toString( indent ) + '.push(';
    var first = 'yes';
    this._nodes.slice( 1 ).forEach( function( node ) {
        if ( ! first ) {
            buffer += ',';
        }
        buffer += node.toString( indent );
    } );
    buffer += '); ';

   return indent + buffer + '\n';
};

module.exports = ArrayPush;
