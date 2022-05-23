import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { positions, width, colors, arcType, granularity, vertexFormat, ellipsoid } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const polylineGeometryProps = {
  ...positions,
  ...width,
  ...colors,
  colorsPerVertex: {
    type: Boolean,
    default: false
  },
  ...arcType,
  ...granularity,
  ...vertexFormat,
  ...ellipsoid
};
var GeometryPolyline = defineComponent({
  name: "VcGeometryPolyline",
  props: polylineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PolylineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryPolyline as default, polylineGeometryProps };
//# sourceMappingURL=index.mjs.map
