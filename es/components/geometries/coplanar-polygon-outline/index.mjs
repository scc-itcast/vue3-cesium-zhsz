import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { polygonHierarchy } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const polygonCoplanarOutlineProps = {
  ...polygonHierarchy
};
var GeometryPolygonCoplanarOutline = defineComponent({
  name: "VcGeometryPolygonCoplanarOutline",
  props: polygonCoplanarOutlineProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CoplanarPolygonOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryPolygonCoplanarOutline as default, polygonCoplanarOutlineProps };
//# sourceMappingURL=index.mjs.map
