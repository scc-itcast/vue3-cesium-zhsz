import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { frustum, origin, orientation } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const frustumOutlineGeometryProps = {
  ...frustum,
  ...origin,
  ...orientation
};
var GeometryFrustumOutline = defineComponent({
  name: "VcGeometryFrustumOutline",
  props: frustumOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "FrustumOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryFrustumOutline as default, frustumOutlineGeometryProps };
//# sourceMappingURL=index.mjs.map
