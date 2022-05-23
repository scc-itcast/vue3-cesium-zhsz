import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { vertexFormat } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const planeGeometryProps = {
  ...vertexFormat
};
var GeometryPlane = defineComponent({
  name: "VcGeometryPlane",
  props: planeGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PlaneGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryPlane as default, planeGeometryProps };
//# sourceMappingURL=index.mjs.map
