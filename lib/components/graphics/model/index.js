'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const modelGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.uri,
  ...cesiumProps.scale,
  ...cesiumProps.minimumPixelSize,
  ...cesiumProps.maximumScale,
  ...cesiumProps.incrementallyLoadTextures,
  ...cesiumProps.runAnimations,
  ...cesiumProps.clampAnimations,
  ...cesiumProps.shadows,
  ...cesiumProps.heightReference,
  ...cesiumProps.silhouetteColor,
  ...cesiumProps.silhouetteSize,
  ...cesiumProps.color,
  ...cesiumProps.colorBlendMode,
  ...cesiumProps.colorBlendAmount,
  ...cesiumProps.imageBasedLightingFactor,
  ...cesiumProps.lightColor,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.nodeTransformations,
  ...cesiumProps.articulations,
  ...cesiumProps.clippingPlanes
};
var GraphicsModel = vue.defineComponent({
  name: "VcGraphicsModel",
  props: modelGraphicsProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "ModelGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GraphicsModel;
exports.modelGraphicsProps = modelGraphicsProps;
//# sourceMappingURL=index.js.map
