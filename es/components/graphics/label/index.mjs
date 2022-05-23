import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, text, font, labelStyle, scale, showBackground, backgroundColor, backgroundPadding, pixelOffset, eyeOffset, horizontalOrigin, verticalOrigin, heightReference, fillColor, outlineColor, outlineWidth, translucencyByDistance, pixelOffsetScaleByDistance, scaleByDistance, distanceDisplayCondition, disableDepthTestDistance } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const labelGraphicsProps = {
  ...show,
  ...text,
  ...font,
  ...labelStyle,
  ...scale,
  ...showBackground,
  ...backgroundColor,
  ...backgroundPadding,
  ...pixelOffset,
  ...eyeOffset,
  ...horizontalOrigin,
  ...verticalOrigin,
  ...heightReference,
  ...fillColor,
  ...outlineColor,
  ...outlineWidth,
  ...translucencyByDistance,
  ...pixelOffsetScaleByDistance,
  ...scaleByDistance,
  ...distanceDisplayCondition,
  ...disableDepthTestDistance
};
var GraphicsLabel = defineComponent({
  name: "VcGraphicsLabel",
  props: labelGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "LabelGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsLabel as default, labelGraphicsProps };
//# sourceMappingURL=index.mjs.map
