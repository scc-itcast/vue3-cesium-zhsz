import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { alignedAxis, color, disableDepthTestDistance, distanceDisplayCondition, eyeOffset, height, heightReference, horizontalOrigin, id, image, pixelOffset, pixelOffsetScaleByDistance, position, rotation, scale, scaleByDistance, show, sizeInMeters, translucencyByDistance, verticalOrigin, width, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { primitiveCollectionEmits } from '../../../utils/emits.mjs';
import usePrimitiveCollectionItems from '../../../composables/use-primitive-collection-items/index.mjs';

const billboardProps = {
  ...alignedAxis,
  ...color,
  ...disableDepthTestDistance,
  ...distanceDisplayCondition,
  ...eyeOffset,
  ...height,
  ...heightReference,
  ...horizontalOrigin,
  ...id,
  ...image,
  ...pixelOffset,
  ...pixelOffsetScaleByDistance,
  ...position,
  ...rotation,
  ...scale,
  ...scaleByDistance,
  ...show,
  ...sizeInMeters,
  ...translucencyByDistance,
  ...verticalOrigin,
  ...width,
  ...enableMouseEvent
};
var Billboard = defineComponent({
  name: "VcBillboard",
  props: billboardProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "Billboard";
    usePrimitiveCollectionItems(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { billboardProps, Billboard as default };
//# sourceMappingURL=index.mjs.map
