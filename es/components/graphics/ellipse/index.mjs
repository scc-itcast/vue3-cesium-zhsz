import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, semiMajorAxis, semiMinorAxis, height, heightReference, extrudedHeight, extrudedHeightReference, rotation, stRotation, granularity, fill, material, outline, outlineColor, outlineWidth, numberOfVerticalLines, shadows, distanceDisplayCondition, classificationType, zIndex } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const ellipseGraphicsProps = {
  ...show,
  ...semiMajorAxis,
  ...semiMinorAxis,
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
  ...numberOfVerticalLines,
  ...shadows,
  ...distanceDisplayCondition,
  ...classificationType,
  ...zIndex
};
var GraphicsEllipse = defineComponent({
  name: "VcGraphicsEllipse",
  props: ellipseGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "EllipseGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsEllipse as default, ellipseGraphicsProps };
//# sourceMappingURL=index.mjs.map
