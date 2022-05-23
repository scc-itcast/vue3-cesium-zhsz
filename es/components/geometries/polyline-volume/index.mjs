import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { polylinePositions, shapePositions, ellipsoid, granularity, vertexFormat, cornerType } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const polylineVolumeGeometryProps = {
  ...polylinePositions,
  ...shapePositions,
  ...ellipsoid,
  ...granularity,
  ...vertexFormat,
  ...cornerType
};
var GeometryPolylineVolume = defineComponent({
  name: "VcGeometryPolylineVolume",
  props: polylineVolumeGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PolylineVolumeGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryPolylineVolume as default, polylineVolumeGeometryProps };
//# sourceMappingURL=index.mjs.map
