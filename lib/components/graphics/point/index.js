'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const pointGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.pixelSize,
  ...cesiumProps.heightReference,
  ...cesiumProps.color,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.scaleByDistance,
  ...cesiumProps.translucencyByDistance,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.disableDepthTestDistance
};
var GraphicsPoint = vue.defineComponent({
  name: "VcGraphicsPoint",
  props: pointGraphicsProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PointGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GraphicsPoint;
exports.pointGraphicsProps = pointGraphicsProps;
//# sourceMappingURL=index.js.map
