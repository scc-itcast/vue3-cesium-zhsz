import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, dimensions, heightReference, fill, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { graphicsEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const boxGraphicsProps = {
  ...show,
  ...dimensions,
  ...heightReference,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...shadows,
  ...distanceDisplayCondition
};
var GraphicsBox = defineComponent({
  name: "VcGraphicsBox",
  props: boxGraphicsProps,
  emits: graphicsEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "BoxGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { boxGraphicsProps, GraphicsBox as default };
//# sourceMappingURL=index.mjs.map
