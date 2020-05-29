/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';
var correctName = require('../correctName');

/**
 * Visits a (expr)->offset node
 */
module.exports = function (node, state, output) {
    output.append('generic', {
        post: function() {
            return correctName(node.name);
        }
    })
};
