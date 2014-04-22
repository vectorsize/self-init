# Selfinit

Module that initialises an object with a set of given options.  
Please use with [protection](https://github.com/vectorsize/filter-object).

```js

var selfInit = require('self-init');
var filter = require('filter-object');

function SomeCtor(options) {
  selfInit(this, filter(options, ['width', 'height']));
}
…
var viz = new SomeCtor({width: 200, height: 300, evil: evilFunction});
console.log(viz.width); // => 200
```