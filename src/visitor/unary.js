/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-transpiler/graphs/contributors
 * @url http://glayzzle.com
 */
'use strict';

/**
 * Visits the bin operation
 */
module.exports = function (node, state, output) {
    if (node.type === '!') {
        this.visit(
            node.what,
            state,
            output.append('generic', {
                pre: function (indent) {
                    return indent + '!' + indent;
                },
            })
        );
    } else {
        output.append('unsupported', node);
    }
};
