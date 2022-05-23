import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { center, semiMajorAxis, semiMinorAxis, ellipsoid, height, extrudedHeight, rotation, stRotation, granularity, vertexFormat } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const ellipseGeometryProps = {
  ...center,
  ...semiMajorAxis,
  ...semiMinorAxis,
  ...ellipsoid,
  ...height,
  ...extrudedHeight,
  ...rotation,
  ...stRotation,
  ...granularity,
  ...vertexFormat
};
var GeometryEllipse = defineComponent({
  name: "VcGeometryEllipse",
  props: ellipseGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "EllipseGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryEllipse as default, ellipseGeometryProps };
//# sourceMappingURL=index.mjs.map
