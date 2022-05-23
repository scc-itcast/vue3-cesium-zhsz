import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, pixelSize, heightReference, color, outlineColor, outlineWidth, scaleByDistance, translucencyByDistance, distanceDisplayCondition, disableDepthTestDistance } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const pointGraphicsProps = {
  ...show,
  ...pixelSize,
  ...heightReference,
  ...color,
  ...outlineColor,
  ...outlineWidth,
  ...scaleByDistance,
  ...translucencyByDistance,
  ...distanceDisplayCondition,
  ...disableDepthTestDistance
};
var GraphicsPoint = defineComponent({
  name: "VcGraphicsPoint",
  props: pointGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PointGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsPoint as default, pointGraphicsProps };
//# sourceMappingURL=index.mjs.map
