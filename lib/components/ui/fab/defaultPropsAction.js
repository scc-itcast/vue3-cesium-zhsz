'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useFab = require('./use-fab.js');

const anchorMap = {
  start: "self-end",
  center: "self-center",
  end: "self-start"
};
const anchorValues = Object.keys(anchorMap);
const defaultProps = {
  ...useFab.useFabProps,
  icon: {
    type: String,
    default: ""
  },
  stacked: Boolean,
  anchor: {
    type: String,
    validator: (v) => anchorValues.includes(v)
  },
  to: [String, Object],
  replace: Boolean
};

exports.anchorMap = anchorMap;
exports["default"] = defaultProps;
//# sourceMappingURL=defaultPropsAction.js.map
