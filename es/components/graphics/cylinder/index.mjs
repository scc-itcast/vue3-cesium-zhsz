import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, length, topRadius, bottomRadius, heightReference, fill, material, outline, outlineColor, outlineWidth, numberOfVerticalLines, slices, shadows, distanceDisplayCondition } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { graphicsEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const cylinderGraphicsProps = {
  ...show,
  ...length,
  ...topRadius,
  ...bottomRadius,
  ...heightReference,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...numberOfVerticalLines,
  ...slices,
  ...shadows,
  ...distanceDisplayCondition
};
var GraphicsCylinder = defineComponent({
  name: "VcGraphicsCylinder",
  props: cylinderGraphicsProps,
  emits: graphicsEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CylinderGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { cylinderGraphicsProps, GraphicsCylinder as default };
//# sourceMappingURL=index.mjs.map
