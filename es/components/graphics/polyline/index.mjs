import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, positions, width, granularity, material, depthFailMaterial, arcType, clampToGround, shadows, distanceDisplayCondition, classificationType, zIndex } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const polylineGraphicsProps = {
  ...show,
  ...positions,
  ...width,
  ...granularity,
  ...material,
  ...depthFailMaterial,
  ...arcType,
  ...clampToGround,
  ...shadows,
  ...distanceDisplayCondition,
  ...classificationType,
  ...zIndex
};
var GraphicsPolyline = defineComponent({
  name: "VcGraphicsPolyline",
  props: polylineGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PolylineGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsPolyline as default, polylineGraphicsProps };
//# sourceMappingURL=index.mjs.map
