import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { center, radius, ellipsoid, height, granularity, extrudedHeight, numberOfVerticalLines } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const circleOutlineGeometryProps = {
  ...center,
  ...radius,
  ...ellipsoid,
  ...height,
  ...granularity,
  ...extrudedHeight,
  ...numberOfVerticalLines
};
var GeometryCircleOutline = defineComponent({
  name: "VcGeometryCircleOutline",
  props: circleOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CircleOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { circleOutlineGeometryProps, GeometryCircleOutline as default };
//# sourceMappingURL=index.mjs.map
