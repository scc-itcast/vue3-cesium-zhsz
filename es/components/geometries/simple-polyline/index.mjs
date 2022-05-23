import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { positions, colors, arcType, granularity, ellipsoid } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const simplePolylineGeometryProps = {
  ...positions,
  ...colors,
  colorsPerVertex: {
    type: Boolean,
    default: false
  },
  ...arcType,
  ...granularity,
  ...ellipsoid
};
var GeometrySimplePolyline = defineComponent({
  name: "VcGeometrySimplePolyline",
  props: simplePolylineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "SimplePolylineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometrySimplePolyline as default, simplePolylineGeometryProps };
//# sourceMappingURL=index.mjs.map
