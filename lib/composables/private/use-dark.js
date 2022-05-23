'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};
function useDark(props) {
  return vue.computed(() => props.dark);
}

exports["default"] = useDark;
exports.useDarkProps = useDarkProps;
//# sourceMappingURL=use-dark.js.map
