import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { positions, width, granularity, loop, arcType } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const groundPolylineGeometryProps = {
  ...positions,
  ...width,
  ...granularity,
  ...loop,
  ...arcType
};
var GeometryGroundPolyline = defineComponent({
  name: "VcGeometryGroundPolyline",
  props: groundPolylineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "GroundPolylineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryGroundPolyline as default, groundPolylineGeometryProps };
//# sourceMappingURL=index.mjs.map
