import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { center, semiMajorAxis, semiMinorAxis, ellipsoid, height, extrudedHeight, rotation, stRotation, granularity, numberOfVerticalLines } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const ellipseOutlineGeometryProps = {
  ...center,
  ...semiMajorAxis,
  ...semiMinorAxis,
  ...ellipsoid,
  ...height,
  ...extrudedHeight,
  ...rotation,
  ...stRotation,
  ...granularity,
  ...numberOfVerticalLines
};
var GeometryEllipseOutline = defineComponent({
  name: "VcGeometryEllipseOutline",
  props: ellipseOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "EllipseOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryEllipseOutline as default, ellipseOutlineGeometryProps };
//# sourceMappingURL=index.mjs.map
