'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitives/index.js');

const modelPrimitiveProps = {
  ...cesiumProps.url,
  basePath: String,
  ...cesiumProps.show,
  ...cesiumProps.modelMatrix,
  ...cesiumProps.scale,
  ...cesiumProps.minimumPixelSize,
  ...cesiumProps.maximumScale,
  ...cesiumProps.id,
  ...cesiumProps.allowPicking,
  ...cesiumProps.incrementallyLoadTextures,
  ...cesiumProps.asynchronous,
  ...cesiumProps.clampAnimations,
  ...cesiumProps.shadows,
  ...cesiumProps.debugShowBoundingVolume,
  ...cesiumProps.debugWireframe,
  ...cesiumProps.heightReference,
  ...cesiumProps.scene,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.color,
  ...cesiumProps.colorBlendMode,
  ...cesiumProps.colorBlendAmount,
  ...cesiumProps.silhouetteColor,
  ...cesiumProps.silhouetteSize,
  ...cesiumProps.clippingPlanes,
  dequantizeInShader: {
    type: Boolean,
    default: true
  },
  ...cesiumProps.imageBasedLightingFactor,
  ...cesiumProps.lightColor,
  ...cesiumProps.luminanceAtZenith,
  ...cesiumProps.sphericalHarmonicCoefficients,
  ...cesiumProps.specularEnvironmentMaps,
  ...cesiumProps.credit,
  ...cesiumProps.backFaceCulling,
  showOutline: {
    type: Boolean,
    default: true
  },
  ...cesiumProps.enableMouseEvent
};
var PrimitiveModel = vue.defineComponent({
  name: "VcPrimitiveModel",
  props: modelPrimitiveProps,
  emits: emits.primitiveEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "Model";
    const primitivesState = index["default"](props, ctx, instance);
    instance.createCesiumObject = async () => {
      const options = primitivesState == null ? void 0 : primitivesState.transformProps(props);
      return Cesium.Model.fromGltf(options);
    };
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = PrimitiveModel;
exports.modelPrimitiveProps = modelPrimitiveProps;
//# sourceMappingURL=index.js.map
