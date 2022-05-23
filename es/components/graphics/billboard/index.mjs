import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { image, scale, pixelOffset, eyeOffset, horizontalOrigin, verticalOrigin, heightReference, color, rotation, alignedAxis, sizeInMeters, width, height, scaleByDistance, translucencyByDistance, pixelOffsetScaleByDistance, disableDepthTestDistance, show, distanceDisplayCondition, imageSubRegion } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { graphicsEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const billboarGraphicsProps = {
  ...image,
  ...scale,
  ...pixelOffset,
  ...eyeOffset,
  ...horizontalOrigin,
  ...verticalOrigin,
  ...heightReference,
  ...color,
  ...rotation,
  ...alignedAxis,
  ...sizeInMeters,
  ...width,
  ...height,
  ...scaleByDistance,
  ...translucencyByDistance,
  ...pixelOffsetScaleByDistance,
  ...disableDepthTestDistance,
  ...show,
  ...distanceDisplayCondition,
  ...imageSubRegion
};
var GraphicsBillboard = defineComponent({
  name: "VcGraphicsBillboard",
  props: billboarGraphicsProps,
  emits: graphicsEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "BillboardGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { billboarGraphicsProps, GraphicsBillboard as default };
//# sourceMappingURL=index.mjs.map
