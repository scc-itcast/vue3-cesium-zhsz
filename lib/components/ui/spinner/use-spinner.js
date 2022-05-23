'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useSize = require('../../../composables/private/use-size.js');

const useSpinnerProps = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function useSpinner(props) {
  return {
    cSize: vue.computed(() => props.size in useSize.useSizeDefaults ? `${useSize.useSizeDefaults[props.size]}px` : props.size),
    classes: vue.computed(() => "vc-spinner" + (props.color ? ` text-${props.color}` : ""))
  };
}

exports["default"] = useSpinner;
exports.useSpinnerProps = useSpinnerProps;
//# sourceMappingURL=use-spinner.js.map
