import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { polylinePositions, shapePositions, ellipsoid, granularity, cornerType } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const polylineVolumeOutlineGeometryProps = {
  ...polylinePositions,
  ...shapePositions,
  ...ellipsoid,
  ...granularity,
  ...cornerType
};
var GeometryPolylineVolumeOutline = defineComponent({
  name: "VcGeometryPolylineVolumeOutline",
  props: polylineVolumeOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PolylineVolumeOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryPolylineVolumeOutline as default, polylineVolumeOutlineGeometryProps };
//# sourceMappingURL=index.mjs.map
