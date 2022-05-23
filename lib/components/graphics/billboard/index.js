'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const billboarGraphicsProps = {
  ...cesiumProps.image,
  ...cesiumProps.scale,
  ...cesiumProps.pixelOffset,
  ...cesiumProps.eyeOffset,
  ...cesiumProps.horizontalOrigin,
  ...cesiumProps.verticalOrigin,
  ...cesiumProps.heightReference,
  ...cesiumProps.color,
  ...cesiumProps.rotation,
  ...cesiumProps.alignedAxis,
  ...cesiumProps.sizeInMeters,
  ...cesiumProps.width,
  ...cesiumProps.height,
  ...cesiumProps.scaleByDistance,
  ...cesiumProps.translucencyByDistance,
  ...cesiumProps.pixelOffsetScaleByDistance,
  ...cesiumProps.disableDepthTestDistance,
  ...cesiumProps.show,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.imageSubRegion
};
var GraphicsBillboard = vue.defineComponent({
  name: "VcGraphicsBillboard",
  props: billboarGraphicsProps,
  emits: emits.graphicsEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "BillboardGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports.billboarGraphicsProps = billboarGraphicsProps;
exports["default"] = GraphicsBillboard;
//# sourceMappingURL=index.js.map
