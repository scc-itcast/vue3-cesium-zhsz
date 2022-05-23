import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, uri, scale, minimumPixelSize, maximumScale, incrementallyLoadTextures, runAnimations, clampAnimations, shadows, heightReference, silhouetteColor, silhouetteSize, color, colorBlendMode, colorBlendAmount, imageBasedLightingFactor, lightColor, distanceDisplayCondition, nodeTransformations, articulations, clippingPlanes } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const modelGraphicsProps = {
  ...show,
  ...uri,
  ...scale,
  ...minimumPixelSize,
  ...maximumScale,
  ...incrementallyLoadTextures,
  ...runAnimations,
  ...clampAnimations,
  ...shadows,
  ...heightReference,
  ...silhouetteColor,
  ...silhouetteSize,
  ...color,
  ...colorBlendMode,
  ...colorBlendAmount,
  ...imageBasedLightingFactor,
  ...lightColor,
  ...distanceDisplayCondition,
  ...nodeTransformations,
  ...articulations,
  ...clippingPlanes
};
var GraphicsModel = defineComponent({
  name: "VcGraphicsModel",
  props: modelGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "ModelGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsModel as default, modelGraphicsProps };
//# sourceMappingURL=index.mjs.map
