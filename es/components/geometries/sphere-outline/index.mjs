import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { radius, stackPartitions, slicePartitions, subdivisions } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const sphereGeometryOutlineProps = {
  ...radius,
  ...stackPartitions,
  ...slicePartitions,
  ...subdivisions
};
var GeometrySphereOutline = defineComponent({
  name: "VcGeometrySphereOutline",
  props: sphereGeometryOutlineProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "SphereOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometrySphereOutline as default, sphereGeometryOutlineProps };
//# sourceMappingURL=index.mjs.map
