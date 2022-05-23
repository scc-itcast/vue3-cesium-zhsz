'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const useSizeDefaults = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
};
const useSizeProps = {
  size: String
};
function useSize(props, sizes = useSizeDefaults) {
  return vue.computed(() => props.size !== void 0 ? { fontSize: props.size in sizes ? `${sizes[props.size]}px` : props.size } : null);
}

exports["default"] = useSize;
exports.useSizeDefaults = useSizeDefaults;
exports.useSizeProps = useSizeProps;
//# sourceMappingURL=use-size.js.map
