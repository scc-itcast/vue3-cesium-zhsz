import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { length, topRadius, bottomRadius, slices, vertexFormat } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const cylinderGeometryProps = {
  ...length,
  ...topRadius,
  ...bottomRadius,
  ...slices,
  ...vertexFormat
};
var GeometryCylinder = defineComponent({
  name: "VcGeometryCylinder",
  props: cylinderGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CylinderGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { cylinderGeometryProps, GeometryCylinder as default };
//# sourceMappingURL=index.mjs.map
