/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

/**
 * Visits a offsetlookup node
 */
module.exports = function (node, state, output) {
  var tmp = node;
  var toVisit = [];
  while ( tmp ) {
    if ( 'variable' === tmp.kind ) {
      toVisit.unshift( tmp )
    } else {
      toVisit.unshift( tmp.offset )
    }
    tmp = tmp.what;
  }

  this.visit(
    toVisit,
    state,
    output.append('offsetlookup')
  );
};
