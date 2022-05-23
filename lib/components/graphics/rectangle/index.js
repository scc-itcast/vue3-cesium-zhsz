'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const rectangleGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.coordinates,
  ...cesiumProps.height,
  ...cesiumProps.heightReference,
  ...cesiumProps.extrudedHeight,
  ...cesiumProps.extrudedHeightReference,
  ...cesiumProps.rotation,
  ...cesiumProps.stRotation,
  ...cesiumProps.granularity,
  ...cesiumProps.fill,
  ...cesiumProps.material,
  ...cesiumProps.outline,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.shadows,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.classificationType,
  ...cesiumProps.zIndex
};
var GraphicsRectangle = vue.defineComponent({
  name: "VcGraphicsRectangle",
  props: rectangleGraphicsProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "RectangleGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GraphicsRectangle;
exports.rectangleGraphicsProps = rectangleGraphicsProps;
//# sourceMappingURL=index.js.map
