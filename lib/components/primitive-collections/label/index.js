'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitive-collection-items/index.js');

const labelProps = {
  ...cesiumProps.backgroundColor,
  ...cesiumProps.backgroundPadding,
  ...cesiumProps.disableDepthTestDistance,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.eyeOffset,
  ...cesiumProps.fillColor,
  ...cesiumProps.font,
  ...cesiumProps.heightReference,
  ...cesiumProps.horizontalOrigin,
  ...cesiumProps.id,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.pixelOffset,
  ...cesiumProps.pixelOffsetScaleByDistance,
  ...cesiumProps.position,
  ...cesiumProps.scale,
  ...cesiumProps.scaleByDistance,
  ...cesiumProps.show,
  ...cesiumProps.showBackground,
  ...cesiumProps.labelStyle,
  ...cesiumProps.text,
  totalScale: {
    type: Number,
    default: 1
  },
  ...cesiumProps.translucencyByDistance,
  ...cesiumProps.verticalOrigin,
  ...cesiumProps.enableMouseEvent
};
var Label = vue.defineComponent({
  name: "VcLabel",
  props: labelProps,
  emits: emits.primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "Label";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = Label;
exports.labelProps = labelProps;
//# sourceMappingURL=index.js.map
