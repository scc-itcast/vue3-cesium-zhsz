import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { positions, granularity, maximumHeights, minimumHeights, ellipsoid } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const wallOutlineProps = {
  ...positions,
  ...granularity,
  ...maximumHeights,
  ...minimumHeights,
  ...ellipsoid
};
var GeometryWallOutline = defineComponent({
  name: "VcGeometryWallOutline",
  props: wallOutlineProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "WallOutlineGeometry";
    useGeometries(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GeometryWallOutline as default, wallOutlineProps };
//# sourceMappingURL=index.mjs.map
