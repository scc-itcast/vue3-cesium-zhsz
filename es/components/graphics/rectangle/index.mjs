import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, coordinates, height, heightReference, extrudedHeight, extrudedHeightReference, rotation, stRotation, granularity, fill, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition, classificationType, zIndex } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const rectangleGraphicsProps = {
  ...show,
  ...coordinates,
  ...height,
  ...heightReference,
  ...extrudedHeight,
  ...extrudedHeightReference,
  ...rotation,
  ...stRotation,
  ...granularity,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...shadows,
  ...distanceDisplayCondition,
  ...classificationType,
  ...zIndex
};
var GraphicsRectangle = defineComponent({
  name: "VcGraphicsRectangle",
  props: rectangleGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "RectangleGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsRectangle as default, rectangleGraphicsProps };
//# sourceMappingURL=index.mjs.map
