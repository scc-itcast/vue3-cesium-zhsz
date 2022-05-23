import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { polygonHierarchy, height, extrudedHeight, vertexFormat, ellipsoid, granularity, perPositionHeight, arcType } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const polygonOutlineGeometryProps = {
  ...polygonHierarchy,
  ...height,
  ...extrudedHeight,
  ...vertexFormat,
  ...ellipsoid,
  ...granularity,
  ...perPositionHeight,
  ...arcType
};
var GeometryPolygonOutline = defineComponent({
  name: "VcGeometryPolygonOutline",
  props: polygonOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PolygonOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryPolygonOutline as default, polygonOutlineGeometryProps };
//# sourceMappingURL=index.mjs.map
