import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { frustum, origin, orientation, vertexFormat } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const frustumGeometryProps = {
  ...frustum,
  ...origin,
  ...orientation,
  ...vertexFormat
};
var GeometryFrustum = defineComponent({
  name: "VcGeometryFrustum",
  props: frustumGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "FrustumGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryFrustum as default, frustumGeometryProps };
//# sourceMappingURL=index.mjs.map
