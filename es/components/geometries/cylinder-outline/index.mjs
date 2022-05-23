import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { length, topRadius, bottomRadius, slices, numberOfVerticalLines } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const cylinderOutlineGeometryProps = {
  ...length,
  ...topRadius,
  ...bottomRadius,
  ...slices,
  ...numberOfVerticalLines
};
var GeometryCylinderOutline = defineComponent({
  name: "VcGeometryCylinderOutline",
  props: cylinderOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CylinderOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { cylinderOutlineGeometryProps, GeometryCylinderOutline as default };
//# sourceMappingURL=index.mjs.map
