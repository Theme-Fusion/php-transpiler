/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';
/**
 * Visits a if node
 */
module.exports = function (node, state, output) {
  this.visit(
    node.items.map(function(item){
        return item.value
    }),
    state,
    output.append('array')
  );
};
