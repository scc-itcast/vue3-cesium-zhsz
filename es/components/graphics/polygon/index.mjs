import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, hierarchy, height, heightReference, extrudedHeight, extrudedHeightReference, stRotation, granularity, fill, material, outline, outlineColor, outlineWidth, perPositionHeight, closeTop, closeBottom, arcType, shadows, distanceDisplayCondition, classificationType, zIndex } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const polygonGraphicsProps = {
  ...show,
  ...hierarchy,
  ...height,
  ...heightReference,
  ...extrudedHeight,
  ...extrudedHeightReference,
  ...stRotation,
  ...granularity,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...perPositionHeight,
  ...closeTop,
  ...closeBottom,
  ...arcType,
  ...shadows,
  ...distanceDisplayCondition,
  ...classificationType,
  ...zIndex
};
var GraphicsPolygon = defineComponent({
  name: "VcGraphicsPolygon",
  props: polygonGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PolygonGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsPolygon as default, polygonGraphicsProps };
//# sourceMappingURL=index.mjs.map
