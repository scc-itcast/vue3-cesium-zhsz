import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { positions, width, ellipsoid, granularity, height, extrudedHeight, cornerType } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const corridorOutlineGeometryProps = {
  ...positions,
  ...width,
  ...ellipsoid,
  ...granularity,
  ...height,
  ...extrudedHeight,
  ...cornerType
};
var GeometryCorridorOutline = defineComponent({
  name: "VcGeometryCorridorOutline",
  props: corridorOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CorridorOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { corridorOutlineGeometryProps, GeometryCorridorOutline as default };
//# sourceMappingURL=index.mjs.map
