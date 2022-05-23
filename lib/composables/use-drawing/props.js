'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cesiumProps = require('../../utils/cesium-props.js');
var defaultOpts = require('./defaultOpts.js');

const useDrawingActionProps = {
  ...cesiumProps.enableMouseEvent,
  show: Boolean,
  editable: Boolean,
  drawtip: Object,
  pointOpts: Object,
  editorOpts: Object,
  mode: Number,
  preRenderDatas: Array,
  disableDepthTest: Boolean
};
const useDrawingFabProps = {
  ...cesiumProps.show,
  position: {
    type: String,
    default: "bottom-left",
    validator: (v) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(v)
  },
  offset: {
    type: Array,
    validator: (v) => v.length === 2
  },
  mode: {
    type: Number,
    default: 1
  },
  activeColor: {
    type: String,
    default: "positive"
  },
  editable: {
    type: Boolean
  },
  clampToGround: {
    type: Boolean
  },
  clearActionOpts: {
    type: Object,
    default: () => defaultOpts.clearActionDefault
  }
};

exports.useDrawingActionProps = useDrawingActionProps;
exports.useDrawingFabProps = useDrawingFabProps;
//# sourceMappingURL=props.js.map
