import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import { polygonHierarchy, ellipsoid, vertexFormat, stRotation } from '../../../utils/cesium-props.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const polygonCoplanarProps = {
  ...polygonHierarchy,
  ...ellipsoid,
  ...vertexFormat,
  ...stRotation
};
var GeometryPolygonCoplanar = defineComponent({
  name: "VcGeometryPolygonCoplanar",
  props: polygonCoplanarProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CoplanarPolygonGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryPolygonCoplanar as default, polygonCoplanarProps };
//# sourceMappingURL=index.mjs.map
