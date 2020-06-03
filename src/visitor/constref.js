/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

/**
 * Visits a (expr)->offset node
 */
module.exports = function (node, state, output) {
    output.append('generic', {
        post: function() {
            return state.correctName(node.name);
        }
    })
};
