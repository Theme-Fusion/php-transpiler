# php-transpiler

Transpiler API to convert [php-parser](https://github.com/glayzzle/php-parser) AST to a Javascript output. This library is used to run a php script with :

- [PHP Runtime](https://github.com/glayzzle/php-runtime) - the API compliant with PHP Transpiler output
- [Glayzzle](https://github.com/glayzzle/glayzzle) - the nodejs CLI that runs PHP Files 



[![npm version](https://badge.fury.io/js/php-transpiler.svg)](https://www.npmjs.com/package/php-transpiler)
[![Build Status](https://travis-ci.org/glayzzle/php-transpiler.svg?branch=master)](https://travis-ci.org/glayzzle/php-transpiler)
[![Coverage Status](https://coveralls.io/repos/github/glayzzle/php-transpiler/badge.svg?branch=master&v=0.0.5)](https://coveralls.io/github/glayzzle/php-transpiler?branch=master)
[![Gitter](https://img.shields.io/badge/GITTER-join%20chat-green.svg)](https://gitter.im/glayzzle/Lobby)

Installation
------------

This library is distributed with [npm](https://www.npmjs.com/package/php-transpiler) :

```sh
npm install php-transpiler --save
```

Usage
-----

```js
// initialize the php parser factory class
var transpiler = require('php-transpiler');
var instance = new transpiler({
  browser: true // says if we generate code for browser or nodejs
});

var jsCode = instance.read('<?php echo "Hello World";');
console.log(jsCode);
```

Will output :

```
module.exports = function($php) {
  $php.stdout.print ('hello world');
};
```

# Misc

This library is released under BSD-3 license clause.
