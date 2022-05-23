import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { radii, innerRadii, minimumClock, maximumClock, minimumCone, maximumCone, stackPartitions, slicePartitions, subdivisions } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const ellipsoidOutlineProps = {
  ...radii,
  ...innerRadii,
  ...minimumClock,
  ...maximumClock,
  ...minimumCone,
  ...maximumCone,
  ...stackPartitions,
  ...slicePartitions,
  ...subdivisions
};
var GeometryEllipsoidOutline = defineComponent({
  name: "VcGeometryEllipsoidOutline",
  props: ellipsoidOutlineProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "EllipsoidOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryEllipsoidOutline as default };
//# sourceMappingURL=index.mjs.map
