import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, positions, shape, cornerType, granularity, fill, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const polylineVolumeGraphicsProps = {
  ...show,
  ...positions,
  ...shape,
  ...cornerType,
  ...granularity,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...shadows,
  ...distanceDisplayCondition
};
var GraphicsPolylineVolume = defineComponent({
  name: "VcGraphicsPolylineVolume",
  props: polylineVolumeGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PolylineVolumeGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsPolylineVolume as default, polylineVolumeGraphicsProps };
//# sourceMappingURL=index.mjs.map
