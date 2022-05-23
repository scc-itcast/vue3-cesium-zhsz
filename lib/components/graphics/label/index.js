'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const labelGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.text,
  ...cesiumProps.font,
  ...cesiumProps.labelStyle,
  ...cesiumProps.scale,
  ...cesiumProps.showBackground,
  ...cesiumProps.backgroundColor,
  ...cesiumProps.backgroundPadding,
  ...cesiumProps.pixelOffset,
  ...cesiumProps.eyeOffset,
  ...cesiumProps.horizontalOrigin,
  ...cesiumProps.verticalOrigin,
  ...cesiumProps.heightReference,
  ...cesiumProps.fillColor,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.translucencyByDistance,
  ...cesiumProps.pixelOffsetScaleByDistance,
  ...cesiumProps.scaleByDistance,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.disableDepthTestDistance
};
var GraphicsLabel = vue.defineComponent({
  name: "VcGraphicsLabel",
  props: labelGraphicsProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "LabelGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GraphicsLabel;
exports.labelGraphicsProps = labelGraphicsProps;
//# sourceMappingURL=index.js.map
