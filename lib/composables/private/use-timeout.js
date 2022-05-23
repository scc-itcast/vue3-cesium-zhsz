'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function useTimeout() {
  let timer;
  vue.onBeforeUnmount(() => {
    clearTimeout(timer);
  });
  return {
    registerTimeout(fn, delay) {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    },
    removeTimeout() {
      clearTimeout(timer);
    }
  };
}

exports["default"] = useTimeout;
//# sourceMappingURL=use-timeout.js.map
