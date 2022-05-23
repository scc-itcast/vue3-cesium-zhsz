import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { backgroundColor, backgroundPadding, disableDepthTestDistance, distanceDisplayCondition, eyeOffset, fillColor, font, heightReference, horizontalOrigin, id, outlineColor, outlineWidth, pixelOffset, pixelOffsetScaleByDistance, position, scale, scaleByDistance, show, showBackground, labelStyle, text, translucencyByDistance, verticalOrigin, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { primitiveCollectionEmits } from '../../../utils/emits.mjs';
import usePrimitiveCollectionItems from '../../../composables/use-primitive-collection-items/index.mjs';

const labelProps = {
  ...backgroundColor,
  ...backgroundPadding,
  ...disableDepthTestDistance,
  ...distanceDisplayCondition,
  ...eyeOffset,
  ...fillColor,
  ...font,
  ...heightReference,
  ...horizontalOrigin,
  ...id,
  ...outlineColor,
  ...outlineWidth,
  ...pixelOffset,
  ...pixelOffsetScaleByDistance,
  ...position,
  ...scale,
  ...scaleByDistance,
  ...show,
  ...showBackground,
  ...labelStyle,
  ...text,
  totalScale: {
    type: Number,
    default: 1
  },
  ...translucencyByDistance,
  ...verticalOrigin,
  ...enableMouseEvent
};
var Label = defineComponent({
  name: "VcLabel",
  props: labelProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "Label";
    usePrimitiveCollectionItems(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { Label as default, labelProps };
//# sourceMappingURL=index.mjs.map
