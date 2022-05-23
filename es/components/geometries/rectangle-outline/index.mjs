import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { rectangle, ellipsoid, granularity, height, rotation, extrudedHeight } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const rectangleOutlineGeometryProps = {
  ...rectangle,
  ...ellipsoid,
  ...granularity,
  ...height,
  ...rotation,
  ...extrudedHeight
};
var GeometryRectangleOutline = defineComponent({
  name: "VcGeometryRectangleOutline",
  props: rectangleOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "RectangleOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryRectangleOutline as default, rectangleOutlineGeometryProps };
//# sourceMappingURL=index.mjs.map
