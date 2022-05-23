import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { rectangle, vertexFormat, ellipsoid, granularity, height, rotation, stRotation, extrudedHeight } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const rectangleGeometryProps = {
  ...rectangle,
  ...vertexFormat,
  ...ellipsoid,
  ...granularity,
  ...height,
  ...rotation,
  ...stRotation,
  ...extrudedHeight
};
var GeometryRectangle = defineComponent({
  name: "VcGeometryRectangle",
  props: rectangleGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "RectangleGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryRectangle as default, rectangleGeometryProps };
//# sourceMappingURL=index.mjs.map
