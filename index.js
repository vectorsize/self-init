
module.exports = function selfInit(o, opts){ "use strict";
  for(var op in opts){
    if(o.hasOwnProperty(op)) {
      if(typeof o[op] === 'function')
        o[op](opts[op]);
      else
        o[op] = opts[op];
    }
  }
};