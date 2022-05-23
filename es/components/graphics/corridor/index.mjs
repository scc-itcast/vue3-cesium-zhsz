import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, positions, width, height, heightReference, extrudedHeight, extrudedHeightReference, cornerType, granularity, fill, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition, classificationType, zIndex } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { graphicsEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const corridorGraphicsProps = {
  ...show,
  ...positions,
  ...width,
  ...height,
  ...heightReference,
  ...extrudedHeight,
  ...extrudedHeightReference,
  ...cornerType,
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
var GraphicsCorridor = defineComponent({
  name: "VcGraphicsCorridor",
  props: corridorGraphicsProps,
  emits: graphicsEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CorridorGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsCorridor as default };
//# sourceMappingURL=index.mjs.map
