import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import { makeCartesian2 } from '../../../utils/cesium-helpers.mjs';
import '../../../composables/index.mjs';
import { show, plane, fill, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const planeGraphicsProps = {
  ...show,
  ...plane,
  dimensions: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  },
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...shadows,
  ...distanceDisplayCondition
};
var GraphicsPlane = defineComponent({
  name: "VcGraphicsPlane",
  props: planeGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PlaneGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsPlane as default, planeGraphicsProps };
//# sourceMappingURL=index.mjs.map
