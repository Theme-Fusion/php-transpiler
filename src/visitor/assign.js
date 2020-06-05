/* eslint-disable */
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

/**
 * Visits the assign statement
 */
module.exports = function (node, state, output) {
  if (node.operator === '=' && node.left.kind === 'offsetlookup' && null === node.left.offset) {
    return this.visit(
      [node.left, node.right],
      state,
      output.append('array_push')
    );
  }
  this.visit(
    [node.left, node.right],
    state,
    output.append('assign', node.operator)
  );
};