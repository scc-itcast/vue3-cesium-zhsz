'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function throttle(fn, limit = 250) {
  let wait = false, result;
  return function() {
    if (wait === false) {
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
      result = fn.apply(this, arguments);
    }
    return result;
  };
}

exports["default"] = throttle;
//# sourceMappingURL=throttle.js.map
