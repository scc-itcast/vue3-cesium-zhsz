'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitive-collection-items/index.js');

const billboardProps = {
  ...cesiumProps.alignedAxis,
  ...cesiumProps.color,
  ...cesiumProps.disableDepthTestDistance,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.eyeOffset,
  ...cesiumProps.height,
  ...cesiumProps.heightReference,
  ...cesiumProps.horizontalOrigin,
  ...cesiumProps.id,
  ...cesiumProps.image,
  ...cesiumProps.pixelOffset,
  ...cesiumProps.pixelOffsetScaleByDistance,
  ...cesiumProps.position,
  ...cesiumProps.rotation,
  ...cesiumProps.scale,
  ...cesiumProps.scaleByDistance,
  ...cesiumProps.show,
  ...cesiumProps.sizeInMeters,
  ...cesiumProps.translucencyByDistance,
  ...cesiumProps.verticalOrigin,
  ...cesiumProps.width,
  ...cesiumProps.enableMouseEvent
};
var Billboard = vue.defineComponent({
  name: "VcBillboard",
  props: billboardProps,
  emits: emits.primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "Billboard";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports.billboardProps = billboardProps;
exports["default"] = Billboard;
//# sourceMappingURL=index.js.map
