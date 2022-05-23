'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var distancelegendDefaultProps = {
  position: {
    type: String,
    default: "bottom-right",
    validator: (v) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(v)
  },
  offset: {
    type: Array,
    validator: (v) => v.length === 2
  },
  color: {
    type: String,
    default: "#fff"
  },
  background: {
    type: String,
    default: "#3f4854"
  },
  width: {
    type: Number,
    default: 100
  },
  barBackground: {
    type: String,
    default: "#fff"
  }
};

exports["default"] = distancelegendDefaultProps;
//# sourceMappingURL=defaultProps.js.map
