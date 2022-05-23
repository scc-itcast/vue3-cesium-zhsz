import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, width, material, distanceDisplayCondition } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const pathGraphicsProps = {
  ...show,
  leadTime: [Number, Object, Function],
  trailTime: [Number, Object, Function],
  ...width,
  resolution: {
    type: [Number, Object, Function],
    default: 60
  },
  ...material,
  ...distanceDisplayCondition
};
var GraphicsPath = defineComponent({
  name: "VcGraphicsPath",
  props: pathGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PathGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { GraphicsPath as default, pathGraphicsProps };
//# sourceMappingURL=index.mjs.map
