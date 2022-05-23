import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { polygonHierarchy, height, extrudedHeight, vertexFormat, stRotation, ellipsoid, granularity, perPositionHeight, closeTop, closeBottom, arcType } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const polygonGeometryProps = {
  ...polygonHierarchy,
  ...height,
  ...extrudedHeight,
  ...vertexFormat,
  ...stRotation,
  ...ellipsoid,
  ...granularity,
  ...perPositionHeight,
  ...closeTop,
  ...closeBottom,
  ...arcType
};
var GeometryPolygon = defineComponent({
  name: "VcGeometryPolygon",
  props: polygonGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PolygonGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryPolygon as default, polygonGeometryProps };
//# sourceMappingURL=index.mjs.map
