'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const alignMap = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
};
const alignValues = Object.keys(alignMap);
const useAlignProps = {
  align: {
    type: String,
    validator: (v) => alignValues.includes(v)
  }
};
function useAlign(props) {
  return vue.computed(() => {
    const align = props.align === void 0 ? props.vertical === true ? "stretch" : "left" : props.align;
    return `${props.vertical === true ? "items" : "justify"}-${alignMap[align]}`;
  });
}

exports.alignMap = alignMap;
exports.alignValues = alignValues;
exports["default"] = useAlign;
exports.useAlignProps = useAlignProps;
//# sourceMappingURL=use-align.js.map
