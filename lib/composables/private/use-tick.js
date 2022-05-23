'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function useTick() {
  let tickFn;
  vue.onBeforeUnmount(() => {
    tickFn = void 0;
  });
  return {
    registerTick(fn) {
      tickFn = fn;
    },
    removeTick() {
      tickFn = void 0;
    },
    prepareTick() {
      if (tickFn !== void 0) {
        const fn = tickFn;
        vue.nextTick(() => {
          if (tickFn === fn) {
            tickFn();
            tickFn = void 0;
          }
        });
      }
    }
  };
}

exports["default"] = useTick;
//# sourceMappingURL=use-tick.js.map
