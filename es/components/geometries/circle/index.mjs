import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { center, radius, ellipsoid, height, granularity, vertexFormat, extrudedHeight, stRotation } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const circleGeometryProps = {
  ...center,
  ...radius,
  ...ellipsoid,
  ...height,
  ...granularity,
  ...vertexFormat,
  ...extrudedHeight,
  ...stRotation
};
var GeometryCircle = defineComponent({
  name: "VcGeometryCircle",
  props: circleGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CircleGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { circleGeometryProps, GeometryCircle as default };
//# sourceMappingURL=index.mjs.map
