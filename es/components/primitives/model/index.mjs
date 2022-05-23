import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { url, show, modelMatrix, scale, minimumPixelSize, maximumScale, id, allowPicking, incrementallyLoadTextures, asynchronous, clampAnimations, shadows, debugShowBoundingVolume, debugWireframe, heightReference, scene, distanceDisplayCondition, color, colorBlendMode, colorBlendAmount, silhouetteColor, silhouetteSize, clippingPlanes, imageBasedLightingFactor, lightColor, luminanceAtZenith, sphericalHarmonicCoefficients, specularEnvironmentMaps, credit, backFaceCulling, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { primitiveEmits } from '../../../utils/emits.mjs';
import usePrimitives from '../../../composables/use-primitives/index.mjs';

const modelPrimitiveProps = {
  ...url,
  basePath: String,
  ...show,
  ...modelMatrix,
  ...scale,
  ...minimumPixelSize,
  ...maximumScale,
  ...id,
  ...allowPicking,
  ...incrementallyLoadTextures,
  ...asynchronous,
  ...clampAnimations,
  ...shadows,
  ...debugShowBoundingVolume,
  ...debugWireframe,
  ...heightReference,
  ...scene,
  ...distanceDisplayCondition,
  ...color,
  ...colorBlendMode,
  ...colorBlendAmount,
  ...silhouetteColor,
  ...silhouetteSize,
  ...clippingPlanes,
  dequantizeInShader: {
    type: Boolean,
    default: true
  },
  ...imageBasedLightingFactor,
  ...lightColor,
  ...luminanceAtZenith,
  ...sphericalHarmonicCoefficients,
  ...specularEnvironmentMaps,
  ...credit,
  ...backFaceCulling,
  showOutline: {
    type: Boolean,
    default: true
  },
  ...enableMouseEvent
};
var PrimitiveModel = defineComponent({
  name: "VcPrimitiveModel",
  props: modelPrimitiveProps,
  emits: primitiveEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "Model";
    const primitivesState = usePrimitives(props, ctx, instance);
    instance.createCesiumObject = async () => {
      const options = primitivesState == null ? void 0 : primitivesState.transformProps(props);
      return Cesium.Model.fromGltf(options);
    };
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { PrimitiveModel as default, modelPrimitiveProps };
//# sourceMappingURL=index.mjs.map
